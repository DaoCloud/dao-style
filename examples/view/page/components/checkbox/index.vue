<template>
  <div class="docs-checkbox">
    <docs-title :name="$t('checkbox')" desc="这是一个纯样式多选框组件"></docs-title>
    <docs-section>
      <template slot="title">普通版</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="checkbox/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            `dao-checbox` 是一个纯样式组件，它支持所有`checkbox`原生属性
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">inline 版</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="checkbox/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            给`dao-checkbox`加上`class="checkbox-inline"`即可得到 inline 版本的多选框
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
  </div>
</template>

<script>
import Demo1 from '@demos/checkbox/demo-1';
import Demo2 from '@demos/checkbox/demo-2';

export default {
  name: 'DocsCheckbox',
  components: {
    Demo1,
    Demo2,
  },
};
</script>
