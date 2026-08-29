/**
 * Kacper Kulesza - Psycholog | Main Layout & UI JavaScript
 *
 * Navigation drawer, FAQ accordion, privacy policy toggle, cookie bar,
 * spotlight cards, scroll progress, scrollspy, back-to-top and the
 * scroll-reveal engine.
 */

'use strict';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFaqAccordion();
  initPrivacyToggle();
  initCookieBar();
  initSpotlight();
  initScrollReveal();
  initHeaderState();
  initScrollProgress();
  initBackToTop();
  initScrollSpy();
  initStepsLine();
});

/* ==========================================================================
   Small helpers
   ========================================================================== */

/** Runs `fn` at most once per animation frame. */
function rafThrottle(fn) {
  let ticking = false;
  return function throttled(...args) {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      ticking = false;
      fn.apply(this, args);
    });
  };
}

/* ==========================================================================
   Mobile navigation drawer
   ========================================================================== */

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer-contact a, .mobile-drawer .btn-cta');

  if (!menuBtn || !drawer) return;

  const closeMenu = () => {
    if (!drawer.classList.contains('open')) return;
    menuBtn.classList.remove('open');
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Otwórz menu');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    menuBtn.classList.add('open');
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Zamknij menu');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus({ preventScroll: true });
  };

  drawer.setAttribute('aria-hidden', 'true');

  menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('open')) closeMenu();
    else openMenu();
  });

  if (backdrop) backdrop.addEventListener('click', closeMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  drawerLinks.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // A resize past the mobile breakpoint must not leave the drawer stuck open.
  window.addEventListener('resize', rafThrottle(() => {
    if (window.innerWidth > 980) closeMenu();
  }));
}

/* ==========================================================================
   FAQ accordion
   ========================================================================== */

function initFaqAccordion() {
  const faqItems = Array.from(document.querySelectorAll('.faq-item'));
  if (!faqItems.length) return;

  faqItems.forEach((item, index) => {
    const btn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    if (!answer.id) answer.id = `faq-answer-${index + 1}`;
    if (!btn.id) btn.id = `faq-question-${index + 1}`;
    btn.setAttribute('aria-controls', answer.id);
    btn.setAttribute('aria-expanded', item.classList.contains('active') ? 'true' : 'false');
    answer.setAttribute('role', 'region');
    answer.setAttribute('aria-labelledby', btn.id);

    btn.addEventListener('click', () => {
      const willOpen = !item.classList.contains('active');

      faqItems.forEach(other => {
        if (other === item) return;
        other.classList.remove('active');
        const otherBtn = other.querySelector('.faq-question-btn');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      item.classList.toggle('active', willOpen);
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  });

  // Arrow-key navigation between questions.
  const buttons = faqItems.map(i => i.querySelector('.faq-question-btn')).filter(Boolean);
  buttons.forEach((btn, i) => {
    btn.addEventListener('keydown', (e) => {
      let target = null;
      if (e.key === 'ArrowDown') target = buttons[(i + 1) % buttons.length];
      else if (e.key === 'ArrowUp') target = buttons[(i - 1 + buttons.length) % buttons.length];
      else if (e.key === 'Home') target = buttons[0];
      else if (e.key === 'End') target = buttons[buttons.length - 1];
      if (!target) return;
      e.preventDefault();
      target.focus();
    });
  });
}

/* ==========================================================================
   Privacy & RODO collapsible
   ========================================================================== */

function initPrivacyToggle() {
  const toggleBtn = document.getElementById('privacy-toggle-btn');
  const privacyContent = document.getElementById('privacy-content');
  const privacyChevron = document.getElementById('privacy-chevron');

  if (!toggleBtn || !privacyContent) return;

  toggleBtn.setAttribute('aria-controls', privacyContent.id);

  toggleBtn.addEventListener('click', () => {
    const willOpen = !privacyContent.classList.contains('open');
    privacyContent.classList.toggle('open', willOpen);
    if (privacyChevron) privacyChevron.style.transform = willOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    toggleBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
  });
}

/* ==========================================================================
   Cookie bar
   ========================================================================== */

function initCookieBar() {
  const cookieBar = document.getElementById('cookie-bar-container');
  const acceptBtn = document.getElementById('cookie-accept-btn');

  if (!cookieBar || !acceptBtn) return;

  let isAccepted = false;
  try {
    isAccepted = localStorage.getItem('kk-cookies-ok') === '1';
  } catch (e) {
    // Private mode / blocked storage — show the bar, just don't remember it.
  }

  if (isAccepted) {
    cookieBar.style.display = 'none';
    return;
  }

  cookieBar.style.display = 'flex';

  acceptBtn.addEventListener('click', () => {
    try {
      localStorage.setItem('kk-cookies-ok', '1');
    } catch (e) { /* nothing we can do */ }

    cookieBar.classList.add('is-leaving');
    window.setTimeout(() => { cookieBar.style.display = 'none'; }, 380);
  });
}

/* ==========================================================================
   Spotlight cursor follower on interactive cards
   ========================================================================== */

function initSpotlight() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const selector = [
    '.spotlight-card',
    '.test-preview-card',
    '.test-hub-card',
    '.price-box-featured',
    '.price-box-plain',
    '.contact-quick-card',
    '.contact-form-card',
    '.material-card',
    '.materials-hub-card'
  ].join(', ');

  let pending = null;

  const apply = () => {
    if (!pending) return;
    const { card, x, y } = pending;
    pending = null;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest ? e.target.closest(selector) : null;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const wasIdle = pending === null;
    pending = { card, x: e.clientX - rect.left, y: e.clientY - rect.top };
    if (wasIdle) window.requestAnimationFrame(apply);
  }, { passive: true });
}

/* ==========================================================================
   Scroll reveal engine
   ==========================================================================
   Failure mode this guards against: with a plain IntersectionObserver, an
   anchor jump (#faq) or a fast wheel flick can move whole sections past the
   viewport between observer callbacks, leaving them stuck at opacity 0 —
   i.e. a blank page. Every reveal therefore has three independent ways to
   fire: the observer, a scroll/resize sweep, and a hard timeout.
   ========================================================================== */

const REVEAL_SELECTOR = [
  '.section-tag',
  '.section h2',
  '.two-col-grid > div',
  '.quote-highlight',
  '.competence-pill',
  '.step-card',
  '.test-preview-card',
  '.material-card',
  '.price-box-featured',
  '.price-box-plain',
  '.faq-item',
  '.contact-quick-card',
  '.contact-form-card',
  '.materials-hub-card'
].join(', ');

function initScrollReveal() {
  const elements = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
  if (!elements.length) return;

  const revealAll = () => elements.forEach(el => el.classList.add('is-revealed'));

  if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
    revealAll();
    return;
  }

  // Stagger siblings so groups cascade instead of popping in together.
  const groupCounters = new Map();
  elements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    const parent = el.parentElement || document.body;
    const index = groupCounters.get(parent) || 0;
    groupCounters.set(parent, index + 1);
    el.style.setProperty('--reveal-delay', `${Math.min(index, 6) * 75}ms`);
  });

  const reveal = (el) => {
    if (el.classList.contains('is-revealed')) return;
    el.classList.add('is-revealed');
    observer.unobserve(el);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) reveal(entry.target);
    });
  }, {
    root: null,
    rootMargin: '0px 0px -6% 0px',
    threshold: 0
  });

  elements.forEach(el => observer.observe(el));

  // Safety sweep: anything already scrolled past or into view gets revealed
  // even if the observer never fired for it.
  const sweep = () => {
    const limit = window.innerHeight * 0.96;
    let remaining = 0;
    elements.forEach(el => {
      if (el.classList.contains('is-revealed')) return;
      if (el.getBoundingClientRect().top < limit) reveal(el);
      else remaining++;
    });
    if (remaining === 0) {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    }
  };

  const onScroll = rafThrottle(sweep);

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('hashchange', () => window.setTimeout(sweep, 60));
  window.addEventListener('load', sweep);

  // First pass after layout settles (fonts, images, anchor jump).
  window.requestAnimationFrame(() => window.requestAnimationFrame(sweep));
  window.setTimeout(sweep, 350);

  // Last resort: never leave content invisible.
  window.setTimeout(revealAll, 4000);
}

