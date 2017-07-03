<template>
  <div :class="['dao-select-dropdown', ...dropClass]" :style="styles"><slot></slot></div>
</template>
<style lang="scss">
  @import './dropdown.scss';
</style>
<script>
  import Popper from 'popper.js';
  import { getStyle } from '../../utils/assist';

  const dropdownMargin = 8;

  export default {
    name: 'Drop',
    props: {
      placement: {
        type: String,
        default: 'bottom-start',
      },
      appendToBody: {
        type: Boolean,
        default: false,
      },
      dropClass: Array,
    },
    data() {
      return {
        popper: null,
        width: '',
      };
    },
    computed: {
      styles() {
        const style = {};
        if (this.width) {
          style.width = `${this.width}px`;
        }
        if (this.placement.indexOf('bottom') > -1) {
          style['margin-top'] = `${dropdownMargin}px`;
        } else if (this.placement.indexOf('top') > -1) {
          style['margin-bottom'] = `${dropdownMargin}px`;
        } else if (this.placement.indexOf('left') > -1) {
          style['margin-right'] = `${dropdownMargin}px`;
        } else if (this.placement.indexOf('right') > -1) {
          style['margin-left'] = `${dropdownMargin}px`;
        }
        return style;
      },
    },
    methods: {
      update() {
        if (this.popper) {
          this.$nextTick(() => {
            this.popper.update();
          });
        } else {
          this.$nextTick(() => {
            const that = this;
            this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
              gpuAcceleration: false,
              placement: this.placement,
              boundariesPadding: 0,
              forceAbsolute: true,
              boundariesElement: 'body',
              onCreate(data) {
                that.resetTransformOrigin(data.instance);
              },
            });
          });
        }
        // set a height for parent is Modal and Select's width is 100%
        if (this.$parent.$options.name === 'iSelect') {
          this.width = window.parseInt(getStyle(this.$parent.$el, 'width'));
        }
      },
      destroy() {
        if (this.popper) {
          this.resetTransformOrigin(this.popper);
          // setTimeout(() => {
          this.popper.destroy();
          this.popper = null;
          // }, 300);
        }
      },
      resetTransformOrigin(popper) {
        const placementMap = { top: 'bottom', bottom: 'top' };
        const placement = popper.popper.getAttribute('x-placement').split('-')[0];
        const origin = placementMap[placement];
        popper.popper.style.transformOrigin = `center ${origin}`;
      },
    },
    mounted() {
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
    },
    created() {
      this.$on('on-update-popper', this.update);
      this.$on('on-destroy-popper', this.destroy);
    },
    beforeDestroy() {
      if (this.appendToBody) {
        document.body.removeChild(this.$el);
      }
      if (this.popper) {
        this.popper.destroy();
      }
    },
  };
</script>