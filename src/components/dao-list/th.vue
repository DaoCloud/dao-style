<template>
  <th ref="th" :class="{'resize-cursor': resizeCursor}"
    :style="`width: ${thWidth}px`"
    @click="onClick"
    @mousemove="toggleCursor"
    @mousedown="onMousedown"
    @mouseup="onMouseup">
    <slot>
    </slot>
  </th>
</template>
<script>
import _ from 'lodash';

export default {
  props: ['width'],
  name: 'DaoListTh',
  data() {
    return {
      resizeAreaWidth: 5,
      resizeCursor: false,
      // thWidth 是 th 组件内部表示宽度的属性，width 是外面传进来的宽度
      thWidth: null,
      resizing: false,
    };
  },
  mounted() {
    if (!this.width || this.width === 'auto') {
      this.thWidth = this.$refs.th.clientWidth;
    } else {
      this.thWidth = _.toNumber(this.width.replace('px', ''));
    }

    document.addEventListener('mousemove', this.onMousemove);
    document.addEventListener('mouseup', this.onMouseup);
  },
  destroyed() {
    document.removeEventListener('mousemove', this.onMousemove);
    document.removeEventListener('mouseup', this.onMouseup);
  },
  methods: {
    isThisEventInResizeArea(event) {
      const th = event.target;
      if (th.clientWidth - event.offsetX < this.resizeAreaWidth) {
        return true;
      }
      return false;
    },
    toggleCursor(event) {
      if (this.isThisEventInResizeArea(event)) {
        this.resizeCursor = true;
      } else {
        this.resizeCursor = false;
      }
    },
    onMousemove(event) {
      if (this.resizing) {
        this.thWidth = this.thWidth + event.movementX;
        this.$emit('resize', this.thWidth);
      }
    },
    onMousedown(event) {
      if (this.isThisEventInResizeArea(event)) {
        this.resizing = true;
      } else {
        this.resizing = false;
      }
    },
    onMouseup() {
      this.resizing = false;
    },
    onClick(event) {
      if (!this.isThisEventInResizeArea(event)) {
        this.$emit('click', event);
      }
    },
  },
};
</script>
<style lang="scss">
  .resize-cursor {
    cursor: col-resize;
  }
</style>