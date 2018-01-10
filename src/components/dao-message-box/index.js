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
  const {
    title = '',
    text = '',
    confirmText = '确认',
    confirm = () => 0,
    cancelText = '取消',
    cancel = () => 0,
    theme = 'blue',
  } = options;
  instance.title = title;
  instance.text = text;
  instance.confirmText = confirmText;
  instance.confirm = confirm;
  instance.cancelText = cancelText;
  instance.cancel = cancel;
  instance.theme = theme;
  Vue.nextTick(() => {
    instance.visible = true;
  });
};

const MessageBox = {
  alert: (options = {}) => {
    options.type = 'alert';
    showMessage(options);
    return MessageBox;
  },
  close: () => {
    instance.visible = false;
  },
};

export default MessageBox;
