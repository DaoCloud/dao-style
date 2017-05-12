/**
 * Created by aresn on 16/6/20.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import daoStyle from '../src/index';

import dropdown from './routers/dropdown.vue';
import modal from './routers/modal.vue';
import button from './routers/button.vue';
import input from './routers/input.vue';

Vue.use(VueRouter);
Vue.use(daoStyle);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
  routes: [{
    path: '/dropdown',
    component: dropdown,
  }, {
    path: '/modal',
    component: modal,
  }, {
    path: '/button',
    component: button,
  }, {
    path: '/input',
    component: input,
  }],
});

(function initApp() {
  return new Vue({
    el: '#app',
    router,
    render: h => h(App),
  });
}());
