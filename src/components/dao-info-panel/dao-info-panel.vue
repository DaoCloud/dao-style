<template src="./dao-info-panel.html"></template>

<script>
import DaoInfoPanelNav from './dao-info-panel-nav/dao-info-panel-nav.vue';

export default {
  name: 'DaoInfoPanel',
  components: {
    DaoInfoPanelNav,
  },
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['large', 'medium', 'small'].includes(value);
      },
    },
  },
  data() {
    return {
      tabList: [],
      activeName: '',
      sizes: {
        large: 300,
        medium: 200,
        small: 100,
      },
      specSize: 0,
      userSize: '',
      bodyHeight: 0,
    };
  },
  created() {
    this.userSize = this.size;
  },
  methods: {
    addTab(item) {
      this.tabList.push(item);
    },
    removeTab(item) {
      this.tabList = this.tabList.filter(v => v !== item);
    },
    changeSize(size) {
      this.userSize = size;
      this.$emit('changeSize', size);
    },
  },
  mounted() {
    const infoPanelHeight = parseInt(window.getComputedStyle(this.$el).height, 10);
    this.bodyHeight = infoPanelHeight - 26;
  },
  watch: {
    tabList(value) {
      this.activeName = value[0].heading;
    },
    activeName(newV, oldV) {
      if (newV === oldV) return;
      this.$emit('changeTab', newV);
    },
    size(newV) {
      if (newV) {
        this.changeSize(newV);
      }
    },
  },
};
</script>

<style lang="scss" src="./dao-info-panel.scss"></style>

