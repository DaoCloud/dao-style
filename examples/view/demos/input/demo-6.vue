<template>
  <div class="demo6">
    <h3>
      普通数字输入框
    </h3>
    <dao-numeric-input
      v-model="value"
      :min='-5'
      :max='80'
      placeholder="min: -5 max: 80 float">
    </dao-numeric-input>
    <h3>
      带单位的数字输入框
    </h3>
    <dao-numeric-input
      v-model="unitValue"
      type='int'
      :min='-5'
      :max='10'
      unit="KG"
      block
      placeholder="min: -5 max: 10 int">
    </dao-numeric-input>
    <h3>
      禁止编辑的数字输入框 
    </h3>
    <dao-numeric-input
      :disabled="true"
      v-model="disabledValue"
      placeholder="disabled">
    </dao-numeric-input>
  </div>
</template>
<script>
export default {
  name: 'demo6',
  data() {
    return {
      value: '',
      unitValue: '',
      disabledValue: '',
    };
  },
};
</script>
<style lang="scss" scoped>
.demo6 h3{
  margin: 20px 0 10px;
  &:first-child {
    margin-top: 0;
  }
}
</style>
