<template src="./dao-splitter.html"></template>

<script>

export default {
  name: 'DaoSplitter',
  props: {
    config: {
      type: Object,
      validator(value) {
        return value.height;
      },
      default() {
        return {
          height: '100%',
          topMin: '0',
          bottomMin: '0',
          dividerHeight: '5px',
        };
      },
    },
  },
  data() {
    return {
      topHeight: 0,
      mousedownY: 0,
      moving: false,
      elHeight: 0,
    };
  },
  mounted() {
    this.elHeight = parseInt(window.getComputedStyle(this.$el).height, 10);
    this.topHeight = this.elHeight / 2;
  },
  methods: {
    sizeMatch(topHeight) {
      return topHeight > parseInt(this.config.topMin, 10) &&
        (this.elHeight -
          parseInt(this.config.dividerHeight, 10) - topHeight) > parseInt(this.config.bottomMin, 10); //eslint-disable-line
    },
    mousedown(e) {
      this.mousedownY = e.clientY;
      this.moving = true;

      document.addEventListener('mousemove', this.mousemove);
      document.addEventListener('mouseup', this.mouseup);
    },
    mousemove(e) {
      const offsetY = e.clientY - this.mousedownY;
      if (this.sizeMatch(this.topHeight + offsetY)) {
        this.topHeight = this.topHeight + offsetY;
        this.mousedownY = e.clientY;
      }
    },
    mouseup(e) {
      const offsetY = e.clientY - this.mousedownY;
      if (this.sizeMatch(this.topHeight + offsetY)) {
        this.topHeight = this.topHeight + offsetY;
        this.mousedownY = e.clientY;
      }

      this.moving = false;

      document.removeEventListener('mousemove', this.mousemove);
      document.removeEventListener('mouseup', this.mouseup);
    },
  },
  computed: {
    bottomHeight() {
      return this.elHeight - parseInt(this.config.dividerHeight, 10) - this.topHeight;
    },
  },
};
</script>

<style lang="scss" scoped src="./dao-splitter.scss"></style>
