# dao-list（列表）

dao-list 是一个全新的列表。

## 使用方法

```vue
<template>
  <dao-list
    :columns="columns"
    :rows="rows"
    :config="config"
    @create-service="onCreateService"
    @remove-service="onRemoveService"
    @pulse-service="onPulseService"></dao-list>
</template>
<script>
  export default {
    data() {
      return {
        columns: {
          service: {
            text: '服务',
            name: 'service',
            sortable: true,
          },
          status: {
            text: '状态',
            name: 'status',
            sortable: true,
          },
          memory: {
            text: '内存限制',
            name: 'memory',
            sortable: true,
          },
        },
        rows: [
          {
            service: {
              text: 'dce-plugin',
              value: 'dce-plugin',
              type: 'text',
            },
            status: {
              text: '正在运行',
              value: 'running',
              type: 'text',
              other: {
                status: 'running',
              },
            },
            memory: {
              text: '1000M',
              value: '1000000000',
              type: 'text',
            },
          },
        ],
        config: {
          columnOrder: ['service', 'status', 'memory'],
          sorting: {
            defaultSortBy: 'service',
            order: 'asc',
          },
          filter(key) {
            // ....
            return true
          },
          pagination: {
            limit: 20,
          },
          mainAction: {
            name: '添加服务',
            svg: 'plus',
            event: 'create-service',
            disabled: true,
            disabledSvg: 'key',
            disabledTooltip: '没有权限',
          },
          actions: [
            {
              name: '暂停',
              svg: 'pulse',
              event: 'pulse-service',
              disabled: true,
              disabledSvg: 'crown',
              disabledTooltip: '许可证到期',
            }, {
              name: '删除',
              svg: 'trash',
              event: 'remove-service',
              disabled: true,
              disabledSvg: 'crown',
              disabledTooltip: '许可证到期',
            },
          ],
        },
      };
    },
    methods: {
      onCreateService() {
      },
      onRemoveService(rows) {
      },
      onPulseService(rows) {
      },
    },
  };
</script>
```

## 参数
| 参数名     | 类型     | 说明                                       | 默认值  | 是否必填 |
| ------- | ------ | ---------------------------------------- | ---- | ---- |
| columns | Object | 分栏列表。它的每一个键值对代表一个分栏（Column），键代表一个分栏的名称。每个 Column  详细属性见下表。 | -    | 是    |
| rows    | Array  | 包含每一行的数据。它的每一个元素都是一个对象，每个对象代表一个单元格（Cell），每个对象的键代表这个单元格的名称。每个 cell 的详细属性见下表。 | -    | 是    |
| config  | Object | 其他表格配置。详细属性见下表                           | -    | 是    |

#### Column

| 参数名      | 类型      | 说明         | 默认值     | 是否必填 |
| -------- | ------- | ---------- | ------- | ---- |
| text     | String  | 分栏表头所显示的文本 | -       | 是    |
| sortable | Boolean | 该分栏是否可以排序  | ` true` | 否    |

#### Cell

| 参数名   | 类型     | 说明                         | 默认值         | 是否必填 |
| ----- | ------ | -------------------------- | ----------- | ---- |
| text  | String | 单元格所展示文本                   | -           | 是    |
| value | 不限     | 单元格所代表的值。一般用来排序。           | -           | 是    |
| type  | String | 单元格的类型。具体有哪几种需要总监决定。       | `'text'`    | 否    |
| other | Object | 一些特殊类型单元格可能需要一些其他属性，都放在这里面 | `undefined` | 否    |

### Config

| 参数名         | 类型       | 说明                                       | 默认值         | 是否必填 |
| ----------- | -------- | ---------------------------------------- | ----------- | ---- |
| columnOrder | Array    | 分栏的顺序，每个元素是分栏的名字。                        | -           | 是    |
| sorting     | Object   | 排序相关的设置。具体属性见下表。                         | `undefined` | 否    |
| filter      | Function | 筛选用的函数。接受一个字符串和所有行作为参数，返回 `true` 或者 `false`。如果不传，则没有搜索功能。 | `undefined` | 否    |
| pagination  | Object   | 分页相关的设置。不传则不分页。具体属性见下表。                  | -           | 否    |
| mainAction  | Object   | 表示左上角那个大按钮的属性。它是一个 Action。Action 的具体属性见下表。 | `undefined` | 否    |
| actions     | Array    | 所有操作的列表，它的每个元素都是一个 Action。               | []          | 否    |

#### Sorting

| 参数名           | 类型     | 说明                            | 默认值     | 是否必填 |
| ------------- | ------ | ----------------------------- | ------- | ---- |
| defaultSortBy | String | 默认排序所依据的分栏名字。不传则默认不排序。        | -       | 否    |
| order         | String | 默认排序的顺序。只接受 `'asc'`和`'desc'`。 | `'asc'` | 否    |

#### Pagination

| 参数名   | 类型     | 说明      | 默认值  | 是否必填 |
| ----- | ------ | ------- | ---- | ---- |
| limit | Number | 每页显示的行数 | 10   | 是    |

#### Action

| 参数名             | 类型      | 说明                          | 默认值         | 是否必填 |
| --------------- | ------- | --------------------------- | ----------- | ---- |
| name            | String  | 操作的名称                       | -           | 是    |
| svg             | String  | 操作的图标                       | `undefined` | 否    |
| event           | String  | 操作所触发的事件名称。这一事件可以在表格组件上监听到。 | -           | 是    |
| disabled        | Boolean | 是否禁用                        | `false`     | 否    |
| disabledSvg     | String  | 禁用时所显示的图标                   | `undefined` | 否    |
| disabledTooltip | String  | 禁用时所显示的说明                   | `undefined` | 否    |

## 事件

|  事件名称   |           说明            |    回调参数     |
| :-----: | :---------------------: | :---------: |
| 自定义操作事件 | 在触发自定义操作时触发。参数是所有所操作的行。 | rows: Array |
