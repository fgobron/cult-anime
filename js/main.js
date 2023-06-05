document.addEventListener("DOMContentLoaded", function () {
  const menuBurger = document.querySelector(".menu-burger");
  const navbar = document.querySelector("#navbar");

  menuBurger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});
