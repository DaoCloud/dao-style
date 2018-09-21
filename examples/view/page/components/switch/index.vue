<template>
  <div>
    <docs-title :name="$t('switch')" desc="dao-switch 是用于表示开关的组件"></docs-title>
    <docs-section>
      <template slot="title">基本用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="switch/demo-1.vue"></code-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">禁用</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="switch/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            `disabled`属性控制 dao-switch 是否禁用。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">文字提示</template>
      <template slot="content">
        <demo-code>
          <demo3 slot="demo"></demo3>
          <code-reader slot="code" file="switch/demo-3.vue"></code-reader>
          <md-reader slot="desc">
            `with-notice`属性控制 dao-switch 是否有文字提示。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">超宽按钮</template>
      <template slot="content">
        <demo-code>
          <demo4 slot="demo"></demo4>
          <code-reader slot="code" file="switch/demo-4.vue"></code-reader>
          <md-reader slot="desc">
            `core-width`属性控制 dao-switch 宽度。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">事件绑定</template>
      <template slot="content">
        <demo-code>
          <demo5 slot="demo"></demo5>
          <code-reader slot="code" file="switch/demo-5.vue"></code-reader>
          <md-reader slot="desc">
            dao-switch 值改变时会触发`change`事件。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">Switch 小号版</template>
      <template slot="content">
        <demo-code>
          <demo6 slot="demo"></demo6>
          <code-reader slot="code" file="switch/demo-6.vue"></code-reader>
          <md-reader slot="desc">
            `size`属性控制 dao-switch 大小。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-switch/> 属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="switchAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-switch/> 事件" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="switchEvents" type="event"></docs-table>
      </template>
    </docs-section>
  </div>
</template>

<script>
  import Demo1 from '@demos/switch/demo-1';
  import Demo2 from '@demos/switch/demo-2';
  import Demo3 from '@demos/switch/demo-3';
  import Demo4 from '@demos/switch/demo-4';
  import Demo5 from '@demos/switch/demo-5';
  import Demo6 from '@demos/switch/demo-6';

  export default {
    name: 'DocsSwitch',
    data() {
      return {
        switchAttrs: [{
          name: 'option',
          type: 'Object',
          desc: '配置对象。分别通过 `on` 和 `off` 属性指定开和关状态的提示文字',
          options: ['-'],
          default: '{ on: "已开启", off: "已关闭" }',
        }, {
          name: 'value',
          type: 'Boolean',
          desc: '控制按钮的开关状态',
          options: ['true', 'false'],
          default: 'true',
        }, {
          name: 'disabled',
          type: 'Boolean',
          desc: '是否禁用按钮',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'onText',
          type: 'String',
          desc: '"开" 状态提示文字',
          options: ['-'],
          default: '-',
        }, {
          name: 'offText',
          type: 'String',
          desc: '"关" 状态提示文字',
          options: ['-'],
          default: '-',
        }, {
          name: 'name',
          type: 'String',
          desc: '提交表单时使用的属性名称',
          options: ['-'],
          default: '-',
        }, {
          name: 'withNotice',
          type: 'Boolean',
          desc: '是否显示状态提示文字',
          options: ['true', 'false'],
          default: 'true',
        }, {
          name: 'coreWidth',
          type: 'Number',
          desc: '按钮的宽度',
          options: ['-'],
          default: '54 像素',
        }, {
          name: 'size',
          type: 'String',
          desc: '按钮大小',
          options: ['sm'],
          default: '-',
        }],
        switchEvents: [{
          name: 'change',
          desc: '状态变化的时间通知',
          parameter: 'value 的当前值',
        }, {
          name: 'input',
          desc: '同 `change` 事件',
          parameter: '同 change 事件',
        }],
      };
    },
    components: {
      Demo1,
      Demo2,
      Demo3,
      Demo4,
      Demo5,
      Demo6,
    },
  };
</script>
