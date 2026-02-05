let currentSlide = 0;
let interval = null;
const slides = document.querySelectorAll('.carousel-slide');

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'next', 'prev');
    if (index === currentSlide) {
      slide.classList.add('active');
    } else if (index === (currentSlide + 1) % slides.length) {
      slide.classList.add('next');
    } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
      slide.classList.add('prev');
    }
  });
}

function autoSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function nextSlide() {
  startInterval();
  autoSlide();
}

function prevSlide() {
  startInterval();
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

function startInterval () {
  clearInterval(interval);
  interval = setInterval(autoSlide, 5000);
}

startInterval();

updateCarousel();