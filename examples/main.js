/**
 * Created by aresn on 16/6/20.
 */

import 'iview/dist/styles/iview.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import App from './app.vue';
import daoStyle from '../src/index';

import dropdown from './routers/dropdown';
import modal from './routers/modal';
import button from './routers/button';

Vue.use(VueRouter);
Vue.use(iView);
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
  }],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
