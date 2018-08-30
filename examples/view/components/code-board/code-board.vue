<template>
  <div class="code-board">
    <codemirror v-model="code" :options="options">
    </codemirror>
  </div>
</template>

<script>

export default {
  name: 'CodeBoard',
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
        theme: 'base16-light',
      },
    };
  },
  created() {
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

}
</style>
