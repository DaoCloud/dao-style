<template>
  <transition name="dao-dialog"
    @before-enter="onBeforeEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @after-leave="onAfterLeave">
    <div v-if="visible" class="dao-dialog-backdrop" ref="backdrop">
      <div class="dao-dialog-wrapper" :size="size" ref="dialogWrapper" @click.self="handleWrapperClick">
        <div class="dao-dialog-container" :class="containerClass" ref="container">
          <dao-dialog-header v-if="header" :config="header" @close="doClose">
            <slot name="header"/>
          </dao-dialog-header>
          <div ref="body"  class="dao-dialog-body">
            <slot></slot>
          </div>
          <dao-dialog-footer v-if="footer" :config="footer" @confirm="onConfirm" @cancel="onCancel">
            <slot name="footer"/>
          </dao-dialog-footer>
          <div class="resizer" v-if="allowResize" @mousedown.prevent="handleMouseDown">
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import daoDialogHeader from './dao-dialog-header/dao-dialog-header.vue';
import daoDialogFooter from './dao-dialog-footer/dao-dialog-footer.vue';
import daoDialogResizer from './dao-dialog-resizer/dao-dialog-resizer.vue';
import getWindowSize from '../../utils/window-size';

export default {
  name: 'DaoDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    header: [Object, Boolean],
    footer: [Object, Boolean],
    size: {
      type: [Object, String],
      default() {
        return {
          height: 'auto',
          width: 'auto',
        };
      },
    },
    containerClass: {
      type: String,
      default: '',
    },
    closeOnClickOutside: {
      type: Boolean,
      default: false,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false,
    },
    allowResize: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
  },
  methods: {
    onBeforeEnter() {
      document.addEventListener('keydown', this.handleKeyDown);
      this.$emit('before-open');
    },
    onAfterEnter() {
      this.$emit('opened');
    },
    doClose() {
      this.$emit('update:visible', false);
    },
    onConfirm() {
      this.$emit('confirm');
      this.doClose();
    },
    onCancel() {
      this.$emit('cancel');
      this.doClose();
    },
    // 点击 wrapper 时
    handleWrapperClick() {
      if (this.closeOnClickOutside) {
        this.doClose();
      }
    },
    // keyboard event
    handleKeyDown(e) {
      switch (e.keyCode) {
        // ESC
        case 27: {
          if (this.closeOnPressEscape) {
            this.doClose();
          }
          break;
        }
        default: {
          break;
        }
      }
    },
    // resizer
    handleMousemove(event) {
      const windowParams = getWindowSize();
      //  在低版本浏览器下不要使用 x | width | height，
      const containerParams = this.$refs.container.getBoundingClientRect();
      const targetWidth = event.clientX - containerParams.left;
      const targetHeight = event.clientY - containerParams.top;
      if (targetWidth > this.minWidth && (targetWidth + (2 * this.padding)) < windowParams.width) {
        this.$refs.container.style.width = `${targetWidth}px`;
      }
      if (targetHeight > this.minHeight) {
        this.$refs.container.style.height = `${targetHeight}px`;
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
    onBeforeLeave() {
      this.$emit('before-close');
    },
    onAfterLeave() {
      document.removeEventListener('keydown', this.handleKeyDown);
      this.$emit('closed');
    },
  },
  watch: {
    activeStep(newVal) {
      if (newVal === this.step) return;
      if (this.steps[newVal]) {
        this.steps[newVal].$el.scrollTop = 0;
      }
      this.$emit('update:step', newVal);
    },
    step(newVal) {
      if (newVal !== this.activeStep) {
        if (newVal >= 0 && newVal <= this.steps.length - 1) {
          this.activeStep = newVal;
        } else {
          this.$emit('update:step', this.activeStep);
        }
      }
    },
  },
  components: {
    daoDialogHeader,
    daoDialogFooter,
    daoDialogResizer,
  },
};
</script>

<style lang="scss">
  @import './dao-dialog.scss';
</style>
