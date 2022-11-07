export default class Slider {
  constructor(elem) {
    this._elem = elem;
  }

  addSlider = (x) => {
    if (x.matches) {
      const emblaNode = document.querySelector(this._elem);
      const option = { loop: false };
      const embla = EmblaCarousel(emblaNode, option);
    }
  };
}