// Hero slider
const hero = new Swiper('.hero__slider', {
    effect: 'fade',
    autoplay: {
        delay: 5000,
    },
    loop: true,
});

const gallery = new Swiper('.gallery__slider', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    navigation: {
        nextEl: '.gallery__slider-button--next',
        prevEl: '.gallery__slider-button--prev',
    },
    pagination: {
        el: '.gallery__slider-fraction',
        type: 'fraction',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 38
        },
        // when window width is >= 480px
        1024: {
            slidesPerView: 2,
            spaceBetween: 34
        },
        // when window width is >= 640px
        1280: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
});

const events = new Swiper('.events__slider', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    navigation: {
        nextEl: '.events__slider-button--next',
        prevEl: '.events__slider-button--prev',
    },
    pagination: {
        el: '.gallery__slider-fraction',
        type: 'fraction',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 38
        },
        // when window width is >= 480px
        1024: {
            slidesPerView: 2,
            spaceBetween: 34
        },
        // when window width is >= 640px
        1280: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
});

