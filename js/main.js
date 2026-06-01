/* =========================================================================
   Viraj Agro Naturals — Main JavaScript
   Handles: scroll header, mobile menu, dropdown, scroll reveals,
            contact form submission, footer year.
   ========================================================================= */

(function () {
  'use strict';

  /* ---------- Sticky header shadow on scroll ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 20) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile menu toggle ---------- */
  const mobileBtn = document.querySelector('.nav-mobile-btn');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileBtn.classList.toggle('open', isOpen);
      mobileBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile menu when a non-dropdown link is clicked
    mobileMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileBtn.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Mobile dropdown (Products) inside mobile menu ---------- */
  document.querySelectorAll('.nav-mobile .dropdown-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const sub = btn.nextElementSibling;
      if (!sub) return;
      btn.classList.toggle('open');
      sub.classList.toggle('open');
    });
  });

  /* ---------- Desktop dropdown (click to toggle for accessibility) ---------- */
  document.querySelectorAll('.nav-dropdown').forEach((dd) => {
    const btn = dd.querySelector('.nav-dropdown-btn');
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      dd.classList.toggle('open');
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!dd.contains(e.target)) dd.classList.remove('open');
    });
  });

  /* ---------- Scroll-triggered reveals (replaces framer-motion) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply optional staggered delay via data-delay
            const delay = entry.target.dataset.delay;
            if (delay) {
              entry.target.style.transitionDelay = delay + 's';
            }
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    // Fallback: show everything immediately
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  /* ---------- Contact form submit handler ---------- */
  const form = document.querySelector('.contact-form');
  if (form) {
    const submitBtn = form.querySelector('.btn-submit');
    const submitLabel = submitBtn ? submitBtn.querySelector('.submit-label') : null;
    const submitSpinner = submitBtn ? submitBtn.querySelector('.spinner') : null;
    const successPanel = document.querySelector('.form-success');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!submitBtn) return;
      submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = 'Sending...';
      if (submitSpinner) submitSpinner.style.display = 'inline-block';

      // Simulate a 1.5s submit to mirror the original UX
      await new Promise((res) => setTimeout(res, 1500));

      // Show success panel, hide form
      if (successPanel) {
        form.parentElement.style.display = 'none';
        successPanel.style.display = 'block';
      }
    });
  }

  /* ---------- Footer current year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
