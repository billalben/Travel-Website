"use strict";

window.addEventListener("load", () => {
  const preloader = document.querySelector("[data-preloader]");
  setTimeout(() => {
    preloader.classList.add("remove");
  }, 1000);
});
