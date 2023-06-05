var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".header__nav");
const page = document.querySelector(".page");
const links = document.querySelectorAll(".header__nav-link");

// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  menu.classList.toggle("show--menu");
  page.classList.toggle("not--scroll");
});

links.forEach(function (el) {
  el.addEventListener("click", function () {
    hamburger.classList.remove("is-active");
    page.classList.remove("not--scroll");
    menu.classList.remove("show--menu");
  });
});
