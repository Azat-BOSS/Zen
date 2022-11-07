import {
  brgButton,
  brgModal,
  brgModalClose,
  sliderMedia,
  zoneMedia,
  config,
  contactForm,
  formContactButton
} from "./variables.js";
import Modal from "../../blocks/modal/modal.js";
import onEntry from "./animation.js";
import { options, observer, elements } from "./animation.js";
import Slider from "./commonSlider.js";
import FormValidator from "../../blocks/contact/contact.js";
import { mask } from "./mask.js";
import Scroll from "./scrollClick.js";

/* Slider */
const project = new Slider(".project-slider");
const zone = new Slider(".zone-slider");

project.addSlider(sliderMedia);
zone.addSlider(zoneMedia);

sliderMedia.addEventListener("change", project.addSlider);
zoneMedia.addEventListener("change", zone.addSlider);

/* Modal Header*/
const modal = new Modal(brgModal, "brg-modal_active");

brgButton.addEventListener("click", modal.addStyle);
brgModalClose.addEventListener("click", modal.removeStyle);

/* Validation on server */
const formContactValidation = new FormValidator(config, contactForm)
formContactValidation.resetValidation()

formContactButton.addEventListener("submit", formContactValidation.enableValidation())

/* Scroll */
const headerScroll = new Scroll(".header__button", ".contact__title")
const stagesScroll = new Scroll(".stages__button", ".contact__title")






