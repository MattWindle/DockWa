const accordions = document.querySelectorAll(".accordion-wrapper .accordion");
console.log(accordions);
accordions.forEach((accordion) => {
  const title = accordion.querySelector("p.accordion__title");
  const text = accordion.querySelector("p.accordion__text");
  title.addEventListener("click", () => {
    text.classList.toggle("show");
    accordion.classList.toggle("expanded");
  });
})