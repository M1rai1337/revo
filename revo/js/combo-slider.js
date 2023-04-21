const comboSlider = new Swiper('.combo-slider', {
    simulateTouch: false,
    slidesPerView: 1.18,
    spaceBetween: 12,
    
    navigation: {
        nextEl: '.combo__arrow-right',
        prevEl: '.combo__arrow-left',  
    },

    breakpoints: {
        1180: {
            spaceBetween: 41,
            slidesPerView: 3,
        },

        992: {simulateTouch: true },

        776: { slidesPerView: 2 },

        616: { slidesPerView: 2.15 },

        492: { slidesPerView: 1.75 },

        386: {
            slidesPerView: 1.45,
            spaceBetween: 15,
        }
    }
});
  
  