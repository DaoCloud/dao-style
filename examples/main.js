import Vue from 'vue';
import App from './app.vue';
import components from './view/components';
import * as plugins from './plugins';
import * as vueRouter from './view/router';

Vue.use(components);
Vue.use(vueRouter);
Vue.use(plugins);

(function initApp() {
  return new Vue({
    el: '#app',
    router: vueRouter.router,
    i18n: plugins.i18n,
    render: h => h(App),
  });
}());
