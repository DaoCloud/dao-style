/**
 * Created by aresn on 16/6/20.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import daoStyle from '../src/index';
import './styles/index.scss';

// 请按照组件名称的字典顺序添加以下模块
import autocomplete from './routers/autocomplete.vue';
import button from './routers/button.vue';
import card from './routers/card.vue';
import checkbox from './routers/checkbox.vue';
import clipboard from './routers/clipboard.vue';
import dialog from './routers/dialog.vue';
import dragAndDrop from './routers/drag-and-drop.vue';
import dropdown from './routers/dropdown.vue';
import editableTable from './routers/editable-table.vue';
import input from './routers/input.vue';
import infoCard from './routers/info-card.vue';
import inputWithLabel from './routers/input-with-label.vue';
import list from './routers/list.vue';
import panel from './routers/panel.vue';
import listGroup from './routers/list-group.vue';
import alert from './routers/alert.vue';
import numericBadge from './routers/numeric-badge.vue';
import popover from './routers/popover.vue';
import progress from './routers/progress.vue';
import radio from './routers/radio.vue';
import select from './routers/select.vue';
import selectAll from './routers/select-all.vue';
import settingLayout from './routers/setting-layout.vue';
import slider from './routers/slider.vue';
import spin from './routers/spin.vue';
import editableList from './routers/editable-list.vue';
import steps from './routers/steps.vue';
import svg from './routers/svg.vue';
import switchExample from './routers/switch.vue';
import tab from './routers/tab.vue';
import table from './routers/table.vue';
import tooltip from './routers/tooltip.vue';
import tooltipDirective from './routers/tooltip-directive.vue';

Vue.use(VueRouter);
Vue.use(daoStyle);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
  routes: [{
    path: '/autocomplete',
    component: autocomplete,
    name: 'autocomplete',
  }, {
    path: '/button',
    component: button,
    name: 'button',
  }, {
    path: '/card',
    component: card,
    name: 'card',
  }, {
    path: '/checkbox',
    component: checkbox,
    name: 'checkbox',
  }, {
    path: '/clipboard',
    component: clipboard,
    name: 'clipboard',
  }, {
    path: '/dialog',
    component: dialog,
    name: 'dialog',
  }, {
    path: '/drag-drop',
    component: dragAndDrop,
    name: 'drag-drop',
  }, {
    path: '/dropdown',
    component: dropdown,
    name: 'dropdown',
  }, {
    path: '/editable-table',
    component: editableTable,
    name: 'editable-table',
  }, {
    path: '/input',
    component: input,
    name: 'input',
  }, {
    path: '/info-card',
    component: infoCard,
    name: 'info-card',
  }, {
    path: '/input-with-label',
    component: inputWithLabel,
    name: 'input-with-label',
  }, {
    path: '/list',
    component: list,
    name: 'list',
  }, {
    path: '/list-group',
    component: listGroup,
    name: 'list-group',
  }, {
    path: '/alert',
    component: alert,
    name: 'alert',
  }, {
    path: '/numeric-badge',
    component: numericBadge,
    name: 'numeric-badge'
  }, {
    path: '/panel',
    component: panel,
    name: 'panel',
  }, {
    path: '/popover',
    component: popover,
    name: 'popover',
  }, {
    path: '/progress',
    component: progress,
    name: 'progress',
  }, {
    path: '/radio',
    component: radio,
    name: 'radio',
  }, {
    path: '/select',
    component: select,
    name: 'select',
  }, {
    path: '/select-all',
    component: selectAll,
    name: 'select-all',
  }, {
    path: '/setting-layout',
    component: settingLayout,
    name: 'setting-layout',
  }, {
    path: '/slider',
    component: slider,
    name: 'slider',
  }, {
    path: '/spin',
    component: spin,
    name: 'spin',
  }, {
    path: '/steps',
    component: steps,
    name: 'steps',
  }, {
    path: '/svg',
    component: svg,
    name: 'svg',
  }, {
    path: '/editable-list',
    component: editableList,
    name: 'editable-list',
  }, {
    path: '/switch',
    component: switchExample,
    name: 'switch',
  }, {
    path: '/tab',
    component: tab,
    name: 'tab',
  }, {
    path: '/table',
    component: table,
    name: 'table',
  }, {
    path: '/tooltip',
    component: tooltip,
    name: 'tooltip',
  }, {
    path: '/tooltip-directive',
    component: tooltipDirective,
    name: 'tooltip-directive',
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
