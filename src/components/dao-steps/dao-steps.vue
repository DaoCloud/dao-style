<template>
  <div class="dao-steps" :class="{ noClick: noClick }">
    <div class="dao-steps-sidebar">
      <slot name="step"></slot>
    </div>
    <div class="dao-steps-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  componentName: 'daoSteps',
  props: {
    // 当前激活菜单的 index
    // 使用 Object 类型是为了在组件内部改变了步骤可以反馈到组件外部，如：点击跳转步骤
    value: {
      type: String,
      default: '1',
    },
    // 切换菜单的方式，提供两种方式：点击、通过 js 改变 <dao-steps> 上的 current-active
    noClick: {
      type: Boolean,
      default: false, // 可以是 click, changeIndex
    },
  },
  computed: {
    currentStepIndex() {
      // 判断要跳转的步骤是否可访问
      const findIfNoActive = (index) => {
        const stepIndex = index.split('-')[0];
        let result = false;
        this.$children.forEach((step) => {
          if (stepIndex === step.index && step.noActive) {
            result = true;
          }
          step.$children.forEach((substep) => {
            if (index === substep.index && substep.noActive) {
              result = true;
            }
          });
        });
        return result;
      };
      // 要跳转的步骤不可访问则不改变 currentStepIndex 的值，并且重置外部传进来的 currentStep 的 index 值
      const ifNoActive = findIfNoActive(this.value);
      if (ifNoActive) {
        // 应群众要求，当要跳转的步骤不可访问时，并不去改 value
        // this.$emit('input', this.oldStepIndex);
        return this.oldStepIndex;
      }
      // 记录上一次的 currentStepIndex 值，以便不可访问时回滚
      this.oldStepIndex = this.value;

      return this.value;
    },
  },
  methods: {
    skipTo(index) {
      // this.value = index;
      this.$emit('input', index);
    },
  },
  created() {
    this.$on('skip', this.skipTo);
  },
};
</script>
<style lang="scss">
@import './dao-steps.scss';  
</style>
