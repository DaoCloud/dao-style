<template>
  <div class="dao-tabs"
    :class="{ right: direction === 'right' }"
  >
    <div class="dao-tabs__header">
      <DaoTabsNav :tabs="tabs" v-model="activeName" />
    </div>
    <div class="dao-tabs__body">
      <slot>
        等待加载 Tab 数据
      </slot>
    </div>
  </div>
</template>
<style lang="scss">
  @import './dao-tabs.scss';
</style>
<script>
import DaoTabsNav from './dao-tabs-nav/dao-tabs-nav';
export default {
  name: 'DaoTabs',
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
      tabs: [],
      activeName: '0',
    };
  },
  methods: {
    addTabs(item) {
      this.tabs.push(item);
    },
    removeTabs(item) {
      const tabs = this.tabs;
      const idx = tabs.indexOf(item);
      if (idx >= 0) {
        tabs.splice(idx, 1);
      }
    },
  },
  watch: {
    tabs(value) {
      // 只在刚加载进数据的时候执行一次
      this.activeName = value[0].heading;
    },
  },
  components: {
    DaoTabsNav,
  },
};
</script>
