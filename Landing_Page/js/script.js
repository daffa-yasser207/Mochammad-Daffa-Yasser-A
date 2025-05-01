//Toggle class active
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarNav = document.querySelector(".navbar .navbar-nav");
// ketika hamburger menu di klik
hamburgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});
// klik di luar hamburger menu untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
