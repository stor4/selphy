import $ from 'jquery';

(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	// $('.mobile-menu nav').meanmenu({
	// 	meanScreenWidth: "991",
	// 	meanMenuContainer: ".mobile-menu",
	// });

/*----------------------------
 Category Menu
------------------------------ */
	$(".category-menu-title").on('click', function(){
		$(".categorie-list").toggle();
	});

/*--------------------------
	Category Accordion
---------------------------- */
	 $('.rx-parent').on('click', function(){
		$('.rx-child').slideToggle(300);
		$(this).toggleClass('rx-change');
	});

/*----------------------------
 HeaderDropdown
------------------------------ */

const headerDropdownBtn = document.querySelector('.product-categori')
const headerDropdownList = document.querySelector('.product-categori-list')

headerDropdownBtn.addEventListener('click', function() {
  if (headerDropdownList.style.display === 'none') {
    headerDropdownList.style.display = 'block'
  } else {
    headerDropdownList.style.display = 'none'
  }
})



/*----------------------------
 DB Select Js
------------------------------ */
	// $('#product-categori').ddslick({
	// 	onSelected: function(selectedData){
	// 		//callback function: do something with selectedData;
	// 	}
	// });


/*----------------------------
 owl active
------------------------------ */
  	/* Bestsell Carousel */
  document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#bestsell-carousel');
    if (carouselElement && carouselElement.children.length > 0) {
      new OwlCarousel('#bestsell-carousel', {
        items: 5,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
          1200: { items: 5 }
        }
      });
    } else {
      console.error('Carousel element not found or empty.');
    }
  });



	/* Bestsell Carousel 2 */
  document.addEventListener('DOMContentLoaded', function () {
    const bestsellerCarousel2 = document.querySelector('#bestsell-carousel-2');
    if (bestsellerCarousel2 && bestsellerCarousel2.children.length > 0) {
      new OwlCarousel('#bestsell-carousel-2', {
        items: 4,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
          1200: { items: 4 }
        }
      });
    }
  });


	/* Most Viewed Carousel */
  document.addEventListener('DOMContentLoaded', function () {
    const mostViewedCarousel = document.querySelector('#most-viewed-carousel');
    if (mostViewedCarousel && mostViewedCarousel.children.length > 0) {
      new OwlCarousel('#most-viewed-carousel', {
        items: 5,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
          1200: { items: 5 }
        }
      });
    }
  });

	/* Most Viewed Carousel 2 */
	document.addEventListener('DOMContentLoaded', function () {
  const mostViewedCarousel2 = document.querySelector('#most-viewed-carousel-2');
  if (mostViewedCarousel2 && mostViewedCarousel2.children.length > 0) {
    new OwlCarousel('#most-viewed-carousel-2', {
      items: 4,
      loop: true,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      mouseDrag: true,
      touchDrag: true,
      lazyLoad: true,
      nav: true,
      dots: false,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 3 },
        1200: { items: 4 }
      }
    });
  }
});

	/* Random Carousel */
  document.addEventListener('DOMContentLoaded', function () {
    const randomCarousel = document.querySelector('#random-carousel');
    if (randomCarousel && randomCarousel.children.length > 0) {
      new OwlCarousel('#random-carousel', {
        items: 5,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
          1200: { items: 5 }
        }
      });
    }
  });


	/* Random Carousel 2 */
  document.addEventListener('DOMContentLoaded', function () {
    const randomCarousel2 = document.querySelector('#random-carousel-2');
    if (randomCarousel2 && randomCarousel2.children.length > 0) {
      new OwlCarousel('#random-carousel-2', {
        items: 4,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 3 },
          1200: { items: 4 }
        }
      });
    }
  });

	/* Laptop Carousel */
  document.addEventListener('DOMContentLoaded', function () {
    const laptopCarousel = document.querySelector('#laptop-carousel');
    if (laptopCarousel && laptopCarousel.children.length > 0) {
      new OwlCarousel('#laptop-carousel', {
        items: 4,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 3 },
          1200: { items: 4 }
        }
      });
    }
  });

	/* Laptop Carousel 2 */
  document.addEventListener('DOMContentLoaded', function () {
    const laptopCarousel2 = document.querySelector('#laptop-carousel-2');
    if (laptopCarousel2 && laptopCarousel2.children.length > 0) {
      new OwlCarousel('#laptop-carousel-2', {
        items: 5,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
          1200: { items: 5 }
        }
      });
    }
  });

  /* Laptop Carousel 3 */
  document.addEventListener('DOMContentLoaded', function () {
    const laptopCarousel3 = document.querySelector('#laptop-carousel-3');
    if (laptopCarousel3 && laptopCarousel3.children.length > 0) {
      new OwlCarousel('#laptop-carousel-3', {
        items: 4,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 4 }
        }
      });
    }
  });


	/* Tablet Carousel */
  document.addEventListener('DOMContentLoaded', function () {
    const tabletCarousel = document.querySelector('#tablet-carousel');
    if (tabletCarousel && tabletCarousel.children.length > 0) {
      new OwlCarousel('#tablet-carousel', {
        items: 4,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 3 },
          1200: { items: 4 }
        }
      });
    }
  });


	/* Tablet Carousel 2 */
  document.addEventListener('DOMContentLoaded', function () {
    const tabletCarousel2 = document.querySelector('#tablet-carousel-2');
    if (tabletCarousel2 && tabletCarousel2.children.length > 0) {
      new OwlCarousel('#tablet-carousel-2', {
        items: 5,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
          1200: { items: 5 }
        }
      });
    }
  });


  /* Tablet Carousel 3 */
  document.addEventListener('DOMContentLoaded', function () {
    const tabletCarousel3 = document.querySelector('#tablet-carousel-3');
    if (tabletCarousel3 && tabletCarousel3.children.length > 0) {
      new OwlCarousel('#tablet-carousel-3', {
        items: 4,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 4 }
        }
      });
    }
  });

	/* Timer Product Carousel */
  document.addEventListener('DOMContentLoaded', function () {
    const timerProductCarousel = document.querySelector('#timer-product-carousel');
    if (timerProductCarousel && timerProductCarousel.children.length > 0) {
      new OwlCarousel('#timer-product-carousel', {
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 2 },
          992: { items: 1 }
        }
      });
    }
  });

	/* Client Carousel */
  document.addEventListener('DOMContentLoaded', function () {
    const clientCarousel = document.querySelector('#client-carousel');
    if (clientCarousel && clientCarousel.children.length > 0) {
      new OwlCarousel('#client-carousel', {
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: false,
        dots: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
      });
    }
  });

	/* Blog Post Carousel */
  document.addEventListener('DOMContentLoaded', function () {
    const blogPostCarousel = document.querySelector('#blog-post-carousel');
    if (blogPostCarousel && blogPostCarousel.children.length > 0) {
      new OwlCarousel('#blog-post-carousel', {
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: false,
        dots: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
      });
    }
  });

	/* Logo Carousel */
	document.addEventListener('DOMContentLoaded', function () {
    const logoCarousel = document.querySelector('#logo-carousel');
    if (logoCarousel && logoCarousel.children.length > 0) {
      new OwlCarousel('#logo-carousel', {
        items: 4,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: false,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 2 },
          576: { items: 3 },
          768: { items: 4 },
          992: { items: 4 },
          1200: { items: 4 }
        }
      });
    }
  });

  /* Single Product */
  document.addEventListener('DOMContentLoaded', function () {
    const singleProductCarousel = document.querySelector('#single-product');
    if (singleProductCarousel && singleProductCarousel.children.length > 0) {
      new OwlCarousel('#single-product', {
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          768: { items: 1 }
        }
      });
    }
  });

  /* Releted Product */
  document.addEventListener('DOMContentLoaded', function () {
    const relatedProductsCarousel = document.querySelector('#related-products-carousel');
    if (relatedProductsCarousel && relatedProductsCarousel.children.length > 0) {
      new OwlCarousel('#related-products-carousel', {
        items: 5,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          479: { items: 1 },
          768: { items: 2 },
          980: { items: 3 },
          1199: { items: 4 }
        }
      });
    }
  });

  /* Upsell Product */
  document.addEventListener('DOMContentLoaded', function () {
    const upsellProductsCarousel = document.querySelector('#upsell-products-carousel');
    if (upsellProductsCarousel && upsellProductsCarousel.children.length > 0) {
      new OwlCarousel('#upsell-products-carousel', {
        items: 5,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: { items: 1 },
          479: { items: 1 },
          768: { items: 2 },
          980: { items: 3 },
          1199: { items: 4 }
        }
      });
    }
  });