/* ==========================================================================
   Header elevation on scroll
   ========================================================================== */

function initHeaderState() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  update();
  window.addEventListener('scroll', rafThrottle(update), { passive: true });
}

/* ==========================================================================
   Scroll progress bar
   ========================================================================== */

function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress__bar');
  if (!bar) return;

  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    bar.style.transform = `scaleX(${ratio})`;
  };

  update();
  window.addEventListener('scroll', rafThrottle(update), { passive: true });
  window.addEventListener('resize', rafThrottle(update), { passive: true });
}

/* ==========================================================================
   Back to top
   ========================================================================== */

function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  const update = () => btn.classList.toggle('is-visible', window.scrollY > 620);
  update();
  window.addEventListener('scroll', rafThrottle(update), { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
    });
  });
}

/* ==========================================================================
   Scrollspy — highlights the nav entry for the section in view
   ========================================================================== */

function initScrollSpy() {
  const links = Array.from(document.querySelectorAll('.nav-link[href*="#"], .mobile-nav-link[href*="#"]'));
  const map = new Map();

  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    const hashIndex = href.indexOf('#');
    if (hashIndex < 0) return;

    // Only spy on anchors that live on this page.
    const path = href.slice(0, hashIndex);
    if (path && !path.endsWith(location.pathname.split('/').pop() || 'index.html')) return;

    const id = href.slice(hashIndex + 1);
    if (!id) return;

    const section = document.getElementById(id);
    if (!section) return;

    if (!map.has(section)) map.set(section, []);
    map.get(section).push(link);
  });

  if (!map.size) return;

  const setActive = (section) => {
    links.forEach(l => l.classList.remove('active'));
    (map.get(section) || []).forEach(l => l.classList.add('active'));
  };

  const sections = Array.from(map.keys());

  const update = rafThrottle(() => {
    const line = window.innerHeight * 0.34;
    let current = null;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= line && rect.bottom > line) current = section;
    });
    if (current) setActive(current);
    else links.forEach(l => l.classList.remove('active'));
  });

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
}

/* ==========================================================================
   "Jak pracujemy" connector line draws itself when the steps scroll in
   ========================================================================== */

function initStepsLine() {
  const line = document.querySelector('.steps-line');
  if (!line) return;

  if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
    line.classList.add('is-drawn');
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      line.classList.add('is-drawn');
      obs.disconnect();
    });
  }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });

  observer.observe(line.parentElement || line);
  window.setTimeout(() => line.classList.add('is-drawn'), 4000);
}
