<template>
  <div class="docs-radio">
    <docs-title :name="$t('radio')" desc="dao-radio 是一个单选框组件"></docs-title>
    <docs-section>
      <template slot="title">默认用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="radio/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            单选框组件由 `dao-radio-group` 和 `dao-radio` 两个组件配合组成。 
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-radio/> 属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="radioAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
  </div>
</template>

<script>
  import Demo1 from '@demos/radio/demo-1';

  export default {
    name: 'DocsRadio',
    components: {
      Demo1,
    },
    data() {
      return {
        radioAttrs: [{
          name: 'label',
          type: ['any'],
          desc: '`dao-radio` 被选中的值, 必填',
        }, {
          name: 'disabled',
          type: 'boolean',
          desc: '控制 `dao-radio` 是否被禁用',
          options: ['true', 'false'],
          default: 'false',
        }],
      };
    },
  };
</script>