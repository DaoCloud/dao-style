<template>
  <div class="docs-dialog">
    <dcos-title :name="$t('dialog')" desc="dialog 是一个弹出框组件"></dcos-title>
    <docs-section>
      <template slot="title">默认版本</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="dialog/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            要显示一个默认的`dialog`，将`dialog`的`visible`属性设置为`true`即可
            同时本例也展示了`dialog`触发事件时的回调函数用法
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">显示关闭按钮</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="dialog/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            默认的`dialog`不显示关闭按钮，如果需要显示关闭按钮，给`header`属性传入一个对象，在所传入对象中用`showClose`属性指定是否显示关闭按钮
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">自定义footer属性</template>
      <template slot="content">
        <demo-code>
          <demo3 slot="demo"></demo3>
          <code-reader slot="code" file="dialog/demo-3.vue"></code-reader>
          <md-reader slot="desc">
            通过给`dialog`的footer属性传入一个`footer`对象，可以自定义`footer`属性
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">自定义dialog的容器类名</template>
      <template slot="content">
        <demo-code>
          <demo4 slot="demo"></demo4>
          <code-reader slot="code" file="dialog/demo-4.vue"></code-reader>
          <md-reader slot="desc">
            可以通过设置`dialog`的`containerClass`属性来自定义`dialog`的容器类名
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">自定义大小</template>
      <template slot="content">
        <demo-code>
          <demo5 slot="demo"></demo5>
          <code-reader slot="code" file="dialog/demo-5.vue"></code-reader>
          <md-reader slot="desc">
            `size`属性可用于设置`dialog`的大小
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">设置关闭Dialog的方式</template>
      <template slot="content">
        <demo-code>
          <demo6 slot="demo"></demo6>
          <code-reader slot="code" file="dialog/demo-6.vue"></code-reader>
          <md-reader slot="desc">
            `closeOnClickOutside`属性用于设置点击`dialog`外面( 遮罩层 ) 是否隐藏Dialog，
            `closeOnPressEscape`属性用于设置按键 ESC时是否隐藏Dialog (默认值为true，即按下ESC隐藏Dialog，设置其值为false则不可以通过 ESC 关闭 Dialog)
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">不锁定 body 滚动</template>
      <template slot="content">
        <demo-code>
          <demo7 slot="demo"></demo7>
          <code-reader slot="code" file="dialog/demo-7.vue"></code-reader>
          <md-reader slot="desc">
            默认的对话框出现时其body是锁定不可滚动的，若要设置其body可滚动，将`lockScroll`属性设置为`false`即可
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">垂直居中</template>
      <template slot="content">
        <demo-code>
          <demo8 slot="demo"></demo8>
          <code-reader slot="code" file="dialog/demo-8.vue"></code-reader>
          <md-reader slot="desc">
            将`dialog`的`middle`属性设置为`true`即可使对话框垂直居中
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">垂直居中</template>
      <template slot="content">
        <demo-code>
          <demo9 slot="demo"></demo9>
          <code-reader slot="code" file="dialog/demo-9.vue"></code-reader>
          <md-reader slot="desc">
            `dialog`的`top`和`bottom`属性可分别用于设置对话框的`marign-top`和`margin-bottom`
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">通过拖拽改变大小</template>
      <template slot="content">
        <demo-code>
          <demo10 slot="demo"></demo10>
          <code-reader slot="code" file="dialog/demo-10.vue"></code-reader>
          <md-reader slot="desc">
            将`dialog`的属性`allowResize`属性设置为`true`即可通过拖拽改变对话框大小
            可以通过右下角拖拽图标进行拖拽,这个拖拽做了边缘检测，无法拖出屏幕窗口。并且如果你调整窗口大小，dialog 也会跟着做最合适的调整
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">嵌套Dialog</template>
      <template slot="content">
        <demo-code>
          <demo11 slot="demo"></demo11>
          <code-reader slot="code" file="dialog/demo-11.vue"></code-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">定制 Header 和 Footer</template>
      <template slot="content">
        <demo-code>
          <demo12 slot="demo"></demo12>
          <code-reader slot="code" file="dialog/demo-12.vue"></code-reader>
          <md-reader slot="desc">
            可以通过`header`和`footer`具名slot来自定义对话框header和footer的内容，此外也可以通过具名slot `title`自定义header中`title`的内容
            如果不需要显示 header 和 footer，则将`header`和`footer`属性的值设置为`false`即可
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <dcos-title name="<dao-dialog/> 属性" size="sm"></dcos-title>
      </template>
      <template slot="content" type="attr">
        <docs-table :rows="dialogAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <dcos-title name="header 对象" size="sm"></dcos-title>
      </template>
      <template slot="content" type="attr">
        <docs-table :rows="headerAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <dcos-title name="footer 对象" size="sm"></dcos-title>
      </template>
      <template slot="content" type="attr">
        <docs-table :rows="footerAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <dcos-title name="dialog 触发的事件" size="sm"></dcos-title>
      </template>
      <template slot="content" type="event">
        <docs-table :rows="dialogEvents" type="event"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <dcos-title name="dialog 的具名 slot" size="sm"></dcos-title>
      </template>
      <template slot="content" type="slot">
        <docs-table :rows="dialogSlots" type="slot"></docs-table>
      </template>
    </docs-section>
  </div>
</template>

