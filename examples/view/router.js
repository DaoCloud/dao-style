import VueRouter from 'vue-router';

import IndexPage from './page/index';
import ComponentsPage from './page/components';
import ChangeLogs from './page/change-logs';
import Status from './page/status';
import Installation from './page/installation';
import AlertPage from './page/components/alert';
import AutocompletePage from './page/components/autocomplete';
import ButtonPage from './page/components/button';
import CheckboxPage from './page/components/checkbox';
import ClipboardPage from './page/components/clipboard';
import DialogPage from './page/components/dialog';
import DropdownPage from './page/components/dropdown';
import EditableTablePage from './page/components/editable-table';
import EditableListPage from './page/components/editable-list';
import InfoCardPage from './page/components/info-card';
import InputPage from './page/components/input';
import ListGroupPage from './page/components/list-group';
import NumericBadgePage from './page/components/numeric-badge';
import PopoverPage from './page/components/popover';
import ProgressPage from './page/components/progress';
import RadioPage from './page/components/radio';
import SelectPage from './page/components/select';
import SelectAllPage from './page/components/select-all';
import SettingLayoutPage from './page/components/setting-layout';
import SpinPage from './page/components/spin';
import StepsPage from './page/components/steps';
import SwitchPage from './page/components/switch';
import TabPage from './page/components/tab';
import TablePage from './page/components/table';
import TooltipPage from './page/components/tooltip';
import SvgPage from './page/components/svg';
import ColorPage from './page/components/color';

// TODO 增加 type 对组件进行分类
const components = [
  {
    path: 'status',
    name: 'Status',
    component: Status,
    meta: {
      notComponent: true,
    },
  }, {
    path: 'installation',
    name: 'Installation',
    component: Installation,
    meta: {
      notComponent: true,
    },
  }, {
    path: 'change-logs',
    name: 'ChangeLogs',
    component: ChangeLogs,
    meta: {
      notComponent: true,
    },
  }, {
    path: 'alert',
    component: AlertPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'autocomplete',
    component: AutocompletePage,
    meta: {
      available: true,
      docs: false,
      test: true,
    },
  }, {
    path: 'button',
    component: ButtonPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  },
  // {
  //   path: 'card',
  //   meta: {
  //     available: false,
  //     docs: false,
  //     test: false,
  //     remarks: 'will_be_deprecated',
  //   },
  // },
  {
    path: 'checkbox',
    component: CheckboxPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'clipboard',
    component: ClipboardPage,
    meta: {
      available: true,
      docs: false,
      test: true,
    },
  }, {
    path: 'dialog',
    component: DialogPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  },
  // {
  //   path: 'dialog-extend',
  //   meta: {
  //     available: false,
  //     docs: false,
  //     test: false,
  //   },
  // },
  // {
  //   path: 'drag-drop',
  //   meta: {
  //     available: false,
  //     docs: false,
  //     test: false,
  //     remarks: 'will_be_deprecated',
  //   },
  // },
  {
    path: 'dropdown',
    component: DropdownPage,
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'editable-table',
    component: EditableTablePage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'editable-list',
    component: EditableListPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'info-card',
    component: InfoCardPage,
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'input',
    component: InputPage,
    meta: {
      available: true,
      docs: true,
      test: true,
    },
  },
  // {
  //   path: 'input-with-label',
  //   meta: {
  //     available: false,
  //     docs: false,
  //     test: false,
  //     remarks: 'will_be_deprecated',
  //   },
  // },
  // {
  //   path: 'list',
  //   meta: {
  //     available: false,
  //     docs: false,
  //     test: false,
  //     remarks: 'will_be_deprecated',
  //   },
  // },
  {
    path: 'list-group',
    component: ListGroupPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'numeric-badge',
    component: NumericBadgePage,
    meta: {
      available: true,
      docs: true,
      test: true,
    },
  },
  // {
  //   path: 'panel',
  //   meta: {
  //     available: false,
  //     docs: false,
  //     test: false,
  //     remarks: 'will_be_deprecated',
  //   },
  // },
  {
    path: 'popover',
    component: PopoverPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'progress',
    component: ProgressPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'radio',
    component: RadioPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'select',
    component: SelectPage,
    meta: {
      available: true,
      docs: false,
      test: true,
    },
  }, {
    path: 'select-all',
    component: SelectAllPage,
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'setting-layout',
    component: SettingLayoutPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'spin',
    component: SpinPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'steps',
    component: StepsPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'switch',
    component: SwitchPage,
    meta: {
      available: true,
      docs: true,
      test: true,
    },
  }, {
    path: 'tab',
    component: TabPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'table',
    component: TablePage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'tooltip',
    component: TooltipPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  },
  // {
  //   path: 'tooltip-directive',
  //   meta: {
  //     available: true,
  //     docs: false,
  //     test: false,
  //   },
  // },
  {
    path: 'svg',
    component: SvgPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'color',
    component: ColorPage,
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  },
].map((com) => {
  if (!com.component) {
    com.component = () => import(`./page/${com.meta.notComponent ? '' : 'components/'}${com.path}/index.vue`);
  }
  return com;
});

const routes = [{
  path: '/',
  name: 'Index',
  component: IndexPage,
}, {
  path: '/components',
  name: 'Components',
  component: ComponentsPage,
  redirect: '/components/status',
  children: components,
}, {
  path: '*',
  redirect: '/components/status',
}];

const router = new VueRouter({
  routes,
  components,
});

function install(Vue) {
  Vue.use(VueRouter);
}

export {
  router,
  components,
  install,
};
