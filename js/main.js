/**
 * Kacper Kulesza - Psycholog | Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFaqAccordion();
  initPrivacyToggle();
  initCookieBar();
  initCalendly();
  initSpotlight();
  initScrollReveal();
  initMaterials();
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
  
  faqItems.forEach((item, index) => {
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
 * Calendly Inline Widget Initializer
 */
function initCalendly() {
  const el = document.querySelector('.calendly-inline-widget');
  if (!el || el.dataset.kkMounted === '1') return;
  
  const mount = () => {
    if (window.Calendly && window.Calendly.initInlineWidget) {
      el.dataset.kkMounted = '1';
      window.Calendly.initInlineWidget({
        url: el.getAttribute('data-url'),
        parentElement: el
      });
      return true;
    }
    return false;
  };
  
  if (!mount()) {
    const calInterval = setInterval(() => {
      if (mount()) {
        clearInterval(calInterval);
      }
    }, 300);
    // Timeout after 10 seconds to stop polling
    setTimeout(() => clearInterval(calInterval), 10000);
  }
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

/**
 * Free Materials & Knowledge Hub Interactions
 */
function initMaterials() {
  // 1. Copy to Clipboard Buttons
  document.querySelectorAll('.btn-copy-action').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-clipboard-target');
      let textToCopy = '';
      
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) textToCopy = el.innerText || el.textContent;
      } else if (btn.dataset.copyText) {
        textToCopy = btn.dataset.copyText;
      }
      
      if (!textToCopy) return;
      
      try {
        await navigator.clipboard.writeText(textToCopy.trim());
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy.trim();
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      
      const origHtml = btn.innerHTML;
      btn.classList.add('copied');
      btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg> Skopiowano!`;
      
      showToast('Skopiowano do schowka!');
      
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = origHtml;
      }, 2400);
    });
  });

  // 2. Share / Direct Anchor Link Copy Buttons
  document.querySelectorAll('.btn-share-link').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const anchor = btn.getAttribute('data-anchor') || '';
      const base = window.location.pathname.endsWith('materialy.html') 
        ? `${window.location.origin}${window.location.pathname}` 
        : `${window.location.origin}/materialy.html`;
      const url = `${base}${anchor}`;
      
      try {
        await navigator.clipboard.writeText(url);
        showToast('Skopiowano bezpośredni link do materiału!');
      } catch (err) {
        showToast('Link: ' + url);
      }
    });
  });

  // 3. Material Category Filtering (on materialy.html)
  const filterBtns = document.querySelectorAll('.material-filter-btn');
  const materialCards = document.querySelectorAll('.materials-grid .material-card, .materials-grid-3col .material-card');
  
  if (filterBtns.length && materialCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        materialCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 4. Modal View Handler
  const modalBackdrop = document.getElementById('material-modal');
  const modalTitle = document.getElementById('modal-material-title');
  const modalCode = document.getElementById('modal-material-code');
  const modalCopyBtn = document.getElementById('modal-copy-btn');
  const modalCloseBtns = document.querySelectorAll('.material-modal-close, #material-modal');

  document.querySelectorAll('.btn-view-material').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-modal-target');
      const title = btn.getAttribute('data-modal-title') || 'Podgląd materiału';
      const snippetEl = document.getElementById(targetId);
      
      if (!modalBackdrop || !snippetEl) return;
      
      if (modalTitle) modalTitle.textContent = title;
      if (modalCode) modalCode.textContent = (snippetEl.innerText || snippetEl.textContent).trim();
      
      if (modalCopyBtn) {
        modalCopyBtn.setAttribute('data-clipboard-target', targetId);
      }
      
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (modalBackdrop) {
    modalCloseBtns.forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target === modalBackdrop || e.target.closest('.material-modal-close')) {
          modalBackdrop.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        modalBackdrop.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // 5. Deep Link Hash Auto-scroll & Highlight
  if (window.location.hash) {
    setTimeout(() => {
      const targetEl = document.querySelector(window.location.hash);
      if (targetEl && targetEl.classList.contains('material-card')) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetEl.classList.add('highlight-target');
        setTimeout(() => targetEl.classList.remove('highlight-target'), 3500);
      }
    }, 250);
  }
}

/**
 * Global Toast Notification
 */
function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  
  toast.classList.add('show');
  
  if (window._toastTimer) clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}