<script>
import Demo1 from '@demos/dialog/demo-1';
import Demo2 from '@demos/dialog/demo-2';
import Demo3 from '@demos/dialog/demo-3';
import Demo4 from '@demos/dialog/demo-4';
import Demo5 from '@demos/dialog/demo-5';
import Demo6 from '@demos/dialog/demo-6';
import Demo7 from '@demos/dialog/demo-7';
import Demo8 from '@demos/dialog/demo-8';
import Demo9 from '@demos/dialog/demo-9';
import Demo10 from '@demos/dialog/demo-10';
import Demo11 from '@demos/dialog/demo-11';
import Demo12 from '@demos/dialog/demo-12';

export default {
  name: 'DocsDialog',
  data() {
    return {
      dialogAttrs: [{
        name: 'visible',
        type: 'Boolean',
        desc: '控制`dao-dialog`是否显示的参数, 与父组件双向绑定 ( 需要加`sync`修饰符 )',
        options: ['—'],
        default: 'false',
      }, {
        name: 'header',
        type: 'Object/Boolean/String',
        desc: `header 配置对象, 具体内容见 **header 对象** (当传入 header slot 时，该配置将不会生效),
              当任何时候都不需要 header 时可以传入 false`,
        options: ['—'],
        default: '-',
      }, {
        name: 'footer',
        type: 'Object/Boolean',
        desc: `footer 配置对象, 具体内容见 **footer 对象** (当传入 footer slot 时，该配置将不会生效),
              当任何时候都不需要 footer 时可以传入 false`,
        options: ['—'],
        default: '-',
      }, {
        name: 'size',
        type: 'String/Object',
        desc: '设置 dialog 的大小。 可选 `sm`, `md`, `lg`, 或者传入 { width: *, height: * } 具体指定',
        options: ['sm', 'md', 'lg'],
        default: 'md',
      }, {
        name: 'containerClass',
        type: 'String',
        desc: 'dialog 的容器类名',
        options: ['—'],
        default: '-',
      }, {
        name: 'closeOnClickOutside',
        type: 'Boolean',
        desc: '设置点击 dialog 外面( 遮罩层 ) 是否隐藏 dialog',
        options: ['—'],
        default: 'false',
      }, {
        name: 'closeOnPressEscape',
        type: 'Boolean',
        desc: '设置按键 ESC 时是否隐藏 dialog',
        options: ['—'],
        default: 'true',
      }, {
        name: 'allowResize',
        type: 'Boolean',
        desc: '是否可以拖拽调整大小',
        options: ['—'],
        default: 'false',
      }, {
        name: 'lockScroll',
        type: 'Boolean',
        desc: '对话框出现时是否将 body 锁定不滚动',
        options: ['—'],
        default: 'true',
      }, {
        name: 'top',
        type: 'String',
        desc: '`dao-dialog` 的 margin-top',
        options: ['—'],
        default: '100px',
      }, {
        name: 'bottom',
        type: 'String',
        desc: '`dao-dialog` 的 margin-bottom',
        options: ['—'],
        default: '20px',
      }, {
        name: 'middle',
        type: 'Boolean',
        desc: '`dao-dialog` 垂直是否居中',
        options: ['—'],
        default: 'false',
      }],
      headerAttrs: [{
        name: 'title',
        type: 'String',
        desc: '对话框 title',
        options: ['—'],
        default: '—'
      }, {
        name: 'showClose',
        type: 'Boolean',
        desc: '是否显示关闭图标(为 true 时 title 向左对齐， 为 false 时 title 居中对齐)',
        options: ['—'],
        default: 'false'
      }],
      footerAttrs: [{
        name: 'confirmText',
        type: 'String',
        desc: 'confrim text',
        options: ['—'],
        default: '确认'
      }, {
        name: 'cancelText',
        type: 'String',
        desc: 'cancel text',
        options: ['—'],
        default: '取消'
      }, {
        name: 'confirmDisabled',
        type: 'Boolean',
        desc: '禁用 confirm',
        options: ['—'],
        default: 'false'
      }],
      dialogEvents: [{
        name: 'before-open',
        desc: 'Dialog 即将打开时的回调, 内部 DOM 还未渲染',
        parameter: '—', 
      }, {
        name: 'opened',
        desc: 'Dialog 打开时的回调 ,内部 DOM 已经渲染完成',
        parameter: '—', 
      }, {
        name: 'before-close',
        desc: 'Dialog 即将关闭时的回调, 内部 DOM 还在(confirm 和 cancel 的下一跳也会触发 close)',
        parameter: '—',   
      }, {
        name: 'closed',
        desc: 'Dialog 关闭时的回调, 内部 DOM 已经被移除(confirm 和 cancel 的下一跳也会触发 close)',
        parameter: '—',
      }, {
        name: 'confirm',
        desc: 'Dialog 点击 确定 时的触发',
        parameter: '—',
        
      }, {
        name: 'cancel',
        desc: 'Dialog 点击 取消 时的触发',
        parameter: '—', 
      }],
      dialogSlots: [{
        name: 'header',
        desc: 'dialog header 的内容(同时配置的 title slot 将不会生效)',
      }, {
        name: 'footer',
        desc: 'dialog footer 的内容',
      }, {
        name: 'title',
        desc: 'dialog title 的内容',
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
    Demo10,
    Demo11,
    Demo12,
  },
};
</script>
