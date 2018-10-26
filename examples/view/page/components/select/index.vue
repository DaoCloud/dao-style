<template>
  <div>
    <docs-title :name="$t('select')" desc="Select 是一个下拉选框组件"></docs-title>
    <docs-section>
      <template slot="title">简单用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="select/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            最简单的 Select 就是一个具有固定选项和 placeholder 的选择器
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">其他尺寸用法</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="select/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            通过指定 **size** 属性可以使用小号的 Select
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">带搜索框的选择器</template>
      <template slot="content">
        <demo-code>
          <demo3 slot="demo"></demo3>
          <code-reader slot="code" file="select/demo-3.vue"></code-reader>
          <md-reader slot="desc">
            通过指定 **withSearch** 属性可以让选择器带一个简易的搜索框
            通过制定 **searchPlaceholder** 制定搜索框的 placeholder
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">带按钮的选择器</template>
      <template slot="content">
        <demo-code>
          <demo4 slot="demo"></demo4>
          <code-reader slot="code" file="select/demo-4.vue"></code-reader>
          <md-reader slot="desc">
            通过指定 **withBtn** 属性可以让选择器带一个按钮，点击这个按钮产生的事件的回调可以在 **btnEvent** 事件中指定回调
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">带标签的选择器</template>
      <template slot="content">
        <demo-code>
          <demo5 slot="demo"></demo5>
          <code-reader slot="code" file="select/demo-5.vue"></code-reader>
          <md-reader slot="desc">
            通过指定 **withTab** 属性可以让选择器开启对 tab 组件的支持，然后直接使用 tab 组件将各个选项分组
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">禁用状态</template>
      <template slot="content">
        <demo-code>
          <demo6 slot="demo"></demo6>
          <code-reader slot="code" file="select/demo-6.vue"></code-reader>
          <md-reader slot="desc">
            通过指定 **disabled** 属性可以禁用选择器
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">加载状态</template>
      <template slot="content">
        <demo-code>
          <demo7 slot="demo"></demo7>
          <code-reader slot="code" file="select/demo-7.vue"></code-reader>
          <md-reader slot="desc">
            通过指定 **loading** 属性可以开启选择器的加载状态
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">异步获取数据</template>
      <template slot="content">
        <demo-code>
          <demo8 slot="demo"></demo8>
          <code-reader slot="code" file="select/demo-8.vue"></code-reader>
          <md-reader slot="desc">
            通过指定 **async** 属性可以传入一个返回 promise 的 function 来异步的获取数据
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">异步搜索数据</template>
      <template slot="content">
        <demo-code>
          <demo9 slot="demo"></demo9>
          <code-reader slot="code" file="select/demo-9.vue"></code-reader>
          <md-reader slot="desc">
            通过指定 **asyncSearch** 属性可以开启异步的方式搜索选择器选项中的数据
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-select/> 属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="selectAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-select/> 事件" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="selectEvents" type="event"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-option-group/> 属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="groupAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-option/> 属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="optionAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-option/> 插槽" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="optionSlots" type="slot"></docs-table>
      </template>
    </docs-section>
  </div>
