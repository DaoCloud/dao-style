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
      touchMoving: false,
      touchY: 0,
      touchHeight: 0,
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
      this.specSize = 0;
    },
    mousedown(e) {
      this.touchMoving = true;
      this.touchY = e.pageY;
      this.touchHeight = this.height;
    },
    mousemove(e) {
      if (!this.touchMoving) return;

      const currentY = e.pageY;
      const fixY = this.touchY - currentY;
      this.specSize = this.touchHeight + fixY;
    },
    mouseup(e) {
      if (!this.touchMoving) return;

      this.touchMoving = false;
      const currentY = e.pageY;
      const fixY = this.touchY - currentY;
      this.specSize = this.touchHeight + fixY;
    },
  },
  mounted() {
    document.body.addEventListener('mousemove', this.mousemove);
    document.body.addEventListener('mouseup', this.mouseup);
  },
  computed: {
    height() {
      return this.specSize === 0 ? this.sizes[this.userSize] : this.specSize;
    },
    activeSize() {
      if (this.height === this.sizes[this.userSize]) {
        return this.userSize;
      }

      return '';
    },
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
        this.userSize = newV;
      }
    },
  },
};
</script>

<style lang="scss" src="./dao-info-panel.scss"></style>

