<template>
  <div>
    <div class="dao-btn ghost" @click="lastStep">上一步</div>
    <div class="dao-btn blue" @click="nextStep">下一步</div>
    <dao-steps v-model="currentStep">
      <dao-step slot="step" index="1" title="步骤一">
        <dao-substep index="1-1">1-1</dao-substep>
        <dao-substep index="1-2" :no-click="true">1-2(不可点击)</dao-substep>
        <dao-substep index="1-3">1-3</dao-substep>
      </dao-step>
      <dao-step slot="step" index="2" title="步骤二" :active="activeStepFun">
        <dao-substep index="2-1"  :no-active="true">2-1(不可访问)</dao-substep>
        <dao-substep index="2-2" :active="activeSubstepFun">2-2</dao-substep>
      </dao-step>
      <dao-step-content
        v-for="s in steps"
        :key="s"
        slot="content"
        :index="s">
        步骤 {{s}} 的内容
      </dao-step-content>
      </dao-steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentStep: '1-1',
      steps: ['1-1', '1-2', '1-3', '2-1', '2-2'],
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
      console.log('这是到步骤 二 的回调函数');
    },
    activeSubstepFun() {
      console.log('这是到步骤 2-1 的回调函数');
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
