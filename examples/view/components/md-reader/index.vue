<template>
  <div class="md-reader">
    <vue-markdown :prerender="onPrerender"></vue-markdown>
  </div>
</template>

<script>

export default {
  name: 'MdReader',
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
  },
};

</script>

<style lang="scss">
@import 'daoColor';

.md-reader{
  code, mark {
    margin: 0 4px;
    display: inline-block;
    padding: 0px 5px;
    font-size: 12px;
    border-radius: 3px;
    height: 18px;
    line-height: 18px;
  }
  code{
    color: #3890ff;;
    background-color: #e6effb;
  }
  mark{
    background: $yellow;
    color: #5e6d82;
  }
  ol{
    padding: 2px 0 2px 16px;
  }
  hr{
    margin: 2px 0;
  }
}
</style>
