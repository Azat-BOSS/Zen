export default class Modal {
  constructor(modal, effect) {
    this._modal = modal;
    this._effect = effect;
  }

  addStyle = () => {
    this._modal.classList.add(this._effect);
  };

  removeStyle = () => {
    this._modal.classList.remove(this._effect);
  };
}

