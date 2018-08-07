import Vue from 'vue';
import App from './app.vue';
import daoStyle from '../src/index';
import router from './router';
import { generateLang, defaultLang } from './lang';
import enUS from '../src/i18n/langs/en-US';

Vue.config.debug = true;
Vue.config.performance = true;

Vue.use(daoStyle, {
  i18n: {
    locale: generateLang(),
    messages: {
      'en-US': enUS,
    },
    fallbackLocale: defaultLang,
  },
});

(function initApp() {
  return new Vue({
    el: '#app',
    router,
    render: h => h(App),
  });
}());
