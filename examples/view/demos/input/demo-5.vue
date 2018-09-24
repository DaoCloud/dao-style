<template>
  <div class="demo5">
    <h3>
      使用组件
    </h3>
    <dao-input
      v-model="value"
      size="sm"
      placeholder="请输入内容">
    </dao-input>
    <h3>
      使用纯样式
    </h3>
    <input
      class="dao-control"
      size="sm"
      type="text"
      placeholder="使用纯样式" v-model="classValue" />
  </div>
</template>
<script>
export default {
  name: 'Demo5',
  data() {
    return {
      value: '',
      classValue: '',
    };
  },
};
</script>
<style lang="scss" scoped>
.demo5 h3{
  margin: 20px 0 10px;
  &:first-child {
    margin-top: 0;
  }
}
</style>
