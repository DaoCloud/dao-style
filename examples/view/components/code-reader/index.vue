<template>
  <div class="code-reader">
    <codemirror
      v-model="code"
      :options="options">
    </codemirror>
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
      options: {
        tabSize: 2,
        mode: 'text/x-vue',
        theme: 'monokai',
      },
    };
  },
  watch: {
    file: {
      handler() {
        // 动态加载 vue 代码
        // TODO 按需打包文件，不要全量打包
        import(`!!raw-loader!../../page/${this.file}`)
          .then((res) => {
            this.code = res.default;
          });
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
.code-reader{
  .CodeMirror-line {
    font-family: SF Mono,Monaco,Inconsolata,Fira Mono,Droid Sans Mono,Source Code Pro,monospace !important;
  }
}
</style>
