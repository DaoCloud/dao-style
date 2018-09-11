<template>
  <div class="code-block">
    <codemirror
      v-model="c"
      :options="options">
    </codemirror>
  </div>
</template>

<script>
export default {
  name: 'CodeBlock',
  props: {
    type: {
      type: String,
      default: 'vue',
    },
    code: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      c: '',
    };
  },
  computed: {
    options() {
      const o = {
        tabSize: 2,
        // readOnly: true,
        mode: 'text/x-vue',
        theme: 'monokai',
      };
      switch (this.type) {
        case 'vue':
          o.mode = 'text/x-vue';
          break;
        case 'javascript':
          o.mode = 'text/javascript';
          break;
        default:
          o.mode = 'text/x-vue';
          break;
      }
      return o;
    },
  },
  watch: {
    code: {
      handler(value) {
        this.c = value;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
.code-block{
  .CodeMirror{
    height: auto;
    padding: 4px 20px;
  }
  .CodeMirror-line {
    font-family: SF Mono,Monaco,Inconsolata,Fira Mono,Droid Sans Mono,Source Code Pro,monospace !important;
  }
}
</style>
