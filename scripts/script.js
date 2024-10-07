// JS
const canvas = document.getElementById('infiniteCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight *0.9;

let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let startX, startY;

let cols = 7;
let width = Math.round(window.innerWidth / cols)

const images = [
    { src: `https://picsum.photos/${width}/200?${Math.random()}`, x: 0, y: 0 },
    { src: `https://picsum.photos/${width}/400?${Math.random()}`, x: width + 5, y: 0 },
    { src: `https://picsum.photos/${width}/300?${Math.random()}`, x: (width + 5) *2, y: 0 },
    { src: `https://picsum.photos/${width}/400?${Math.random()}`, x: (width + 5) *3, y: 0 },
    { src: `https://picsum.photos/${width}/400?${Math.random()}`, x: (width + 5) *4, y: 0 },
    { src: `https://picsum.photos/${width}/400?${Math.random()}`, x: (width + 5) *5, y: 0 },
    { src: `https://picsum.photos/${width}/400?${Math.random()}`, x: (width + 5) *6, y: 0 },
    
    { src: `https://picsum.photos/${width}/200?${Math.random()}`, x: 0, y: 5 + 200 },
    { src: `https://picsum.photos/${width}/400?${Math.random()}`, x: (width + 5) , y: 5 + 400 },
    { src: `https://picsum.photos/${width}/300?${Math.random()}`, x: (width + 5) *2, y: 5 + 300 },
    { src: `https://picsum.photos/${width}/400?${Math.random()}`, x: (width + 5) *3, y: 5 + 400 },
    { src: `https://picsum.photos/${width}/400?${Math.random()}`, x: (width + 5) *4, y: 5 + 400 },
    { src: `https://picsum.photos/${width}/400?${Math.random()}`, x: (width + 5) *5, y: 5 + 400 },
    { src: `https://picsum.photos/${width}/400?${Math.random()}`, x: (width + 5) *6, y: 5 + 400 },
];


let loadedImages = [];

images.forEach((image, index) => {
  const img = new Image();
  img.src = image.src;
  img.onload = () => {
    loadedImages[index] = img;
    drawCanvas();
  };
});

canvas.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - offsetX;
  startY = e.clientY - offsetY;
  canvas.style.cursor = 'grabbing';
});

canvas.addEventListener('mousemove', (e) => {
  if (isDragging) {
    offsetX = e.clientX - startX;
    offsetY = e.clientY - startY;
    drawCanvas();
  }
});

canvas.addEventListener('mouseup', () => {
  isDragging = false;
  canvas.style.cursor = 'grab';
});

canvas.addEventListener('mouseleave', () => {
  isDragging = false;
  canvas.style.cursor = 'grab';
});


function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
 
  ctx.save();
  ctx.translate(offsetX, offsetY);

  images.forEach((image, index) => {
    if (loadedImages[index]) {
      ctx.drawImage(loadedImages[index], image.x, image.y);
    }
  });

  ctx.restore();
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight *0.9;
  drawCanvas();
});
