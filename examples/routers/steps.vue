<template>
  <div>
    <div class="dao-btn ghost" @click="lastStep">上一步</div>
    <div class="dao-btn blue" @click="nextStep">下一步</div>
    <dao-steps v-model="currentStep">
      <dao-step slot="step" index="1" title="步骤一">
        <dao-substep index="1-1">1-1</dao-substep>
        <dao-substep index="1-2" :no-click="noClick">1-2(不可点击)</dao-substep>
        <dao-substep index="1-3" :no-active="noActive">1-3(不可访问)</dao-substep>
      </dao-step>
      <dao-step slot="step" index="2" title="步骤二" :active="activeStepFun">
        <dao-substep index="2-1" :active="activeSubstepFun">2-1</dao-substep>
        <dao-substep index="2-2">2-2</dao-substep>
        <dao-substep index="2-3">2-3</dao-substep>
      </dao-step>
      <dao-step slot="step" index="3" title="步骤三">
        <dao-substep index="3-1">3-1</dao-substep>
        <dao-substep index="3-2">3-2</dao-substep>
        <dao-substep index="3-3">3-3</dao-substep>
      </dao-step>
      <dao-step slot="step" index="4" title="步骤四">
        <dao-substep index="4-1">4-1</dao-substep>
        <dao-substep index="4-2">4-2</dao-substep>
        <dao-substep index="4-3">4-3</dao-substep>
      </dao-step>
      <dao-step-content slot="content" index="1-1">
        步骤 1-1 的内容
        <dao-popover
          content="a"
          placement="top-start"
          :always="true">
          <button class="dao-btn ghost">上左</button>
        </dao-popover>
      </dao-step-content>
      <dao-step-content slot="content" index="1-2">步骤 1-2 的内容</dao-step-content>
      <dao-step-content slot="content" index="1-3">步骤 1-3 的内容</dao-step-content>
      <dao-step-content slot="content" index="2-1">步骤 2-1 的内容</dao-step-content>
      <dao-step-content slot="content" index="2-2">步骤 2-2 的内容</dao-step-content>
      <dao-step-content slot="content" index="2-3">步骤 2-3 的内容</dao-step-content>
      <dao-step-content slot="content" index="3-1">步骤 3-1 的内容</dao-step-content>
      <dao-step-content slot="content" index="3-2">步骤 3-2 的内容</dao-step-content>
      <dao-step-content slot="content" index="3-3">步骤 3-3 的内容</dao-step-content>
      <dao-step-content slot="content" index="4-1">步骤 4-1 的内容</dao-step-content>
      <dao-step-content slot="content" index="4-2">步骤 4-2 的内容</dao-step-content>
      <dao-step-content slot="content" index="4-3">步骤 4-3 的内容</dao-step-content>
    </dao-steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      noClick: true,
      noActive: true,
      currentStep: '1-1',
      steps: ['1-1', '1-2', '1-3', '2-1', '2-2', '2-3', '3-1', '3-2', '3-3', '4-1', '4-2', '4-3'],
    };
  },
  methods: {
    lastStep() {
      const index = this.steps.indexOf(this.currentStep);
      if (index === -1 || index === 0) return;
      this.currentStep = this.steps[index - 1];
    },
    nextStep() {
      const index = this.steps.indexOf(this.currentStep);
      if (index === -1 || index === this.steps.length - 1) return;
      this.currentStep = this.steps[index + 1];
    },
    activeStepFun() {
      console.log('这是到步骤 二 的回调函数哦～');
    },
    activeSubstepFun() {
      console.log('这是到步骤 2-1 的回调函数哦～');
    },
  },
  watch: {
    currentStep: {
      handler(newV) {
        console.log('当前步骤是：', newV);
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss">
  
</style>
