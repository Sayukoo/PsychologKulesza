/**
 * Kacper Kulesza - Psycholog | Free Materials & Knowledge Hub
 * Handles clipboard copying, category filtering, preview modal, and toast alerts.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMaterials();
});

/**
 * Free Materials & Knowledge Hub Interactions
 */
function initMaterials() {
  // 1. Copy to Clipboard Buttons
  document.querySelectorAll('.btn-copy-prompt, .btn-copy-action').forEach(btn => {
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
      
      showToast('Skopiowano treść do schowka!');
      
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = origHtml;
      }, 2400);
    });
  });

  // 2. Share / Direct Anchor Link Copy Buttons
  document.querySelectorAll('.btn-share-anchor, .btn-share-link').forEach(btn => {
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

  // 3. Material Category Filtering
  const filterBtns = document.querySelectorAll('.material-filter-btn');
  const materialCards = document.querySelectorAll('.materials-grid .material-card');
  
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

  document.querySelectorAll('.btn-view-instruction, .btn-view-material').forEach(btn => {
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

  // 5. Deep Link Highlight
  if (window.location.hash) {
    const targetCard = document.querySelector(window.location.hash);
    if (targetCard && targetCard.classList.contains('material-card')) {
      setTimeout(() => {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.add('highlight-target');
        setTimeout(() => targetCard.classList.remove('highlight-target'), 3500);
      }, 300);
    }
  }
}

/**
 * Toast Floating Alert Notification Helper
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}
