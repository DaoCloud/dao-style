<template>
  <transition name="dao-dialog"
    @before-enter="onBeforeEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @after-leave="onAfterLeave">
    <div v-if="visible" class="dao-dialog-backdrop" ref="backdrop">
      <div class="dao-dialog-wrapper" :size="size" ref="dialogWrapper" @click.self="onWrapperClick">
        <div class="dao-dialog-container" :class="formatedContainerClass" ref="container">
          <dao-dialog-header v-if="header" :config="header" @close="onClose">
            <slot name="header"/>
          </dao-dialog-header>
          <div ref="body"  class="dao-dialog-body">
            <div>
              <slot></slot>
            </div>
          </div>
          <dao-dialog-footer v-if="footer" :config="footer" @confirm="onConfirm" @cancel="onCancel">
            <slot name="footer"/>
          </dao-dialog-footer>
          <div class="resizer" v-if="allowResize" @mousedown.prevent="onMouseDown">
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

import daoDialogHeader from './dao-dialog-header/dao-dialog-header.vue';
import daoDialogFooter from './dao-dialog-footer/dao-dialog-footer.vue';
import getWindowSize from '../../utils/window-size';


const dialogBoundary = {
  height: {
    max: 600,
    min: 120,
  },
  width: {
    max: 900,
    min: 200,
  },
  padding: {
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
  },
};

const dialogSizeMap = {
  sm: {
    width: '450px',
    height: '400px',
  },
  md: {
    width: '600px',
    height: '500px',
  },
  lg: {
    width: '800px',
    height: '600px',
  },
};

const daoDialogNumAttr = 'dao-dialog-num';

export default {
  name: 'DaoDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    header: {
      type: [Object, Boolean],
      default() {
        return {};
      },
    },
    footer: {
      type: [Object, Boolean],
      default() {
        return {};
      },
    },
    size: {
      type: [Object, String],
      default: 'md',
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
    lockScroll: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      lastWindowSize: null,
      dragging: false,
    };
  },
  computed: {
    formatedContainerClass() {
      return {
        [this.containerClass]: true,
        dragging: this.dragging,
      };
    },
  },
  methods: {
    onBeforeEnter() {
      this.initSize();
      this.lockWindowScroll();
      document.addEventListener('keydown', this.onKeyDown);
      window.addEventListener('resize', this.onResize);
      this.$emit('before-open');
    },

    onAfterEnter() {
      this.$emit('opened');
    },

    onClose() {
      this.$emit('update:visible', false);
    },

    onConfirm() {
      this.$emit('confirm');
      this.onClose();
    },

    onCancel() {
      this.$emit('cancel');
      this.onClose();
    },

    onWrapperClick() {
      if (this.closeOnClickOutside) {
        this.onClose();
      }
    },

    onKeyDown({ keyCode }) {
      if (keyCode === 27) {
        this.onClose();
      }
    },

    onMousemove(event) {
      //  在低版本浏览器下不要使用 x | width | height，
      const windowSize = getWindowSize();
      const containerSize = this.$refs.container.getBoundingClientRect();
      const targetWidth = event.clientX - containerSize.left;
      const targetHeight = event.clientY - containerSize.top;
      if ((targetWidth + dialogBoundary.padding.left + dialogBoundary.padding.right)
        <= windowSize.width &&
        (targetWidth <= dialogBoundary.width.max) &&
        (targetWidth >= dialogBoundary.width.min)) {
        this.setConatienrSize({
          width: `${targetWidth}px`,
        });
      }
      if ((targetHeight + dialogBoundary.padding.top + dialogBoundary.padding.bottom
        <= windowSize.height) &&
        (targetHeight <= dialogBoundary.height.max) &&
        (targetHeight >= dialogBoundary.height.min)) {
        this.setConatienrSize({
          height: `${targetHeight}px`,
        });
      }
    },

    onResize() {
      const windowSize = getWindowSize();
      const containerSize = this.$refs.container.getBoundingClientRect();
      // 缩小
      // 宽度越界
      const widthPadding = dialogBoundary.padding.left + dialogBoundary.padding.right;
      if ((windowSize.width <= (containerSize.width + widthPadding)) &&
        (containerSize.width >= dialogBoundary.width.min)) {
        this.setConatienrSize({
          width: `${windowSize.width - widthPadding}px`,
        });
      }
      // 高度越界
      const heightPadding = dialogBoundary.padding.top + dialogBoundary.padding.bottom;
      if ((windowSize.height <= (containerSize.height + heightPadding)) &&
        (containerSize.height >= dialogBoundary.height.min)) {
        this.setConatienrSize({
          height: `${windowSize.height - heightPadding}px`,
        });
      }
      // 扩大
      if (this.lastWindowSize) {
        // 变宽了
        const bodySize = this.$refs.body.querySelector('div').getBoundingClientRect();
        if (this.lastWindowSize.width < windowSize.width &&
          containerSize.width <= dialogBoundary.width.max) {
          // 内容越界
          if (bodySize.width > containerSize.width) {
            this.setConatienrSize({
              width: `${windowSize.width - heightPadding}px`,
            });
          }
        }
        // 变高了
        if (this.lastWindowSize.height < windowSize.height) {
          // 内容越界
          if (bodySize.height > containerSize.height &&
            containerSize.height <= dialogBoundary.height.max) {
            this.setConatienrSize({
              height: `${windowSize.height - heightPadding}px`,
            });
          }
        }
      }
      this.lastWindowSize = windowSize;
    },

    onMouseup() {
      this.dragging = false;
      window.removeEventListener('mousemove', this.onMousemove);
      window.removeEventListener('mouseup', this.onMouseup);
    },

    onMouseDown() {
      this.dragging = true;
      window.addEventListener('mousemove', this.onMousemove);
      window.addEventListener('mouseup', this.onMouseup);
    },

    onBeforeLeave() {
      this.$emit('before-close');
    },

    onAfterLeave() {
      document.removeEventListener('keydown', this.onKeyDown);
      window.removeEventListener('resize', this.onResize);
      this.lastWindowSize = null;
      this.unLockWindowScroll();
      this.$emit('closed');
    },

    initSize() {
      this.setConatienrSize(dialogSizeMap[this.size] || this.size);
      // 需要在动画完成之后再手动触发一次自动调整
      setTimeout(() => {
        this.onResize();
      }, 300);
    },

    lockWindowScroll() {
      if (this.lockScroll) {
        const currentDialogNum = parseInt(document.body.getAttribute(daoDialogNumAttr) || 0, 10);
        document.body.setAttribute(daoDialogNumAttr, currentDialogNum + 1);
        document.body.style.overflow = 'hidden';
      }
    },

    unLockWindowScroll() {
      if (this.lockScroll) {
        const specDialogNum = document.body.getAttribute(daoDialogNumAttr) - 1;
        if (specDialogNum === 0) {
          document.body.removeAttribute(daoDialogNumAttr);
          document.body.style.overflow = '';
        } else {
          document.body.setAttribute(daoDialogNumAttr, specDialogNum);
        }
      }
    },

    setConatienrSize({ height, width }) {
      if (height) {
        this.$refs.container.style.height = height;
      }
      if (width) {
        this.$refs.container.style.width = width;
      }
    },
  },
  components: {
    daoDialogHeader,
    daoDialogFooter,
  },
};
</script>

<style lang="scss">
  @import './dao-dialog.scss';
</style>
