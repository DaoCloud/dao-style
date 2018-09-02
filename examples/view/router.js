import VueRouter from 'vue-router';

import IndexPage from './page/index/index.vue';
import ComponentsPage from './page/components/index.vue';
import StatusPage from './page/status/status.vue';
import InstallationPage from './page/installation/installation.vue';
import ChangeLogsPage from './page/change-logs/change-logs.vue';

// TODO 增加 type 对组件进行分类
const components = [
  {
    path: 'autocomplete',
    meta: {
      available: true,
      docs: false,
      test: true,
    },
  }, {
    path: 'button',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'card',
    meta: {
      available: false,
      docs: false,
      test: false,
      remarks: 'will_be_deprecated',
    },
  }, {
    path: 'checkbox',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'clipboard',
    meta: {
      available: true,
      docs: false,
      test: true,
    },
  }, {
    path: 'dialog',
    meta: {
      available: true,
      docs: false,
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
  {
    path: 'drag-drop',
    meta: {
      available: false,
      docs: false,
      test: false,
      remarks: 'will_be_deprecated',
    },
  }, {
    path: 'dropdown',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'editable-table',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'input',
    meta: {
      available: true,
      docs: false,
      test: true,
    },
  }, {
    path: 'info-card',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'input-with-label',
    meta: {
      available: false,
      docs: false,
      test: false,
      remarks: 'will_be_deprecated',
    },
  }, {
    path: 'list',
    meta: {
      available: false,
      docs: false,
      test: false,
      remarks: 'will_be_deprecated',
    },
  }, {
    path: 'list-group',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'alert',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'numeric-badge',
    meta: {
      available: true,
      docs: false,
      test: true,
    },
  }, {
    path: 'panel',
    meta: {
      available: false,
      docs: false,
      test: false,
      remarks: 'will_be_deprecated',
    },
  }, {
    path: 'popover',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'progress',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'radio',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'select',
    meta: {
      available: true,
      docs: false,
      test: true,
    },
  }, {
    path: 'select-all',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'setting-layout',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'spin',
    meta: {
      available: true,
      docs: true,
      test: false,
    },
  }, {
    path: 'steps',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'svg',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'editable-list',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'switch',
    meta: {
      available: true,
      docs: false,
      test: true,
    },
  }, {
    path: 'tab',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'table',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'tooltip',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'tooltip-directive',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  }, {
    path: 'color',
    meta: {
      available: true,
      docs: false,
      test: false,
    },
  },
].map((com) => {
  com.component = () => import(`./page/components/${com.path}/index.vue`);
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
  children: [
    {
      path: 'status',
      component: StatusPage,
      meta: {
        notComponent: true,
      },
    },
    {
      path: 'installation',
      component: InstallationPage,
      meta: {
        notComponent: true,
      },
    },
    {
      path: 'change-logs',
      component: ChangeLogsPage,
      meta: {
        notComponent: true,
      },
    },
    ...components,
  ],
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
