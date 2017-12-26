<template>
  <div class="dao-spin" :style="{ width: wrapperWidth, height: wrapperHeight }"></div>
</template>

<script>
  import { Spinner } from 'spin.js';

  const defaultOpts = {
    lines: 13, // The number of lines to draw
    length: 38, // The length of each line
    width: 17, // The line thickness
    radius: 45, // The radius of the inner circle
    scale: 1, // Scales overall size of the spinner
    corners: 1, // Corner roundness (0..1)
    color: '#ccd1d9', // CSS color or array of colors
    fadeColor: 'transparent', // CSS color or array of colors
    opacity: 0.25, // Opacity of the lines
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    fps: 20, // Frames per second when using setTimeout() as a fallback in IE 9
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    className: 'spinner', // The CSS class to assign to the spinner
    top: '50%', // Top position relative to parent
    left: '50%', // Left position relative to parent
    shadow: null, // Box-shadow for the lines
    position: 'absolute', // Element positioning
  };

  export default {
    name: 'DaoSpin',
    props: {
      size: {
        required: false,
        default: 'small',
      },
    },
    data() {
      return {
        opt: {},
        opts: {
          small: {
            length: 8,
            width: 1,
            radius: 4,
          },
        },
        sizes: {
          small: {
            width: 50,
            height: 50,
          },
        },
      };
    },
    created() {
      this.opt = Object.assign({}, defaultOpts, this.opts[this.size]);
    },
    mounted() {
      const spinner = new Spinner(this.opt).spin();
      this.$el.appendChild(spinner.el);
    },
    computed: {
      wrapperWidth() {
        return `${this.sizes[this.size].width}px`;
      },
      wrapperHeight() {
        return `${this.sizes[this.size].height}px`;
      },
    },
  };
</script>

<style lang="scss" src="./dao-spin.scss"></style>