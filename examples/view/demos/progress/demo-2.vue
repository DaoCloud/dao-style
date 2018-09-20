<template>
  <div style="width:400px">
    <span>0%</span>
    <dao-progress-pulsing :progress="0.0"></dao-progress-pulsing>
    <span>25%</span>
    <dao-progress-pulsing :progress="0.25"></dao-progress-pulsing>
    <span>50%</span>
    <dao-progress-pulsing :progress="0.50"></dao-progress-pulsing>
    <span>75%</span>
    <dao-progress-pulsing :progress="0.75"></dao-progress-pulsing>
    <span>90%</span>
    <dao-progress-pulsing :progress="0.90"></dao-progress-pulsing>
    <span>100%</span>
    <dao-progress-pulsing :progress="1"></dao-progress-pulsing>
    <span>滚动</span>
    <dao-progress-pulsing :progress="val"></dao-progress-pulsing>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        val: 0,
      };
    },
    mounted() {
      setTimeout(() => {
        this.val = 1;
      }, 1000);
    },
  };
</script>
