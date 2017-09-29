<template>
  <th ref="th" :class="{'resize-cursor': resizeCursor}"
    :style="`width: ${width}px`"
    @click="onClick"
    @mousemove="onMousemove"
    @mousedown="onMousedown"
    @mouseup="onMouseup">
    <slot>
    </slot>
  </th>
</template>
<script>
export default {
  name: 'DaoListTh',
  data() {
    return {
      resizeAreaWidth: 5,
      resizeCursor: false,
      width: null,
      resizing: false,
    };
  },
  mounted() {
    this.width = this.$refs.th.clientWidth;
  },
  methods: {
    isThisEventInResizeArea(event) {
      const th = event.target;
      if (th.clientWidth - event.offsetX < this.resizeAreaWidth) {
        return true;
      }
      return false;
    },
    onMousemove(event) {
      if (this.isThisEventInResizeArea(event)) {
        this.resizeCursor = true;
      } else {
        this.resizeCursor = false;
      }
      if (this.resizing) {
        this.width = this.width + event.movementX;
        this.$emit('resize', this.width);
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
