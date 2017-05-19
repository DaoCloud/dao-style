<template>
  <div class="dao-step" :class="{ active: isActive, visited: isVisited, noClick: noClick, noActive: noActive }">
    <div class="dao-step-title">
      <div class="caret">{{ index }}</div><!--
      --><div class="title" v-if="title">{{ title }}</div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    index: String, // 唯一标识
    title: String, // 步骤标题
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
  data() {
    return {
      visited: false,
    };
  },
  computed: {
    currentActiveStep() {
      return this.$parent.currentStepIndex.split('-')[0];
    },
    isActive() {
      return this.currentActiveStep === this.index;
    },
    isVisited() {
      if (this.visited) return true;
      // 保留访问过的状态
      if (this.currentActiveStep >= this.index) {
        this.visited = true;
      }
      return this.currentActiveStep >= this.index;
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
