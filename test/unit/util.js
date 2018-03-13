import Vue from 'vue';
import DaoStyle from '../../src/index';

Vue.use(DaoStyle);

let id = 0;

function createElm() {
  const elm = document.createElement('div');
  id += 1;
  elm.id = `app${id}`;
  document.body.appendChild(elm);

  return elm;
}

/**
 * 回收 vm
 * @param  {Object} vm
 */
export function destroyVM(vm) {
  if (vm.$el && vm.$el.parentNode) {
    vm.$el.parentNode.removeChild(vm.$el);
  }
}

/**
 * 创建一个 Vue 的实例对象
 * @param  {Object|String}  Compo   组件配置，可直接传 template
 * @param  {Boolean=false} mounted 是否添加到 DOM 上
 * @return {Object} vm
 */
export function createVue(Compo, mounted = false) {
  let Component = Compo;
  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Component = { template: Compo };
  }
  return new Vue(Component).$mount(mounted === false ? null : createElm());
}

/**
 * 模拟事件
 * @param {Element} elm 触发事件的对象
 * @param {String} name 事件名
 * @param {Array} opts initEvent方法的后两个参数（选填）
 */
export function fireEvent(elm, name, ...opts) {
  let eventName;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }

  const evt = document.createEvent(eventName);
  evt.initEvent(name, ...opts);

  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt);

  return elm;
}
