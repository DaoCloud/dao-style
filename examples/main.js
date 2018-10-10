import Vue from 'vue';
import App from './app';
import components from './view/components';
import * as plugins from './plugins';
import * as vueRouter from './view/router';

Vue.config.productionTip = false;

Vue.use(plugins);
Vue.use(components);
Vue.use(vueRouter);

(function initApp() {
  return new Vue({
    el: '#app',
    router: vueRouter.router,
    i18n: plugins.i18n,
    render: h => h(App),
  });
}());
