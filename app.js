document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (event) {
      event.stopPropagation();
      this.querySelector(".dropdown-content").classList.toggle("show");
    });
  });

  window.addEventListener("click", function (event) {
    dropdowns.forEach((dropdown) => {
      dropdown.querySelector(".dropdown-content").classList.remove("show");
    });
  });
});

function toggleAccordion(accordion) {
  accordion.classList.toggle("active");
  var panel = accordion.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}
