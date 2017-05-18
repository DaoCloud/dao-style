<template>
  <div class="dao-substep"
    :class="{ active: isActive, visited: isVisited, noClick: noClick, noActive: noActive }"
    @click="skipTo">
    <div class="dot"></div>
    <div class="title" v-if="title">{{ title }}</div><!--
    --><div class="title" v-if="!title"><slot></slot></div>
  </div>
</template>
<script>
import Emitter from '../../mixins/emitter';

export default {
  mixins: [Emitter],
  props: {
    index: String, // 唯一标识
    title: String, // 子步骤标题
    active: Function, // 步骤激活回调
    // 当前步骤的状态，可选值：success, warning, locked
    status: String,
    // 是否不可点击
    noClick: {
      type: Boolean,
      default: false,
    },
    // 是否不可访问
    noActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    canClick() {
      return !this.noClick && !this.$parent.noClick && !this.$parent.$parent.noClick;
    },
    canActive() {
      return !this.noActive && !this.$parent.noActive;
    },
    currentActiveStep() {
      return this.$parent.$parent.currentStepIndex;
    },
    isActive() {
      if (this.currentActiveStep.indexOf('-') === -1) {
        return this.index === `${this.currentActiveStep}-1`;
      }
      return this.currentActiveStep === this.index;
    },
    isVisited() {
      if (this.visited) return true;
      // 保留访问过的状态
      if (this.currentActiveStep > this.index) {
        this.visited = true;
      }
      return this.currentActiveStep > this.index;
    },
  },
  methods: {
    skipTo() {
      if (!this.canClick || !this.canActive) return;
      this.dispatch('daoSteps', 'skip', this.index);
    },
  },
  watch: {
    isActive(newV, oldV) {
      if (newV && !oldV && this.active) {
        this.active();
      }
    },
  },
};
</script>
