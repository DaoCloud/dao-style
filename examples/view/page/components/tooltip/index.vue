<template>
  <div class="docs-tooltip">
    <docs-title :name="$t('tooltip')" desc="tooltip 是一个提示文字的组件"></docs-title>
    <docs-section>
      <template slot="title">基础用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="tooltip/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            在这里我们提供 9 种不同方向的展示方式，可以通过以上完整示例来理解，选择你要的效果。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
  </div>
</template>
<script>
  import Demo1 from '@demos/tooltip/demo-1';

  export default {
    components: {
      Demo1,
    },
    data() {
      return {};
    },
  };
</script>
<style lang="scss" scoped></style>
