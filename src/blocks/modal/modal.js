export default class Modal {
  constructor(modal, effect, overlay) {
    this._body = document.body
    this._modal = modal;
    this._effect = effect;
    this._overlay = overlay
    this._closeByEsc = this._closeByEsc.bind(this)
  }

  closeByOverlay = () => {
    this._overlay.addEventListener('mousedown', this.removeStyle.bind(this)); 
  }

  addStyle = () => {
    this._body.classList.add("body_active")
    this._modal.classList.add(this._effect);
    document.addEventListener("keydown", this._closeByEsc)
  };

  removeStyle = () => {
    this._body.classList.remove("body_active")
    this._modal.classList.remove(this._effect);
    document.removeEventListener("keydown", this._closeByEsc)
  };

  _closeByEsc = (evt) => {
    if(evt.key === "Escape") {
      this.removeStyle()
    }
  }
}

