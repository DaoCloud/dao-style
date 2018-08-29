import VueRouter from 'vue-router';

import index from './page/index/index.vue';
import components from './page/components/index.vue';
import status from './page/status/status.vue';
import installation from './page/installation/installation.vue';
import autocomplete from './page/components/autocomplete.vue';
import button from './page/components/button.vue';
import card from './page/components/card.vue';
import checkbox from './page/components/checkbox.vue';
import clipboard from './page/components/clipboard.vue';
import dialog from './page/components/dialog.vue';
import dialogExtend from './page/components/dialog-extend/dialog-extend.vue';
import dragAndDrop from './page/components/drag-and-drop.vue';
import dropdown from './page/components/dropdown.vue';
import editableTable from './page/components/editable-table.vue';
import input from './page/components/input.vue';
import infoCard from './page/components/info-card.vue';
import inputWithLabel from './page/components/input-with-label.vue';
import list from './page/components/list.vue';
import panel from './page/components/panel.vue';
import listGroup from './page/components/list-group.vue';
import alert from './page/components/alert.vue';
import numericBadge from './page/components/numeric-badge.vue';
import popover from './page/components/popover.vue';
import progress from './page/components/progress.vue';
import radio from './page/components/radio.vue';
import select from './page/components/select.vue';
import selectAll from './page/components/select-all.vue';
import settingLayout from './page/components/setting-layout.vue';
import spin from './page/components/spin.vue';
import editableList from './page/components/editable-list.vue';
import steps from './page/components/steps.vue';
import svg from './page/components/svg.vue';
import switchExample from './page/components/switch.vue';
import tab from './page/components/tab.vue';
import table from './page/components/table.vue';
import tooltip from './page/components/tooltip.vue';
import tooltipDirective from './page/components/tooltip-directive.vue';
import daoColorDemo from './page/components/color-demo.vue';

const routes = [{
  path: '/',
  name: 'Index',
  component: index,
}, {
  path: '/components',
  name: 'Components',
  component: components,
  redirect: '/components/status',
  children: [
    {
      path: 'status',
      component: status,
      meta: {
        notComponent: true,
      },
    },
    {
      path: 'installation',
      component: installation,
      meta: {
        notComponent: true,
      },
    },
    {
      path: 'autocomplete',
      component: autocomplete,
      meta: {
        available: true,
        docs: true,
        test: true,
      },
    }, {
      path: 'button',
      component: button,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'card',
      component: card,
      meta: {
        available: false,
        docs: true,
        test: false,
      },
    }, {
      path: 'checkbox',
      component: checkbox,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'clipboard',
      component: clipboard,
      meta: {
        available: true,
        docs: true,
        test: true,
      },
    }, {
      path: 'dialog',
      component: dialog,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'dialog-extend',
      component: dialogExtend,
      meta: {
        available: false,
        docs: true,
        test: false,
      },
    }, {
      path: 'drag-drop',
      component: dragAndDrop,
      meta: {
        available: false,
        docs: true,
        test: false,
      },
    }, {
      path: 'dropdown',
      component: dropdown,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'editable-table',
      component: editableTable,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'input',
      component: input,
      meta: {
        available: true,
        docs: true,
        test: true,
      },
    }, {
      path: 'info-card',
      component: infoCard,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'input-with-label',
      component: inputWithLabel,
      meta: {
        available: false,
        docs: true,
        test: false,
      },
    }, {
      path: 'list',
      component: list,
      meta: {
        available: false,
        docs: true,
        test: false,
      },
    }, {
      path: 'list-group',
      component: listGroup,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'alert',
      component: alert,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'numeric-badge',
      component: numericBadge,
      meta: {
        available: true,
        docs: true,
        test: true,
      },
    }, {
      path: 'panel',
      component: panel,
      meta: {
        available: false,
        docs: true,
        test: false,
      },
    }, {
      path: 'popover',
      component: popover,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'progress',
      component: progress,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'radio',
      component: radio,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'select',
      component: select,
      meta: {
        available: true,
        docs: true,
        test: true,
      },
    }, {
      path: 'select-all',
      component: selectAll,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'setting-layout',
      component: settingLayout,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'spin',
      component: spin,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'steps',
      component: steps,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'svg',
      component: svg,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'editable-list',
      component: editableList,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'switch',
      component: switchExample,
      meta: {
        available: true,
        docs: true,
        test: true,
      },
    }, {
      path: 'tab',
      component: tab,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'table',
      component: table,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'tooltip',
      component: tooltip,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'tooltip-directive',
      component: tooltipDirective,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    }, {
      path: 'color',
      component: daoColorDemo,
      meta: {
        available: true,
        docs: true,
        test: false,
      },
    },
  ],
}, {
  path: '*',
  redirect: '/components/status',
}];

// 路由配置
const router = new VueRouter({
  routes,
});

function install(Vue) {
  Vue.use(VueRouter);
}

export {
  router,
  routes,
  install,
};
