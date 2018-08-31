<template>
  <div class="installation">
    <demo-code>
      <demo slot="demo"></demo>
      <code-reader slot="code" file="page/installation/demo.vue"></code-reader>
      <md-reader slot="desc">
      你还可以直接写 markdown`我被高亮了`, 但为了保证 demo 站的简小，只主要对以下需求做了支持
      1. 简单 markdown 语法渲染
      2. table 会被渲染会 dao-table
      3. 只有一种高亮情况`我被高亮了`, 如果是代码的话，建议使用 `code-reader` 组件比较强大
      </md-reader>
    </demo-code>
  <md-reader>
  | Option | Description |
  | ------ | ----------- |
  | data ==3.0 后弃用==  | path to data files to supply the data that will be passed into templates. |
  | engine ==不再使用== | engine to be used for processing templates. Handlebars is the default. |
  | ext    | extension to be used for dest files. |
  </md-reader>
  </div>
</template>

<script>
import Demo from './demo.vue';

export default {
  name: 'Installation',
  components: {
    Demo,
  },
};

</script>

<style lang="scss" scoped>

</style>
