<template>
  <div class="layout">
    <side-bar :menus="menus"></side-bar>
    <div class="layout-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from './components/side-bar/side-bar.vue';

export default {
  name: 'app',
  components: {
    SideBar,
  },
  data() {
    return {
    };
  },
  computed: {
    menus() {
      return [
        // component
        this.componentSection,
      ];
    },
    componentSection() {
      return {
        name: '组件',
        children: [
          // 请按照组件名称的字典顺序添加以下模块的 example
          {
            name: 'AutoComplete',
            icon: '',
            state: 'autocomplete',
            isShow: () => true,
            isActive: () => this.isActive('autocomplete'),
          },
          {
            name: 'Alert',
            icon: '',
            state: 'alert',
            isShow: () => true,
            isActive: () => this.isActive('alert'),
          },
          {
            name: 'Button',
            icon: '',
            state: 'button',
            isShow: () => true,
            isActive: () => this.isActive('button'),
          },
          {
            name: 'Card',
            icon: '',
            state: 'card',
            isShow: () => true,
            isActive: () => this.isActive('card'),
          },
          {
            name: 'Checkbox',
            icon: '',
            state: 'checkbox',
            isShow: () => true,
            isActive: () => this.isActive('checkbox'),
          },
          {
            name: 'Clipboard',
            icon: '',
            state: 'clipboard',
            isShow: () => true,
            isActive: () => this.isActive('clipboard'),
          },
          {
            name: 'Dialog',
            icon: '',
            state: 'dialog',
            isShow: () => true,
            isActive: () => this.isActive('dialog'),
          },
          {
            name: 'Dropdown',
            icon: '',
            state: 'dropdown',
            isShow: () => true,
            isActive: () => this.isActive('dropdown'),
          },
          {
            name: 'Editable List',
            icon: '',
            state: 'editable-list',
            isShow: () => true,
            isActive: () => this.isActive('editable-list'),
          },
          {
            name: 'EditableTable',
            icon: '',
            state: 'editable-table',
            isShow: () => true,
            isActive: () => this.isActive('editable-table'),
          },
          {
            name: 'Input',
            icon: '',
            state: 'input',
            isShow: () => true,
            isActive: () => this.isActive('input'),
          },
          {
            name: 'InfoCard',
            icon: '',
            state: 'info-card',
            isShow: () => true,
            isActive: () => this.isActive('info-card'),
          },
          {
            name: 'InputWithLabel',
            icon: '',
            state: 'input-with-label',
            isShow: () => true,
            isActive: () => this.isActive('input-with-label'),
          },
          {
            name: 'List',
            icon: '',
            state: 'list',
            isShow: () => true,
            isActive: () => this.isActive('list'),
          },
          {
            name: 'List Group',
            icon: '', 
            state: 'list-group',
            isShow: () => true,
            isActive: () => this.isActive('list-group'),
          },
          {
            name: 'Numeric Badge',
            icon: '',
            state: 'numeric-badge',
            isShow: () => true,
            isActive: () => this.isActive('numeric-badge'),
          },
          {
            name: 'Panel',
            icon: '',
            state: 'panel',
            isShow: () => true,
            isActive: () => this.isActive('panel'),
          },
          {
            name: 'Popover',
            icon: '',
            state: 'popover',
            isShow: () => true,
            isActive: () => this.isActive('popover'),
          },
          {
            name: 'Progress',
            icon: '',
            state: 'progress',
            isShow: () => true,
            isActive: () => this.isActive('progress'),
          },
          {
            name: 'Radio',
            icon: '',
            state: 'radio',
            isShow: () => true,
            isActive: () => this.isActive('radio'),
          },
          {
            name: 'Select',
            icon: '',
            state: 'select',
            isShow: () => true,
            isActive: () => this.isActive('select'),
          },
          {
            name: 'Select All',
            icon: '',
            state: 'select-all',
            isShow: () => true,
            isActive: () => this.isActive('select-all'),
          },
          {
            name: 'Setting Layout',
            icon: '',
            state: 'setting-layout',
            isShow: () => true,
            isActive: () => this.isActive('setting-layout'),
          },
          {
            name: 'Slider',
            icon: '',
            state: 'slider',
            isShow: () => true,
            isActive: () => this.isActive('slider'),
          },
          {
            name: 'Spin',
            icon: '',
            state: 'spin',
            isShow: () => true,
            isActive: () => this.isActive('spin'),
          },
          {
            name: 'Steps',
            icon: '',
            state: 'steps',
            isShow: () => true,
            isActive: () => this.isActive('steps'),
          },
          {
            name: 'Svg',
            icon: '',
            state: 'svg',
            isShow: () => true,
            isActive: () => this.isActive('svg'),
          },
          {
            name: 'Switch',
            icon: '',
            state: 'switch',
            isShow: () => true,
            isActive: () => this.isActive('switch'),
          },
          {
            name: 'Progress',
            icon: '',
            state: 'progress',
            isShow: () => true,
            isActive: () => this.isActive('progress'),
          },
          {
            name: 'Tab',
            icon: '',
            state: 'tab',
            isShow: () => true,
            isActive: () => this.isActive('tab'),
          },
          {
            name: 'Table',
            icon: '',
            state: 'table',
            isShow: () => true,
            isActive: () => this.isActive('table'),
          },
          {
            name: 'Tooltip',
            icon: '',
            state: 'tooltip',
            isShow: () => true,
            isActive: () => this.isActive('tooltip'),
          },
          {
            name: 'Tooltip Directive',
            icon: '',
            state: 'tooltip-directive',
            isShow: () => true,
            isActive: () => this.isActive('tooltip-directive'),
          },
        ],
      };
    },
  },
  methods: {
    isActive(path, params) {
      if (Array.isArray(path)) {
        return path.some(x => this.isActive(x, params));
      }
      return this.$route.name === path;
    },
  },
};
</script>
