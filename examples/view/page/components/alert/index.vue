<template>
  <div class="docs-alert">
    <docs-title :name="$t('alert')" desc="dao-alert 是 Dialog 组件的扩展"></docs-title>
    <docs-section>
      <template slot="title">简单用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="alert/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            alert 的方法挂在 Vue 实例上，可在组件内直接调用 `$daoAlert()`方法，即可使用 alert。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">下次不再提醒</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="alert/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            设置`checkoubox()`方法，即可使用辅助复选框。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">自定义模版</template>
      <template slot="content">
        <demo-code>
          <demo3 slot="demo"></demo3>
          <code-reader slot="code" file="alert/demo-3.vue"></code-reader>
          <md-reader slot="desc">
            设置`theme()`方法，参数参考 dao-button 的颜色，便可以自定义模版主题，`confirmText()`及`cancelText()`设置确认按钮及取消按钮的文本。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">延迟打开</template>
      <template slot="content">
        <demo-code>
          <demo4 slot="demo"></demo4>
          <code-reader slot="code" file="alert/demo-4.vue"></code-reader>
          <md-reader slot="desc">
            你只需要设置`delay()`延迟打开延迟打开 alert 框。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">自动关闭</template>
      <template slot="content">
        <demo-code>
          <demo5 slot="demo"></demo5>
          <code-reader slot="code" file="alert/demo-5.vue"></code-reader>
          <md-reader slot="desc">
              你只需要设置`timeout()`设置时间选择是否超时关闭 alert 框。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">队列</template>
      <template slot="content">
        <demo-code>
          <demo6 slot="demo"></demo6>
          <code-reader slot="code" file="nalert/demo-6.vue"></code-reader>
          <md-reader slot="desc">
            多次调用`$daoAlert`,使用`show()`方法，将实例推入队列。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">取消某个 Alert</template>
      <template slot="content">
        <demo-code>
          <demo7 slot="demo"></demo7>
          <code-reader slot="code" file="alert/demo-7.vue"></code-reader>
          <md-reader slot="desc">
            你可以使用`callback()`中注册多个回调，使用`remove()`取消该 alert 的显示，并推出队列.
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-alert/> 属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="alertAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
  </div>
</template>

<script>
  import Demo1 from '@demos/alert/demo-1';
  import Demo2 from '@demos/alert/demo-2';
  import Demo3 from '@demos/alert/demo-3';
  import Demo4 from '@demos/alert/demo-4';
  import Demo5 from '@demos/alert/demo-5';
  import Demo6 from '@demos/alert/demo-6';
  import Demo7 from '@demos/alert/demo-7';

  export default {
    name: 'DocsAlert',
    data() {
      return {
        alertAttrs: [{
          name: 'daoAlert',
          type: 'Function',
          desc: '该方法作为入口函数, 第一个参数是 alert 的 title, 第二个参数是 alert 的 body (可以是 html 片段)',
          options: ['-'],
          default: '-',
        },
        {
          name: 'theme',
          type: 'Function',
          desc: '传入参数为 dao-button 的类名，可以更改 comfirm button 的颜色',
          options: ['Color'],
          default: 'blue',
        },
        {
          name: 'confirmText',
          type: 'Function',
          desc: '传入参数用于设置 comfirm button 的文本',
          options: ['-'],
          default: '确定',
        },
        {
          name: 'cancelText',
          type: 'Function',
          desc: '传入参数用于设置 cancel button 的文本',
          options: ['-'],
          default: '取消',
        },
        {
          name: 'timeout',
          type: 'Function',
          desc: '传入参数用于设置自动关闭 alert',
          options: ['-'],
          default: '-',
        },
        {
          name: 'delay',
          type: 'Function',
          desc: '传入参数用于设置延迟打开 alert',
          options: ['Number'],
          default: '0',
        },
        {
          name: 'show',
          type: 'Function',
          desc: '该方法接受两个回调函数作为参数, 调用该方法显示 alert (只有调用了该方法，alert 实例才会被推入队列)',
          options: ['-'],
          default: '-',
        },
        {
          name: 'checkbox',
          type: 'Function',
          desc: '调用该方法并且传入一个参数作为复选框的文字 即显示复选框',
          options: ['-'],
          default: '-',
        },
        {
          name: 'callback',
          type: 'Function',
          desc: '该方法接受两个回调函数作为参数，可以多次调用注册多个回调函数',
          options: ['-'],
          default: '-',
        },
        {
          name: 'remove',
          type: 'Function',
          desc: '取消显示，从队列中删除某个 alert （在 show 函数之前调用无效）',
          options: ['-'],
          default: '-',
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
    },
  };
</script>
