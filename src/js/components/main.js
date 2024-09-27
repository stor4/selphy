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
const headerDropdownItems = document.getElementById("header-dropdown-li")

function setValue(value) {
  headerDropdownBtn.textContent = value.innerText
  headerDropdownList.style.display = 'none'
}

window.setValue = setValue

headerDropdownBtn.addEventListener('click', function() {
  event.stopPropagation();
  headerDropdownList.style.display = headerDropdownList.style.display === 'none' ? 'block' : 'none';
})

document.addEventListener('click', function(event) {
  if (!headerDropdownList.contains(event.target) && event.target !== headerDropdownBtn) {
    headerDropdownList.style.display = 'none';
  }
});



/*----------------------------
 DB Select Js
------------------------------ */
	// $('#product-categori').ddslick({
	// 	onSelected: function(selectedData){
	// 		//callback function: do something with selectedData;
	// 	}
	// });


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
// document.addEventListener('DOMContentLoaded', function () {
//   // Инициализация элементов
//   const slider = document.getElementById('slider-range');
//   const range = slider.querySelector('.ui-slider-range');
//   const handleMin = document.getElementById('handle-min');
//   const handleMax = document.getElementById('handle-max');
//   const amount = document.getElementById('amount');

//   // Настройки
//   const minValue = 99;
//   const maxValue = 700;
//   let currentMin = minValue;
//   let currentMax = maxValue;

//   // Обновление позиции ползунков
//   function updateSlider() {
//     const minPercent = ((currentMin - minValue) / (maxValue - minValue)) * 100;
//     const maxPercent = ((currentMax - minValue) / (maxValue - minValue)) * 100;

//     handleMin.style.left = `${minPercent}%`;
//     handleMax.style.left = `${maxPercent}%`;
//     range.style.left = `${minPercent}%`;
//     range.style.width = `${maxPercent - minPercent}%`;

//     amount.value = `$${currentMin} - $${currentMax}`;
//   }

//   // Перетаскивание ползунков
//   function handleDrag(event, handle, isMin) {
//     const sliderRect = slider.getBoundingClientRect();
//     const sliderWidth = sliderRect.width;

//     function moveAt(x) {
//       let newLeft = ((x - sliderRect.left) / sliderWidth) * 100;
//       if (newLeft < 0) newLeft = 0;
//       if (newLeft > 100) newLeft = 100;

//       const value = Math.round((newLeft / 100) * (maxValue - minValue) + minValue);

//       if (isMin) {
//         if (value < currentMax) {
//           currentMin = value;
//         }
//       } else {
//         if (value > currentMin) {
//           currentMax = value;
//         }
//       }
//       updateSlider();
//     }

//     function onMouseMove(e) {
//       moveAt(e.clientX);
//     }

//     document.addEventListener('mousemove', onMouseMove);

//     document.addEventListener('mouseup', function onMouseUp() {
//       document.removeEventListener('mousemove', onMouseMove);
//       document.removeEventListener('mouseup', onMouseUp);
//     }, { once: true });
//   }

//   // События для ползунков
//   handleMin.addEventListener('mousedown', (event) => {
//     handleDrag(event, handleMin, true);
//   });

//   handleMax.addEventListener('mousedown', (event) => {
//     handleDrag(event, handleMax, false);
//   });

//   // Инициализация
//   updateSlider();
// });

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


document.addEventListener('DOMContentLoaded', function () {
  // Кнопка открытия основного меню
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const menuNav = document.querySelector('.mobile-menu-nav');

  menuBtn.addEventListener('click', function () {
    menuNav.classList.toggle('mobile-menu-show');
  });

  // Кнопки подменю
  const subMenuBtns = document.querySelectorAll('.sub-menu-btn');

  subMenuBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      event.preventDefault(); // Предотвращаем переход по ссылке
      const subMenu = btn.nextElementSibling;

      // Проверяем, есть ли подменю
      if (subMenu && subMenu.classList.contains('sub-menu')) {
        subMenu.classList.toggle('sub-menu-show');
      }
    });
  });
});

// const menuBtn = document.querySelector('.mobile-menu-btn');
// const mobileNav = document.querySelector('.mobile-menu-nav');
// menuBtn.addEventListener('click', () => {
//   mobileNav.classList.toggle('show'); // Показать/скрыть меню
// });

// // Открытие подменю
// const menuGroups = document.querySelectorAll('.mobile-menu-group > a');
// menuGroups.forEach((group) => {
//   group.addEventListener('click', (e) => {
//     e.preventDefault();
//     const subMenu = group.nextElementSibling;
//     if (subMenu) {
//       subMenu.classList.toggle('show');
//     }
//   });
// });


// const mobileNav = document.querySelector('.mobile-menu-nav')
// const mobileBtn = document.querySelector('.mobile-menu-btn')

// mobileBtn.addEventListener('click', function() {
//   console.log(mobileNav.style.display)
//   if (mobileNav.style.display === ('' || 'none')) {
//   mobileNav.style.display = 'block'
//   mobileNav.style.transform = 'translateY(0)'
//   } else {
//     console.log(1)
//   }

// })

// document.addEventListener('click', function(event) {
//   if (!mobileNav.contains(event.target) && event.target !== mobileNav) {
//     mobileNav.style.display = 'none'
//     mobileNav.style.transform = 'translateY(-395px)'
//   } else {


//   }
// })



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
