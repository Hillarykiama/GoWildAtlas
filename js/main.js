/* ============================================
   GOWILDATLAS — MAIN JS
   ============================================ */
// --- Nav HTML ---
const navHTML = `
<nav class="site-nav" id="siteNav">
  <div class="container nav-inner">

    <a href="/index.html" class="nav-logo">
      <img src="/assets/img/logodp.png" alt="GoWildAtlas" class="nav-logo__img" />
    </a>

    <ul class="nav-links">
      <li><a href="/about.html">About</a></li>
      <li><a href="/locations.html">Locations</a></li>
      <li class="has-dropdown">
        <a href="#">Programs ▾</a>
        <ul class="dropdown">
          <li><a href="/programs/south-africa.html">South Africa</a></li>
          <li><a href="/programs/namibia.html">Namibia</a></li>
          <li><a href="/programs/botswana.html">Botswana</a></li>
          <li><a href="/programs/tanzania.html">Tanzania</a></li>
          <li><a href="/programs/zanzibar.html">Zanzibar</a></li>
          <li><a href="/programs/costa-rica.html">Costa Rica</a></li>
          <li><a href="/programs/ecuador.html">Ecuador</a></li>
        </ul>
      </li>
      <li><a href="/team.html">Team</a></li>
      <li><a href="/gallery.html">Gallery</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>

    <a href="/apply.html" class="btn btn--primary nav-cta">Apply Now</a>

    <button class="nav-burger" id="navBurger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>

  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobileMenu">
    <button class="mobile-menu__close" id="mobileClose" aria-label="Close menu">✕</button>
    <ul>
      <li><a href="/about.html">About</a></li>
      <li><a href="/locations.html">Locations</a></li>
      <li><a href="/programs/south-africa.html">South Africa</a></li>
      <li><a href="/programs/namibia.html">Namibia</a></li>
      <li><a href="/programs/botswana.html">Botswana</a></li>
      <li><a href="/programs/tanzania.html">Tanzania</a></li>
      <li><a href="/programs/zanzibar.html">Zanzibar</a></li>
      <li><a href="/programs/costa-rica.html">Costa Rica</a></li>
      <li><a href="/programs/ecuador.html">Ecuador</a></li>
      <li><a href="/team.html">Team</a></li>
      <li><a href="/gallery.html">Gallery</a></li>
      <li><a href="/contact.html">Contact</a></li>
      <li><a href="/apply.html" class="btn btn--primary">Apply Now</a></li>
    </ul>
  </div>
</nav>
`;

// --- Footer HTML ---
const footerHTML = `
<footer class="site-footer">
  <div class="container footer-inner">

    <div class="footer-brand">
  <img src="/assets/img/logodp.png" alt="GoWildAtlas" class="footer-logo" />
  <p>Explore. Intervene. Conserve.</p>
  <p class="footer-tagline-sub">
    Wildlife veterinary and conservation adventures across Africa & Latin America.
  </p>
</div>

    <div class="footer-links">
      <h4>Programs</h4>
      <ul>
        <li><a href="/programs/south-africa.html">South Africa</a></li>
        <li><a href="/programs/namibia.html">Namibia</a></li>
        <li><a href="/programs/botswana.html">Botswana</a></li>
        <li><a href="/programs/tanzania.html">Tanzania</a></li>
        <li><a href="/programs/costa-rica.html">Costa Rica</a></li>
        <li><a href="/programs/ecuador.html">Ecuador</a></li>
      </ul>
    </div>

    <div class="footer-links">
      <h4>Company</h4>
      <ul>
        <li><a href="/about.html">About</a></li>
        <li><a href="/team.html">Team</a></li>
        <li><a href="/locations.html">Locations</a></li>
        <li><a href="/gallery.html">Gallery</a></li>
        <li><a href="/safeguarding-policy.html">Safeguarding Policy</a></li>
        <li><a href="/terms-and-conditions.html">Terms & Conditions</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </div>

    <div class="footer-contact">
      <h4>Get In Touch</h4>
      <p><a href="mailto:info@gowildatlas.com">info@gowildatlas.com</a></p>
      
      <div class="footer-social">
        <a href="#" target="_blank" rel="noopener" aria-label="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1.1" />
          </svg>
        </a>
        
        <a href="#" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5.2 8.9h3.4v10.9H5.2V8.9zM6.9 4.2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10.7 8.9H14v1.5c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.2v6h-3.4v-5.3c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8v5.4h-3.4V8.9z" />
          </svg>
        </a>
        <a href="#" target="_blank" rel="noopener" aria-label="TikTok">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.8 3c.4 3 2.1 4.8 5.2 5v3.4c-1.8.2-3.4-.4-5.1-1.5v5.7c0 7.2-7.8 9.5-11 4.3-2-3.3-.8-9.1 5.8-9.3v3.6c-.6.1-1.3.2-1.9.5-1.8.9-2.5 2.6-2 4.1 1 2.8 5.5 2.2 5.5-1.8V3h3.5z" />
          </svg>
        </a>
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    <div class="container">
      <p>© <span id="footerYear"></span> GoWildAtlas. All rights reserved.</p>
      <div class="footer-legal">
        <a href="/safeguarding-policy.html">Safeguarding Policy</a>
        <a href="/terms-and-conditions.html">Terms & Conditions</a>
      </div>
      
    </div>
  </div>
</footer>

<!-- WhatsApp Float -->
`;

// --- Inject Nav & Footer ---
function injectLayout() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (navPlaceholder) navPlaceholder.innerHTML = navHTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

  // Set footer year
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initNav();
}

// --- Nav Behaviour ---
function initNav() {
  const nav = document.getElementById('siteNav');
  const burger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  // Scroll shrink
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Mobile open
  burger?.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  // Mobile close
  mobileClose?.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });

  // Active link highlight
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}

// --- Scroll Reveal ---
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up, .fade-in').forEach(el => {
    observer.observe(el);
  });
}

// --- Stat Counters ---
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.count;
        const suffix = el.dataset.suffix || '';
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;

        el.classList.add('counting');

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target + suffix;
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(current) + suffix;
          }
        }, 16);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// --- Boot ---
document.addEventListener('DOMContentLoaded', () => {
  injectLayout();
  initScrollReveal();
  initCounters();
});
