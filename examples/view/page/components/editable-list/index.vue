<template>
  <div class="docs-editable-list">
    <docs-title :name="$t('editable-list')" desc="editable-list 是一个可编辑的列表的组件"></docs-title>
    <docs-section>
      <template slot="title">默认用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="editable-list/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            ``dao-editable-list`` 是个几乎只有纯样式的组件。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-editable-list/> Slot" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="editableListSlots" type="slot"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-editable-list/> 事件" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="editableListEvents" type="event"></docs-table>
      </template>
    </docs-section>
  </div>
</template>

<script>
  import Demo1 from '@demos/editable-list/demo-1';

  export default {
    name: 'DocsEditableList',
    data() {
      return {
        editableListEvents: [{
          name: 'add',
          desc: '点击加号触发的事件，表示添加一项内容',
          parameter: '-',
        }, {
          name: 'remove',
          desc: '点击减号触发的事件，表示减少一项内容',
          parameter: '-',
        }],
        editableListSlots: [{
          name: 'list',
          desc: '可编辑列表选项列表，应该是 v-for 生成的 li 元素。可以添加上 ``active`` 类来让它以选中的样式展现。',
        }, {
          name: 'content',
          desc: '可编辑列表选项内容，可以是任何内容',
        }],
      };
    },
    components: {
      Demo1,
    },
  };
</script>
