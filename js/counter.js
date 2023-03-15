// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector("[data-counter]");

// btnMinus.addEventListener("click", () => {
//   if (parseInt(counter.innerText) > 1) counter.innerText = --counter.innerText;
// });

// btnPlus.addEventListener("click", () => {
//   counter.innerText = ++counter.innerText;
// });

window.addEventListener("click", (event) => {
  let counter;
  if (
    event.target.dataset.action === "minus" ||
    event.target.dataset.action === "plus"
  ) {
    const counterWrapper = event.target.closest(".counter-wrapper");
    counter = counterWrapper.querySelector("[data-counter]");
  }

  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      event.target.closest(".cart-item").remove();
      toggleCartStatus();
    }
  }
});
