<template>
  <div class="docs-tooltip">
    <docs-title :name="$t('tooltip')" desc="tooltip 是一个提示文字的组件"></docs-title>
    <docs-section>
      <template slot="title">基础用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="tooltip/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            在这里我们提供 9 种不同方向的展示方式，可以通过以上完整示例来理解，选择你要的效果。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">添加延时</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="tooltip/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            通过 `delay` 参数传入延时，控制多长时间显示提示文字。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-tooltip/> 属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="tooltipAttr" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-tooltip/> 插槽" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="tooltipSlot" type="attr"></docs-table>
      </template>
    </docs-section>
  </div>
</template>
<script>
  import Demo1 from '@demos/tooltip/demo-1';
  import Demo2 from '@demos/tooltip/demo-2';

  export default {
    components: {
      Demo1,
      Demo2,
    },
    data() {
      return {
        tooltipAttr: [
          {
            name: 'content',
            type: 'String',
            desc: '提示文字',
            options: ['-'],
            default: '-',
          },
          {
            name: 'placement',
            type: 'String',
            desc: '提示框出现位置',
            options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'],
            default: 'bottom',
          },
          {
            name: 'delay',
            type: 'Number',
            desc: '延时多长时间显示提示文字',
            options: ['-'],
            default: '0',
          },
          {
            name: 'appendToBody',
            type: 'Boolean',
            desc: '是否将 tooltip 元素添加到 body',
            options: ['-'],
            default: 'true',
          },
          {
            name: 'popperCls',
            type: 'Array',
            desc: 'appendToBody 之后为 tooltip 元素添加的类，一般用于修改 tooltip 元素的样式',
            options: ['-'],
            default: '-',
          },
        ],
        tooltipSlot: [
          {
            name: 'content',
            type: 'HTML',
            desc: 'tooltip 内嵌 HTML 文本，将覆盖 content 参数',
            options: ['-'],
            default: '-',
          },
        ],
      };
    },
  };
</script>
