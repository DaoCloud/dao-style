<template>
  <!-- tips -->
  <div
    class="dao-slider-tip-wrap">
    <div
      class="dao-slider-tip"
      :style="{left: stop * 100 + '%'}"
      v-for="stop in stops">
      {{updateNewVal(stop)}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DaoSliderTips',
    props: ['stops', 'max', 'min'],
    methods: {
      // position -> value
      updateNewVal(pos) {
        const newVal = (pos * (this.max - this.min)) + this.min;
        return parseInt(newVal.toFixed(1), 10);
      },
    },
  };
</script>
<style lang="scss">
  @import '../varibles.scss';

  .dao-slider-tip-wrap {
    position: relative;

    .dao-slider-tip {
      position: absolute;
      margin-top: 5px;
      color: $tip-color;
      font-size: 12px;
      transform: translateX(-50%);
    }
  }
</style>
