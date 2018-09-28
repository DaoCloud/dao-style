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
              结合 `dao-radio-group` 元素和 子元素 `dao-radio` 可实现单选组，在 `dao-radio` 中绑定 `v-model`,在 `el-radio` 中设置好 `label` 即可,另外通过在 `label`中绑定 `disabled` 属性为 `true` 使单选框处于不可用状态。 
          </md-reader>
        </demo-code>
      </template>
    </docs-section>

    <docs-section>
      <template slot="title">
        <docs-title name="<radio/> 属性" size="sm"></docs-title>
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
          name: 'type',
          type: 'string',
          desc: 'radio 组的类型',
          options: ['simple', 'block', 'grid'],
          default: 'simple',
        }, {
          name: 'disabled',
          type: 'boolean',
          desc: '控制 radio 是否被禁用',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'label',
          type: ['string', 'number', 'object', '...'],
          desc: 'radio 被选中的值,必填',
          options: ['-'],
          default: '-',
        }],
      };
    },
  };
</script>