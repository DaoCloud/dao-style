import Vue from 'vue';
import { _cloneDeep } from '../../utils/assist';
import DaoMessage from './dao-message.vue';
import assert from '../../utils/assert';

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
  checkboxText: null,
  delay: 0,
  callback: {
    resolves: [],
    rejects: [],
  },
};

class Alert {
  constructor(title, text) {
    this.props = _cloneDeep(defaultProps);
    assert.expect(title && text)
      .error("'title' and 'text' are both required'");
    this.props.text = text;
    this.props.title = title;
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

  loadingText(loadingText) {
    this.props.loadingText = loadingText;
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

  checkbox(checkboxText) {
    this.props.checkboxText = checkboxText;
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
  }

  hide() {
    this.setVisible(false);
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
          this.hide();
        }, this.props.timeout);
      }
    }, this.props.delay);

    this.alert.$on('confirm', (res, afterConfirm) => {
      this.props.callback.resolves.forEach((cb, i) => {
        const timer = cb(res);
        // 只取最后一个函数的返回值作为确认后回调的参数
        if (i === this.props.callback.resolves.length - 1) {
          afterConfirm(timer);
        }
      });
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
