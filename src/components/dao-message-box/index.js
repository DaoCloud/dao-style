import Vue from 'vue';
import { cloneDeep as _cloneDeep } from 'lodash';
import DaoMessage from './dao-message.vue';

const DaoMessageConstructor = Vue.extend(DaoMessage);

let currentProps = null;
let timeoutTimer = null;
let delayTimer = null;

const defaultProps = {
  visible: false,
  title: '提示',
  text: '',
  confirmText: '确认',
  cancelText: '取消',
  theme: 'blue',
};

function createInstance(props) {
  const instance = new DaoMessageConstructor({
    el: document.createElement('div'),
    propsData: props,
  });
  document.body.appendChild(instance.$el);
  return instance;
}

function showMessage(props, fallback, delayOpen, timeoutClose) {
  const alert = createInstance(props);
  alert.$on('close', () => {
    // 下一跳再销毁，因为 confirm 和 cancel 需要回调
    alert.$nextTick(() => {
      alert.$off();
      alert.$destroy();
    });
  });
  delayOpen(() => {
    alert.$emit('visible', true);
    if (timeoutClose) {
      timeoutClose(() => {
        alert.$emit('visible', false);
      });
    }
  });
  if (window.Promise) {
    return new Promise((confirm, cancel) => {
      alert.$on('confirm', () => {
        confirm();
      });
      alert.$on('cancel', () => {
        cancel();
      });
    });
  }
  alert.$on('confirm', () => {
    fallback('confirm');
  });
  alert.$on('cancel', () => {
    fallback('cancel');
  });
  return null;
}

const MessageBox = {
  alert(_text, _title) {
    currentProps = _cloneDeep(defaultProps);
    currentProps.text = _text;
    if (_title) {
      currentProps.title = _title;
    }
    return MessageBox;
  },
  theme(_theme) {
    currentProps.theme = _theme;
    return MessageBox;
  },
  confirmText(_confirmText) {
    currentProps.confirmText = _confirmText;
    return MessageBox;
  },
  cancelText(_cancelText) {
    currentProps.cancelText = _cancelText;
    return MessageBox;
  },
  timeout(_timeout) {
    currentProps.timeout = _timeout;
    return MessageBox;
  },
  delay(_delay) {
    currentProps.delay = _delay;
    return MessageBox;
  },
  show(fallback) {
    // 清空计时，避免 alert 之间污染
    clearTimeout(delayTimer);
    clearTimeout(timeoutTimer);

    const delayOpen = (cb) => {
      delayTimer = setTimeout(cb, currentProps.delay || 0);
    };
    let timeoutClose = null;
    if (currentProps.timeout) {
      timeoutClose = (cb) => {
        timeoutTimer = setTimeout(cb, currentProps.timeout);
      };
    }
    return showMessage(currentProps, fallback, delayOpen, timeoutClose);
  },
};

export default MessageBox;
