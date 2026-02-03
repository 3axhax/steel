let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function updateCarousel() {
  console.log('updateCarousel currentSlide', currentSlide);
  slides.forEach((slide, index) => {
    console.log(slide);
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

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  console.log('nextSlide currentSlide', currentSlide);
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  console.log('nextSlide currentSlide', currentSlide);
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

//setInterval(nextSlide, 4000);

updateCarousel();