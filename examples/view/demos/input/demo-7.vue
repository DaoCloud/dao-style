<template>
  <div class="demo7">
    <h3>
      普通搜索
    </h3>
    <dao-input
      v-model="key"
      search
      placeholder="请输入搜索内容">
    </dao-input>

    <h3>
      有帮助文字的搜索
    </h3>
    <dao-input
      v-model="helpKey"
      search
      show-helper-text
      placeholder="搜索">
    </dao-input>
    <h3>
      禁用的搜索
    </h3>
    <dao-input
      v-model="disabledKey"
      search
      disabled
      placeholder="搜索">
    </dao-input>
    <h3>
      纯样式的搜索
    </h3>
    <input
      class="dao-control search"
      type="text"
      placeholder="搜索(使用纯样式)"
      v-model="styleKey" required>
    <h3>
      小版搜索
    </h3>
    <dao-input
      v-model="smKey"
      search
      size="sm"
      placeholder="小版搜索">
    </dao-input>
  </div>
</template>
<script>
export default {
  name: 'demo7',
  data() {
    return {
      key: '',
      helpKey: '',
      disabledKey: '',
      styleKey: '',
      smKey: '',
    };
  },
};
</script>
<style lang="scss" scoped>
.demo7 h3{
  margin: 20px 0 10px;
  &:first-child {
    margin-top: 0;
  }
}
</style>
