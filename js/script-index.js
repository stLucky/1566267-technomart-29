const MODAL_SHOW = "modal-show";
const SLIDE_CURRENT = "slide-current";
const SLIDECONTROL_CURRENT = "slider-controls-bottom__button-current";
const SLIDESERVICES_CURRENT = "slide-services-current";
const SERVICESBUTTON_CURRENT = "services__button-current";

const feedbackLink = document.querySelector(".contacts__link");

const feedbackModal = document.querySelector(".modal-feedback");
const feedbackClose = feedbackModal.querySelector(".modal-close");
const feedbackForm = feedbackModal.querySelector(".feedback-form");
const feedbackName = feedbackModal.querySelector(".feedback-form__input_type_text");
const feedbackEmail = feedbackModal.querySelector(".feedback-form__input_type_email");
const feedbackMessage = feedbackModal.querySelector(".feedback-form__textarea");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
};

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add(MODAL_SHOW);

  if (storageName && storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
    feedbackMessage.focus();
  } else if (storageName && !storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.focus();
  } else {
    feedbackEmail.value = storageEmail;
    feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.remove(MODAL_SHOW);
  feedbackModal.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-error");
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add("modal-error");
  } else if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
      localStorage.setItem("email", feedbackEmail.value);
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && feedbackModal.classList.contains(MODAL_SHOW)) {
    evt.preventDefault();
    feedbackModal.classList.remove(MODAL_SHOW);
    feedbackModal.classList.remove("modal-error");
  }
});

const mapLink = document.querySelector(".contacts__image-link");
const mapModal = document.querySelector(".modal-map");
const mapClose = mapModal.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add(MODAL_SHOW);
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove(MODAL_SHOW);
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && mapModal.classList.contains(MODAL_SHOW)) {
      evt.preventDefault();
      mapModal.classList.remove(MODAL_SHOW);
  }
});

const slides = document.querySelectorAll(".slider__item");
const slideButtonBack = document.querySelector(".slider-controls-middle__back");
const slideButtonNext = document.querySelector(".slider-controls-middle__next");
const slideButtons = document.querySelectorAll(".slider-controls-bottom__button");

let switchSlides = function () {
  for (let slide of slides) {
    if (slide.classList.contains(SLIDE_CURRENT)) {
      slide.classList.remove(SLIDE_CURRENT);
    } else {
      slide.classList.add(SLIDE_CURRENT);
    }
  };

  for (let button of slideButtons) {
    if (button.classList.contains(SLIDECONTROL_CURRENT)) {
      button.classList.remove(SLIDECONTROL_CURRENT);
    } else {
      button.classList.add(SLIDECONTROL_CURRENT);
    }
  }
};

slideButtonBack.addEventListener("click", function (evt) {
  evt.preventDefault();
  switchSlides();
});

slideButtonNext.addEventListener("click", function (evt) {
  evt.preventDefault();
  switchSlides();
});

for (let button of slideButtons) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    switchSlides();
  })
};

const buttonServicesFirst = document.querySelector(".services__button-first");
const buttonServicesSecond = document.querySelector(".services__button-second");
const buttonServicesThird = document.querySelector(".services__button-third");

const slideServicesFirst = document.querySelector(".slide-services-first");
const slideServicesSecond = document.querySelector(".slide-services-second");
const slideServicesThird = document.querySelector(".slide-services-third");

buttonServicesFirst.addEventListener("click", function (evt) {
  evt.preventDefault();

  buttonServicesSecond.classList.remove(SERVICESBUTTON_CURRENT);
  buttonServicesThird.classList.remove(SERVICESBUTTON_CURRENT);
  buttonServicesFirst.classList.add(SERVICESBUTTON_CURRENT);

  slideServicesSecond.classList.remove(SLIDESERVICES_CURRENT);
  slideServicesThird.classList.remove(SLIDESERVICES_CURRENT);
  slideServicesFirst.classList.add(SLIDESERVICES_CURRENT);
});

buttonServicesSecond.addEventListener("click", function (evt) {
  evt.preventDefault();

  buttonServicesFirst.classList.remove(SERVICESBUTTON_CURRENT);
  buttonServicesThird.classList.remove(SERVICESBUTTON_CURRENT);
  buttonServicesSecond.classList.add(SERVICESBUTTON_CURRENT);

  slideServicesFirst.classList.remove(SLIDESERVICES_CURRENT);
  slideServicesThird.classList.remove(SLIDESERVICES_CURRENT);
  slideServicesSecond.classList.add(SLIDESERVICES_CURRENT);
});

buttonServicesThird.addEventListener("click", function (evt) {
  evt.preventDefault();

  buttonServicesFirst.classList.remove(SERVICESBUTTON_CURRENT);
  buttonServicesSecond.classList.remove(SERVICESBUTTON_CURRENT);
  buttonServicesThird.classList.add(SERVICESBUTTON_CURRENT);

  slideServicesSecond.classList.remove(SLIDESERVICES_CURRENT);
  slideServicesFirst.classList.remove(SLIDESERVICES_CURRENT);
  slideServicesThird.classList.add(SLIDESERVICES_CURRENT);
});
