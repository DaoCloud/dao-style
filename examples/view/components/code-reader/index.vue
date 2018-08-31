<template>
  <div class="code-board">
    <codemirror v-model="code" :options="options">
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
        import(`!!raw-loader!../../${this.file}`)
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
.code-board{
  .CodeMirror{
    // background-color: rgb(30, 33, 39) !important;
  }
  .CodeMirror-line {
    font-family: SF Mono,Monaco,Inconsolata,Fira Mono,Droid Sans Mono,Source Code Pro,monospace !important;
    // font-weight: 600 !important;
    // color: rgb(173, 172, 173);
    // .cm-tag, .cm-keyword{
    //   color: rgb(215, 85, 98);
    // }
    // .cm-attribute{
      
    // }
  }
}
</style>
