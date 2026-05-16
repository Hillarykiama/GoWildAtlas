/* ============================================
   GOWILDATLAS — CONTACT JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Contact Form ──
  const form = document.getElementById('contactForm');
  const success = document.getElementById('contactSuccess');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn = form.querySelector('.contact-submit-btn');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.querySelectorAll('input, select, textarea').forEach(el => el.value = '');
          btn.style.display = 'none';
          success.style.display = 'flex';
        } else {
          btn.textContent = 'Something went wrong — try again';
          btn.disabled = false;
        }
      } catch {
        btn.textContent = 'Network error — try again';
        btn.disabled = false;
      }
    });
  }

  // ── FAQ Accordion ──
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    // Set initial height
    answer.style.maxHeight = '0';
    answer.style.overflow = 'hidden';
    answer.style.transition = 'max-height 0.4s ease';

    question.addEventListener('click', () => {
      const isOpen = question.getAttribute('aria-expanded') === 'true';

      // Close all
      faqItems.forEach(i => {
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        i.querySelector('.faq-answer').style.maxHeight = '0';
        i.querySelector('.faq-icon').textContent = '+';
        i.classList.remove('open');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '−';
        item.classList.add('open');
      }
    });
  });

  // ── Pre-select subject from URL param ──
  const params = new URLSearchParams(window.location.search);
  const prog = params.get('programme');
  if (prog) {
    const select = document.getElementById('contactSubject');
    if (select) {
      const match = [...select.options].find(o => o.value.includes(prog));
      if (match) select.value = match.value;
    }
  }

});