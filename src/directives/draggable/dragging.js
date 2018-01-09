import { includes as _includes } from 'lodash';

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
    if (_includes(this.callbacks, callback)) return;
    this.callbacks.push(callback);
  }
}

export default new Dragging();
