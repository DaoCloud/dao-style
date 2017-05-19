# dao-style-vue 文档

docs 文件夹记录 dao-style-vue 项目的所有文档。主要包括 dao-style-vue 组件库中各个组件的文档说明。组件文档的撰写格式如以下例子。

dao-style-vue 项目的文档欢迎所有参与者提出宝贵意见，也衷心地感谢所有参与者通过PR的形式完善文档。项目参与，请参照 [project](../project) 。

# editable-table（可编辑表格）

editable-table是一个可编辑表格组件。代码请参照目录：[src/components/dao-editable-table](../src/components/dao-editable-table)。

## 使用方法

### html 使用方法

```html
<dao-editable-table v-bind:config="config" v-bind:result="result"></dao-editable-table>
```

### javascript 使用方法

```javascript
const config = {
  header: [
    '姓名',
    '性别',
    '单身',
    {
      text: 'DaoCloud',
      tooltip: '道客',
    },
  ],
  body: [
    {
      type: 'text',
      name: 'name',
      default: '',
    },
    {
      type: 'select',
      name: 'gender',
      options: ['男', '女'],// 此处具体的用法还要根据 select 而定
      defualt: '男',
    },
    {
      type: 'checkbox',
      name: 'single',
      default: false,
    },
    {
      type: 'text',
      name: 'company',
      default: 'DaoCloud',
      disabled: true,
    },
  ],
}
```

### 返回结果

```
[
  {
    name: '谈博文',
    gender: '男',
    single: true,
    company: 'DaoCloud'
  },
  {
    name: 'Kay',
    gender: '男',
    single: false,
    company: 'DaoCloud'
  },
]
```

## 组件参数

### 组件接受的参数 

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| config | 对象 | 配置对象。具体内容见表 [config 对象](#config-对象) |-|是|
| result | 对象 | 保存最终结果的对象。 |-||

### config 对象

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| header | array| 代表表头上的文字。其中的元素可以是简单的字符串，也可以是一个对象。对象有两个属性：`text` 和 `tooltip`。`text` 表示显示的文字，`tooltip` 则是表头的 tooltip 文字。 |－|是|
| body | object | 具体内容见表 [body 对象](#body-对象)|－|是|

### body 对象

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| type | string | 只接受这三个值：`'text'`、`'select'`、`'checkbox'`。分别表示文本、选择和是非题。|-|是|
| name | string| 它是 result 对象中的属性名称。|-|是|
| default | string/boolean| 默认值。类型根据这个字段的 type 来决定。 |`''`和 `false`|否|
| disabled |boolean | 这个字段是否可以编辑。|`false`|否|
| options | array | 只有当这个字段的 type 是 `'select'` 的时候才需要。具体传入的参数参考 dao-select。 |-|否|