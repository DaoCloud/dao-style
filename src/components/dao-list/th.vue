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
import {
  _includes,
  _toNumber,
  } from '../../utils/assist';

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
    } else if (_includes(this.width, '%')) {
      // 如果有百分比，那就要根据父元素的宽度计算，得出绝对宽度
      this.thWidth = (this.width.replace('%', '') / 100) * this.$parent.$el.clientWidth;
    } else {
      this.thWidth = _toNumber(this.width.replace('px', ''));
    }

    // 给一个最小宽度50px，以避免 th 过小
    if (this.thWidth < 10) {
      this.thWidth = 100;
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
      // 事件有可能触发在 th 里的 svg 上，所以要先排除这种情况
      if (event.target.nodeName === 'svg' || event.target.nodeName === 'use') return false;
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
    cursor: col-resize !important;
  }
</style>
