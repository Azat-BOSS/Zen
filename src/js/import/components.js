import {
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

/* Modal-Privacy*/
const modalPopupPrivacy = new Modal(modalPrivacy, "modal-privacy_active");

formContactLink.addEventListener("click", modalPopupPrivacy.addStyle)
modalPrivacyClose.addEventListener("click", modalPopupPrivacy.removeStyle)

/* Modal Url */
const modalPopupUrl = new Modal(modalUrl, "modal-url_active")

contactButton.addEventListener("click", modalPopupUrl.addStyle)
contactButton.addEventListener("click", () => {
  contactInputs.forEach(item => {
    item.value = ""
  })
})



modalUrlClose.addEventListener("click", modalPopupUrl.removeStyle)

/* Validation on server */
const formContactValidation = new FormValidator(config, contactForm)
formContactValidation.resetValidation()

formContactButton.addEventListener("submit", formContactValidation.enableValidation())

/* Scroll */
const projectSliderLink = document.querySelectorAll(".project-slider__link")

const headerScroll = new Scroll(".header__button", ".contact")
const stagesScroll = new Scroll(".stages__button", ".contact")
const projectScroll = new Scroll(".project-slider__link", ".contact", ".project-slider__link")
const headerContact = new Scroll(".header__link_contact", "footer")
const headerOrder = new Scroll(".header__link_order", ".contact")






