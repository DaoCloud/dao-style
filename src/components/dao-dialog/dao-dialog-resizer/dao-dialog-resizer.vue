<template>
  <div class="redizer" @mousedown.prevent="handleMouseDown">
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
  data() {
    return {
      wrapper: null,
    };
  },
  methods: {
    handleMousemove(event) {
      const windowParams = getWindowSize();
      const containerParams = this.wrapper.getBoundingClientRect();
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
  watch: {
    container: {
      handler(newV) {
        console.log(newV);
        this.wrapper = newV;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
  
</style>

