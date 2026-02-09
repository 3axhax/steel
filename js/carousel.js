class TitleCarousel {
  currentSlide = 0;
  slides = [];

  init = () => {
    this.slides = document.querySelectorAll('.carousel-title');
  };

  updateCarousel = () => {
    this.slides.forEach((slide, index) => {
      slide.classList.remove('active', 'next', 'prev');
      if (index === this.currentSlide) {
        slide.classList.add('active');
      } else if (index === (this.currentSlide + 1) % this.slides.length) {
        slide.classList.add('next');
      } else if (index === (this.currentSlide - 1 + this.slides.length) % this.slides.length) {
        slide.classList.add('prev');
      }
    });
  };


  setSlide = (num) => {
    this.currentSlide = num;
    this.updateCarousel();
  };
}
class ImgCarousel {
  currentSlide = 0;
  interval = null;
  slides = [];
  titleCarousel = null;

  init = () => {
    this.slides = document.querySelectorAll('.carousel-img');
    this.titleCarousel = new TitleCarousel();
    this.titleCarousel.init();
    this.updateCarousel();
    this.startInterval();
  };

  updateCarousel = () => {
    this.checkTitle();
    this.slides.forEach((slide, index) => {
      slide.classList.remove('active', 'next', 'prev');
      if (index === this.currentSlide) {
        slide.classList.add('active');
      } else if (index === (this.currentSlide + 1) % this.slides.length) {
        slide.classList.add('next');
      } else if (index === (this.currentSlide - 1 + this.slides.length) % this.slides.length) {
        slide.classList.add('prev');
      }
    });
  };

  startInterval = () => {
    clearInterval(this.interval);
    this.interval = setInterval(this.autoSlide, 5000);
  };

  autoSlide = () => {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateCarousel();
  };

  nextSlide = () => {
    this.startInterval();
    this.autoSlide();
  };

  prevSlide = () => {
    this.startInterval();
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateCarousel();
  }

  checkTitle = () => {
    if ([0, 1].includes(this.currentSlide)) {
      this.titleCarousel.setSlide(0);
    }
    else if ([2, 3].includes(this.currentSlide)) {
      this.titleCarousel.setSlide(1);
    }
    else if ([4, 5].includes(this.currentSlide)) {
      this.titleCarousel.setSlide(2);
    }
    else if ([6, 7].includes(this.currentSlide)) {
      this.titleCarousel.setSlide(3);
    }
    else {
      this.titleCarousel.setSlide(-1);
    }
  }
}

const imgCarousel = new ImgCarousel();

imgCarousel.init();