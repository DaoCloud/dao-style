/**
 * Created by aresn on 16/6/20.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import daoStyle from '../src/index';

// 请按照组件名称的字典顺序添加以下模块
import autocomplete from './routers/autocomplete.vue';
import button from './routers/button.vue';
import card from './routers/card.vue';
import checkbox from './routers/checkbox.vue';
import clipboard from './routers/clipboard.vue';
import dialog from './routers/dialog.vue';
import dropdown from './routers/dropdown.vue';
import editableTable from './routers/editable-table.vue';
import input from './routers/input.vue';
import numericBadge from './routers/numeric-badge.vue';
import popover from './routers/popover.vue';
import progress from './routers/progress.vue';
import radio from './routers/radio.vue';
import select from './routers/select.vue';
import selectAll from './routers/select-all.vue';
import settingLayout from './routers/setting-layout.vue';
import steps from './routers/steps.vue';
import svg from './routers/svg.vue';
import tab from './routers/tab.vue';
import table from './routers/table.vue';
import tooltip from './routers/tooltip.vue';

Vue.use(VueRouter);
Vue.use(daoStyle);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
  routes: [{
    path: '/autocomplete',
    component: autocomplete,
  }, {
    path: '/button',
    component: button,
  }, {
    path: '/card',
    component: card,
  }, {
    path: '/checkbox',
    component: checkbox,
  }, {
    path: '/clipboard',
    component: clipboard,
  }, {
    path: '/dialog',
    component: dialog,
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
    path: '/numeric-badge',
    component: numericBadge,
  }, {
    path: '/popover',
    component: popover,
  }, {
    path: '/progress',
    component: progress,
  }, {
    path: '/radio',
    component: radio,
  }, {
    path: '/select',
    component: select,
  }, {
    path: '/select-all',
    component: selectAll,
  }, {
    path: '/setting-layout',
    component: settingLayout,
  }, {
    path: '/steps',
    component: steps,
  }, {
    path: '/svg',
    component: svg,
  }, {
    path: '/tab',
    component: tab,
  }, {
    path: '/table',
    component: table,
  }, {
    path: '/tooltip',
    component: tooltip,
  }, {
    path: '*',
    redirect: '/button',
  }],
});

(function initApp() {
  return new Vue({
    el: '#app',
    router,
    render: h => h(App),
  });
}());
