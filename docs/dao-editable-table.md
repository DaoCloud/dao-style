# dao-editable-table（可编辑表格）

editable-table是一个可编辑表格组件。代码请参照目录：[src/components/dao-editable-table](../src/components/dao-editable-table)。

## 使用方法
### HTML
```HTML
<dao-editable-table v-bind:config="config" v-bind:result="result"></dao-editable-table>
```

### config 例子
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

### result 例子
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

## 参数
### 组件接受的参数 
| 参数名    | 类型     | 说明                                 | 默认值  | 是否必填 |
| ------ | ------ | ---------------------------------- | ---- | ---- |
| config | Object | 配置对象。具体内容见 [config 对象](#config-对象) | -    | 是    |
| result | Object | 保存最终结果的对象。                         | -    | 是    |

### config 对象
| 参数名    | 类型     | 说明                                       | 默认值  | 是否必填 |
| ------ | ------ | ---------------------------------------- | ---- | ---- |
| header | Array  | 代表表头上的文字。其中的元素可以是简单的字符串，也可以是一个对象。对象有两个属性：`text` 和 `tooltip`。`text` 表示显示的文字，`tooltip` 则是表头的 tooltip 文字。 | -    | 是    |
| body   | Object | 具体内容见 [body 对象](#body-对象)                | -    | 是    |

### body 对象
| 参数名      | 类型             | 说明                                       | 默认值            | 是否必填 |
| -------- | -------------- | ---------------------------------------- | -------------- | ---- |
| type     | String         | 只接受这三个值：`'text'`、`'select'`、`'checkbox'`。分别表示文本、选择和是非题。 | -              | 是    |
| name     | String         | 它是 result 对象中的属性名称。                      | -              | 是    |
| default  | String/Boolean | 默认值。类型根据这个字段的 type 来决定。                  | `''` 和 `false` | 否    |
| disabled | Boolean        | 这个字段是否可以编辑。                              | `false`        | 否    |
| options  | Array          | 只有当这个字段的 type 是 `'select'` 的时候才需要。具体传入的参数参考 dao-select。 | -              | 否    |

