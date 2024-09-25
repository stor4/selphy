import Swiper from 'swiper';

const mainSlider = new Swiper(".mainSlider", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  autoplay: {
    delay: 1000,
  },
});

new Swiper('.products-carousel', {
  slidesPerView: 2,
  loop: true,
  breakpoints: {
    577: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 4,
    },
    993: {
      slidesPerView: 5,
    }
  }
})

new Swiper('.small-slider', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})
