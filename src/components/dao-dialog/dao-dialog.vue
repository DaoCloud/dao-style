<template>
  <transition name="dao-dialog"
    @before-enter="onBeforeEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @after-leave="onAfterLeave">
    <div v-if="visible" class="dao-dialog-backdrop" @mousedown.self="onWrapperMousedown" :class="containerClass">
      <div class="dao-dialog-padding-block"></div>
      <div class="dao-dialog-container" ref="container">
        <dao-dialog-header v-if="computedHeader" :config="computedHeader" @close="onClose">
          <slot name="header"/>
        </dao-dialog-header>
        <div ref="body"  class="dao-dialog-body">
          <slot></slot>
        </div>
        <dao-dialog-footer v-if="computedFooter" :config="computedFooter" @confirm="onConfirm" @cancel="onCancel">
          <slot name="footer"/>
        </dao-dialog-footer>
        <div class="resizer" v-if="computedAllowResize" @mousedown.stop="onMouseDown">
        </div>
      </div>
      <div class="dao-dialog-padding-block"></div>
    </div>
  </transition>
</template>
<script>

import daoDialogHeader from './dao-dialog-header/dao-dialog-header.vue';
import daoDialogFooter from './dao-dialog-footer/dao-dialog-footer.vue';
import { _includes } from '../../utils/assist';

const dialogSizeMap = {
  sm: {
    width: '450px',
    // height: '400px',
  },
  md: {
    width: '600px',
    // height: '500px',
  },
  lg: {
    width: '800px',
    // height: '600px',
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
      type: [Object, Boolean, String],
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
      default: true,
    },
    allowResize: {
      type: Boolean,
      default: false,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    // 兼容旧版 dialog
    config: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    // 兼容旧版 dialog
    computedHeader() {
      if (this.config.showHeader === false || this.header === false) return false;
      if (typeof this.header === 'string') {
        return {
          title: this.header,
          showClose: this.config.showHeaderClose,
        };
      }
      return {
        title: this.config.title || this.header.title,
        showClose: this.config.showHeaderClose || this.header.showClose,
      };
    },
    // 兼容旧版 dialog
    computedFooter() {
      if (this.config.showFooter === false || this.showFooter === false) return false;
      return this.footer;
    },
    computedAllowResize() {
      return this.config.size === 'resize' || this.allowResize;
    },
    computedCloseOnPressEscape() {
      return this.config.closeOnPressEscape || this.closeOnPressEscape;
    },
    computedCloseOnClickOutside() {
      if (typeof this.config.closeOnClickOutside === 'boolean') return this.config.closeOnClickOutside;
      return this.closeOnClickOutside;
    },
    computedSize() {
      if (_includes(Object.keys(dialogSizeMap), this.config.size)) return this.config.size;
      return this.size;
    },
  },
  methods: {
    onBeforeEnter() {
      this.initSize();
      this.lockWindowScroll();
      document.addEventListener('keydown', this.onKeyDown);
      this.$emit('before-open');
    },

    onAfterEnter() {
      this.$emit('opened');
      this.$emit('dao-dialog-open');
    },

    onClose() {
      this.$emit('update:visible', false);
    },

    onConfirm() {
      this.$emit('confirm');
      this.$emit('dao-dialog-confirm');
      this.onClose();
    },

    onCancel() {
      this.$emit('cancel');
      this.$emit('dao-dialog-cancel');
      this.onClose();
    },

    // 不要用 click 事件，难以处理拖拽导致的关闭
    onWrapperMousedown() {
      if (this.computedCloseOnClickOutside) {
        this.onClose();
      }
    },

    onKeyDown({ keyCode }) {
      if (keyCode === 27 && this.computedCloseOnPressEscape) {
        this.onClose();
      }
    },

    onMousemove(event) {
      //  在低版本浏览器下不要使用 x | width | height
      const containerSize = this.$refs.container.getBoundingClientRect();
      const targetWidth = event.clientX - containerSize.left;
      const targetHeight = event.clientY - containerSize.top;
      this.setConatienrSize({
        width: `${targetWidth}px`,
        height: `${targetHeight}px`,
      });
    },

    onMouseup() {
      window.removeEventListener('mousemove', this.onMousemove);
      window.removeEventListener('mouseup', this.onMouseup);
    },

    onMouseDown() {
      window.addEventListener('mousemove', this.onMousemove);
      window.addEventListener('mouseup', this.onMouseup);
    },

    onBeforeLeave() {
      this.$emit('before-close');
    },

    onAfterLeave() {
      document.removeEventListener('keydown', this.onKeyDown);
      this.unLockWindowScroll();
      this.$emit('closed');
      this.$emit('dao-dialog-close');
    },

    // 初始化
    initSize() {
      this.setConatienrSize(dialogSizeMap[this.computedSize] || this.computedSize);
    },

    // 锁定 body 的滚动
    lockWindowScroll() {
      if (this.lockScroll) {
        const currentDialogNum = parseInt(document.body.getAttribute(daoDialogNumAttr) || 0, 10);
        document.body.setAttribute(daoDialogNumAttr, currentDialogNum + 1);
        document.body.style.overflow = 'hidden';
      }
    },

    // 取消对 body 的滚动锁定, 不能直接取消锁定，需要在最后一个对话框关闭之后才锁定
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
