<template>
  <transition name="dao-dialog" @before-enter="$onInit" @after-leave="$onDestory">
    <div v-if="visible" :class="backdropClass" ref="backdrop">
      <div :class="wrapperClass" :size="size" ref="dialogWrapper" @click.self="handleWrapperClick">
        <div class="dao-dialog-container" ref="container">
          <dao-dialog-header v-if="showHeader"  :title="config.title" @close="doClose"
            :show-header-close="config.showHeaderClose">
          </dao-dialog-header>
          <div ref="body"  class="dao-dialog-body" :style="bodyStyle">
            <slot></slot>
          </div>
          <div class="dao-dialog-footer" v-if="showFooter">
            <slot name="footer" v-if="config.type === 'multiStep'">
              <button class="dao-btn blue" :disabled="activeStep <= 0" @click="preStep">
                上一步</button>
              <button class="dao-btn blue"  @click="nextStep" :disabled="activeStep >= (steps.length - 1)">
                下一步</button>
            </slot>
            <slot name="footer" v-else>
              <button class="dao-btn ghost" @click="clickCancel">取消</button>
              <button class="dao-btn blue" @click="clickConfirm">确认</button>
            </slot>
          </div>
          <dao-dialog-resizer 
            class="resize-handle" 
            v-if="size === 'resize'"
            :container="$refs.container"
            :padding="20"
            @resizeWidth="handleResizeWidth"
            @resizeHeight="handleResizeHeight">
          </dao-dialog-resizer>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import daoDialogHeader from './dao-dialog-header/dao-dialog-header.vue';
import daoDialogResizer from './dao-dialog-resizer/dao-dialog-resizer.vue';

import {
  getStyle,
  getWindowWidthAndHeight,
} from '../../utils/assist';

const daoDialogCountAttr = 'data-dao-dialog-count';

const defaultDialogConfig = {
  title: '',
  type: 'normal',
  size: 'md',
  showHeader: true,
  showHeaderClose: true,
  showFooter: true,
  closeOnClickOutside: true,
  closeOnPressEscape: true,
};

// 对于 popper 的检测需要在动画结束之后再检测，否则会出现定位偏差
const AnimationTime = 300;