</template>
<script>
  import Demo1 from '@demos/select/demo-1';
  import Demo2 from '@demos/select/demo-2';
  import Demo3 from '@demos/select/demo-3';
  import Demo4 from '@demos/select/demo-4';
  import Demo5 from '@demos/select/demo-5';
  import Demo6 from '@demos/select/demo-6';
  import Demo7 from '@demos/select/demo-7';
  import Demo8 from '@demos/select/demo-8';
  import Demo9 from '@demos/select/demo-9';

  export default {
    components: {
      Demo1,
      Demo2,
      Demo3,
      Demo4,
      Demo5,
      Demo6,
      Demo7,
      Demo8,
      Demo9,
    },
    data() {
      return {
        selectAttrs: [{
          name: 'v-model',
          type: 'String / Number / Object',
          desc: '控制 select 选中的选项的值',
          options: ['-'],
          default: '-',
        }, {
          name: 'placeholder',
          type: 'String',
          desc: '控制在未选中选项时显示的文字',
          options: ['-'],
          default: '-',
        }, {
          name: 'loading',
          type: 'Boolean',
          desc: '控制 select 显示 loading 状态',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'loading-text',
          type: 'String',
          desc: 'loading 状态显示文字',
          options: ['加载中'],
          default: '加载中',
        }, {
          name: 'async',
          type: 'Function',
          desc: '控制异步获取数据，传入的 function 需要返回一个 Promise',
          options: ['-'],
          default: '-',
        }, {
          name: 'disabled',
          type: 'Boolean',
          desc: '控制 select 是否被禁用',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'with-btn',
          type: 'Boolean',
          desc: '控制 select 是否带 button',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'btn-content',
          type: 'String',
          desc: '控制 select 带的 button 内的文字',
          options: ['-'],
          default: '-',
        }, {
          name: 'with-search',
          type: 'Boolean',
          desc: '控制 select 是否有搜索框',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'async-search',
          type: 'Boolean',
          desc: '是否开启异步搜索(1.开启异步搜索时 option 必须指定 :key 2.必须指定返回promise 的 async 方法 3.不推荐与search-method 方法共用)',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'search-placeholder',
          type: 'String',
          desc: '搜索框默认文本',
          options: ['-'],
          default: '-',
        }, {
          name: 'search-method',
          type: 'String / Function',
          desc: '搜索方法：若传入的是一个 string，则这个 string 需要是 option 中 value 的一个 key；若传入的是一个 function，则 function 接受的参数为 搜索框输入的关键字以及 option 的 value 值，需返回 true 或 false',
          options: ['-'],
          default: '-',
        }, {
          name: 'with-tab',
          type: 'Boolean',
          desc: '是否开启 Select 对 tab 的支持',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'menu-class',
          type: 'String',
          desc: 'select 下拉菜单的类名',
          options: ['-'],
          default: '-',
        }, {
          name: 'no-data-text',
          type: 'String',
          desc: 'Select 无数据时显示的文字',
          options: ['无数据'],
          default: '无数据',
        }, {
          name: 'no-match-text',
          type: 'String',
          desc: 'Select 搜索无匹配数据时显示的文字',
          options: ['无匹配数据'],
          default: '无匹配数据',
        }, {
          name: 'size',
          type: 'String',
          desc: 'Select 的尺寸',
          options: ['sm'],
          default: '-',
        }],
        selectEvents: [{
          name: 'change',
          desc: '选中值发生变化时的回调',
          parameter: '当前选中值',
        }, {
          name: 'visible-change',
          desc: '选择器出现 / 隐藏时触发',
          parameter: '出现则为 true，隐藏则为 false',
        }, {
          name: 'btn-event',
          desc: '按钮点击事件',
          parameter: '当前选中值',
        }],
        groupAttrs: [{
          name: 'label',
          type: 'String',
          desc: '分组的组名',
          options: ['-'],
          default: '-',
        }, {
          name: 'disabled',
          type: 'Boolean',
          desc: '是否禁用分组下所有选项',
          options: ['true', 'false'],
          default: 'false',
        }],
        optionAttrs: [{
          name: 'value',
          type: 'String / Number / Object',
          desc: '选项的值，选中时会传递给 select 的 v-model，不推荐使用 Object',
          options: ['-'],
          default: '-',
        }, {
          name: 'label',
          type: 'String / Number',
          desc: '选项的标签，当选项没有内容插入插槽时，此 label 为选项显示的默认文本',
          options: ['-'],
          default: '-',
        }, {
          name: 'disabled',
          type: 'Boolean',
          desc: '是否禁用当前选项',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'prefix',
          type: 'String',
          desc: '显示在已选择内容区的前缀',
          options: ['-'],
          default: '-',
        }],
        optionSlots: [{
          name: 'default',
          desc: '可以自定义 option 的显示模板，不传入的话默认显示 option 的 label',
        }]
      };
    },
  };
</script>
