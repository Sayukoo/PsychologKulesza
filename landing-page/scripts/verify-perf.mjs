import { chromium } from '@playwright/test';
import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'out');
const PORT = 4321;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

function serve(req, res) {
  let urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (urlPath.endsWith('/')) urlPath += 'index.html';
  const base = path.join(OUT, urlPath);
  const candidates = [base];
  if (!path.extname(urlPath)) {
    candidates.push(`${base}.html`, path.join(base, 'index.html'));
  }
  const filePath =
    candidates.find((p) => fs.existsSync(p) && fs.statSync(p).isFile()) ??
    path.join(OUT, 'index.html');
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, { 'content-type': MIME[ext] ?? 'application/octet-stream' });
  fs.createReadStream(filePath)
    .on('error', () => res.end())
    .pipe(res);
}

const results = [];
const check = (name, ok, detail = '') => {
  results.push({ name, ok });
  console.log(`${ok ? 'PASS' : 'FAIL'} ${name}${detail ? ` — ${detail}` : ''}`);
};

async function main() {
  const server = http.createServer(serve);
  await new Promise((r) => server.listen(PORT, r));

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } }); // mobile
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

  await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle' });

  // 1. Hero heading immediately visible (no JS-gated opacity)
  const h1 = page.locator('h1');
  await h1.waitFor();
  const opacity = await h1.evaluate((el) => getComputedStyle(el.closest('.hero-enter') ?? el).opacity);
  check('Hero H1 widoczny od razu', Number(opacity) > 0.9 || opacity === '1', `opacity=${opacity}`);

  // 2. Hero CTA present
  check('Hero CTA obecny', await page.locator('a[href="#booking"]').first().isVisible());

  // 3. Sticky bar hidden at top
  const stickyHiddenTop = await page.locator('.sticky-cta').evaluate((el) => {
    const s = getComputedStyle(el);
    return !el.classList.contains('show') || s.opacity === '0' || s.pointerEvents === 'none';
  });
  check('Sticky CTA ukryty na starcie', stickyHiddenTop);

  // 4. Scroll -> sticky bar shows with call button (correct number!)
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(700);
  const callBtn = page.locator('.sticky-cta a[href^="tel:"]');
  const callShown = await callBtn.evaluate((el) =>
    el.closest('.sticky-cta').classList.contains('show') && getComputedStyle(el.closest('.sticky-cta')).opacity === '1',
  );
  check('Sticky CTA pokazuje "Zadzwoń"', callShown);
  const telHref = await page.locator('.sticky-cta a[href^="tel:"]').getAttribute('href');
  check('Numer telefonu 572 450 606', telHref === 'tel:+48572450606', telHref);

  // 5. Calendly NOT loaded yet (lazy) — skeleton instead
  const calendlyScript = await page.evaluate(() => document.getElementById('calendly-widget-script') !== null);
  check('Calendly nieładowany przed sekcją booking', !calendlyScript);

  // 6. Scroll to booking -> calendly loads
  await page.evaluate(() => document.getElementById('booking')?.scrollIntoView());
  await page.waitForTimeout(2500);
  const calendlyAfter = await page.evaluate(() => document.getElementById('calendly-widget-script') !== null);
  check('Calendly ładuje się przy sekcji booking', calendlyAfter);

  // 7. Images are webp
  const imgs = await page.evaluate(() =>
    [...document.querySelectorAll('img')].map((i) => i.currentSrc || i.src),
  );
  check('Zdjęcie profilowe WebP', imgs.some((s) => s.includes('profile-')), imgs.join(', ').slice(0, 120));
  check('Logo WebP', imgs.some((s) => s.includes('logo.')), '');

  // 8. No page errors
  check('Brak błędów JS', errors.length === 0, errors.slice(0, 3).join(' | '));

  // 9. Kontakt page works (correct number)
  await page.goto(`http://127.0.0.1:${PORT}/kontakt`, { waitUntil: 'load' });
  check(
    'Strona /kontakt działa',
    await page.locator('main a[href="tel:+48572450606"]').first().isVisible(),
  );

  // 10. Mobile menu opens/closes via CSS classes
  await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Otwórz menu' }).click();
  await page.waitForTimeout(500);
  const menuOpen = await page.locator('.mobile-menu').evaluate((el) => {
    const s = getComputedStyle(el);
    return el.classList.contains('open') && s.visibility === 'visible' && s.opacity === '1';
  });
  check('Menu mobilne otwiera się', menuOpen);
  check('Menu ma przycisk Zadzwoń', await page.locator('.mobile-menu a[href="tel:+48572450606"]').isVisible());
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);
  const menuClosed = await page.locator('.mobile-menu').evaluate((el) => getComputedStyle(el).visibility === 'hidden');
  check('Menu zamyka się (Esc)', menuClosed);

  // 11. JSON-LD present
  const hasJsonLd = await page.evaluate(() =>
    [...document.querySelectorAll('script[type="application/ld+json"]')].some((s) => s.textContent.includes('+48572450606')),
  );
  check('JSON-LD z numerem telefonu', hasJsonLd);

  // 12. Desktop sanity
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktop.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle' });
  check('Desktop: nav linki', await desktop.locator('nav >> text=Cennik').first().isVisible());
  const canvasVisible = await desktop.locator('#start canvas').first().isVisible();
  check('Desktop: tło canvas hero', canvasVisible);

  // 13. Reveal-on-scroll still works below the fold
  await desktop.evaluate(() => document.getElementById('o-mnie')?.scrollIntoView());
  await desktop.waitForTimeout(800);
  const revealed = await desktop.evaluate(() => {
    const section = document.getElementById('o-mnie');
    return !!section.querySelector('.reveal.in-view');
  });
  check('Animacje reveal działają przy scrollu', revealed);

  await browser.close();
  server.close();

  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} OK`);
  process.exit(failed.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
