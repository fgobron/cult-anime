document.addEventListener("DOMContentLoaded", function () {
  const menuBurger = document.querySelector(".menu-burger");
  const navbar = document.querySelector("#navbar");
  const links = navbar.querySelectorAll("a");

  menuBurger.addEventListener("click", (e) => {
    e.stopPropagation();
    navbar.classList.toggle("active");
  });

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.stopPropagation();
      navbar.classList.remove("active");
    });
  });

  document.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});
