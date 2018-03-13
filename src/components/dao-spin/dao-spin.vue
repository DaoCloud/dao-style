<template>
  <div class="dao-spin" :style="{ width: wrapperWidth, height: wrapperHeight }"></div>
</template>

<script>
  import { Spinner } from 'spin.js';

  const defaultOpts = {
    lines: 8, // The number of lines to draw
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
    zIndex: 0, // The z-index (defaults to 2000000000)
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
        default: 'normal',
      },
      color: {
        required: false,
        default: 'grey',
      },
    },
    data() {
      return {
        opt: {},
        opts: {
          normal: {
            length: 4,
            width: 2,
            radius: 4,
            scale: 0.5,
          },
        },
        sizes: {
          normal: {
            width: 10,
            height: 10,
          },
        },
        colors: {
          white: '#ffffff',
          grey: '#3d444f',
        },
      };
    },
    created() {
      this.opt = Object.assign(
        {},
        defaultOpts,
        this.opts[this.size],
        {
          color: this.colors[this.color],
        });
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