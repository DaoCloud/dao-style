<template>
  <transition name="dao-dialog" @before-enter="beforeEnter"
    @after-enter="getScroll" @before-leave="scrollBodyTop" @after-leave="doDestroy">
    <div
      class="dao-dialog-backdrop"
      :class="{backdrop__scroll: isNeedScroll}"
      v-show="visible"
    >
      <div
        class="dao-dialog-wrapper"
        :class="{
          [typeClass]: true,
        }"
        :size="config.type !== 'feature' ? (config.size) : ''"
        @click.self="handleWrapperClick"
      >
        <div
          class="dao-dialog-container"
          ref="container"
        >
          <daoDialogHeader
            :title="config.title || ''"
            v-if="config.showHeader !== false && config.type !== 'feature'"
          />
          <div
            ref="body"
            class="dao-dialog-body"
            :style="styleBody">
            <slot></slot>
          </div>
          <div class="dao-dialog-footer" v-if="config.showFooter !== false">
            <slot name="footer" v-if="config.type==='multiStep'">
              <button class="dao-btn blue"
                :disabled="activeStep <= 0"
                @click="preStep">
                上一步</button>
              <button class="dao-btn blue"
                @click="nextStep"
                :disabled="activeStep >= (steps.length - 1)"
              >
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
import _ from 'lodash';
import daoDialogHeader from './dao-dialog-header/dao-dialog-header';
import { getStyle } from '../../utils/assist';

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
      default: function () {
        return {
          title: '',
          type: 'normal',
          size: 'md',
          showHeader: true,
          showFooter: true,
          closeOnClickOutside: true,
          closeOnPressEscape: true,
        };
      },
    },
    step: Number,
  },
  data() {
    return {
      steps: [],
      activeStep: -1,
      stepItemWidth: -1,
      isNeedScroll: false,
      poppers: [],
      throttleScrollHandler: () => {},
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
          this.poppers.forEach(popper => {
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
          transform: `translateX(-${(this.activeStep) / this.steps.length * 100}%)`,
        };
      }
      return '';
    },
  },
  methods: {
    // 还原 scrollTop = 0
    scrollBodyTop() {
      if (this.$refs.body.scrollTop !== 0) {
        this.$refs.body.scrollTop = 0;
      }

      if (this.config.type === 'multiStep' && this.steps.length > 0) {
        this.steps.forEach((item) => {
          if (item.$el.scrollTop !== 0) {
            item.$el.scrollTop = 0;
          }
        });
      }
    },
    beforeEnter() {
      // 禁止 body 滚动
      document.body.style.overflowY = 'hidden';
      document.addEventListener('keydown', this.EscClose);
    },
    getScroll() {
      // 判断是否需要 scroll
      const container = this.$refs.container;
      const height = parseInt(getStyle(container, 'height'), 10);
      const windowHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
      if (height > windowHeight) {
        this.isNeedScroll = true;
      }
    },
    // destroy
    doDestroy() {
      document.body.style.overflowY = '';
      document.removeEventListener('keydown', this.EscClose);

      if (this.config.type === 'multiStep') {
        this.activeStep = (this.step >= 0 && this.step <= this.steps.length - 1) ? this.step : 0;
      }
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
    // 按 ESC 键时
    EscClose(e) {
      if (this.visible && (this.config.closeOnPressEscape !== false) && e.keyCode === 27) {
        this.doClose();
      }
    },
    // type: multiStep
    preStep() {
      if (this.activeStep <= 0) {
        return;
      }
      this.activeStep -= 1;
    },
    nextStep() {
      if (this.activeStep >= this.steps.length -1) {
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
  },
  mounted() {
    this.activeStep = (this.step !== this.activeStep && this.step >= 0 &&
      this.steps.length >= this.step + 1) ? this.step : 0;
    this.throttleScrollHandler = _.throttle(this.scrollHandler, 200);
    this.$refs.body.addEventListener('scroll', this.throttleScrollHandler);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.EscClose);
    document.body.style.overflowY = '';
    this.$refs.body.removeEventListener('scroll', this.throttleScrollHandler);
  },
  watch: {
    visible(newVal, oldVal) {
      this.poppers = Array.from(document.querySelectorAll('.append-to-body'));
      if (newVal) {
        this.$emit('dao-dialog-open');
        this.poppers.forEach((popper) => {
          popper.style.visibility = '';
        });
      } else {
        this.$emit('dao-dialog-close');
        this.poppers.forEach((popper) => {
          if (this.$refs.body.contains(popper.reference)) {
            popper.style.visibility = 'hidden';
          }
        });
      }
    },
    // multiStep
    steps(val) {
      if (val && val.length > 0) {
        val.forEach((step, idx) => step.index = idx);
        this.activeStep = (this.step >= 0 && val.length >= this.step + 1) ? this.step : 0;
      }
    },
    activeStep(val) {
      if (val === this.step) return;
      this.$emit('update:step', val);
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
