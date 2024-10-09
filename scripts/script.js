// JS
const canvas = document.querySelector('.canvas');
let imageIndex = 0;
const imagesPerBatch = 20;
const initialBatch = 30;
let observer;

function loadImages(isInitial) {
  const length = isInitial ? initialBatch : imagesPerBatch;
  for (let i = 0; i < length; i++) {
    const img = document.createElement('img');
    img.dataset.src = `https://picsum.photos/200/?random=${imageIndex++}`;
    img.alt = 'Random Image';
    img.style.width = '100%';
    img.style.height = '100%';
    canvas.appendChild(img);
  }

  lazyLoadImages();
}

function initObserver() {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded');
      }

      entry.target.classList.toggle('in-view', entry.isIntersecting);
    });
  });
}

function lazyLoadImages() {
  const images = document.querySelectorAll('.canvas img');
  images.forEach(image => {
    observer.observe(image);
  });
}

let loading = false;

function handleScroll() {
  if (loading) return;

  const scrollThreshold = 100;
  const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = canvas;

  const nearBottom = scrollHeight - scrollTop - clientHeight <= scrollThreshold;
  const nearRight = scrollWidth - scrollLeft - clientWidth <= scrollThreshold;
  const nearTop = scrollTop <= scrollThreshold;
  const nearLeft = scrollLeft <= scrollThreshold;

  if (nearBottom || nearRight || nearTop || nearLeft) {
    loading = true;
    loadImages();
    console.log('load images');
  }

  window.setTimeout(() => {
    loading = false;
  }, 500);
}

initObserver();
loadImages(true);
canvas.addEventListener('scroll', handleScroll);
