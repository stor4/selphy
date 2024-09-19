(function() {
  "use strict";

  function meanmenu(options) {
    var defaults = {
      meanMenuTarget: document.querySelector(this),
      meanMenuContainer: "body",
      meanMenuClose: "X",
      meanMenuCloseSize: "18px",
      meanMenuOpen: "<span /><span /><span />",
      meanRevealPosition: "right",
      meanRevealPositionDistance: "0",
      meanRevealColour: "",
      meanScreenWidth: 480,
      meanNavPush: "",
      meanShowChildren: true,
      meanExpandableChildren: true,
      meanExpand: "+",
      meanContract: "-",
      meanRemoveAttrs: false,
      onePage: false,
      meanDisplay: "block",
      removeElements: ""
    };

    var settings = Object.assign({}, defaults, options);
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;

    return Array.from(document.querySelectorAll(this)).forEach(function(menuElement) {
      var isMobile = /iPhone|iPod|iPad|Android|Blackberry|Windows Phone/.test(navigator.userAgent);
      var isIE = /MSIE 8|MSIE 7/.test(navigator.userAgent);

      if (isIE) {
        document.querySelector("html").style.overflowY = "scroll";
      }

      var revealPosition = "";
      if (settings.meanRevealPosition === "center") {
        var centerPos = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px";
        revealPosition = "left:" + centerPos + ";right:auto;";
      } else if (settings.meanRevealPosition === "right") {
        revealPosition = "right:" + settings.meanRevealPositionDistance + ";left:auto;";
      } else if (settings.meanRevealPosition === "left") {
        revealPosition = "left:" + settings.meanRevealPositionDistance + ";right:auto;";
      }

      var active = false;
      var navVisible = false;

      function updateMenuButton() {
        var meanmenuReveal = document.querySelector('.meanmenu-reveal');
        meanmenuReveal.innerHTML = meanmenuReveal.classList.contains('meanclose') ? settings.meanMenuClose : settings.meanMenuOpen;
      }

      function resetMenu() {
        document.querySelectorAll(".mean-bar, .mean-push").forEach(el => el.remove());
        document.querySelector(settings.meanMenuContainer).classList.remove("mean-container");
        menuElement.style.display = settings.meanDisplay;
        active = false;
        navVisible = false;
        document.querySelectorAll(settings.removeElements).forEach(el => el.classList.remove("mean-remove"));
      }

      function initMenu() {
        if (settings.meanScreenWidth >= screenWidth) {
          document.querySelectorAll(settings.removeElements).forEach(el => el.classList.add("mean-remove"));
          navVisible = true;
          var meanBar = document.createElement('div');
          meanBar.className = "mean-bar";

          var meanReveal = document.createElement('a');
          meanReveal.href = "#nav";
          meanReveal.className = "meanmenu-reveal";
          meanReveal.style.cssText = "background:" + settings.meanRevealColour + ";color:" + settings.meanRevealColour + ";" + revealPosition;
          meanReveal.innerHTML = "Show Navigation";

          var meanNav = document.createElement('nav');
          meanNav.className = "mean-nav";
          meanNav.innerHTML = menuElement.innerHTML;

          meanBar.appendChild(meanReveal);
          meanBar.appendChild(meanNav);
          document.querySelector(settings.meanMenuContainer).prepend(meanBar);

          if (settings.meanRemoveAttrs) {
            meanNav.querySelectorAll("ul, ul *").forEach(function(el) {
              el.removeAttribute("class");
              el.removeAttribute("id");
            });
          }

          menuElement.before(document.createElement('div')).className = "mean-push";
          document.querySelector(".mean-push").style.marginTop = settings.meanNavPush;
          menuElement.style.display = "none";
          document.querySelector('.meanmenu-reveal').style.display = "block";
          updateMenuButton();

          if (settings.meanShowChildren) {
            if (settings.meanExpandableChildren) {
              meanNav.querySelectorAll("ul ul").forEach(function(ul) {
                if (ul.children.length) {
                  ul.insertAdjacentHTML('beforebegin', '<a class="mean-expand" href="#" style="font-size: ' + settings.meanMenuCloseSize + '">' + settings.meanExpand + '</a>');
                }
              });
              meanNav.querySelectorAll(".mean-expand").forEach(function(expand) {
                expand.addEventListener("click", function(e) {
                  e.preventDefault();
                  var subMenu = expand.previousElementSibling;
                  if (expand.classList.contains("mean-clicked")) {
                    expand.innerHTML = settings.meanExpand;
                    subMenu.style.display = "none";
                  } else {
                    expand.innerHTML = settings.meanContract;
                    subMenu.style.display = "block";
                  }
                  expand.classList.toggle("mean-clicked");
                });
              });
            } else {
              meanNav.querySelectorAll("ul ul").forEach(function(ul) {
                ul.style.display = "block";
              });
            }
          } else {
            meanNav.querySelectorAll("ul ul").forEach(function(ul) {
              ul.style.display = "none";
            });
          }

          document.querySelector(".mean-nav ul li:last-child").classList.add("mean-last");

          meanReveal.addEventListener("click", function(e) {
            e.preventDefault();
            if (!active) {
              meanReveal.style.textAlign = "center";
              meanReveal.style.textIndent = "0";
              meanReveal.style.fontSize = settings.meanMenuCloseSize;
              meanNav.querySelector("ul:first-child").style.display = "block";
              active = true;
            } else {
              meanNav.querySelector("ul:first-child").style.display = "none";
              active = false;
            }
            meanReveal.classList.toggle("meanclose");
            updateMenuButton();
            document.querySelectorAll(settings.removeElements).forEach(el => el.classList.add("mean-remove"));
          });

          if (settings.onePage) {
            meanNav.querySelectorAll("ul > li > a:first-child").forEach(function(anchor) {
              anchor.addEventListener("click", function() {
                meanNav.querySelector("ul:first-child").style.display = "none";
                active = false;
                meanReveal.classList.toggle("meanclose");
                updateMenuButton();
              });
            });
          }
        } else {
          resetMenu();
        }
      }

      if (!isMobile) {
        window.addEventListener("resize", function() {
          screenWidth = window.innerWidth || document.documentElement.clientWidth;
          if (screenWidth > settings.meanScreenWidth) {
            resetMenu();
          } else {
            initMenu();
          }
        });
      }

      initMenu();
    });
  }

  window.meanmenu = meanmenu;
})();
