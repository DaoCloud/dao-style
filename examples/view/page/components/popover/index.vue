<template>
  <div>
    <docs-title :name="$t('popover')" desc="Popover 是一个一般用于显示更多信息的浮层组件。"></docs-title>
    <docs-section>
      <template slot="title">简单用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="popover/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            简单的使用 dao-popover 组件，设定好 popover 的内容之后，就能轻易的通过点击 trigger 来看到 popover
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">一直显示的 Popover</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="popover/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            通过指定 **always** 属性，可以让 popover 不需要触发 trigger，而是一直显示在界面中
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">其他触发方式的 Popover</template>
      <template slot="content">
        <demo-code>
          <demo3 slot="demo"></demo3>
          <code-reader slot="code" file="popover/demo-3.vue"></code-reader>
          <md-reader slot="desc">
            通过指定 **trigger** 属性值可以通过 hover 等 click 之外的其他方式触发 popover
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-popover/> 属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="popoverAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-popover/> 插槽" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="slotArgs" type="attr"></docs-table>
      </template>
    </docs-section>
  </div>
</template>
<script>
  import Demo1 from '@demos/popover/demo-1';
  import Demo2 from '@demos/popover/demo-2';
  import Demo3 from '@demos/popover/demo-3';

  export default {
    components: {
      Demo1,
      Demo2,
      Demo3,
    },
    data() {
      return {
        popoverAttrs: [{
          name: 'trigger',
          type: 'String',
          desc: 'Popover 的触发方式',
          options: ['click', 'focus', 'hover'],
          default: 'click',
        }, {
          name: 'content',
          type: 'String',
          desc: 'Popover 的内容文本',
          options: ['-'],
          default: '-',
        }, {
          name: 'placement',
          type: 'String',
          desc: 'Popover 相对于 trigger 元素的展示位置',
          options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'],
          default: 'bottom',
        }, {
          name: 'always',
          type: 'Boolean',
          desc: 'Popover 是否需要一直显示',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'disabled',
          type: 'Boolean',
          desc: 'Popover 是否不可用',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'appendToBody',
          type: 'Boolean',
          desc: '是否将 Popover 展示的内容父元素改成 body，而不是和 trigger 元素在同一父 DOM 节点处',
          options: ['true', 'false'],
          default: 'true',
        }, {
          name: 'popperCls',
          type: 'Array',
          desc: 'appendToBody 之后为 popover 的元素添加的 class 名，一般用于单独修改某些特定 popover 的样式',
          options: ['-'],
          default: '-',
        }],
        slotArgs: [{
          name: 'content',
          type: 'HTML',
          desc: 'Popover 内嵌 HTML 文本，将覆盖 content 参数',
          options: ['-'],
          default: '-',
        }]
      };
    },
  };
</script>
<style lang="scss" scoped>
.demo-container {
  width: 500px;
}
.top {
  text-align: center;
}
.left {
  float: left;
  width: 60px;
}
.right {
  float: right;
  width: 60px;
}
.bottom {
  clear: both;
  text-align: center;
}
</style>
