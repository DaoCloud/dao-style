import Vue from 'vue';
import { _cloneDeep } from '../../utils/assist';
import DaoMessage from './dao-message.vue';

const DaoMessageConstructor = Vue.extend(DaoMessage);

let instance = null;
let currentOptions = null;
let timeoutTimer = null;
let delayTimer = null;

const defaultOptions = {
  title: '提示',
  text: '',
  confirmText: '确认',
  cancelText: '取消',
  theme: 'blue',
};

const initInstance = () => {
  instance = new DaoMessageConstructor({
    el: document.createElement('div'),
  });
};

function showMessage(options, fallback, delayOpen, timeoutClose) {
  if (!instance) {
    initInstance();
    document.body.appendChild(instance.$el);
  }
  instance.title = options.title;
  instance.text = options.text;
  instance.confirmText = options.confirmText;
  instance.cancelText = options.cancelText;
  instance.theme = options.theme;
  delayOpen(() => {
    instance.visible = true;
    if (timeoutClose) {
      timeoutClose(() => {
        instance.visible = false;
      });
    }
  });
  if (window.Promise) {
    return new Promise((confirm, cancel) => {
      instance.confirm = confirm;
      instance.cancel = cancel;
    });
  }
  instance.confirm = fallback;
  instance.cancel = fallback;
  return null;
}

const MessageBox = {
  alert(_text, _title) {
    currentOptions = _cloneDeep(defaultOptions);
    currentOptions.text = _text;
    if (_title) {
      currentOptions.title = _title;
    }
    return MessageBox;
  },
  theme(_theme) {
    currentOptions.theme = _theme;
    return MessageBox;
  },
  confirmText(_confirmText) {
    currentOptions.confirmText = _confirmText;
    return MessageBox;
  },
  cancelText(_cancelText) {
    currentOptions.cancelText = _cancelText;
    return MessageBox;
  },
  timeout(_timeout) {
    currentOptions.timeout = _timeout;
    return MessageBox;
  },
  delay(_delay) {
    currentOptions.delay = _delay;
    return MessageBox;
  },
  show(fallback) {
    // 清空计时，避免 alert 之间污染
    clearTimeout(delayTimer);
    clearTimeout(timeoutTimer);

    const delayOpen = (cb) => {
      delayTimer = setTimeout(cb, currentOptions.delay || 0);
    };
    let timeoutClose = null;
    if (currentOptions.timeout) {
      timeoutClose = (cb) => {
        timeoutTimer = setTimeout(cb, currentOptions.timeout);
      };
    }
    return showMessage(currentOptions, fallback, delayOpen, timeoutClose);
  },
};

export default MessageBox;
