(function() {
  function NivoSlider(element, options) {
      this.element = element;
      this.settings = Object.assign({}, NivoSlider.defaults, options);
      this.currentSlide = 0;
      this.currentImage = "";
      this.totalSlides = 0;
      this.running = false;
      this.paused = false;
      this.stop = false;
      this.controlNavEl = false;

      this.init();
  }

  NivoSlider.prototype.init = function() {
      var self = this;
      this.element.classList.add('nivoSlider');

      this.slides = Array.from(this.element.children);
      this.slides.forEach(function(slide, index) {
          if (!slide.matches('img')) {
              if (slide.matches('a')) {
                  slide.classList.add('nivo-imageLink');
              }
              slide = slide.querySelector('img:first-of-type');
          }

          var width = slide ? slide.width : 0;
          var height = slide ? slide.height : 0;

          if (index === 0) {
              self.totalSlides++;
          }

          slide.style.display = 'none';
      });

      if (this.settings.randomStart) {
          this.settings.startSlide = Math.floor(Math.random() * this.totalSlides);
      }

      if (this.settings.startSlide >= this.totalSlides) {
          this.settings.startSlide = this.totalSlides - 1;
      }

      this.currentSlide = this.settings.startSlide;

      this.currentImage = this.slides[this.currentSlide].querySelector('img');
      if (this.slides[this.currentSlide].matches('a')) {
          this.slides[this.currentSlide].style.display = 'block';
      }

      this.mainImage = document.createElement('img');
      this.mainImage.className = 'nivo-main-image';
      this.mainImage.src = this.currentImage.src;
      this.element.appendChild(this.mainImage);

      window.addEventListener('resize', function() {
          self.element.querySelectorAll('img').forEach(function(img) {
              img.style.width = self.element.offsetWidth + 'px';
          });
          self.mainImage.src = self.currentImage.src;
          self.mainImage.style.height = 'auto';
          document.querySelectorAll('.nivo-slice').forEach(function(slice) {
              slice.remove();
          });
          document.querySelectorAll('.nivo-box').forEach(function(box) {
              box.remove();
          });
      });

      var caption = document.createElement('div');
      caption.className = 'nivo-caption';
      this.element.appendChild(caption);

      this.updateCaption();

      if (!this.settings.manualAdvance && this.slides.length > 1) {
          this.interval = setInterval(function() {
              self.changeSlide(false);
          }, this.settings.pauseTime);
      }

      if (this.settings.directionNav) {
          var directionNav = document.createElement('div');
          directionNav.className = 'nivo-directionNav';
          directionNav.innerHTML = '<a class="nivo-prevNav">' + this.settings.prevText + '</a>' +
                                    '<a class="nivo-nextNav">' + this.settings.nextText + '</a>';
          this.element.appendChild(directionNav);

          directionNav.querySelector('.nivo-prevNav').addEventListener('click', function() {
              if (self.running) return false;
              clearInterval(self.interval);
              self.interval = null;
              self.currentSlide -= 2;
              self.changeSlide('prev');
          });

          directionNav.querySelector('.nivo-nextNav').addEventListener('click', function() {
              if (self.running) return false;
              clearInterval(self.interval);
              self.interval = null;
              self.changeSlide('next');
          });
      }

      if (this.settings.controlNav) {
          this.controlNavEl = document.createElement('div');
          this.controlNavEl.className = 'nivo-controlNav';
          this.element.parentNode.insertBefore(this.controlNavEl, this.element.nextSibling);

          for (var i = 0; i < this.slides.length; i++) {
              var controlNav = document.createElement('a');
              controlNav.className = 'nivo-control';
              controlNav.setAttribute('rel', i);
              if (this.settings.controlNavThumbs) {
                  var thumb = this.slides[i].querySelector('img');
                  if (thumb && thumb.getAttribute('data-thumb')) {
                      var thumbImg = document.createElement('img');
                      thumbImg.src = thumb.getAttribute('data-thumb');
                      controlNav.appendChild(thumbImg);
                  }
              } else {
                  controlNav.textContent = i + 1;
              }
              this.controlNavEl.appendChild(controlNav);
          }

          this.controlNavEl.querySelectorAll('a').forEach(function(control, index) {
              control.addEventListener('click', function() {
                  if (self.running) return false;
                  if (control.classList.contains('active')) return false;
                  clearInterval(self.interval);
                  self.interval = null;
                  self.mainImage.src = self.currentImage.src;
                  self.currentSlide = parseInt(control.getAttribute('rel'), 10) - 1;
                  self.changeSlide('control');
              });
          });

          this.controlNavEl.querySelectorAll('a')[this.currentSlide].classList.add('active');
      }

      if (this.settings.pauseOnHover) {
          this.element.addEventListener('mouseenter', function() {
              self.paused = true;
              clearInterval(self.interval);
              self.interval = null;
          });
          this.element.addEventListener('mouseleave', function() {
              self.paused = false;
              if (self.interval === null && !self.settings.manualAdvance) {
                  self.interval = setInterval(function() {
                      self.changeSlide(false);
                  }, self.settings.pauseTime);
              }
          });
      }

      this.element.addEventListener('nivo:animFinished', function() {
          self.mainImage.src = self.currentImage.src;
          self.running = false;
          self.slides.forEach(function(slide) {
              if (slide.matches('a')) {
                  slide.style.display = 'none';
              }
          });
          if (self.slides[self.currentSlide].matches('a')) {
              self.slides[self.currentSlide].style.display = 'block';
          }
          if (self.interval === null && !self.paused && !self.settings.manualAdvance) {
              self.interval = setInterval(function() {
                  self.changeSlide(false);
              }, self.settings.pauseTime);
          }
          self.settings.afterChange.call(self);
      });

      this.settings.afterLoad.call(this);
  };

  NivoSlider.prototype.updateCaption = function() {
      var caption = this.element.querySelector('.nivo-caption');
      if (this.currentImage.title) {
          var title = this.currentImage.title;
          if (title.startsWith('#')) {
              title = document.querySelector(title).innerHTML;
          }
          if (caption.style.display === 'block') {
              setTimeout(function() {
                  caption.innerHTML = title;
              }, this.settings.animSpeed);
          } else {
              caption.innerHTML = title;
              caption.style.display = 'block';
              caption.style.opacity = '1';
          }
      } else {
          caption.style.opacity = '0';
          caption.style.display = 'none';
      }
  };

  NivoSlider.prototype.changeSlide = function(direction) {
      var self = this;
      var effect = this.settings.effect;
      var slideCount = this.slides.length;

      if (this.currentSlide === slideCount - 1) {
          this.settings.slideshowEnd.call(this);
      }

      if (this.stop || direction) {
          return false;
      }

      this.settings.beforeChange.call(this);

      if (direction) {
          if (direction === 'prev') {
              this.currentSlide -= 2;
          }
      }

      this.currentSlide++;
      if (this.currentSlide === slideCount) {
          this.currentSlide = 0;
          this.settings.slideshowEnd.call(this);
      }

      if (this.currentSlide < 0) {
          this.currentSlide = slideCount - 1;
      }

      this.currentImage = this.slides[this.currentSlide].querySelector('img');

      if (this.controlNavEl) {
          this.controlNavEl.querySelectorAll('a').forEach(function(control, index) {
              control.classList.remove('active');
              if (index === self.currentSlide) {
                  control.classList.add('active');
              }
          });
      }

      this.updateCaption();
      this.element.querySelectorAll('.nivo-slice').forEach(function(slice) {
          slice.remove();
      });
      this.element.querySelectorAll('.nivo-box').forEach(function(box) {
          box.remove();
      });

      var transitionEffect = function(effect) {
          switch (effect) {
              case 'sliceDown':
                  // Implement sliceDown effect
                  break;
              case 'fade':
                  // Implement fade effect
                  break;
              // Add more cases for other effects
              default:
                  // Default effect
                  break;
          }
      };

      transitionEffect(this.settings.effect);
      this.running = true;
  };

  NivoSlider.defaults = {
      effect: 'random',
      slices: 15,
      boxCols: 8,
      boxRows: 4,
      animSpeed: 500,
      pauseTime: 3000,
      startSlide: 0,
      directionNav: true,
      controlNav: true,
      controlNavThumbs: false,
      pauseOnHover: true,
      manualAdvance: false,
      prevText: 'Prev',
      nextText: 'Next',
      randomStart: false,
      afterLoad: function() {},
      beforeChange: function() {},
      afterChange: function() {},
      slideshowEnd: function() {},
      lastSlide: function() {}
  };

  // Automatically initialize NivoSlider on elements with class 'nivoSlider'
  document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('.nivoSlider').forEach(function(element) {
          new NivoSlider(element);
      });
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector("#mainSlider");
  const images = slider.querySelectorAll("img");
  const prevButton = slider.querySelector(".nivo-prevNav");
  const nextButton = slider.querySelector(".nivo-nextNav");
  const dots = slider.querySelectorAll(".nivo-control");

  let currentIndex = 0;
  const totalImages = images.length;
  const animSpeed = 500;
  const pauseTime = 5000;
  let autoSlideInterval;

  // Функция для показа изображения
  function showImage(index) {
      images.forEach((img, i) => {
          img.style.display = i === index ? "block" : "none";
      });
      dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
      });
      currentIndex = index;
  }

  // Показ следующего изображения
  function showNextImage() {
      let nextIndex = (currentIndex + 1) % totalImages;
      showImage(nextIndex);
  }

  // Показ предыдущего изображения
  function showPrevImage() {
      let prevIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(prevIndex);
  }

  // Установка интервала для автопереключения
  function startAutoSlide() {
      autoSlideInterval = setInterval(showNextImage, pauseTime);
  }

  // Остановка автопереключения при наведении
  function stopAutoSlide() {
      clearInterval(autoSlideInterval);
  }

  // Обработчики событий для навигационных кнопок
  nextButton.addEventListener("click", showNextImage);
  prevButton.addEventListener("click", showPrevImage);

  // Обработчики событий для точек (dots)
  dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
          showImage(index);
      });
  });

  // Запуск автопереключения слайдов
  startAutoSlide();

  // Остановка автопереключения при наведении на слайдер
  slider.addEventListener("mouseover", stopAutoSlide);
  slider.addEventListener("mouseout", startAutoSlide);

  // Инициализация первого изображения
  showImage(currentIndex);
});
