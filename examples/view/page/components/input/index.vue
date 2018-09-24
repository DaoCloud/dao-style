<template>
  <div>
    <docs-title :name="$t('input')" desc="dao-input 是输入框组件"></docs-title>
    <docs-section>
      <template slot="title">基本用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="input/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            你可以选择使用 `dao-input` 组件或者仅使用对应的样式。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">禁止编辑</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="input/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            `disabled` 属性可以使组件禁止编辑。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">有提示状态的输入框</template>
      <template slot="content">
        <demo-code>
          <demo3 slot="demo"></demo3>
          <code-reader slot="code" file="input/demo-3.vue"></code-reader>
          <md-reader slot="desc">
            通过 `status` 、`message`、`message-placement`、`message-no-icon` 属性定义输入框的状态和提示文字相关的配置。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">不限制宽度的输入框</template>
      <template slot="content">
        <demo-code>
          <demo4 slot="demo"></demo4>
          <code-reader slot="code" file="input/demo-4.vue"></code-reader>
          <md-reader slot="desc">
            `block` 可以使输入框宽度撑满父元素的宽度，当然你也可以在组件上增加样式自定义宽度。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">小版输入框</template>
      <template slot="content">
        <demo-code>
          <demo5 slot="demo"></demo5>
          <code-reader slot="code" file="input/demo-5.vue"></code-reader>
          <md-reader slot="desc">
            `size` 属性设置为 `sm` 即可得到一个小版的输入框！
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">数字输入框</template>
      <template slot="content">
        <demo-code>
          <demo6 slot="demo"></demo6>
          <code-reader slot="code" file="input/demo-6.vue"></code-reader>
          <md-reader slot="desc">
            组件 `dao-numeric-input` 是数字输入框。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">搜索</template>
      <template slot="content">
        <demo-code>s
          <demo7 slot="demo"></demo7>
          <code-reader slot="code" file="input/demo-7.vue"></code-reader>
          <md-reader slot="desc">
            增加 `search` 属性可以得到搜索输入框。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">文本框</template>
      <template slot="content">
        <demo-code>
          <demo8 slot="demo"></demo8>
          <code-reader slot="code" file="input/demo-8.vue"></code-reader>
          <md-reader slot="desc">
            Textarea 增加 `dao-control` class 类就可以使用样式。Textarea 组件不限高度，只需要设置 `rows` 属性值就能为 Textarea 组件提供所需行数的高度。并且提供 error 状态，只需要添加 `error` 这个 class。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">文件选择框</template>
      <template slot="content">
        <demo-code>
          <demo9 slot="demo"></demo9>
          <code-reader slot="code" file="input/demo-9.vue"></code-reader>
          <md-reader slot="desc">
            组件 `dao-file-input` 是文件选择框。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>

    <docs-section>
      <template slot="title">
        <docs-title name="<dao-input/> 属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="inputAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-input/> 事件" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="inputEvents" type="event"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-input/> 插槽" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="inputSlotAttrs" type="slot"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-file-input/> 属性"
        desc="支持 `<dao-input>` 所有普通属性、事件，除了 block 参数"
        size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="fileAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-file-input/> 事件"
        desc="支持 `<dao-input>` 所有普通属性、事件，除了 block 参数"
        size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="fileEvents" type="event"></docs-table>
      </template>
    </docs-section>
  </div>
