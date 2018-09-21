<template>
  <div class="docs-spin">
    <docs-title :name="$t('numeric-badge')" desc="numeric-badge 是一个数字徽章样式组件"></docs-title>
    <docs-section>
      <template slot="title">默认用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="numeric-badge/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            即使你什么参数都不传, dao-numeric-badge 仍然可以很好地工作
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">镂空样式</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="numeric-badge/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            你只需要设置`ghost`参数为`true`，dao-numeric-badge 就会成为镂空样式
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<numeric-badge/> 属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="numericBadgeAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<numeric-badge/> 插槽" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="numericBadgeSlot" type="slot"></docs-table>
      </template>
    </docs-section>
  </div>
</template>

<script>
  import Demo1 from '@demos/numeric-badge/demo-1';
  import Demo2 from '@demos/numeric-badge/demo-2';

  export default {
    name: 'DocsNumeric-badge',
    data() {
      return {
        numericBadgeAttrs: [{
          name: 'ghost',
          type: 'boolean',
          desc: '是否为镂空样式',
          options: ['true', 'false'],
          default: 'false',
        }],
        numericBadgeSlot: [{
          name: '-',
          desc: 'dao-numeric-badge 的内容',
        }],
      };
    },
    components: {
      Demo1,
      Demo2,
    },
  };
</script>
