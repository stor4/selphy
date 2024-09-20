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
