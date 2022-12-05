document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#menu");
  const burgerClose = document.querySelector("#close");
  const hero = document.querySelector("#hero");

  burger.addEventListener("click", () => {
    menu.classList.remove("-translate-x-96");
    burger.classList.add("hidden");
    hero.classList.add("blur-xl");
  });
  burgerClose.addEventListener("click", () => {
    menu.classList.add("-translate-x-96");
    hero.classList.remove("blur-xl");
    if (burger.classList.contains("hidden")) {
      burger.classList.remove("hidden");
    }
  });
});
