const images = ['assets/images/slider1.png', 'assets/images/2.png', 'assets/images/3.png'];
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

document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("close-btn");

  // Show the popup when the page loads
  popup.style.display = "block";

  // Close the popup when the X is clicked
  closeBtn.addEventListener("click", function() {
      popup.style.display = "none";
  });
});



// document.addEventListener('DOMContentLoaded', function () {
//   var whatsappChatButton = document.getElementById('whatsapp-chat-button');
//   var whatsappNumber = '51933438357';

//   if (whatsappChatButton) {
//     console.log("Button found!"); // Add this line for debugging
//     whatsappChatButton.addEventListener('click', function (event) {
//       event.preventDefault();
//       console.log("Button clicked!"); // Add this line for debugging
//       var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + whatsappNumber;
//       window.open(whatsappUrl, '_blank');
//     });
//   } else {
//     console.log("Button not found!"); // Add this line for debugging
//   }
// });


