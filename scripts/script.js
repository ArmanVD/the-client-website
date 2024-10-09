// JS
const canvas = document.querySelector('.canvas');
let imageIndex = 0;
const imagesPerBatch = 20;
const initialBatch = 30;
let observer;
let scrollTimeout;

function getRandomHeight() {
    const heights = [200, 300, 400];
    return heights[Math.floor(Math.random() * heights.length)];
}

function calculateImagesToLoad() {
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    const imagesPerRow = Math.floor(canvasWidth / 200);
    const rowsInView = Math.ceil(canvasHeight / (200 + 10));

    return imagesPerRow * rowsInView;
}

function loadImages(isInitial) {
    const length = isInitial ? initialBatch : calculateImagesToLoad();
    for (let i = 0; i < length; i++) {
        const img = document.createElement('img');
        img.dataset.src = `https://picsum.photos/200/${getRandomHeight()}?random=${imageIndex++}`;
        img.alt = 'Random Image';
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
    const nearTop = scrollTop <= scrollThreshold;

    const nearRight = scrollWidth - scrollLeft - clientWidth <= scrollThreshold;
    const nearLeft = scrollLeft <= scrollThreshold;

    if (nearBottom || nearTop || nearRight || nearLeft) {
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

window.addEventListener('resize', () => {
    loadImages(true);
});
