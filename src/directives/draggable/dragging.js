class Dragging {
  constructor() {
    this.el = null;
    this.key = null;
    this.callbacks = [];
  }
  setData(el, key) {
    this.el = el;
    this.key = key;
  }
  setCallback(callback) {
    if (this.callbacks.includes(callback)) return;
    this.callbacks.push(callback);
  }
}

export default new Dragging();
