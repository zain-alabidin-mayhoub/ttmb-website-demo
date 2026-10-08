/**
 * Main Application Logic for TO THE MOON & BACK (TTMB)
 * Handles: i18n switching, RTL flipping, Sticky Header, Tabs, Modals, Scroll Reveals, Mobile Drawer
 */

document.addEventListener('DOMContentLoaded', () => {
  // Current Language State
  let currentLang = localStorage.getItem('ttmb_lang') || 'en';

  // Elements
  const htmlEl = document.documentElement;
  const bodyEl = document.body;
  const siteHeader = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const langToggleBtns = document.querySelectorAll('.js-lang-toggle');
  
  // Modals
  const menuModal = document.getElementById('menu-modal');
  const storyModal = document.getElementById('story-modal');
  const modalCloseBtns = document.querySelectorAll('.js-modal-close');
  const modalOverlays = document.querySelectorAll('.modal-overlay');

  // ==========================================================================
  // 1. Multilingual Translation & RTL Switcher
  // ==========================================================================
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ttmb_lang', lang);

    htmlEl.lang = lang;
    htmlEl.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    if (lang === 'ar') {
      bodyEl.classList.add('rtl');
    } else {
      bodyEl.classList.remove('rtl');
    }

    // Update Text Nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        // Handle newlines as <br> if needed
        const val = translations[lang][key];
        if (val.includes('\n')) {
          el.innerHTML = val.replace(/\n/g, '<br>');
        } else {
          el.textContent = val;
        }
      }
    });

    // Update active state on language pills
    document.querySelectorAll('.lang-opt').forEach(opt => {
      const targetLang = opt.getAttribute('data-lang');
      if (targetLang === lang) {
        opt.classList.add('lang-active');
      } else {
        opt.classList.remove('lang-active');
      }
    });

    // Update Page Title
    if (lang === 'ar') {
      document.title = 'إلى القمر والعودة | مقهى مختص في جميرا دبي — TTMB';
    } else {
      document.title = 'To The Moon & Back | Specialty Coffee in Dubai — TTMB';
    }
  }

  // Bind language switch triggers
  langToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const nextLang = (currentLang === 'en') ? 'ar' : 'en';
      applyLanguage(nextLang);
    });
  });

  // Initialize Language
  applyLanguage(currentLang);

  // ==========================================================================
  // 2. Sticky Header with Scroll Threshold
  // ==========================================================================
  function handleHeaderScroll() {
    if (window.scrollY > 40) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ==========================================================================
  // 3. Mobile Navigation Drawer
  // ==========================================================================
  function toggleMobileDrawer(open) {
    const isOpen = (typeof open === 'boolean') ? open : !mobileDrawer.classList.contains('is-open');
    if (isOpen) {
      mobileDrawer.classList.add('is-open');
      mobileToggle.classList.add('is-active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      bodyEl.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.remove('is-open');
      mobileToggle.classList.remove('is-active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      bodyEl.style.overflow = '';
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileDrawer());
  }

  // Close mobile drawer on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => toggleMobileDrawer(false));
  });

  // ==========================================================================
  // 4. Signature Menu Tabs
  // ==========================================================================
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetCategory = button.getAttribute('data-tab');

      // Update button active state
      tabButtons.forEach(btn => btn.classList.remove('is-active'));
      button.classList.add('is-active');

      // Switch panels
      tabPanels.forEach(panel => {
        if (panel.id === `tab-${targetCategory}`) {
          panel.classList.add('is-active');
        } else {
          panel.classList.remove('is-active');
        }
      });
    });
  });

  // ==========================================================================
  // 5. Modals Management (Full Menu & Story)
  // ==========================================================================
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('is-active');
    bodyEl.style.overflow = 'hidden';
    const firstFocusable = modal.querySelector('button, [href], input, select, textarea');
    if (firstFocusable) firstFocusable.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('is-active');
    bodyEl.style.overflow = '';
  }

  function closeAllModals() {
    modalOverlays.forEach(m => closeModal(m));
  }

  // Trigger Open Menu Modal
  document.querySelectorAll('.js-open-menu-modal').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(menuModal);
    });
  });

  // Trigger Open Story Modal
  document.querySelectorAll('.js-open-story-modal').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(storyModal);
    });
  });

  // Close Buttons
  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => closeAllModals());
  });

  // Overlay Click to close
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  // ESC key to close modals & drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      toggleMobileDrawer(false);
    }
  });

  // ==========================================================================
  // 6. Scroll Reveal Observer (Gentle Fade-Up)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if observer not supported
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // ==========================================================================
  // 7. Smooth Scroll Anchor Enhancement
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 76;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
