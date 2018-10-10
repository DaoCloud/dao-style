# popover（提示框）

popover 是一个显示提示框的组件。代码请参照目录：[src/components/dao-popover](../src/components/dao-popover)。

## 使用方法

### html 使用方法

```html
<dao-popover
  trigger="trigger"
  [content="content"]
  [placement="placement"]
  [:append-to-body="appendToBody"]
  [:popper-cls="popperCls"]
  [:always="always"]
  [:disabled="disabled"]>
  <div slot="content"></div>
</dao-popover>
```

## 组件参数

### 组件接受的参数

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| trigger | String | 触发方式，可选值 ```click, focus, hover``` | click |否|
| content | String | 提示内容 |-|否|
| placement | String | 提示框出现位置，可选值 ```top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end```。 |bottom|否|
| always | Boolean | 是否强制显示 |false|否|
| disabled | Boolean | 是否不可用 |false|否|
| appendToBody | Boolean | 是否将 popper 元素添加到 body |true|否|
| popperCls | Array | appendToBody 之后为 popper 元素添加的类，一般用于修改 popper 元素的样式 | - |否|

### 组件 Slot 接受的参数

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| content | HTML | Popover 内嵌 HTML 文本，将覆盖 content 参数 |-|否|
