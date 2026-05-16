/* ============================================
   GOWILDATLAS — GALLERY JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Filter ──
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.masonry-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      items.forEach(item => {
        const categories = item.dataset.category || '';
        if (filter === 'all' || categories.includes(filter)) {
          item.style.display = '';
          item.classList.add('visible');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // ── Lightbox ──
  const lightbox = document.getElementById('lightbox');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let visibleItems = [];
  let currentIndex = 0;

  function getVisible() {
    return [...items].filter(item => item.style.display !== 'none');
  }

  function openLightbox(index) {
    visibleItems = getVisible();
    currentIndex = index;
    const item = visibleItems[currentIndex];
    const img = item.querySelector('img');
    const caption = item.querySelector('.masonry-item__caption');

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : '';

    lightbox.style.display = 'flex';
    lightboxBackdrop.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxBackdrop.style.display = 'none';
    document.body.style.overflow = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    openLightbox(currentIndex);
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % visibleItems.length;
    openLightbox(currentIndex);
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      visibleItems = getVisible();
      const idx = visibleItems.indexOf(item);
      openLightbox(idx);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', showPrev);
  lightboxNext.addEventListener('click', showNext);

  document.addEventListener('keydown', e => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    }
  });

  // ── Video ──
  const playBtn = document.getElementById('videoPlayBtn');
  const placeholder = document.getElementById('videoPlaceholder');
  const iframe = document.getElementById('videoIframe');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      iframe.src = iframe.dataset.src;
      placeholder.style.display = 'none';
      iframe.style.display = 'block';
    });
  }

});