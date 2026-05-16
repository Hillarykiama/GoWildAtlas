/* ============================================
   GOWILDATLAS — APPLY FORM JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('applyForm');
  const steps = document.querySelectorAll('.form-step');
  const stepIndicators = document.querySelectorAll('.apply-step');
  const progressFill = document.getElementById('progressFill');
  const totalSteps = steps.length;
  let currentStep = 1;

  // Update progress bar and step indicators
  function updateProgress(step) {
    const pct = ((step - 1) / (totalSteps - 1)) * 100;
    progressFill.style.width = `${pct}%`;

    stepIndicators.forEach(el => {
      const s = +el.dataset.step;
      el.classList.toggle('active', s === step);
      el.classList.toggle('done', s < step);
    });
  }

  // Show a specific step
  function goToStep(step) {
    steps.forEach(el => el.classList.remove('active'));
    const target = document.getElementById(`step-${step}`);
    if (target) {
      target.classList.add('active');
      currentStep = step;
      updateProgress(step);
      window.scrollTo({ top: document.querySelector('.apply-section').offsetTop - 100, behavior: 'smooth' });
    }
  }

  // Validate current step fields
  function validateStep(step) {
    const current = document.getElementById(`step-${step}`);
    const required = current.querySelectorAll('[required]');
    let valid = true;

    required.forEach(field => {
      field.classList.remove('error');
      // Radio group check
      if (field.type === 'radio') {
        const group = current.querySelectorAll(`[name="${field.name}"]`);
        const checked = [...group].some(r => r.checked);
        if (!checked) {
          valid = false;
          group.forEach(r => r.closest('.programme-option')?.classList.add('error'));
        } else {
          group.forEach(r => r.closest('.programme-option')?.classList.remove('error'));
        }
        return;
      }

      if (field.type === 'checkbox' && !field.checked) {
        field.classList.add('error');
        valid = false;
        return;
      }

      if (!field.checkValidity()) {
        field.classList.add('error');
        valid = false;
      }
    });

    return valid;
  }

  // Next buttons
  document.querySelectorAll('.next-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = +btn.dataset.next;
      if (validateStep(currentStep)) {
        goToStep(next);
      } else {
        // Shake the button
        btn.classList.add('shake');
        setTimeout(() => btn.classList.remove('shake'), 500);
      }
    });
  });

  // Prev buttons
  document.querySelectorAll('.prev-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(+btn.dataset.prev);
    });
  });

  // Form submit — Formspree AJAX
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        document.getElementById('step-4').style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
        document.querySelector('.apply-progress').style.display = 'none';
        progressFill.style.width = '100%';
      } else {
        submitBtn.textContent = 'Something went wrong — try again';
        submitBtn.disabled = false;
      }
    } catch {
      submitBtn.textContent = 'Network error — try again';
      submitBtn.disabled = false;
    }
  });

  // Remove error on input
  document.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => el.classList.remove('error'));
  });

  // Init
  updateProgress(1);
});
