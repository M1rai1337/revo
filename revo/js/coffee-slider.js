const coffeeSlider = new Swiper('.coffee-slider', {
  spaceBetween: 24,
  slidesPerView: 1.05,
  simulateTouch: false,
  
  navigation: {
    nextEl: '.coffee__arrow-right',
    prevEl: '.coffee__arrow-left',    
  },

  breakpoints: {
    992: {
      slidesPerView: 2,
      simulateTouch: false,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 25,
    },

    409: {
      spaceBetween: 24,
      slidesPerView: 1.1,
    },
  }
});

