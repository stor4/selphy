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

document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const menuNav = document.querySelector('.mobile-menu-nav');

  menuBtn.addEventListener('click', function () {
    menuNav.classList.toggle('mobile-menu-show');
  });

  const subMenuBtns = document.querySelectorAll('.sub-menu-btn');

  subMenuBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      const subMenu = btn.nextElementSibling;

      if (subMenu && subMenu.classList.contains('sub-menu')) {
        subMenu.classList.toggle('sub-menu-show');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const pagesDropdown = document.querySelector('.sub-menu-pages')
  const pagesDropdownBtn = document.querySelector('.sub-menu-pages-btn')

  pagesDropdownBtn.addEventListener('click', function () {
    pagesDropdown.classList = 'sub-menu sub-menu-pages-open'
  })

  document.addEventListener('click', function(event) {
    if (!pagesDropdown.contains(event.target) && event.target !== pagesDropdownBtn) {
      pagesDropdown.classList = 'sub-menu sub-menu-pages'
    }
  })
})

