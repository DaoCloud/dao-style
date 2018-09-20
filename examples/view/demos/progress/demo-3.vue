<template>
  <div style="width:400px">
    <span>标准情况：10% 30% 40% 20%</span>
    <dao-progress-stacked :green="0.1" :red="0.3" :stripe="0.4" :black="0.2"></dao-progress-stacked>
    <span>有一个参数没传或等于0：10% 无 40% 20%</span>
    <dao-progress-stacked :green="0.1" :stripe="0.4" :black="0.2"></dao-progress-stacked>
    <span>总和大于1：10% 30% 40% 40%</span>
    <dao-progress-stacked :green="0.1" :red="0.3" :stripe="0.4" :black="0.4"></dao-progress-stacked>
    <span>总和小于1：10% 20% 30% 10%</span>
    <dao-progress-stacked :green="0.1" :red="0.2" :stripe="0.3" :black="0.3"></dao-progress-stacked>
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