/*----------------------------
 Countdown
------------------------------ */
	$('[data-countdown]').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days :</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour :</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min :</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
	  });
	});

/*----------------------------
 price-slider active
------------------------------ */
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 99,
	   max: 700,
	   values: [ 99, 700 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - $" + $( "#slider-range" ).slider( "values", 1 ) );

/*----------------------------
  Simple Lence Active
------------------------------ */

const lensImages = document.querySelectorAll('#p-view .simpleLens-lens-image');


lensImages.forEach(function(lensImage) {
  simpleLens.call(lensImage, {
    lensImageAttr: 'data-lens-image',
    openLensEvent: 'mouseenter',
    loadingImage: '../../img/products/single-product/medium/1.webp'
  });
});


/*--------------------------
 scrollUp
---------------------------- */
scrollUp({
  scrollDistance: 300,
  scrollSpeed: 300,
  animation: 'fade',
  scrollText: '',
  zIndex: 2147483647
});


/*--------------------------
 collapse
---------------------------- */
	$('.panel_heading a').on('click', function(){
		$('.panel_heading a').removeClass('active');
		$(this).addClass('active');
	})

})(jQuery);



// (function () {
//   "use strict";

//   /*----------------------------
//   Mobile Menu Toggle
//   ------------------------------*/
//   const mobileMenu = document.querySelector('.mobile-menu nav');
//   if (mobileMenu) {
//       const meanScreenWidth = 991;
//       if (window.innerWidth <= meanScreenWidth) {
//           const mobileMenuContainer = document.querySelector('.mobile-menu');
//           // Implement your custom mobile menu logic here if required
//       }
//   }

