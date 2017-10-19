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
    minHeight: {
      type: String,
      default: '0px',
      validator(value) {
        return value.includes('%') || value.includes('px');
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
      parentHeight: 0,
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
      if (e.target.nodeName.toUpperCase() === 'SVG' ||
        e.target.nodeName.toUpperCase() === 'USE' ||
        e.target.className.indexOf('info-panel-header') === -1) return;

      this.touchMoving = true;
      this.touchY = e.pageY;
      this.touchHeight = this.$el.offsetHeight;
      this.parentHeight = parseInt(window.getComputedStyle(this.$el.parentNode).height, 10);

      document.body.addEventListener('mousemove', this.mousemove);
      document.body.addEventListener('mouseup', this.mouseup);
      document.body.style.cursor = 'row-resize';
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

      document.body.removeEventListener('mousemove', this.mousemove);
      document.body.removeEventListener('mouseup', this.mouseup);
      document.body.style.cursor = '';
    },
  },
  mounted() {
  },
  computed: {
    height() {
      return this.specSize === 0 ? this.sizes[this.userSize] : this.specSize;
    },
    bodyHeight() {
      return this.height - 26;
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

