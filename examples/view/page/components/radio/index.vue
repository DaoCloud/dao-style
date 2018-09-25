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
      <template slot="title">block版</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="radio/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            在 `dao-radio-group` 中绑定 `type` 为 `block`, `dao-radio` 中设置好 `headline` 和 `description`即可。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>

    <docs-section>
      <template slot="title">grid版</template>
      <template slot="content">
        <demo-code>
          <demo3 slot="demo"></demo3>
          <code-reader slot="code" file="radio/demo-3.vue"></code-reader>
          <md-reader slot="desc">
            在 `dao-radio-group` 中绑定 `type` 为 `gird` 和绑定 `grid-col`属性, `dao-radio` 中设置好 `headline` 和 `description`即可。
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
  import Demo2 from '@demos/radio/demo-2';
  import Demo3 from '@demos/radio/demo-3';

  export default {
    name: 'DocsRadio',
    components: {
      Demo1,
      Demo2,
      Demo3,
    },
    data() {
      return {
        radioAttrs: [{
          name: 'grid-col',
          type: 'number',
          desc: '启用 grid 布局，并指定列数',
          options: [''],
          default: '-',
        }, {
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
        }, {
          name: 'headline',
          type: 'string',
          desc: '指定 radio-block版、radio-grid版中的标题,必填',
          options: ['-'],
          default: '-',
        }, {
          name: 'description',
          type: 'string',
          desc: '指定 radio-block版、radio-grid版中的描述,必填',
          options: ['-'],
          default: '-',
        }],
      };
    },
  };
</script>