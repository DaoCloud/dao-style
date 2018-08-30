<template>
  <div class="markdown-reader">
    <vue-markdown :prerender="onPrerender"></vue-markdown>
  </div>
</template>

<script>

// import hljs from 'highlight.js';
// import 'highlight.js/styles/monokai-sublime.css';

export default {
  name: 'MarkdownReader',
  props: {
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    onPrerender() {
      window.a = this.removeSpace(_.get(this.$slots, 'default[0].text', ''));
      return this.removeSpace(_.get(this.$slots, 'default[0].text', ''));
    },
    removeSpace(str) {
      // 递归去掉开头的换行和空格，避免渲染失败
      if (str.startsWith(' ') || str.startsWith('\n')) {
        return this.removeSpace(str.substring(1));
      }
      return str;
    },
  },
  mounted() {
    _.forEach(this.$el.querySelectorAll('table'), (table) => {
      table.setAttribute('class', 'dao-table row');
    });
    _.forEach(this.$el.querySelectorAll('code'), (code) => {
      code.setAttribute('class', 'mark');
    });
  },
};

</script>

<style lang="scss">
.markdown-reader{
  .mark{
    color: #5e6d82;
    background-color: #e6effb;
    margin: 0 4px;
    display: inline-block;
    padding: 0px 5px;
    font-size: 12px;
    border-radius: 3px;
    height: 18px;
    line-height: 18px;
  }
  ol{
    padding: 4px 0 4px 16px;
  }
}
</style>
