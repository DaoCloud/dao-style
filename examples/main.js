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
import dialog from './routers/dialog.vue';
import editableTable from './routers/editable-table.vue';
import input from './routers/input.vue';
import popover from './routers/popover.vue';
import progress from './routers/progress.vue';
import select from './routers/select.vue';
import steps from './routers/steps.vue';
import selectAll from './routers/select-all.vue';
import settingLayout from './routers/settingLayout.vue';
import tab from './routers/tab.vue';
import tooltip from './routers/tooltip.vue';

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
    path: '/dialog',
    component: dialog,
  }, {
    path: '/button',
    component: button,
  }, {
    path: '/card',
    component: card,
  }, {
    path: '/dropdown',
    component: dropdown,
  }, {
    path: '/editable-table',
    component: editableTable,
  }, {
    path: '/input',
    component: input,
  }, {
    path: '/popover',
    component: popover,
  }, {
    path: '/progress',
    component: progress,
  }, {
    path: '/select',
    component: select,
  }, {
    path: '/steps',
    component: steps,
  }, {
    path: '/select-all',
    component: selectAll,
  }, {
    path: '/setting-layout',
    component: settingLayout,
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
