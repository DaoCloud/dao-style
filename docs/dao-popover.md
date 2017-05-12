# popover（提示框）

popover 是一个现实提示框的组件。代码请参照目录：[src/components/dao-popover](../src/components/dao-popover)。

## 使用方法

### html 使用方法

```html
<dao-popover content="content"
             trigger="trigger"
             placement="placement"
             :popover-append-to-body="appendToBody"></dao-popover>
```

## 组件参数

### 组件接受的参数

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| content | String | 提示内容 |-|否|
| trigger | String | 触发方式，可选值 ```click, focus, hover``` |-|是|
| placement | String | 提示框出现位置，可选值 ```top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end```。 |bottom|否|
| popover-append-to-body | Boolean | 是否将 popover 添加到 body |false|否|

### 组件 Slot 接受的参数

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| - | HTML | Popover 内嵌 HTML 文本，将覆盖 content 参数 |-|否|
