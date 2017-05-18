/**
 * Created by aresn on 16/6/20.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import daoStyle from '../src/index';

import button from './routers/button.vue';
import card from './routers/card.vue';
import dropdown from './routers/dropdown.vue';
import input from './routers/input.vue';
import modal from './routers/modal.vue';
import progress from './routers/progress.vue';
import tab from './routers/tab.vue';
import tooltip from './routers/tooltip.vue';

Vue.use(VueRouter);
Vue.use(daoStyle);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
  routes: [{
    path: '/button',
    component: button,
  }, {
    path: '/card',
    component: card,
  }, {
    path: '/dropdown',
    component: dropdown,
  }, {
    path: '/input',
    component: input,
  }, {
    path: '/modal',
    component: modal,
  }, {
    path: '/progress',
    component: progress,
  }, {
    path: '/tab',
    component: tab,
  }, {
    path: '/tooltip',
    component: tooltip,
  }],
});

(function initApp() {
  return new Vue({
    el: '#app',
    router,
    render: h => h(App),
  });
}());
