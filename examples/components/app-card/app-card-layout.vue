<template>
  <div class="app-card-layout">
    <slot/>
  </div>
</template>

<script>
import {
  merge as _merge,
  cloneDeep as _cloneDeep,
} from 'lodash';

const defaultBreakpoint = {
  480: 1,
  768: 2,
  992: 3,
  1200: 4,
};

export default {
  name: 'DaoCardLayout',
  props: {
    breakpoint: {
      type: Object,
      default() {
        return defaultBreakpoint;
      },
    },
    noSideBlank: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentBreakpoint: {},
    };
  },
  created() {
    this.currentBreakpoint = _merge(_cloneDeep(defaultBreakpoint), this.breakpoint);
  },
  mounted() {
    this.adjustChildren();
    window.addEventListener('resize', this.adjustChildren);
  },

  methods: {
    adjustChildren() {
      window.dom = this.$el;
      const layoutWidth = this.$el.offsetWidth;
      const breakPointKeys = Object.keys(this.currentBreakpoint).sort((a, b) => b - a);
      const targetPoint = breakPointKeys.find(k => layoutWidth >= k);
      // 每一行多少张 card
      const cardsPerRow = targetPoint ? this.currentBreakpoint[targetPoint] : 1;
      this.$children.forEach((child, index) => {
        child.isFirst = ((index + 1) % cardsPerRow) === 1 || cardsPerRow === 1;
        child.isLast = ((index + 1) % cardsPerRow) === 0 || cardsPerRow === 1;
        child.noSideBlank = this.noSideBlank;
        child.cardsPerRow = cardsPerRow;
      });
    },
  },
  destroyed() {
    window.removeEventListener('resize', this.adjustChildren);
  },
};
</script>

<style lang="scss" src="./styles/app-card-layout.scss">
</style>
