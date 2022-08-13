const menuEmail = document.querySelector(".email");
const menuDesktop = document.querySelector(".menu-desktop");
const menuHamburger = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
const menuCart = document.querySelector(".icon-shopping-cart");
const menuOrder = document.querySelector(".my-order");

menuEmail.addEventListener("click", toggleMenuDesktop);
menuHamburger.addEventListener("click", toggleMenuMobile);
menuCart.addEventListener("click", toggleMenuCart);

function toggleMenuDesktop() {
  menuDesktop.classList.toggle("inactive");
  menuOrder.classList.add("inactive");
}
function toggleMenuMobile() {
  menuMobile.classList.toggle("inactive");
  menuOrder.classList.add("inactive");
}

function toggleMenuCart() {
  menuOrder.classList.toggle("inactive");
  menuMobile.classList.add("inactive");
  menuDesktop.classList.add("inactive");
}
