const images = ['assets/images/slider1.png', 'assets/images/slider2.jpg', 'assets/images/slider3.jpg'];
const imageTexts = ['Llevamos bienestar y felicidad a niños, niñas y adolescentes en situación de vulnerabilidad.', 'Existimos para que la bondad logre convertirse en impacto real.', 'Creamos lazos que generan impacto. '];

let currentIndex = 0;
const textElement = document.getElementById('text');

function updateSlide() {
  const imageElement = document.querySelector('.slider-image');
  imageElement.src = images[currentIndex];
  textElement.textContent = imageTexts[currentIndex];
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
}

// Initial update
updateSlide();

// Automatically change slide every 3 seconds
setInterval(nextSlide, 3000);
