# input-with-label (标签输入)

input-with-label。代码请参照目录：[src/components/dao-input-with-label](../src/components/dao-input-with-label)。

## 使用方法

### html 使用方法

#### 普通 Input

``` html
<dao-input-with-label
  v-model=""
  [:options]
  [disabled]
  [placeholder]
  [config]
</dao-input-with-label>
```

## 组件参数

### 组件接受的参数

| 参数名 | 类型 | 说明 | 默认值 | 是否必填 |
|:-----:|:----:|:---:|:-----:|:------:|
| v-model | String | 绑定值 | '' | 是 |
| disabled | Boolean | 禁用 | false | 否 |
| autofocus | Boolean | 自动聚焦 | false | 否 |
| config | Obejct | 配置项 | ``` { canReset: false, shutDown: false} ``` | 否 |
| options | Array | 选项 | ``` [] ``` | 否 |
- 其中 config 结构如下所示
```javascript
{ 
    canReset: false,  // 是否可以重置, 默认 fasle
    shutDown: false // 是否关闭提示功能，关闭后将会是普通的 input 默认false
}
```
- 其中 options 结构如下所示

```javascript
options: [
  {
    tab_name: '标签',
    keys: [
      {
        name: '节点类型',
        val: 'node_type',
        operations: [':'], // 可选，默认是":",当操作符大于一个时，或者两个key的operations不一致，那么输入提示将会展开变成三级菜单
        vals: [
          {
             name: '控制节点',
             val: 'ctrl_node',
          },
          {
             name: '普通节点',
             val: 'normal_node',
          },
        ],
      },
    ],
  },
  {
    tab_name: '标签2',
    keys: [
      {
        name: '节点类型2',
        val: 'node_type2',
        vals: [
          {
             name: '控制节点2',
             val: 'ctrl_node2',
          },
          {
             name: '普通节点2',
             val: 'normal_node2',
          },
        ],
      },
    ],
  },
],

```

### 组件接受的事件

| 事件名称 | 说明 | 回调参数 |
|:-------:|:---:|:-------:|
| keyup | 按键弹起时触发 |  |
| keydown | 按下按键时触发 |  |
| blur | 在 Input 失去焦点时触发 |  |
| focus | 在 Input 获得焦点时触发 ||
| change | 在 Input 值改变时触发 | string |
| input | 在 Input 值改变时触发 | string|
| reset | 在点击重置时触发 | |