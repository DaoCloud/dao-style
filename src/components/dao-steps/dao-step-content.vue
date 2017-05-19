<template>
  <div class="dao-step-content" v-show="isActive">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    index: String, // 唯一标识
  },
  computed: {
    currentActiveStep() {
      return this.$parent.currentStepIndex;
    },
    isActive() {
      if (this.currentActiveStep.indexOf('-') === -1) {
        return this.index === `${this.currentActiveStep}-1`;
      }
      return this.currentActiveStep === this.index;
    },
  },
};
</script>
