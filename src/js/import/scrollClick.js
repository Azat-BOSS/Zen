export default class Scroll {
  constructor(button, element, buttons) {
    this._button = button;
    this._element = element;
    this._buttons = buttons
    this._scrollToBlockBtns()
    this._scrollToBlock()
  }

  _scrollToBlock() {
    const btn = document.querySelector(this._button)
    const elm = document.querySelector(this._element)
    
    btn.addEventListener("click", () => {
      elm.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      })
    })
  }

  _scrollToBlockBtns() {
    const btns = document.querySelectorAll(this._buttons)
    const elm = document.querySelector(this._element)

    btns.forEach(item => {
      item.addEventListener("click", () => {
        elm.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        })
      })
    })
  }
}