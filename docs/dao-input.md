# Input

Input 是一个 32 像素高的（包括 border）表单组件（form component）。代码请参照目录：[src/components/dao-input](../src/components/dao-input)。

## 使用方法

### html 使用方法

#### 普通 Input
``` html
<dao-input
  v-model=""
  [type=""]
  [:disabled=""]
  [value=""]
  [:icon-inside=""]
  [message=""]
  [message-placement=""]
  [:message-no-icon=""]
  [:search=""]
  [status=""]
  [:required=""]
  [placeholder=""]
  [:readonly=""]
  [:autofocus=""]
  [name=""]
  [form=""]
  [:maxlength=""]
  [:minlength =""]
  [:max=""]
  [:min=""]
  [:step=""]>
</dao-input>
```

#### 普通 Input 纯样式
``` html
<input class="dao-control" type="text" v-model="input">
```

#### Editable Input

![](https://cloud.githubusercontent.com/assets/7001013/17135742/d767707a-5363-11e6-8377-b079ad3c9637.png)

Editable Input 是一个可以编辑的 Disabled Input。当我们不希望用户轻易编辑某些字段，我们可以使用这个组件。

功能为输入时，实时验证输入信息。额外提供功能：enter 键保存数据，esc 键取消修改。

``` html
<dao-input
  v-model=""
  type="editable"
  [save-btn-content=""]
  [:edit-state=""]
  [:disabled=""]
  [:on-check=""]
  [:on-success=""]
  [value=""]
  [:icon-inside=""]
  [message=""]
  [message-placement=""]
  [:message-no-icon=""]
  [:search=""]
  [status=""]
  [:required=""]
  [placeholder=""]
  [:readonly=""]
  [:autofocus=""]
  [name=""]
  [form=""]
  [:maxlength=""]
  [:minlength =""]
  [:max=""]
  [:min=""]
  [:step=""]>
</dao-input>
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
| icon-inside | Boolean | 当需要弹出 popover 提示 | false | 否 |
| message | String | 提示的内容，可为空字符串，必选组合参数 (info, success, error)中一个，可选组合参数 icon-inside, class, message-placement | - | 否 |
| message-placement | String | 提示内容的位置，必选组合参数 message，可选值 right-top，top-right | right-top | 否 |
| message-no-icon | Boolean | 提示信息前不带图标，只在 icon-inside 值为 false 时生效 | false | 否 |
| search | Boolean | 搜索输入框 | false | 否 |
| status | String | 状态，可选值（loading/info/success/error） | - | 否 |
| required | Boolean | 必填 | false | 否 |
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
| click | 点击 Input 内的图标时触发 | (event: Event) |
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 在 Input 值改变时触发 | (value: String \| Number) |

### Editable Input 接受的参数
支持 Input 所有普通用法。

| 参数名 | 类型 | 说明 | 默认值 | 是否必填 |
|:-----:|:----:|:---:|:-----:|:------:|
| type | String | 类型，必填值：editable | text | 是 |
| save-btn-content | String | 保存按钮中显示的内容 | 保存 | 否 |
| edit-state | Boolean | 初始编辑状态 | false | 否 |
| on-check | Function | 检查输入的函数，符合要求返回 true，否则返回 false | - | 否 |
| on-success | Function | 如果检查符合输入，进行的处理 | - | 否 |
