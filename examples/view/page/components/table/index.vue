<template>
  <div class="docs-spin">
    <dcos-title :name="$t('table')" desc="这是一个纯样式表格组件"></dcos-title>
    <docs-section>
      <template slot="title">板布局（slat）表格</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="table/demo-1.vue"></code-reader>
          <md-reader slot="desc">
           仅需要给 `table` 标签加上`class="dao-table slat"` 就可以获得一个板布局表格，没有什么比这更简单的了
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">行布局（row）表格</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="table/demo-2.vue"></code-reader>
          <md-reader slot="desc">
           仅需要给 `table` 标签加上`class="dao-table row"` 就可以获得一个自适应表格
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
     <docs-section>
      <template slot="title">行布局（flex）表格</template>
      <template slot="content">
        <demo-code>
          <demo3 slot="demo"></demo3>
          <code-reader slot="code" file="table/demo-3.vue"></code-reader>
          <md-reader slot="desc">
           仅需要给 `table` 标签加上`class="dao-table flexrow"` 就可以获得一个 flex 布局的表格
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
  </div>
</template>

<script>
  import Demo1 from '@demos/table/demo-1';
  import Demo2 from '@demos/table/demo-2';
  import Demo3 from '@demos/table/demo-3';

  export default {
    name: 'DocsTable',
    components: {
      Demo1,
      Demo2,
      Demo3,
    },
  };

</script>