function calcCartWrapper() {
  const cartItems = document.querySelectorAll(".cart-item");
  const delivery = document.querySelector(".delivery-cost");
  let totalPrice = 0;

  cartItems.forEach(function (item) {
    const amountEl = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".price__currency");
    const currentPrice =
      parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  });
  document.querySelector(".total-price").innerText = totalPrice;

  if (totalPrice >= 600) {
    delivery.innerText = "бесплатно";
    delivery.classList.add("free");
    delivery.closest(".cart-total").classList.remove("none");
  } else if (totalPrice == 0) {
    document.querySelector(".cart-total").classList.add("none");
  } else {
    delivery.innerText = "650 ₽";
    delivery.classList.remove("free");
  }
}
