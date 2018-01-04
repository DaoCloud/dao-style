# Message (对话框)

Message 是 Dialog 组件的扩展，扩展了一个 alert dialog, 一个 confrim dialog, 其中 alert 和 confirm 的差别是 alert 没有取消按钮

## 使用方法

Message 的方法挂在 Vue 实例上，可在组件内直接调用 $message(options), $confirm(options), $alert(options) 如下

```javascript
this.$confirm({
  // 标题
  title: 'confirm title',
  // 内容
  text: 'confirm text',
  // 主题颜色，可以使用 dao-button 里的样式来控制确认按钮的颜色
  theme: 'red',
  // 取消按钮的文字
  cancelText: '取消文字',
  // 取消时候调用
  cancel() {
    console.log('confirm cancel');
  },
  // 关闭时调用
  close() {
    console.log('confirm close');
  },
  // 确认按钮的文字
  confirmText: '确认文字',
  // 确认时调用
  confirm() {
    console.log('confirm confirm');
  },
});

```


## 配置参数
```typescript
interface Options{
  // 对话框标题
  title?: string;
  // 内容
  text?: string;
  // 主题颜色，可以使用 dao-button 里的样式来控制确认按钮的颜色, 默认 'blue'
  theme?: string;
  // 取消按钮的文字, 仅在类型为 confirm 时生效， 默认‘取消’
  cancelText?: string;
  // 取消时候调用, 仅在类型为 confirm 时生效
  cancel?: Function;
  // 关闭时调用
  close?: Function;
  // 确认按钮的文字， 默认‘确认’
  confirmText?: string;
  // 确认时调用
  confirm?: Function;
}
```