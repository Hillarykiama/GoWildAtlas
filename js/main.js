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
      <p class="footer-tagline-sub">Wildlife veterinary internships across Africa, Asia & the Americas.<br>Up to 40 CPD hours. Groups of 6–8.</p>
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
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </div>

    <div class="footer-contact">
      <h4>Get In Touch</h4>
      <p><a href="mailto:info@gowildatlas.com">info@gowildatlas.com</a></p>
      <a href="https://wa.me/254700000000" target="_blank" rel="noopener" class="btn btn--outline footer-wa">
        WhatsApp Us
      </a>
      <div class="footer-social">
        <a href="#" target="_blank" rel="noopener" aria-label="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1.1" />
          </svg>
        </a>
        <a href="#" target="_blank" rel="noopener" aria-label="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 8.3V6.8c0-.8.2-1.3 1.3-1.3H17V2.7c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.1v1.7H8v3.1h2.5v10.1H14V11.4h2.7l.4-3.1H14z" />
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
      
    </div>
  </div>
</footer>

<!-- WhatsApp Float -->
<a href="https://wa.me/254700000000" target="_blank" rel="noopener"
   class="whatsapp-float" aria-label="Chat on WhatsApp">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15
             -.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075
             -.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059
             -.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52
             .149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52
             -.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51
             -.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372
             -.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074
             .149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625
             .712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413
             .248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.531 5.855L.057 23.882
             a.75.75 0 00.921.921l6.056-1.479A11.945 11.945 0 0012 24c6.627 0 12-5.373
             12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.951-1.355l-.355-.211
             -3.682.898.923-3.598-.23-.368A9.725 9.725 0 012.25 12C2.25 6.615
             6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
  </svg>
</a>
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
