/**
 * Kacper Kulesza - Psycholog | Main Layout & UI JavaScript
 * Handles navigation drawer, FAQ accordion, privacy policy toggle, cookie bar, spotlight effects, and scroll reveals.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFaqAccordion();
  initPrivacyToggle();
  initCookieBar();
  initSpotlight();
  initScrollReveal();
});

/**
 * Mobile Navigation Drawer Handler
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer-contact a, .mobile-drawer .btn-cta');
  
  if (!menuBtn || !drawer) return;
  
  const closeMenu = () => {
    menuBtn.classList.remove('open');
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
    menuBtn.setAttribute('aria-expanded', 'false');
  };
  
  const openMenu = () => {
    menuBtn.classList.add('open');
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'true');
  };
  
  const toggleMenu = () => {
    const isOpen = menuBtn.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };
  
  menuBtn.addEventListener('click', toggleMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * FAQ Accordion handler
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;
    
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other FAQs for clean accordion behavior
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });
      
      if (isActive) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Privacy & RODO Policy collapsible section
 */
function initPrivacyToggle() {
  const toggleBtn = document.getElementById('privacy-toggle-btn');
  const privacyContent = document.getElementById('privacy-content');
  const privacyChevron = document.getElementById('privacy-chevron');
  
  if (!toggleBtn || !privacyContent) return;
  
  toggleBtn.addEventListener('click', () => {
    const isOpen = privacyContent.classList.contains('open');
    if (isOpen) {
      privacyContent.classList.remove('open');
      if (privacyChevron) privacyChevron.style.transform = 'rotate(0deg)';
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      privacyContent.classList.add('open');
      if (privacyChevron) privacyChevron.style.transform = 'rotate(180deg)';
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  });
}

/**
 * Cookie Bar banner with localStorage persistence
 */
function initCookieBar() {
  const cookieBar = document.getElementById('cookie-bar-container');
  const acceptBtn = document.getElementById('cookie-accept-btn');
  
  if (!cookieBar || !acceptBtn) return;
  
  let isAccepted = false;
  try {
    isAccepted = localStorage.getItem('kk-cookies-ok') === '1';
  } catch (e) {
    console.warn('localStorage is not accessible', e);
  }
  
  if (!isAccepted) {
    cookieBar.style.display = 'flex';
  } else {
    cookieBar.style.display = 'none';
  }
  
  acceptBtn.addEventListener('click', () => {
    try {
      localStorage.setItem('kk-cookies-ok', '1');
    } catch (e) {}
    cookieBar.style.display = 'none';
  });
}


/**
 * Spotlight Cursor Follower on Interactive Cards (Linear / Apple style)
 */
function initSpotlight() {
  const selector = '.test-preview-card, .test-hub-card, .price-box-featured, .contact-quick-card, .material-card';
  
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest(selector);
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, { passive: true });
}

/**
 * Staggered Scroll Reveal with IntersectionObserver
 */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
  const selectors = [
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
    '.contact-form-card'
  ].join(', ');
  
  const elements = document.querySelectorAll(selectors);
  if (!elements.length) return;
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.12
  });
  
  elements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}
