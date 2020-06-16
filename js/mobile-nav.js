const menuToggle = document.querySelector(".mobile__menu-icon");
const mobileNav = document.querySelector(".header__nav");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("mobile__menu-icon-active");
  mobileNav.classList.toggle("mobile__nav-active");
};
