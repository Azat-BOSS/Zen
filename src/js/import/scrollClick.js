export default class Scroll {
  constructor(button, element) {
    this._button = button;
    this._element = element;
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
}