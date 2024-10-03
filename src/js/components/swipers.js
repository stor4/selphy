import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Autoplay]);

const mainSlider = new Swiper(".mainSlider", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  autoplay: {
    delay: 10000,
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

new Swiper('.brandLogo-slider', {
  slidesPerView: 4,
})

new Swiper('.productThumbnail-swiper', {
  slidesPerView: 4,
})
