# Alert

Alert 是 Dialog 组件的扩展

## 使用方法

Alert 的方法挂在 Vue 实例上，可在组件内直接调用 $daoAlert(), 具体使用方式如下

```javascript
const alert = this
  // 第一个参数是 title, 第二个参数 text
  .$daoAlert('title', 'text')
  // 主题颜色，参考 dao-button 的颜色
  .theme('blue')
  // 确认按钮的文本
  .confirmText('confirm test')
  // 取消按钮的文本
  .cancelText('cancel test')
  // 超时关闭
  .timeout(3000)
  // 延迟打开
  .delay(3000)
  // 辅助复选框
  .checkbox('下次不再提醒')
  // 注册多个回调
  .callback((res) => {
    // res 包含了当前的选项，选中了复选框, { checked: true },
    console.log('confirm:', res);
  }, () => {
    console.log('cancel');
  })
  // 显示 alert
  .show((res) => {
    console.log('confirm:', res);
  }, () => {
    console.log('cancel');
  });

  // 取消该alert 的显示，并推出队列
  alert.remove();

```


## 配置参数
参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
daoAlert | Function | 该方法作为入口函数, 第一个参数是 alert 的 title, 第二个参数是 alert 的 body (可以是 html 片段)  | 无 | 是
theme | Function | 传入参数为 dao-button 的类名，可以更改 comfirm button 的颜色 | 'blue' | 否
confirmText | Function | 传入参数用于设置 comfirm button 的文本 | '确定' | 否
cancelText | Function | 传入参数用于设置 cancel button 的文本 | '取消' | 否
timeout | Function | 传入参数用于设置自动关闭 alert | 无 | 否
delay | Function | 传入参数用于设置延迟打开 alert | 0 | 否
show | Function | 该方法接受两个回调函数作为参数, 调用该方法显示 alert (只有调用了该方法，alert 实例才会被推入队列) | 无 | 是
checkbox | Function | 调用该方法并且传入一个参数作为复选框的文字 即显示复选框 | 无 | 否
callback | Function | 该方法接受两个回调函数作为参数，可以多次调用注册多个回调函数 | 无 | 是
remove | Function | 取消显示，从队列中删除某个 alert （在 show 函数之前调用无效） | 无 | 是

```