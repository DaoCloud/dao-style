<template>
  <div class="dao-tab" :class="{ right: direction === 'right' }">
    <div class="dao-tab__header">
      <dao-tab-nav :tabList="tabList">
      </dao-tab-nav>
    </div>
    <div class="dao-tab__body">
      <slot/>
    </div>
  </div>
</template>

<script>

import daoTabNav from './dao-tab-nav/dao-tab-nav.vue';
import { _includes } from '../../utils/assist';

export default {
  name: 'DaoTab',
  props: {
    direction: {
      type: String,
      required: false,
      default: 'left',
      validator(value) {
        return _includes(['left', 'right'], value);
      },
    },
    currentTab: String,
  },
  data() {
    return {
      tabList: [],
      currentTabHeading: '0',
    };
  },
  methods: {
    addTab(item) {
      this.tabList.push(item);
    },
    removeTab(item) {
      const tabs = this.tabList;
      const idx = tabs.indexOf(item);
      if (idx >= 0) {
        tabs.splice(idx, 1);
      }
      this.tabList = tabs;
    },
    resetCurrentTab() {
      if (this.currentTab) {
        this.currentTabHeading = this.currentTab;
      } else {
        this.currentTabHeading = this.tabList[0].heading;
      }
    },
  },
  watch: {
    tabList() {
      // 只在刚加载进数据的时候执行一次
      this.resetCurrentTab();
    },
    currentTabHeading(newV, oldV) {
      if (newV === oldV) return;
      this.$emit('update:currentTab', this.currentTabHeading);
      this.$emit('changeTab', newV);
    },
    currentTab() {
      this.resetCurrentTab();
    },
  },
  components: {
    daoTabNav,
  },
};
</script>

<style lang="scss" src="./dao-tab.scss">
</style>
