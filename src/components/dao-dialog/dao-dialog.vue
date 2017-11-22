<template>
  <transition 
    name="dao-dialog" 
    @before-enter="$onInit"
    @after-leave="$onDestory">
    <div
      class="dao-dialog-backdrop"
      :class="{backdrop__scroll: isNeedScroll}"
      v-if="visible">
      <div
        class="dao-dialog-wrapper"
        :class="{
          [typeClass]: true,
        }"
        :size="config.type !== 'feature' ? (config.size) : ''"
        @click.self="handleWrapperClick">
        <div
          class="dao-dialog-container"
          ref="container">
          <daoDialogHeader
            :title="config.title || ''"
            v-if="config.showHeader !== false && config.type !== 'feature'"
            @close="doClose"/>
          <div
            ref="body"
            class="dao-dialog-body"
            :style="styleBody">
            <slot></slot>
          </div>
          <div class="dao-dialog-footer" v-if="config.showFooter !== false">
            <slot name="footer" v-if="config.type === 'multiStep'">
              <button class="dao-btn blue"
                :disabled="activeStep <= 0"
                @click="preStep">
                上一步</button>
              <button class="dao-btn blue"
                @click="nextStep"
                :disabled="activeStep >= (steps.length - 1)">
                下一步</button>
            </slot>
            <slot name="footer" v-else>
              <button class="dao-btn ghost" @click="clickCancel">取消</button>
              <button class="dao-btn blue" @click="clickConfirm">确认</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

import daoDialogHeader from './dao-dialog-header/dao-dialog-header.vue';
import { getStyle } from '../../utils/assist';

const daoDialogCountAttr = 'data-dao-dialog-count';

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
        return {
          title: '',
          type: 'normal',
          size: 'md',
          showHeader: true,
          showFooter: true,
          closeOnClickOutside: true,
          closeOnPressEscape: true,
          // changePageOnDirectionKey: true,
        };
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
      isNeedScroll: false,
      poppers: [],
    };
  },
  computed: {
    typeClass() {
      if (this.config.type) {
        return `dao-dialog__${this.config.type}`;
      }
      return '';
    },
    styleBody() {
      if (this.config.type === 'multiStep') {
        this.$nextTick(() => {
          this.poppers = Array.from(document.querySelectorAll('.append-to-body'));
          this.poppers.forEach((popper) => {
            if (this.$refs.body.contains(popper.reference)) {
              popper.style.visibility = 'hidden';
            }
          });
        });
        this.$nextTick(() => {
          const that = this;
          setTimeout(() => {
            that.poppers.forEach((popper) => {
              if ('popper' in popper) {
                popper.popper.update();
              }
              popper.style.visibility = '';
            });
          }, 350);
        });
        return {
          width: `${this.steps.length * 100}%`,
          transform: `translateX(-${(this.activeStep / this.steps.length) * 100}%)`,
        };
      }
      return '';
    },
  },
  methods: {
    $onInit() {
      if (this.config.type === 'multiStep') {
        this.initStep();
      }
      this.$nextTick(() => {
        this.checkIfWrapperScrollIsNeeded();
        this.scrollHandler();
      });
      // 禁止 body 滚动
      const count = document.body.getAttribute(daoDialogCountAttr);
      document.body.setAttribute(daoDialogCountAttr, count ? parseInt(count, 10) + 1 : 1);
      document.body.style.overflowY = 'hidden';
      document.addEventListener('keydown', this.handleKeyDown);
      this.$emit('dao-dialog-open');
    },
    // 初始化 MultiStep 的初始位置
    initStep() {
      // 保存住 step
      this.originStep = this.step || 0;
      this.activeStep = (this.step && this.step >= 0 && this.step <= this.steps.length - 1)
        ? this.step : 0;
    },
    checkIfWrapperScrollIsNeeded() {
      // 判断是否需要 scroll
      const container = this.$refs.container;
      const height = parseInt(getStyle(container, 'height'), 10);
      const windowHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
      this.isNeedScroll = height > windowHeight;
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
    // 点击 wrapper 时
    handleWrapperClick() {
      if (this.config.closeOnClickOutside !== false) {
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
    scrollHandler() {
      const references = Array.from(this.$refs.body.querySelectorAll('[class$=-rel]'));
      const dialogRect = this.$refs.body.getBoundingClientRect();
      references.forEach((r) => {
        if (!r.popper) return;
        const rect = r.getBoundingClientRect();
        if (
          rect.bottom < dialogRect.top ||
          rect.top > dialogRect.bottom
        ) {
          r.popper.style.visibility = 'hidden';
        } else {
          r.popper.style.visibility = '';
        }
      });
    },
    $onDestory() {
      this.steps = [];
      // 当关闭最后一个对话框时候，需要让滚动条恢复
      const count = parseInt(document.body.getAttribute(daoDialogCountAttr), 10);
      document.body.setAttribute(daoDialogCountAttr, count - 1);
      if (count === 1) {
        document.body.style.overflowY = '';
      }
      document.removeEventListener('keydown', this.handleKeyDown);
      this.$emit('dao-dialog-close');
    },
  },
  watch: {
    visible(newVal) {
      this.poppers = Array.from(document.querySelectorAll('.append-to-body'));
      if (newVal) {
        this.poppers.forEach((popper) => {
          popper.style.visibility = '';
        });
      } else {
        // reset step
        this.activeStep = this.originStep;
        this.poppers.forEach((popper) => {
          if (this.$refs.body.contains(popper.reference)) {
            popper.style.visibility = 'hidden';
          }
        });
      }
    },
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
  },
};
</script>

<style lang="scss">
  @import './dao-dialog.scss';
</style>
