<template>
  <div class="docs-editable-table">
    <docs-title :name="$t('editable-table')" desc="dao-editable-table 是一个可编辑表格组件"></docs-title>
    <docs-section>
      <template slot="title">默认用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="editable-table/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            传入 config, dao-editable-table 便可以很好地工作。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-editable-table/> 属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="editableTableAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
      <docs-section>
      <template slot="title">
        <docs-title name="<config/> 对象属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="editableTableConfigAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
      <docs-section>
      <template slot="title">
        <docs-title name="<body/> 对象属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="editableTableBodyAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-editable-table/> 事件" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="editableTableEvent" type="event"></docs-table>
      </template>
    </docs-section>
  </div>
</template>

<script>
  import Demo1 from '@demos/editable-table/demo-1';

  export default {
    name: 'DocsEditableTable',
    data() {
      return {
        editableTableAttrs: [{
          name: 'config',
          type: 'Object',
          desc: '配置对象。具体内容见 config 对象',
          options: ['-'],
          default: '-',
        },
        {
          name: 'v-model',
          type: 'Object',
          desc: '数据绑定的对象',
          options: ['-'],
          default: '-',
        },
        {
          name: 'operation-text',
          type: 'String',
          desc: '操作的头部文字',
          options: ['-'],
          default: '编辑',
        },
        {
          name: 'add-text',
          type: 'String',
          desc: '添加文字',
          options: ['-'],
          default: '添加',
        }],
        editableTableConfigAttrs: [{
          name: 'header',
          type: 'Array',
          desc: '代表表头上的文字。其中的元素可以是简单的字符串，也可以是一个对象。对象有两个属性：text 和 tooltip。text 表示显示的文字，tooltip 则是表头的 tooltip 文字。',
          options: ['-'],
          default: '-',
        },
        {
          name: 'body',
          type: 'Object',
          desc: '具体内容见 body 对象',
          options: ['-'],
          default: '-',
        }],
        editableTableBodyAttrs: [{
          name: 'type',
          type: 'String',
          desc: "只接受这四个值：'input'、'text'、'select'、'checkbox'。分别表示输入框、固定文本、选择和是非题。",
          options: ['input', 'text', 'select', 'checkout'],
          default: '-',
        },
        {
          name: 'name',
          type: 'String',
          desc: '它是 result 对象中的属性名称',
          options: ['-'],
          default: '-',
        },
        {
          name: 'default',
          type: 'String/Boolean',
          desc: '默认值。类型根据这个字段的 type 来决定',
          options: ['-'],
          default: "' '和false",
        },
        {
          name: 'placeholder',
          type: 'String',
          desc: '占位符',
          options: ['-'],
          default: ' ',
        },
        {
          name: 'options',
          type: 'Array',
          desc: "只有当这个字段的 type 是 'select' 的时候才需要。options 有两种格式，可以是 ['apple']，也可以是 [{label: 'apple', value: '苹果'}]。",
          options: ['-'],
          default: '-',
        },
        {
          name: 'label',
          type: 'String',
          desc: "只有当这个字段的 type 是 'checkbox' 的时候才需要，它是 checkbox 的 label。",
          options: ['-'],
          default: '-',
        },
        {
          name: 'validate',
          type: 'Function',
          desc: '验证函数。这个函数应该是个纯函数。它接受两个参数，第一个是当前行的数据，第二个是所有行的数据（包括新添加的行，不包括新删除的行），如果返回 true，表示验证通过。如果返回其他字符串，表示验证不通过，且错误信息是字符串内容。',
          options: ['-'],
          default: '-',
        }],
        editableTableEvent: [{
          name: 'valid',
          desc: '在每次修改可编辑表格的内容之后，v-model 更新之前触发',
          parameter: '-',
        }],
      };
    },
    components: {
      Demo1,
    },
  };
</script>
