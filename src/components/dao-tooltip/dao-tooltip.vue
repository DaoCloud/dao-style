<template>
  <div :class="[prefixCls]" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
    <div :class="[prefixCls + '-rel']" ref="reference">
      <slot></slot>
    </div>
    <div :class="[prefixCls + '-popper']" ref="popper" v-show="!disabled && (visible || always)">
      <div :class="[prefixCls + '-content']">
        <div :class="[prefixCls + '-arrow']"></div>
        <div :class="[prefixCls + '-inner']"><slot name="content">{{ content }}</slot></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Popper from '../base/popper';
  import { _includes } from '../../utils/assist';

  const prefixCls = 'dao-tooltip';
  export default {
    name: 'Tooltip',
    mixins: [Popper],
    props: {
      placement: {
        validator(value) {
          return _includes(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'], value);
        },
        default: 'bottom',
      },
      content: {
        type: [String, Number],
        default: '',
      },
      delay: {
        type: Number,
        default: 0,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      controlled: {  // under this prop,Tooltip will not close when mouseleave
        type: Boolean,
        default: false,
      },
      always: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        prefixCls,
      };
    },
    computed: {
      realVisible() {
        return !this.disabled && (this.visible || this.always);
      },
    },
    watch: {
      realVisible(val) {
        this.updatePopper();
        if (val) {
          this.$nextTick(() => this.updatePopper());
        } else {
          this.doDestroy();
          this.$emit('popper-hide');
        }
        this.$emit('visible-change', val);
      },
    },
    methods: {
      handleShowPopper() {
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, this.delay);
      },
      handleClosePopper() {
        clearTimeout(this.timeout);
        if (!this.controlled) {
          this.visible = false;
        }
      },
    },
  };
</script>

<style lang="scss">
@import './dao-tooltip.scss';
</style>
