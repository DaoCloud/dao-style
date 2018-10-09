<template>
  <div class="demo8">
    <h3>
      普通文本框
    </h3>
    <textarea
      class="dao-control"
      type="text"
      rows="3"
      placeholder="请填写内容" v-model="value">
    </textarea>
    <h3>
     禁用的文本框 
    </h3>
    <textarea
      class="dao-control"
      disabled="disabled"
      type="text"
      rows="3"
      placeholder="请填写内容" v-model="disableTextarea">
    </textarea>
    <h3>
     错误状态的文本框 
    </h3>
    <textarea
      class="dao-control error"
      type="text"
      rows="3"
      placeholder="请填写内容"
      v-model="errorTextarea">
     </textarea>
  </div>
</template>
<script>
export default {
  name: 'demo8',
  data() {
    return {
      value: '',
      disableTextarea: '',
      errorTextarea: '',
    };
  },
};
</script>
<style lang="scss" scoped>
.demo8 h3{
  margin: 20px 0 10px;
  &:first-child {
    margin-top: 0;
  }
}
</style>