</template>
<script>
  import Demo1 from '@demos/input/demo-1';
  import Demo2 from '@demos/input/demo-2';
  import Demo3 from '@demos/input/demo-3';
  import Demo4 from '@demos/input/demo-4';
  import Demo5 from '@demos/input/demo-5';
  import Demo6 from '@demos/input/demo-6';
  import Demo7 from '@demos/input/demo-7';
  import Demo8 from '@demos/input/demo-8';
  import Demo9 from '@demos/input/demo-9';

  export default {
    name: 'DocsInput',
    data() {
      return {
        inputAttrs: [{
          name: 'type',
          type: 'String',
          desc: '输入框类型，可选值与原生 input 一致',
          options: ['text', 'button', 'checkbox', 'file', 'hidden',
            'image', 'password', 'radio', 'reset', 'submit'],
          default: 'text',
        }, {
          name: 'value',
          type: 'String，Number',
          desc: '绑定值',
          options: ['-'],
          default: '',
        }, {
          name: 'disabled',
          type: 'Boolean',
          desc: '禁用',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'size',
          type: 'String',
          desc: '尺寸',
          options: ['sm'],
          default: '-',
        }, {
          name: 'append-to-body',
          type: 'Boolean',
          desc: '弹出的提示是否appendToBody',
          options: ['true', 'false'],
          default: 'true',
        }, {
          name: 'status',
          type: 'String',
          desc: '状态',
          options: ['loading', 'info', 'success', 'error'],
          default: '-',
        }, {
          name: 'message',
          type: 'String',
          desc: '提示的内容，可为空字符串，必选组合参数 status，可选组合参数 message-placement',
          options: ['-'],
          default: '',
        }, {
          name: 'message-placement',
          type: 'String',
          desc: '提示内容的位置，必选组合参数 message',
          options: ['top-end', 'right-start'],
          default: 'top-end',
        }, {
          name: 'message-no-icon',
          type: 'Boolean',
          desc: '提示信息前不带图标',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'search',
          type: 'Boolean',
          desc: '搜索输入框',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'block',
          type: 'Boolean',
          desc: '不限制 input 宽度',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'required',
          type: 'Boolean',
          desc: '必填',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'show-tooltip-only-hover',
          type: 'Boolean',
          desc: '只有在鼠标 hover 到 icon 上时才会出现 tooltip',
          options: ['true', 'false'],
          default: 'true',
        }, {
          name: 'helper-text',
          type: 'String',
          desc: 'input 中辅助提示',
          options: ['-'],
          default: '按回车键搜索',
        }, {
          name: 'show-helper-text',
          type: 'Boolean',
          desc: 'input 是否辅助提示',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'placeholder',
          type: 'String',
          desc: '输入框占位文本',
          options: ['-'],
          default: '-',
        }, {
          name: 'readonly',
          type: 'Boolean',
          desc: '原生属性，是否只读',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'autofocus',
          type: 'Boolean',
          desc: '原生属性，自动获得焦点',
          options: ['true', 'false'],
          default: 'false',
        }, {
          name: 'name',
          type: 'String',
          desc: '原生属性',
          options: ['-'],
          default: '',
        }, {
          name: 'form',
          type: 'String',
          desc: '原生属性',
          options: ['-'],
          default: '-',
        }, {
          name: 'maxlength',
          type: 'Number',
          desc: '最大输入长度',
          options: ['-'],
          default: '-',
        }, {
          name: 'minlength',
          type: 'Number',
          desc: '最小输入长度',
          options: ['-'],
          default: '-',
        }, {
          name: 'max',
          type: 'Number',
          desc: '原生属性，设置最大值',
          options: ['-'],
          default: '-',
        }, {
          name: 'min',
          type: 'Number',
          desc: '原生属性，设置最小值',
          options: ['-'],
          default: '-',
        }, {
          name: 'step',
          type: 'Number',
          desc: '原生属性，设置输入字段的合法数字间隔',
          options: ['-'],
          default: '-',
        }],
        inputEvents: [{
          name: 'keyup',
          desc: '按键弹起时触发',
          parameter: 'event: Event',
        }, {
          name: 'keydown',
          desc: '按下按键时触发',
          parameter: 'event: Event',
        }, {
          name: 'blur',
          desc: '在 Input 失去焦点时触发',
          parameter: 'event: Event',
        }, {
          name: 'focus',
          desc: '在 Input 获得焦点时触发',
          parameter: 'event: Event',
        }, {
          name: 'change',
          desc: '在 Input 值改变时触发',
          parameter: 'value: String | Number',
        }],
        inputSlotAttrs: [{
          name: 'button',
          desc: 'input 插入按钮，可更优雅的将按钮与提示信息组合呈现',
        }],
        fileAttrs: [{
          name: 'value',
          type: 'File',
          desc: '绑定值，与原生一致',
          options: ['与原生 value 属性一致'],
          default: '',
        }, {
          name: 'accept',
          type: 'String',
          desc: '限制用户上传文件的类型，与原生一致',
          options: ['与原生 accept 属性一致'],
          default: '-',
        }, {
          name: 'placeholder',
          type: 'String',
          desc: '输入框占位文本',
          options: ['-'],
          default: '',
        }],
        fileEvents: [{
          name: 'change',
          desc: 'value 改变时触发',
          parameter: '所选的 File',
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
      Demo7,
      Demo8,
      Demo9,
    },
  };
</script>
