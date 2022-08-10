const menuEmail = document.querySelector(".email");
const menuDesktop = document.querySelector(".menu-desktop");
const menuHamburger = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");

menuEmail.addEventListener("click", toggleMenuDesktop);
menuHamburger.addEventListener("click", toggleMenuMobile);


function toggleMenuDesktop() {
  menuDesktop.classList.toggle("inactive");
}
function toggleMenuMobile() {
  menuMobile.classList.toggle("inactive");
}