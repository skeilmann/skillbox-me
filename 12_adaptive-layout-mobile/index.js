var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".header__menu");

// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  menu.classList.toggle("show--menu");
});
