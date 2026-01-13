const btnUp = {
  el: document.querySelector('#btn-up'),
  show() {
    if (this.el) {
      this.el.classList.remove('opacity-0', 'pointer-events-none');
      this.el.classList.add('opacity-100', 'pointer-events-auto');
    }
  },
  hide() {
    if (this.el) {
      this.el.classList.remove('opacity-100', 'pointer-events-auto');
      this.el.classList.add('opacity-0', 'pointer-events-none');
    }
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 100 ? this.show() : this.hide();
    });
    if (this.el) {
      this.el.onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
}

btnUp.addEventListener();