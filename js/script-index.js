// modal-feedback

const feedbackLink = document.querySelector(".contacts__link");
const feedbackModal = document.querySelector(".modal-feedback");
const feedbackClose = feedbackModal.querySelector(".modal-close");
const feedbackForm = feedbackModal.querySelector(".feedback-form");
const feedbackName = feedbackModal.querySelector("[name=name]");
const feedbackEmail = feedbackModal.querySelector("[name=email]");
const feedbackMessage = feedbackModal.querySelector("[name=text]");


let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


feedbackLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackModal.classList.add("modal-show");
  if (storageName || storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
  }
  if (storageName && storageEmail) {
      feedbackMessage.focus();
    } else { 
      if (storageName && !storageEmail) {
          feedbackEmail.focus();
      } else {
        feedbackName.focus();
      } 
  }
});

feedbackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackModal.classList.remove("modal-show");
  feedbackModal.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function(evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-error");
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
      localStorage.setItem("email", feedbackEmail.value);
    }  
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackModal.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackModal.classList.remove("modal-show");
      feedbackModal.classList.remove("modal-error");
    }
  }
});

// modal-map

const mapLink = document.querySelector(".contacts__image-link");
const mapModal = document.querySelector(".modal-map");
const mapClose = mapModal.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapModal.classList.contains("modal-show")) {
      evt.preventDefault();
      mapModal.classList.remove("modal-show");
    }
  }
});

// slider

const slides = document.querySelectorAll(".slider__item");
const slideButtonBack = document.querySelector(".slider-controls-middle__back");
const slideButtonNext = document.querySelector(".slider-controls-middle__next");
const slideButtons = document.querySelectorAll(".slider-controls-bottom__button");

slideButtonBack.onclick = function () {
  for (let slide of slides) {
    if (slide.classList.contains("slide-current")) {
        slide.classList.remove("slide-current");
    } else {
      slide.classList.add("slide-current");
      }
  };
  for (let button of slideButtons) {
    if(button.classList.contains("slider-controls-bottom__button-current")) {
      button.classList.remove("slider-controls-bottom__button-current");
    } else {
      button.classList.add("slider-controls-bottom__button-current");
    }
  }
};

slideButtonNext.onclick = function () {
  for (let slide of slides) {
    if (slide.classList.contains("slide-current")) {
        slide.classList.remove("slide-current");
    } else {
      slide.classList.add("slide-current");
      }
  };
  for (let button of slideButtons) {
    if(button.classList.contains("slider-controls-bottom__button-current")) {
      button.classList.remove("slider-controls-bottom__button-current");
    } else {
      button.classList.add("slider-controls-bottom__button-current");
    }
  }
};

