document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav");
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const headerBottom = header.getBoundingClientRect().bottom;

    if (headerBottom <= 0) {
      navbar.style.backgroundColor = "white";
    } else {
      navbar.style.backgroundColor = "#ffc017";
    }
  });
});
