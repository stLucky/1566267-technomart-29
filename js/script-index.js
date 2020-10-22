const MODAL_SHOW_CLASS = "modal-show";

const SLIDE_CURRENT_CLASS = "slide-current";
const SLIDE_CONTROL_CURRENT_CLASS = "slider-controls-bottom__button-current";

const SLIDE_SERVICES_CURRENT_CLASS = "slide-services-current";
const SERVICES_BUTTON_CURRENT_CLASS = "services__button-current";

const feedbackLink = document.querySelector(".contacts__link");

const feedbackModal = document.querySelector(".modal-feedback");
const feedbackCloseButton = feedbackModal.querySelector(".modal-close");

const feedbackForm = feedbackModal.querySelector(".feedback-form");
const feedbackNameField = feedbackModal.querySelector(".feedback-form__input_type_text");
const feedbackEmailField = feedbackModal.querySelector(".feedback-form__input_type_email");
const feedbackMessageField = feedbackModal.querySelector(".feedback-form__textarea");

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

  feedbackModal.classList.add(MODAL_SHOW_CLASS);

  if (storageName && storageEmail) {
    feedbackNameField.value = storageName;
    feedbackEmailField.value = storageEmail;
    feedbackMessageField.focus();
  } else if (storageName && !storageEmail) {
    feedbackNameField.value = storageName;
    feedbackEmailField.focus();
  } else {
    feedbackEmailField.value = storageEmail;
    feedbackNameField.focus();
  }
});

feedbackCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  feedbackModal.classList.remove(MODAL_SHOW_CLASS);
  feedbackModal.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackNameField.value || !feedbackEmailField.value || !feedbackMessageField.value) {
    evt.preventDefault();

    feedbackModal.classList.remove("modal-error");

    feedbackModal.offsetWidth = feedbackModal.offsetWidth;

    feedbackModal.classList.add("modal-error");
  } else if (isStorageSupport) {
      localStorage.setItem("name", feedbackNameField.value);
      localStorage.setItem("email", feedbackEmailField.value);
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && feedbackModal.classList.contains(MODAL_SHOW_CLASS)) {
    evt.preventDefault();

    feedbackModal.classList.remove(MODAL_SHOW_CLASS);
    feedbackModal.classList.remove("modal-error");
  }
});

const mapLink = document.querySelector(".contacts__image-link");
const mapModal = document.querySelector(".modal-map");
const mapCloseButton = mapModal.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add(MODAL_SHOW_CLASS);
});

mapCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove(MODAL_SHOW_CLASS);
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && mapModal.classList.contains(MODAL_SHOW_CLASS)) {
      evt.preventDefault();
      mapModal.classList.remove(MODAL_SHOW_CLASS);
  }
});

const slides = document.querySelectorAll(".slider__item");
const slideButtonBack = document.querySelector(".slider-controls-middle__back");
const slideButtonNext = document.querySelector(".slider-controls-middle__next");
const slideButtons = document.querySelectorAll(".slider-controls-bottom__button");

let switchSlides = function () {
  for (let slide of slides) {
    if (slide.classList.contains(SLIDE_CURRENT_CLASS)) {
      slide.classList.remove(SLIDE_CURRENT_CLASS);
    } else {
      slide.classList.add(SLIDE_CURRENT_CLASS);
    }
  }

  for (let button of slideButtons) {
    if (button.classList.contains(SLIDE_CONTROL_CURRENT_CLASS)) {
      button.classList.remove(SLIDE_CONTROL_CURRENT_CLASS);
    } else {
      button.classList.add(SLIDE_CONTROL_CURRENT_CLASS);
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
  });
}

const buttonServicesFirst = document.querySelector(".services__button-first");
const buttonServicesSecond = document.querySelector(".services__button-second");
const buttonServicesThird = document.querySelector(".services__button-third");

const slideServicesFirst = document.querySelector(".slide-services-first");
const slideServicesSecond = document.querySelector(".slide-services-second");
const slideServicesThird = document.querySelector(".slide-services-third");

buttonServicesFirst.addEventListener("click", function (evt) {
  evt.preventDefault();

  buttonServicesSecond.classList.remove(SERVICES_BUTTON_CURRENT_CLASS);
  buttonServicesThird.classList.remove(SERVICES_BUTTON_CURRENT_CLASS);
  buttonServicesFirst.classList.add(SERVICES_BUTTON_CURRENT_CLASS);

  slideServicesSecond.classList.remove(SLIDE_SERVICES_CURRENT_CLASS);
  slideServicesThird.classList.remove(SLIDE_SERVICES_CURRENT_CLASS);
  slideServicesFirst.classList.add(SLIDE_SERVICES_CURRENT_CLASS);
});

buttonServicesSecond.addEventListener("click", function (evt) {
  evt.preventDefault();

  buttonServicesFirst.classList.remove(SERVICES_BUTTON_CURRENT_CLASS);
  buttonServicesThird.classList.remove(SERVICES_BUTTON_CURRENT_CLASS);
  buttonServicesSecond.classList.add(SERVICES_BUTTON_CURRENT_CLASS);

  slideServicesFirst.classList.remove(SLIDE_SERVICES_CURRENT_CLASS);
  slideServicesThird.classList.remove(SLIDE_SERVICES_CURRENT_CLASS);
  slideServicesSecond.classList.add(SLIDE_SERVICES_CURRENT_CLASS);
});

buttonServicesThird.addEventListener("click", function (evt) {
  evt.preventDefault();

  buttonServicesFirst.classList.remove(SERVICES_BUTTON_CURRENT_CLASS);
  buttonServicesSecond.classList.remove(SERVICES_BUTTON_CURRENT_CLASS);
  buttonServicesThird.classList.add(SERVICES_BUTTON_CURRENT_CLASS);

  slideServicesSecond.classList.remove(SLIDE_SERVICES_CURRENT_CLASS);
  slideServicesFirst.classList.remove(SLIDE_SERVICES_CURRENT_CLASS);
  slideServicesThird.classList.add(SLIDE_SERVICES_CURRENT_CLASS);
});
