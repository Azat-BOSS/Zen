const brgButton = document.querySelector(".header__burger");
const brgModal = document.querySelector(".brg-modal");
const brgModalClose = brgModal.querySelector(".brg-modal__close-icon");
const sliderMedia = window.matchMedia("(max-width: 1024px)");
const zoneMedia = window.matchMedia("(max-width: 1370px)");
const contactForm = document.querySelector(".contact__form");
const formContactButton = contactForm.querySelector(".contact__button");
const formContactLink = contactForm.querySelector(".contact__link");
const modalPrivacy = document.querySelector(".modal-privacy");
const modalPrivacyClose = modalPrivacy.querySelector(".modal-privacy__close-icon");

const modalUrl = document.querySelector(".modal-url")
const modalUrlClose = modalUrl.querySelector(".modal-url__close-icon");
const contactButton = document.querySelector(".contact__button")
const contactInputs = document.querySelectorAll(".contact__input")


const config = {
  inputSelector: ".contact__input",
  submitButtonSelector: ".contact__button",
  inactiveButtonClass: "contact__button_inactive",
  inputErrorClass: "contuct__input_type_error",
  errorClass: "contact__block-input-error",
};

export {
  brgButton,
  brgModal,
  brgModalClose,
  sliderMedia,
  zoneMedia,
  config,
  contactForm,
  formContactButton,
  formContactLink,
  modalPrivacy,
  modalPrivacyClose,
  modalUrl,
  modalUrlClose,
  contactButton,
  contactInputs,
};
