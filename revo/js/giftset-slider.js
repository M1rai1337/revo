const giftsetSlider = new Swiper('.giftset-slider', {
    simulateTouch: false,

    effect: 'fade',
    fadeEffect: { crossFade: true },

    pagination: {
        el: '.giftset-pagination',
        clickable: true,

        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },
});

