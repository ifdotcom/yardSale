const menuEmail = document.querySelector(".email");
const menuDesktop = document.querySelector(".menu-desktop");

menuEmail.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuDesktop.classList.toggle("inactive");
}