export default {
  name: 'DaoDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Object,
      required: true,
      default() {
        return defaultDialogConfig;
      },
    },
    step: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      steps: [],
      originStep: 0,
      activeStep: 0,
      overflow: {
        x: false,
        y: false,
      },
    };
  },
  computed: {
    wrapperClass() {
      return {
        [`dao-dialog__${this.config.type || defaultDialogConfig.type}`]: true,
        'dao-dialog-wrapper': true,
      };
    },
    bodyStyle() {
      if (this.config.type === 'multiStep') {
        this.hideOverflowPoppers();
        return {
          width: `${this.steps.length * 100}%`,
          transform: `translateX(-${(this.activeStep / this.steps.length) * 100}%)`,
        };
      }
      return '';
    },
    size() {
      return this.config.type !== 'feature' ? (this.config.size) : '';
    },
    showHeader() {
      return this.config.showHeader !== false && this.config.type !== 'feature';
    },
    showFooter() {
      return this.config.showFooter !== false;
    },
    backdropClass() {
      return {
        'dao-dialog-backdrop': true,
        backdrop__scrollY: this.overflow.y,
        backdrop__scrollX: this.overflow.x,
      };
    },
  },
  methods: {
    $onInit() {
      if (this.config.type === 'multiStep') {
        this.initStep();
      }
      this.$nextTick(() => {
        this.adjustOverflow();
        this.adjustPoppers();
      });
      // 禁止 body 滚动
      const count = document.body.getAttribute(daoDialogCountAttr);
      document.body.setAttribute(daoDialogCountAttr, count ? parseInt(count, 10) + 1 : 1);
      document.body.style.overflowY = 'hidden';
      document.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('resize', this.adjustOverflow);
      this.$emit('dao-dialog-open');
    },
    // 初始化 MultiStep 的初始位置
    initStep() {
      // 保存住 step
      this.originStep = this.step || 0;
      this.activeStep = (this.step && this.step >= 0 && this.step <= this.steps.length - 1)
        ? this.step : 0;
    },
    // 检查是否需要滚动条
    adjustOverflow() {
      // 判断是否需要 scroll
      const container = this.$refs.container;
      const height = parseInt(getStyle(container, 'height'), 10);
      const width = parseInt(getStyle(container, 'width'), 10);
      const windowParams = getWindowWidthAndHeight();
      this.overflow = {
        x: height > windowParams.height,
        y: width > windowParams.width,
      };
    },
    // close dialog
    doClose() {
      this.$emit('update:visible', false);
    },
    // 确认操作
    clickConfirm() {
      this.$emit('dao-dialog-confirm');
      this.doClose();
    },
    // 取消操作
    clickCancel() {
      this.$emit('dao-dialog-cancel');
      this.doClose();
    },
    handleResizeWidth(width) {
      this.$refs.container.style.width = `${width}px`;
    },
    handleResizeHeight(height) {
      this.$refs.container.style.height = `${height}px`;
       // 每次高度调整都需要去检测一下是否溢出
      this.adjustOverflow();
    },
    // 点击 wrapper 时
    handleWrapperClick() {
      if (this.config.closeOnClickOutside !== false && this.size !== 'resize') {
        this.doClose();
      }
    },
    // 键盘事件
    handleKeyDown(e) {
      switch (e.keyCode) {
        // ESC
        case 27: {
          if (this.config.closeOnPressEscape !== false) {
            this.doClose();
          }
          break;
        }
        // 向右
        // case 40:
        // case 39: {
        //   if (this.config.changePageOnDirectionKey !== false
        //     && this.config.type === 'multiStep') {
        //     this.nextStep();
        //   }
        //   break;
        // }
        // // 向左
        // case 38:
        // case 37: {
        //   if (this.config.changePageOnDirectionKey !== false
        //     && this.config.type === 'multiStep') {
        //     this.preStep();
        //   }
        //   break;
        // }
        default: {
          break;
        }
      }
    },
    preStep() {
      if (this.activeStep <= 0) {
        return;
      }
      this.activeStep -= 1;
    },
    nextStep() {
      if (this.activeStep >= this.steps.length - 1) {
        return;
      }
      this.activeStep += 1;
    },
    // 调整一下 poppers 的位置，append-to-body 的 popper 可能会出现错位
    adjustPoppers() {
      const poppers = Array.from(document.querySelectorAll('.append-to-body'));
      this.$nextTick(() => {
        poppers.forEach((popper) => {
          if (this.$refs.body.contains(popper.reference)) {
            popper.style.visibility = 'hidden';
          }
        });
      });
      this.$nextTick(() => {
        setTimeout(() => {
          poppers.forEach((popper) => {
            if ('popper' in popper) {
              popper.popper.update();
            }
            popper.style.visibility = '';
          });
        }, AnimationTime);
      });
    },
    // MultiStep 左右滑动的过程中，会导致 popper 溢出
    hideOverflowPoppers() {
      this.$nextTick(() => {
        const poppers = Array.from(document.querySelectorAll('.append-to-body'));
        setTimeout(() => {
          poppers.forEach((popper) => {
            const reference = popper.reference;
            // 在当前 dialog 里
            if (this.$refs.body.contains(reference) && reference.getBoundingClientRect) {
              const bodyParams = this.$refs.body.getBoundingClientRect();
              const referenceParams = reference.getBoundingClientRect();
              const perStepWidth = bodyParams.width / this.steps.length;
              const leftBoundary = bodyParams.left + (perStepWidth * this.activeStep);
              const rightBoundary = bodyParams.left + (perStepWidth * (this.activeStep + 1));
              if ('popper' in popper) {
                popper.popper.update();
              }
              if (referenceParams.left >= leftBoundary && referenceParams.right <= rightBoundary) {
                popper.style.visibility = '';
              } else {
                popper.style.visibility = 'hidden';
              }
            }
          });
        }, AnimationTime);
      });
    },
    $onDestory() {
      // 恢复到原始状态
      this.steps = [];
      this.activeStep = this.originStep;
      // 当关闭最后一个对话框时候，需要让滚动条恢复
      const count = parseInt(document.body.getAttribute(daoDialogCountAttr), 10);
      document.body.setAttribute(daoDialogCountAttr, count - 1);
      if (count === 1) {
        document.body.style.overflowY = '';
        document.body.style.overflowX = '';
      }
      document.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('resize', this.adjustOverflow);
      this.$emit('dao-dialog-close');
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
    daoDialogResizer,
  },
};
</script>

<style lang="scss">
  @import './dao-dialog.scss';
</style>
