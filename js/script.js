"use strict";

window.addEventListener("load", () => {
  const preloader = document.querySelector("[data-preloader]");
  setTimeout(() => {
    preloader.classList.add("remove");
  }, 1000);
});

// Add event on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
  for (const item of elements) {
    item.addEventListener(eventType, callback);
  }
};

// Navbar toggler for mobile
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navToggler, "click", toggleNav);

// Header
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[this.scrollY >= 120 ? "add" : "remove"]("active");
});
