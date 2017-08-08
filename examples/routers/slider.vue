<template>
  <div>
    <h2>连续值的</h2>
    <dao-slider
      v-model="valueA"
      :min="rangeA.min"
      :max="rangeA.max"
      @onChange="handleChangeA"
    >
    </dao-slider>
    <div class="show">
      outside Value: {{this.valueA}}
    </div>
    <h2>离散值的</h2>
    <dao-slider
      v-model="valueB"
      :min="rangeB.min"
      :max="rangeB.max"
      :step="step"
      :disabled="false"
      @onChange="handleChangeB"
    >
    </dao-slider>
    <div class="show">
      outside Value: {{this.valueB}}
    </div>

    <dao-slider
      v-model="valueC"
      :min="rangeC.min"
      :max="rangeC.max"
      :step="step"
      :showStops="true"
      :showTips="true"
      :disabled="true"
      @onChange="handleChangeC"
    >
    </dao-slider>
    <div class="show">
      outside Value: {{this.valueC}}
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        valueA: 28,
        rangeA: {
          min: -20,
          max: 100,
        },
        rangeB: {
          min: -7,
          max: 100,
        },
        rangeC: {
          min: 0,
          max: 100,
        },
        valueB: 28,
        valueC: 30,
        step: 7,
      };
    },
    methods: {
      handleChangeA(data) {
        console.log(`valueA change: ${data}`);
      },
      handleChangeB(data) {
        console.log(`valueB change: ${data}`);
      },
      handleChangeC(data) {
        console.log(`valueC change: ${data}`);
      },
    },
  };
</script>
<style lang="scss">
.show {
  display: inline-block;
  padding: 10px;
  margin-top: 20px;
  line-height: 1.5;
  border: 1px solid #eee;
  font-size: 18px;
  font-weight: 500;
}
</style>
