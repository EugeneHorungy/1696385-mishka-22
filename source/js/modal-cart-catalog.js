const buyLinks = document.querySelectorAll(".card__button-to-cart")
const modalCart = document.querySelector(".modal-cart")
const addProduct = document.querySelector(".select-form__button")

Array.from(buyLinks).forEach((link) => {
  link.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalCart.classList.add("modal-cart--opened");
  });
});

addProduct.addEventListener("click", () => {
  modalCart.classList.remove("modal-cart--opened");
});

window.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    if (modalCart.classList.contains("modal-cart--opened")) {
      evt.preventDefault();
      modalCart.classList.remove("modal-cart--opened");
    }
  }
});
