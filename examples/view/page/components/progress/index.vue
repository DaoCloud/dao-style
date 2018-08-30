<template>
  <div>
    <div>
    进度条会自动撑满父元素的宽度
    </div>

    <div class="demo-container">
      <h4>用量(usage)</h4>
      <div style="width: 300px">
        <span>0%</span>
        <dao-progress type="usage" :progress="0.0"></dao-progress>
        <span>25%</span>
        <dao-progress type="usage" :progress="0.25"></dao-progress>
        <span>50%</span>
        <dao-progress type="usage" :progress="0.50"></dao-progress>
        <span>75%</span>
        <dao-progress type="usage" :progress="0.75"></dao-progress>
        <span>90%</span>
        <dao-progress type="usage" :progress="0.90"></dao-progress>
        <span>100%</span>
        <dao-progress type="usage" :progress="1"></dao-progress>
      </div>
    </div>

    <div class="demo-container">
      <h4>错误(error)</h4>
      <div style="width: 300px">
        <dao-progress type="error"></dao-progress>
      </div>
    </div>


    <div class="demo-container">
      <h4>基本(basic)</h4>
      <div style="width: 300px">
          <span>0%</span>
          <dao-progress type="basic" :progress="0.0"></dao-progress>
          <span>25%</span>
          <dao-progress type="basic" :progress="0.25"></dao-progress>
          <span>50%</span>
          <dao-progress type="basic" :progress="0.50"></dao-progress>
          <span>75%</span>
          <dao-progress type="basic" :progress="0.75"></dao-progress>
          <span>90%</span>
          <dao-progress type="basic" :progress="0.90"></dao-progress>
          <span>100%</span>
          <dao-progress type="basic" :progress="1"></dao-progress>
      </div>

    </div>


    <div class="demo-container">
      <h4>脉动(pulsing)</h4>

      <div style="width: 300px">
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

    </div>


    <div class="demo-container">
      <h4>组合(stacked)</h4>
      <div style="width: 300px">
        <p>每个色条都是 flex: 1 1 auto的</p>
        <span>标准情况：10% 30% 40% 20%</span>
        <dao-progress-stacked :green="0.1" :red="0.3" :stripe="0.4" :black="0.2"></dao-progress-stacked>
        <span>有一个参数没传或等于0：10% 无 40% 20%</span>
        <dao-progress-stacked :green="0.1" :stripe="0.4" :black="0.2"></dao-progress-stacked>
        <span>总和大于1：10% 30% 40% 40%</span>
        <dao-progress-stacked :green="0.1" :red="0.3" :stripe="0.4" :black="0.4"></dao-progress-stacked>
        <span>总和小于1：10% 20% 30% 10%</span>
        <dao-progress-stacked :green="0.1" :red="0.2" :stripe="0.3" :black="0.3"></dao-progress-stacked>
      </div>
    </div>    

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
    }
  };
</script>

<style lang="scss" scoped>
.demo-container {
  margin-bottom: 30px;
}
</style>
