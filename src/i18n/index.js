import Vue from 'vue';
import zhCN from './langs/zh-CN';
import { _merge } from '../utils/assist';
import assert from '../utils/assert';

const defaultLocale = 'zh-CN';

let messages = {
  [defaultLocale]: zhCN,
};

let fallbackLocale = defaultLocale;
let locale = defaultLocale;

function daot(key) {
  const localeMessages = messages[locale] || {};
  const fallbackLocaleMessages = messages[fallbackLocale] || {};
  const localeVal = localeMessages[key];
  const fallbackVal = fallbackLocaleMessages[key];
  if (!localeVal) {
    if (fallbackVal) {
      assert.expect(false)
        .warn(`Fall back to translate the key '${key}' with '${fallbackLocale}' locale.`);
    } else {
      assert.expect(false)
        .warn(`Value of key '${key}' is not a string!`);
    }
  }
  return localeVal || fallbackVal || key;
}

function i18n(opts = {}) {
  messages = _merge(messages, opts.messages);
  fallbackLocale = opts.fallbackLocale || defaultLocale;
  locale = opts.locale || defaultLocale;
  Vue.prototype.$daot = daot;
}

export {
  daot,
  i18n,
};
