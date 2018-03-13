<template>
  <div>
    <dao-setting-layout>
      <template slot="layout-title">连续值的</template>
      <dao-setting-section class="slider-section">
        <dao-slider
          v-model="valueA"
          :min="rangeA.min"
          :max="rangeA.max"
          @onChange="handleChangeA"
        />
        <div class="show">
          outside Value: {{this.valueA}}
        </div>
      </dao-setting-section>
    </dao-setting-layout>
    <dao-setting-layout>
      <template slot="layout-title">离散值的</template>
      <dao-setting-section>
        <dao-slider
          v-model="valueB"
          :min="rangeB.min"
          :max="rangeB.max"
          :step="step"
          :disabled="false"
          @onChange="handleChangeB"
        />
        <div class="show">
          outside Value: {{this.valueB}}
        </div>
      </dao-setting-section>
    </dao-setting-layout>
    <dao-setting-layout>
      <template slot="layout-title">disabled</template>
      <dao-setting-section>
        <dao-slider
          v-model="valueC"
          :min="rangeC.min"
          :max="rangeC.max"
          :step="step"
          :showStops="true"
          :showTips="true"
          :disabled="true"
          @onChange="handleChangeC"
        />
        <div class="show">
          outside Value: {{this.valueC}}
        </div>
      </dao-setting-section>
    </dao-setting-layout>
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
    created() {
      setTimeout(() => {
        console.log('change rangeB.min');
        this.rangeB.min = -2;
      }, 5000);
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
