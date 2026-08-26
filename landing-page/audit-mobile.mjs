import { chromium, devices } from '@playwright/test';

const BASE = 'http://localhost:3456';
const OUT = 'E:/999 System - Tymczowe/opencode/shots';

const browser = await chromium.launch();

// iPhone-ish viewport
const ctx = await browser.newContext({
  ...devices['iPhone 13'],
});
const page = await ctx.newPage();
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));

await page.goto(BASE + '/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

await page.screenshot({ path: `${OUT}/m1-top.png` });

// dla-kogo section
await page.evaluate(() => document.getElementById('dla-kogo')?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/m2-dla-kogo.png` });

// open hamburger menu
await page.click('button[aria-label="Otwórz menu"]');
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/m3-menu-open.png` });

// try clicking a link in menu
const menuVisible = await page.isVisible('.mobile-menu.open');
console.log('menu visible:', menuVisible);

// close via X
const closeBtn = page.locator('.mobile-menu button[aria-label="Zamknij menu"]');
if (await closeBtn.count()) {
  await closeBtn.click();
  await page.waitForTimeout(600);
}
await page.screenshot({ path: `${OUT}/m4-menu-closed.png` });

// check if body scroll locked while open
await page.click('button[aria-label="Otwórz menu"], .mobile-menu button[aria-label="Zamknij menu"]').catch(() => {});
await page.waitForTimeout(400);
const canScroll = await page.evaluate(() => {
  const before = window.scrollY;
  window.scrollTo(0, before + 300);
  return window.scrollY !== before;
});
console.log('background scrollable while menu open:', canScroll);
await page.evaluate(() => window.scrollTo(0, 0));
// close menu
const c2 = page.locator('.mobile-menu button[aria-label="Zamknij menu"]');
if (await c2.count()) { try { await c2.click({ force: true }); } catch {} }
await page.waitForTimeout(500);

// o-mnie section
await page.evaluate(() => document.getElementById('o-mnie')?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/m5-o-mnie.png` });

// process
await page.evaluate(() => document.getElementById('process')?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/m6-process.png` });

// cennik
await page.evaluate(() => document.getElementById('cennik')?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/m7-cennik.png` });

// booking
await page.evaluate(() => document.getElementById('booking')?.scrollIntoView());
await page.waitForTimeout(2000);
await page.screenshot({ path: `${OUT}/m8-booking.png` });

// footer
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(1000);
await page.screenshot({ path: `${OUT}/m9-footer.png` });

console.log('errors:', JSON.stringify(errors, null, 2));
await browser.close();
