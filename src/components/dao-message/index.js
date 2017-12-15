import Vue from 'vue';
import DaoMessage from './dao-message.vue';

const DaoMessageConstructor = Vue.extend(DaoMessage);

let instance = null;

const initInstance = () => {
  instance = new DaoMessageConstructor({
    el: document.createElement('div'),
  });
};

const showMessage = (options) => {
  if (!instance) {
    initInstance();
    document.body.appendChild(instance.$el);
  }
  instance.type = options.type || 'confirm';
  instance.title = options.title || '';
  instance.text = options.text || '';
  instance.confirmText = options.confirmText || '确认';
  instance.confirm = options.confirm || (() => 0);
  instance.cancelText = options.cancelText || '取消';
  instance.theme = options.theme || 'blue';
  instance.close = options.close || (() => 0);
  instance.cancel = options.cancel || (() => 0);
  Vue.nextTick(() => {
    instance.visible = true;
  });
};

const Message = (options) => {
  showMessage(options);
};

Message.alert = (options = {}) => {
  options.type = 'alert';
  return Message(options);
};

Message.confirm = (options = {}) => {
  options.type = 'confirm';
  return Message(options);
};

Message.close = () => {
  instance.visible = false;
};

export default Message;
