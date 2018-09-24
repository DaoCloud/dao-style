<template>
  <div class="demo2">
    <h3>
      使用组件
    </h3>
    <dao-input
      v-model="value"
      disabled
      placeholder="请输入内容">
    </dao-input>
    <h3>
      使用纯样式
    </h3>
    <input
      class="dao-control"
      type="text"
      disabled="disabled"
      placeholder="使用纯样式"
      v-model="classValue" />
  </div>
</template>
<script>
export default {
  name: 'Demo2',
  data() {
    return {
      value: '',
      classValue: '',
    };
  },
};
</script>
<style lang="scss" scoped>
.demo2 h3{
  margin: 20px 0 10px;
  &:first-child {
    margin-top: 0;
  }
}
</style>