//   /*----------------------------
//   Category Menu
//   ------------------------------*/
//   const categoryMenuTitle = document.querySelector('.category-menu-title');
//   if (categoryMenuTitle) {
//       categoryMenuTitle.addEventListener('click', function () {
//           const categorieList = document.querySelector('.categorie-list');
//           if (categorieList) {
//               categorieList.style.display = categorieList.style.display === 'none' ? 'block' : 'none';
//           }
//       });
//   }

//   /*--------------------------
//   Category Accordion
//   ----------------------------*/
//   const rxParentElements = document.querySelectorAll('.rx-parent');
//   rxParentElements.forEach(function (parentElement) {
//       parentElement.addEventListener('click', function () {
//           const rxChild = this.nextElementSibling;
//           if (rxChild) {
//               rxChild.style.display = rxChild.style.display === 'none' ? 'block' : 'none';
//           }
//           this.classList.toggle('rx-change');
//       });
//   });

//   /*----------------------------
//   Main Slider
//   ------------------------------*/
//   const mainSlider = document.getElementById('mainSlider');
//   if (mainSlider) {
//       // Implement the main slider using vanilla JS or another library like Swiper.js or Glide.js
//   }

//   /*----------------------------
//   DB Select (Custom Dropdown)
//   ------------------------------*/
//   const productCategori = document.getElementById('product-categori');
//   if (productCategori) {
//       productCategori.addEventListener('change', function (event) {
//           const selectedData = event.target.value;
//           // Handle selected data
//       });
//   }

//   /*----------------------------
//   Owl Carousel Equivalent - Bestsell Carousel
//   ------------------------------*/
//   function initializeCarousel(carouselId, itemsPerScreen) {
//       const carousel = document.querySelector(carouselId);
//       if (carousel) {
//           // Implement your carousel logic here or use a library like Glide.js or Flickity
//       }
//   }

//   initializeCarousel('#bestsell-carousel', {
//       0: 1,
//       576: 2,
//       768: 3,
//       992: 4,
//       1200: 5
//   });

//   /* Additional carousels follow the same pattern */
//   initializeCarousel('#bestsell-carousel-2', {
//       0: 1,
//       576: 2,
//       768: 3,
//       992: 4,
//       1200: 4
//   });

//   /*----------------------------
//   Price Slider
//   ------------------------------*/
//   const sliderRange = document.getElementById('slider-range');
//   if (sliderRange) {
//       const amount = document.getElementById('amount');
//       noUiSlider.create(sliderRange, {
//           start: [99, 700],
//           connect: true,
//           range: {
//               'min': 99,
//               'max': 700
//           }
//       });
//       sliderRange.noUiSlider.on('update', function (values) {
//           amount.value = "$" + values[0] + " - $" + values[1];
//       });
//   }

//   /*----------------------------
//   Scroll Up Button
//   ------------------------------*/
//   const scrollUpButton = document.createElement('button');
//   scrollUpButton.innerHTML = '<i class="fa fa-angle-up"></i>';
//   scrollUpButton.className = 'scroll-up';
//   document.body.appendChild(scrollUpButton);

//   scrollUpButton.addEventListener('click', function () {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//   });

//   window.addEventListener('scroll', function () {
//       if (window.scrollY > 200) {
//           scrollUpButton.style.display = 'block';
//       } else {
//           scrollUpButton.style.display = 'none';
//       }
//   });

//   /*----------------------------
//   Collapse Panel
//   ------------------------------*/
//   const panelHeadings = document.querySelectorAll('.panel_heading a');
//   panelHeadings.forEach(function (panelHeading) {
//       panelHeading.addEventListener('click', function () {
//           panelHeadings.forEach(function (el) {
//               el.classList.remove('active');
//           });
//           this.classList.add('active');
//       });
//   });

// })();
