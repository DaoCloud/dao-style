<template>
  <transition name="dao-dialog">
    <div class="dao-dialog-backdrop" v-show="visible">
      <div class="dao-dialog-wrapper" @click.self="handleWrapperClick">
        <div :class="['dao-dialog-container', sizeClass]">
          <div class="dao-dialog-header">
            <h3> {{title}} </h3>
          </div>

          <div class="dao-dialog-body">
            <slot name="body"></slot>
          </div>

          <div class="dao-dialog-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { getScrollBarSize } from '../../utils/assist';
export default {
  name: 'DaoDialog',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
      validator: (value) => value === 'lg' || value === '',
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    closeOnClickdialog: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      visible: this.value,
    };
  },
  computed: {
    sizeClass() {
      if (this.size) {
        return `dao-dialog-${this.size}`;
      }

      return '';
    },
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit('input', false);
      this.$emit('on-cancel');
    },
    handleWrapperClick() {
      if (this.closeOnClickdialog) {
        this.close();
      }
    },
    EscClose(e) {
      if (this.visible && this.closeOnPressEscape && e.keyCode === 27) {
        this.close();
      }
    },
    checkScrollBar () {
      let fullWindowWidth = window.innerWidth;
      if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
        const documentElementRect = document.documentElement.getBoundingClientRect();
        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
      }
      this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
      if (this.bodyIsOverflowing) {
        this.scrollBarWidth = getScrollBarSize();
      }
    },
    setScrollBar () {
      if (this.bodyIsOverflowing && this.scrollBarWidth !== undefined) {
        document.body.style.paddingRight = `${this.scrollBarWidth}px`;
      }
    },
    resetScrollBar () {
      document.body.style.paddingRight = '';
    },
    addScrollEffect () {
      this.checkScrollBar();
      this.setScrollBar();
      document.body.style.overflow = 'hidden';
    },
    removeScrollEffect() {
      document.body.style.overflow = '';
      this.resetScrollBar();
    },
  },
  mounted() {
    document.addEventListener('keydown', this.EscClose);
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.EscClose);
    this.removeScrollEffect();
  },
  watch: {
    value (val) {
      this.visible = val;
      if (val === false) {
        this.removeScrollEffect();
      } else {
        if (!this.scrollable) {
          this.addScrollEffect();
        }
      }
    },
    scrollable (val) {
      if (!val) {
        this.addScrollEffect();
      } else {
        this.removeScrollEffect();
      }
    },
  },
};
</script>

<style lang="scss">
  @import './dao-dialog.scss';
</style>
