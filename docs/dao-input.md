# Input (输入框)

Input 是一个 32 像素高的（包括 border）表单组件（form component）。代码请参照目录：[src/components/dao-input](../src/components/dao-input)。

## 使用方法

### html 使用方法

#### 普通 Input

``` html
<dao-input
  v-model=""
  [type=""]
  [disabled]
  [value=""]
  [size=""]
  [icon-inside]
  [status=""]
  [message=""]
  [message-placement=""]
  [:message-no-icon=""]
  [search]
  [block]
  [required]
  [show-tooltip-only-hover=""]
  [placeholder=""]
  [readonly]
  [autofocus]
  [name=""]
  [form=""]
  [maxlength=""]
  [minlength =""]
  [max=""]
  [min=""]
  [step=""]>
</dao-input>
```

#### 普通 Input 纯样式

``` html
<input
  class="dao-control"
  type="text"
  v-model="input"
  [size=""]>
```

#### Editable Input

![](https://cloud.githubusercontent.com/assets/7001013/17135742/d767707a-5363-11e6-8377-b079ad3c9637.png)

Editable Input 是一个可以编辑的 Disabled Input。当我们不希望用户轻易编辑某些字段，我们可以使用这个组件。

功能为保存时，验证输入的值。额外提供功能：enter 键保存数据，esc 键取消修改。

``` html
<dao-editable-input
  v-model=""
  [save-btn-content=""]
  [:edit-state=""]
  [:disabled=""]
  [:on-check=""]
  [:on-success=""]
  [value=""]
  [size=""]
  [icon-inside]
  [status=""]
  [message=""]
  [message-placement=""]
  [:message-no-icon=""]
  [search]
  [required]
  [show-tooltip-only-hover=""]
  [placeholder=""]
  [readonly]
  [autofocus]
  [name=""]
  [form=""]
  [maxlength=""]
  [minlength =""]
  [max=""]
  [min=""]
  [step=""]>
</dao-editable-input>
```

#### Textarea

![](https://cloud.githubusercontent.com/assets/7001013/17135801/1a298650-5364-11e6-9a48-07c312b7532a.png)

只需添加 `dao-control` 这个 class 就可以使用样式。Textarea 组件不限高度，只需要设置 `rows` 属性值就能为 Textarea 组件提供所需行数的高度。

``` html
<textarea class="dao-control" type="text" rows="3" placeholder="请填写内容">textarea default</textarea>
<textarea class="dao-control" type="text" rows="3" disabled="disabled">textarea disabled</textarea>
```

## 组件参数

### 组件普通用法接受的参数

| 参数名 | 类型 | 说明 | 默认值 | 是否必填 |
|:-----:|:----:|:---:|:-----:|:------:|
| type | String | 类型，可选值（原生值） | text | 否 |
| value | String, Number | 绑定值 | - | 否 |
| disabled | Boolean | 禁用 | false | 否 |
| size | String | 尺寸，可选值（sm） | - | 否 |
| icon-inside | Boolean | 当需要弹出 popover 提示 | false | 否 |
| append-to-body | Boolean | 弹出的提示是否appendToBody | true | 否 |
| status | String | 状态，可选值（loading/info/success/error） | - | 否 |
| message | String | 提示的内容，可为空字符串，必选组合参数 status，可选组合参数 icon-inside, message-placement | - | 否 |
| message-placement | String | 提示内容的位置，必选组合参数 message，可选值 top-end，right-start | top-end | 否 |
| message-no-icon | Boolean | 提示信息前不带图标，只在 icon-inside 值为 false 时生效 | false | 否 |
| search | Boolean | 搜索输入框 | false | 否 |
| block | Boolean | 不限制 input 宽度 | false | 否 |
| required | Boolean | 必填 | false | 否 |
| show-tooltip-only-hover | Boolean | 只有在鼠标 hover 到 icon 上时才会出现 tooltip | true | 否 |
| placeholder | String | 	输入框占位文本 | - | 否 |
| readonly | Boolean | 	原生属性，是否只读 | false | 否 |
| autofocus | Boolean | 原生属性，自动获得焦点 | false | 否 |
| name | String | 原生属性 | false | 否 |
| form | String | 原生属性 | - | 否 |
| maxlength | Number | 最大输入长度 | - | 否 |
| minlength | Number | 最小输入长度 | - | 否 |
| max | Number | 原生属性，设置最大值 | - | 否 |
| min | Number | 原生属性，设置最小值 | - | 否 |
| step | Number | 原生属性，设置输入字段的合法数字间隔 | - | 否 |

### 组件普通用法接受的事件

| 事件名称 | 说明 | 回调参数 |
|:-------:|:---:|:-------:|
| keyup | 按键弹起时触发 | (event: Event) |
| keydown | 按下按键时触发 | (event: Event) |
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 在 Input 值改变时触发 | (value: String \| Number) |

### 组件 Slot 接受的参数

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| prepend | HTML | Input Group 前置内容 |-|否|
| append | HTML | Input Group 后置内容 |-|否|
| button | HTML | Input 插入按钮，可更优雅的将按钮与提示信息组合呈现 |-|否|

### Editable Input 接受的参数

支持 Input 所有普通用法，除了 block 参数。

| 参数名 | 类型 | 说明 | 默认值 | 是否必填 |
|:-----:|:----:|:---:|:-----:|:------:|
| save-btn-content | String | 保存按钮中显示的内容 | 保存 | 否 |
| edit-state | Boolean | 初始编辑状态 | false | 否 |
| on-check | Function | 检查输入的函数，符合要求返回 true，否则返回 false | - | 否 |
| on-success | Function | 如果检查符合输入，进行的处理 | - | 否 |
