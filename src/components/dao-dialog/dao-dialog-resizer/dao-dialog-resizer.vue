<template>
  <div @mousedown.prevent="handleMouseDown">
  </div>
</template>
<script>
import getWindowSize from '../../../utils/window-size';

export default {
  name: 'DaoDialogResizer',
  props: {
    container: {},
    minHeight: {
      type: Number,
      default: 200,
    },
    minWidth: {
      type: Number,
      default: 200,
    },
    padding: {
      type: Number,
      default: 20,
    },
  },
  methods: {
    handleMousemove(event) {
      const windowParams = getWindowSize();
      const containerParams = this.container.getBoundingClientRect();
      //  在低版本浏览器下不要使用 x | width | height，
      const targetWidth = event.clientX - containerParams.left;
      const targetHeight = event.clientY - containerParams.top;
      if (targetWidth > this.minWidth && (targetWidth + (2 * this.padding)) < windowParams.width) {
        this.$emit('resizeWidth', targetWidth);
      }
      if (targetHeight > this.minHeight) {
        this.$emit('resizeHeight', targetHeight);
      }
    },

    handleMouseup() {
      window.removeEventListener('mousemove', this.handleMousemove);
      window.removeEventListener('mouseup', this.handleMouseup);
    },

    handleMouseDown() {
      window.addEventListener('mousemove', this.handleMousemove);
      window.addEventListener('mouseup', this.handleMouseup);
    },
  },
};
</script>
