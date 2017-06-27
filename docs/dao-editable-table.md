# dao-editable-table（可编辑表格）

editable-table是一个可编辑表格组件。代码请参照目录：[dao-editable-table](../src/components/dao-editable-table)。

## 使用方法

### HTML

```HTML
<dao-editable-table v-bind:config="config" v-model="people"></dao-editable-table>
```

### config 数据结构示例
```JavaScript
export default {
  data() {
    return {
      config: {
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
            type: 'input',
            name: 'name',
            default: '',
            validate(row, all) {
              if (row.name === '') {
                return '姓名不能是空的';
              }
              if (all.filter(r => r.name === row.name).length > 1) {
                return '姓名不能重复';
              }
              return true;
            },
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
            label: '单身',
          },
          {
            type: 'text',
            name: 'company',
            default: 'DaoCloud',
          },
        ],
      }
      people: '',
    };
  }
};
```

### model 数据结构示例
```JavaScript
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

## 参数

### 组件接受的参数 

| 参数名     | 类型     | 说明                                 | 默认值  | 是否必填 |
| ------- | ------ | ---------------------------------- | ---- | ---- |
| config  | Object | 配置对象。具体内容见 [config 对象](#config-对象) | -    | 是    |
| v-model | Object | 数据绑定的对象                            | -    | 是    |

### 组件的事件
| 事件名称 | 说明 | 回调参数 |
|:-------:|:---:|:-------:|
| valid | 在每次修改可编辑表格的内容之后，v-model 更新之前触发。 | (valid: Boolean) |

### config 对象

| 参数名    | 类型     | 说明                                       | 默认值  | 是否必填 |
| ------ | ------ | ---------------------------------------- | ---- | ---- |
| header | Array  | 代表表头上的文字。其中的元素可以是简单的字符串，也可以是一个对象。对象有两个属性：`text` 和 `tooltip`。`text` 表示显示的文字，`tooltip` 则是表头的 tooltip 文字。 | -    | 是    |
| body   | Object | 具体内容见 [body 对象](#body-对象)                | -    | 是    |

### body 对象

| 参数名      | 类型             | 说明                                       | 默认值            | 是否必填 |
| -------- | -------------- | ---------------------------------------- | -------------- | ---- |
| type     | String         | 只接受这四个值：`'input'、'text'`、`'select'`、`'checkbox'`。分别表示输入框、固定文本、选择和是非题。 | -              | 是    |
| name     | String         | 它是 result 对象中的属性名称。                      | -              | 是    |
| default  | String/Boolean | 默认值。类型根据这个字段的 type 来决定。                  | `''` 和 `false` | 否    |
| options  | Array          | 只有当这个字段的 type 是 `'select'` 的时候才需要。具体传入的参数参考 dao-select。 | -              | 否    |
| label | String          | 只有当这个字段的 type 是 `'checkbox'` 的时候才需要，它是 checkbox 的 label。 | -              | 否    |
| validate | Function       | 验证函数。这个函数应该是个纯函数。它接受两个参数，第一个是当前行的数据，第二个是所有行的数据（包括新添加的行，不包括新删除的行），如果返回 `true`，表示验证通过。如果返回其他字符串，表示验证不通过，且错误信息是字符串内容。 | -              | 否    |
