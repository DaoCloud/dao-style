let el = null;
let key = null;

function setData(elm, i) {
  el = elm;
  key = i;
  console.log(el, key);
}

export default {
  get el() {
    return el;
  },
  get key() {
    return key;
  },
  setData,
};
