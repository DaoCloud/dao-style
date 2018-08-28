import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enUsMessages from './en_US';
import zhCnMessages from './zh_CN';

const zhCn = 'zh_CN';
const enUs = 'en_US';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: zhCn,
  messages: {
    [zhCn]: zhCnMessages,
    [enUs]: enUsMessages,
  },
  fallbackLocale: zhCn,
});

export default i18n;
