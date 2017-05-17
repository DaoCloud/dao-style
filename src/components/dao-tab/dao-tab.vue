<template>
  <div class="dao-tab"
    :class="{ right: direction === 'right' }"
  >
    <div class="dao-tab__header">
      <DaoTabNav :tabList="tabList"/>
    </div>
    <div class="dao-tab__body">
      <slot>
        等待加载 Tab 数据
      </slot>
    </div>
  </div>
</template>
<style lang="scss">
  @import './dao-tab.scss';
</style>
<script>
import DaoTabNav from './dao-tab-nav/dao-tab-nav';
export default {
  name: 'DaoTab',
  props: {
    direction: {
      type: String,
      required: false,
      default: 'left',
      validator: function(value) {
        return value === 'left' || value === 'right';
      },
    },
  },
  data() {
    return {
      tabList: [],
      activeName: '0',
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
  },
  watch: {
    tabList(value) {
      // 只在刚加载进数据的时候执行一次
      this.activeName = value[0].heading;
    },
  },
  components: {
    DaoTabNav,
  },
};
</script>
