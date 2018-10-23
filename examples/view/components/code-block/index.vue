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
    readOnly: {
      type: Boolean,
      default: true,
    },
    theme: {
      type: String,
      default: 'monokai',
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
        readOnly: this.readOnly,
        mode: 'text/x-vue',
        theme: this.theme,
      };
      switch (this.type) {
        case 'vue':
          o.mode = 'text/x-vue';
          break;
        case 'javascript':
          o.mode = 'text/javascript';
          break;
        case 'scss':
          o.mode = 'text/css';
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
    padding: 4px 8px;
  }
  .CodeMirror-line {
    font-family: SF Mono,Monaco,Inconsolata,Fira Mono,Droid Sans Mono,Source Code Pro,monospace !important;
  }
  .cm-s-monokai{
    background-color: #153656;
  }
  .cm-s-3024-day{
    .cm-def{
      color: #01a252;
    }
    span.cm-string{
      color: rgb(102, 153, 0);
    }
  }
}
</style>
