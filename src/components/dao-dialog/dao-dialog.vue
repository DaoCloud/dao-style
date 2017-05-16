<template>
  <transition name="dao-dialog" @before-enter="beforeEnter"
    @before-leave="scrollBodyTop" @after-leave="doDestroy">
    <div
      class="dao-dialog-backdrop"
      v-show="visible"
    >
      <div
        class="dao-dialog-wrapper"
        :class="{
          [typeClass]: true,
        }"
        :size="config.type !== 'feature' ? config.size : ''"
        @click.self="handleWrapperClick"
      >
        <div
          class="dao-dialog-container"
          ref="container"
        >
          <daoDialogHeader
            :title="config.title"
            v-if="config.showHeader && config.type !== 'feature'"
          />
          <div
            ref="body"
            class="dao-dialog-body"
            :style="styleBody">
            <slot></slot>
          </div>
          <div class="dao-dialog-footer" v-if="config.showFooter">
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
import daoDialogHeader from './dao-dialog-header/dao-dialog-header';
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
      default: function() {
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
  },
  data() {
    return {
      steps: [],
      activeStep: -1,
      stepItemWidth: -1,
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
        return {
          width: `${this.steps.length*100}%`,
          transform: `translateX(-${(this.activeStep)/this.steps.length *100}%)`,
        };
      }
      return '';
    }
  },
  methods: {
    // 还原 scrollTop = 0
    scrollBodyTop() {
      if(this.$refs.body.scrollTop !== 0) {
        this.$refs.body.scrollTop = 0;
      }

      if(this.config.type === 'multiStep' && this.steps.length > 0) {
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
    // destroy
    doDestroy() {
      document.body.style.overflowY = '';
      document.removeEventListener('keydown', this.EscClose);

      if (this.config.type === 'multiStep') {
        this.activeStep = 0;
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
      if (this.config.closeOnClickOutside) {
        this.doClose();
      }
    },
    // 按 ESC 键时
    EscClose(e) {
      if (this.visible && this.config.closeOnPressEscape && e.keyCode === 27) {
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
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.EscClose);
    document.body.style.overflowY = '';
  },
  watch: {
    visible(newVal, oldVal) {
      if(newVal) {
        this.$emit('dao-dialog-open');
      } else {
        this.$emit('dao-dialog-close');
      }
    },
    // multiStep
    steps(val) {
      if (val && val.length > 0) {
        val.forEach((step, idx) => step.index = idx);
        this.activeStep = 0;
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
