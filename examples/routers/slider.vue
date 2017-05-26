<template>
  <div>
    <h2>连续值的</h2>
    <dao-slider
      v-model="valueA"
      :range="rangeA"
      :onChange="handleChange"
    >
    </dao-slider>
    <div class="show">
      outside Value: {{this.valueA}}
    </div>
    <h2>离散值的</h2>
    <dao-slider
      v-model="valueB"
      :range="rangeB"
      :step="step"
      :onChange="handleChange"
    >
    </dao-slider>
    <div class="show">
      outside Value: {{this.valueB}}
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        valueA: 28,
        rangeA: [20, 100],
        valueB: 28,
        rangeB: [20, 100],
        step: 7,
      };
    },
    methods: {
      handleChange() {
        console.log('value change!');
      }
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
