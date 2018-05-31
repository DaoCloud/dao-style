import Vue from 'vue';
import VueRouter from 'vue-router';
import autocomplete from './routers/autocomplete.vue';
import button from './routers/button.vue';
import card from './routers/card.vue';
import checkbox from './routers/checkbox.vue';
import clipboard from './routers/clipboard.vue';
import dialog from './routers/dialog.vue';
import dialogExtend from './routers/dialog-extend/dialog-extend.vue';
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
import spin from './routers/spin.vue';
import editableList from './routers/editable-list.vue';
import steps from './routers/steps.vue';
import svg from './routers/svg.vue';
import switchExample from './routers/switch.vue';
import tab from './routers/tab.vue';
import table from './routers/table.vue';
import tooltip from './routers/tooltip.vue';
import tooltipDirective from './routers/tooltip-directive.vue';
import tableView from './routers/table-view.vue';
import daoColorDemo from './routers/color-demo.vue';

Vue.use(VueRouter);

const routes = [{
  name: 'AutoComplete',
  path: '/autocomplete',
  component: autocomplete,
}, {
  name: 'Button',
  path: '/button',
  component: button,
}, {
  name: 'Card',
  path: '/card',
  component: card,
}, {
  name: 'Checkbox',
  path: '/checkbox',
  component: checkbox,
}, {
  name: 'Clipboard',
  path: '/clipboard',
  component: clipboard,
}, {
  name: 'Dialog',
  path: '/dialog',
  component: dialog,
}, {
  name: 'DialogExtend',
  path: '/dialog-extend',
  component: dialogExtend,
  hide: true,
}, {
  name: 'DragDrop',
  path: '/drag-drop',
  component: dragAndDrop,
}, {
  name: 'Dropdown',
  path: '/dropdown',
  component: dropdown,
}, {
  name: 'EditableTable',
  path: '/editable-table',
  component: editableTable,
}, {
  name: 'Input',
  path: '/input',
  component: input,
}, {
  name: 'InfoCard',
  path: '/info-card',
  component: infoCard,
}, {
  name: 'InputWithLabel',
  path: '/input-with-label',
  component: inputWithLabel,
}, {
  name: 'List',
  path: '/list',
  component: list,
}, {
  name: 'ListGroup',
  path: '/list-group',
  component: listGroup,
}, {
  name: 'Alert',
  path: '/alert',
  component: alert,
}, {
  name: 'NumericBadge',
  path: '/numeric-badge',
  component: numericBadge,
}, {
  name: 'Panel',
  path: '/panel',
  component: panel,
}, {
  name: 'Popover',
  path: '/popover',
  component: popover,
}, {
  name: 'Progress',
  path: '/progress',
  component: progress,
}, {
  name: 'Radio',
  path: '/radio',
  component: radio,
}, {
  name: 'Select',
  path: '/select',
  component: select,
}, {
  name: 'SelectAll',
  path: '/select-all',
  component: selectAll,
}, {
  name: 'SettingLayout',
  path: '/setting-layout',
  component: settingLayout,
}, {
  name: 'Spin',
  path: '/spin',
  component: spin,
}, {
  name: 'Steps',
  path: '/steps',
  component: steps,
}, {
  name: 'Svg',
  path: '/svg',
  component: svg,
}, {
  name: 'EditableList',
  path: '/editable-list',
  component: editableList,
}, {
  name: 'Switch',
  path: '/switch',
  component: switchExample,
}, {
  name: 'tab',
  path: '/tab',
  component: tab,
}, {
  name: 'Table',
  path: '/table',
  component: table,
}, {
  name: 'Tooltip',
  path: '/tooltip',
  component: tooltip,
}, {
  name: 'TooltipDirective',
  path: '/tooltip-directive',
  component: tooltipDirective,
}, {
  name: 'TableView',
  path: '/table-view',
  component: tableView,
}, {
  name: 'Color',
  path: '/color',
  component: daoColorDemo,
}, {
  path: '*',
  redirect: '/button',
}];

const router = new VueRouter({
  routes,
});


export default router;
export {
  routes,
};
