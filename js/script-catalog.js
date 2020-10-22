const cartLinks = document.querySelectorAll(".useraction-menu__button_type_cart");

const cartModal = document.querySelector(".modal-cart");
const cartCloseButton = cartModal.querySelector(".modal-close");
const cartModalButton = cartModal.querySelector(".modal-cart__button");


for (let cartLink of cartLinks) {
  cartLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartModal.classList.add("modal-show-cart");
  })
};

cartModalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartModal.classList.remove("modal-show-cart");
});

cartCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartModal.classList.remove("modal-show-cart");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && cartModal.classList.contains("modal-show-cart")) {
    evt.preventDefault();
    cartModal.classList.remove("modal-show-cart");
  }
});
