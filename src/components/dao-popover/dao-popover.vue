<template>
  <div :class="[prefixCls]" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" v-clickoutside="handleClose">
    <div :class="[prefixCls + '-rel']" ref="reference" @click="handleClick" @mousedown="handleFocus(false)" @mouseup="handleBlur(false)">
      <slot></slot>
    </div>
    <div :class="[prefixCls + '-popper']" ref="popper" v-show="!disabled && (visible || always) && ($slots.content || content)">
      <div :class="[prefixCls + '-arrow']">
        <svg viewBox="0 0 30 30">
          <path class="pt-popover-arrow-border" d="M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z" fill="#10161a" fill-opacity="0.1"></path>
          <path class="pt-popover-arrow-fill" d="M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z" fill="#fff"></path>
        </svg>
      </div>
      <div :class="[prefixCls + '-inner']">
        <slot name="content">{{content}}</slot>
      </div>
    </div>
  </div>
</template>
<script>
  import Popper from '../base/popper';
  import clickoutside from '../../directives/clickoutside';
  import { oneOf } from '../../utils/assist';

  const prefixCls = 'dao-popover';
  export default {
    name: 'Popover',
    mixins: [Popper],
    directives: { clickoutside },
    props: {
      trigger: {
        validator(value) {
          return oneOf(value, ['click', 'focus', 'hover']);
        },
        default: 'click',
      },
      placement: {
        validator(value) {
          return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
        },
        default: 'bottom',
      },
      content: {
        type: [String, Number],
        default: '',
      },
      disabled: {
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
        isInput: false,
      };
    },
    created() {
      if (this.always) {
        this.visible = true;
      }
    },
    methods: {
      handleClick() {
        if (this.trigger === 'click') {
          this.visible = !this.visible;
        }
      },
      handleClose() {
        if (this.trigger === 'click') {
          this.visible = false;
        }
      },
      handleFocus(fromInput = true) {
        if (this.trigger === 'focus' && (!this.isInput || fromInput)) {
          this.visible = true;
        }
      },
      handleBlur(fromInput = true) {
        if (this.trigger === 'focus' && (!this.isInput || fromInput)) {
          this.visible = false;
        }
      },
      handleMouseenter() {
        if (this.trigger === 'hover') {
          this.visible = true;
        }
      },
      handleMouseleave() {
        if (this.trigger === 'hover') {
          this.visible = false;
        }
      },
      getInputChildren() {
        const $input = this.$refs.reference.querySelectorAll('input');
        const $textarea = this.$refs.reference.querySelectorAll('textarea');
        let $children = null;
        if ($input.length) {
          $children = $input[0];
        } else if ($textarea.length) {
          $children = $textarea[0];
        }
        return $children;
      },
    },
    mounted() {
      if (this.trigger === 'focus') {
        const $children = this.getInputChildren();
        if ($children) {
          $children.addEventListener('focus', this.handleFocus, false);
          $children.addEventListener('blur', this.handleBlur, false);
          this.isInput = true;
        }
      }
    },
    beforeDestroy() {
      const $children = this.getInputChildren();
      if ($children) {
        $children.removeEventListener('focus', this.handleFocus, false);
        $children.removeEventListener('blur', this.handleBlur, false);
      }
    },
  };
</script>

<style scoped lang="scss">
@import './dao-popover.scss';
</style>
