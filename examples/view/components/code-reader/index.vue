<template>
  <div class="code-reader">
    <code-block type="vue" :code="code"></code-block>
  </div>
</template>

<script>
export default {
  name: 'CodeReader',
  props: {
    type: {
      type: String,
      default: 'vue',
    },
    file: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      code: '',
    };
  },
  watch: {
    file: {
      handler() {
        // 动态加载 vue 代码
        // TODO 按需打包文件，不要全量打包
        import(`!!raw-loader!../../demos/${this.file}`)
          .then((res) => {
            this.code = res.default;
          });
      },
      immediate: true,
    },
  },
};
</script>