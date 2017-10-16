class Dragging {
  constructor() {
    this.el = null;
    this.key = null;
  }
  setData(el, key) {
    this.el = el;
    this.key = key;
  }
}

export default new Dragging();
