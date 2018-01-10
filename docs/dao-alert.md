# Alert

Alert 是 Dialog 组件的扩展

## 使用方法

Alert 的方法挂在 Vue 实例上，可在组件内直接调用 $daoAlert(), 具体使用方式如下

```javascript
this
  // 第一个参数是 body，第二个参数是 title
  .$daoAlert('text', 'title')
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
  .show((action) => {
    // 如果当前环境不支持 promise 会执行这个回调函数
    if (action === 'confirm') {
      console.log('fallback confirm');
    }
    if (action === 'cancel') {
      console.log('fallback cancel');
    }
  })
  // 环境支持 Promise 的 show 会返回一个 Promise
  .then(() => {
    console.log('promise confirm');
  }, () => {
    console.log('promise cacel');
  });

```


## 配置参数
参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
daoAlert | Function | 该方法作为入口函数, 第一个参数是 alert 的 body(可以是一段 html), 第二个参数是 alert 的 title  | ['', '提示'] | 是
theme | Function | 传入参数为 dao-button 的类名，可以更改 comfirm button 的颜色 | 'blue' | 否
confirmText | Function | 传入参数用于设置 comfirm button 的文本 | '确定' | 否
cancelText | Function | 传入参数用于设置 cancel button 的文本 | '取消' | 否
timeout | Function | 传入参数用于设置自动关闭 alert | 无 | 否
delay | Function | 传入参数用于设置延迟打开 alert | 0 | 否
show | Function | 该方法必须调用, 当环境不支持 Promise 时可以传入一个回调函数 | 无 | 是

```