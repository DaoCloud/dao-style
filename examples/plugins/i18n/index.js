import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enMessages from './en';
import zhMessages from './zh';
import { getLang } from '../../utils';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: getLang(),
  messages: {
    zh: zhMessages,
    en: enMessages,
  },
  fallbackLocale: 'zh',
});

export default i18n;
