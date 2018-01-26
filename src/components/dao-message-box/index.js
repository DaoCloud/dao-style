import Vue from 'vue';
import { cloneDeep as _cloneDeep } from 'lodash';
import DaoMessage from './dao-message.vue';

const DaoMessageConstructor = Vue.extend(DaoMessage);

let alertQueue = [];

const defaultProps = {
  visible: false,
  title: '提示',
  text: '',
  confirmText: '确认',
  cancelText: '取消',
  theme: 'blue',
  timeout: null,
  delay: 0,
  callback: {
    resolves: [],
    rejects: [],
  },
};

class Alert {
  constructor(text, title) {
    this.props = _cloneDeep(defaultProps);
    this.props.text = text;
    if (title) {
      this.props.title = title;
    }
    this.delayTimer = null;
    this.timeoutTimer = null;
  }

  theme(theme) {
    this.props.theme = theme;
    return this;
  }

  confirmText(confirmText) {
    this.props.confirmText = confirmText;
    return this;
  }

  cancelText(cancelText) {
    this.props.cancelText = cancelText;
    return this;
  }

  timeout(timeout) {
    this.props.timeout = timeout;
    return this;
  }

  delay(delay) {
    this.props.delay = delay;
    return this;
  }

  callback(resolve, reject) {
    if (resolve) {
      this.props.callback.resolves.push(resolve);
    }
    if (reject) {
      this.props.callback.rejects.push(reject);
    }
    return this;
  }

  show(resolve, reject) {
    this.callback(resolve, reject);
    alertQueue.push(this);
    if (alertQueue.length === 1) {
      this.execute();
    }
    return this;
  }

  hide() {
    this.remove();
  }

  open() {
    this.setVisible(true);
  }

  remove() {
    clearTimeout(this.delayTimer);
    clearTimeout(this.timeoutTimer);
    this.setVisible(false);
    alertQueue = alertQueue.filter(alert => alert !== this);
  }

  setVisible(newVal) {
    if (!this.alert) return;
    this.alert.$emit('visible', newVal);
  }

  createInstance() {
    const instance = new DaoMessageConstructor({
      el: document.createElement('div'),
      propsData: this.props,
    });
    document.body.appendChild(instance.$el);
    return instance;
  }

  execute() {
    this.alert = this.createInstance(this.props);
    this.alert.$on('close', () => {
      // 下一跳再销毁，需要在 confirm 和 cancel 回调完成后再销毁
      this.alert.$nextTick(() => {
        this.alert.$destroy();
        // 推出当前 alert，执行队列中的下一个 alert
        alertQueue.shift();
        if (alertQueue.length) {
          alertQueue[0].execute();
        }
      });
    });
    this.delayTimer = setTimeout(() => {
      this.open();
      if (this.props.timeout) {
        this.timeoutTimer = setTimeout(() => {
          this.close();
        }, this.props.timeout);
      }
    }, this.props.delay);

    this.alert.$on('confirm', () => {
      this.props.callback.resolves.map(cb => cb());
    });
    this.alert.$on('cancel', () => {
      this.props.callback.rejects.map(cb => cb());
    });
    return null;
  }
}

const MessageBox = {
  alert(text, title) {
    return new Alert(text, title);
  },
};

export default MessageBox;
