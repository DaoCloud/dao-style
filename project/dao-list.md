# dao-list（列表）

dao-list 是一个全新的列表。

## 使用方法

```vue
<template>
  <dao-list
    :columns="columns"
    :rows="rows"
    :config="config"
    @refresh="onRefresh"
    @create-service="onCreateService"
    @remove-service="onRemoveService"
    @pause-service="onPauseService">
  </dao-list>
</template>
<script>
  import _ from 'lodash';

  export default {
    data() {
      return {
        columns: {
          service: {
            text: '服务',
            name: 'service',
          },
          status: {
            text: '状态',
            name: 'status',
          },
          mode: {
            text: '模式',
            name: 'mode',
          },
          containers: {
            text: '容器数',
            name: 'containers',
          },
          memory: {
            text: '内存限制',
            name: 'memory',
          },
          cpu: {
            text: 'CPU 限制',
            name: 'cpu',
          },
          creationTime: {
            text: '创建时间',
            name: 'creationTime',
          },
          sin: {
            text: '正弦',
            name: 'sin',
            isFilter: true,
          },
        },
        rows: _.map(Array(100), (v, i) => (
          {
            service: {
              text: `${i}dce-plugin-applb`,
              value: `${i}dce-plugin-applb`,
              type: 'text',
            },
            status: {
              text: '正在运行',
              value: 'running',
              type: 'status',
              other: {
                color: 'green',
              },
            },
            mode: {
              text: '弹性',
              type: 'text',
              value: '弹性',
            },
            containers: {
              text: '10',
              type: 'text',
              value: 10,
            },
            memory: {
              text: '0.5M/1G',
              type: 'text',
              value: 5000000,
            },
            cpu: {
              render: (h, td) => {
                const progress = td.value / 3;
                return h('dao-progress', {
                  props: {
                    progress,
                  },
                });
              },
              type: 'custom',
              value: 0.5,
            },
            creationTime: {
              text: '2017-09-23',
              type: 'text',
              value: 115454154878,
            },
            sin: {
              type: 'filter',
              value: Math.sin(i) > 0 ? '正弦值正' : '正弦值负',
            },
          }
        )),
        config: {
          tableId: 'serviceList',
          tableName: '服务',
          columnsOrder: ['service', 'status', 'containers', 'memory', 'creationTime', 'cpu'],
          sorting: {
            defaultSortBy: 'service',
            order: 'asc',
          },
          pagination: {
            limit: 10,
          },
          mainOperation: {
            name: '添加服务',
            svg: 'plus',
            event: 'create-service',
            disabled: true,
            disabledSvg: 'key',
            disabledTooltip: '没有权限',
          },
          operations: [
            {
              groupName: '状态',
              operations: [
                {
                  name: '暂停',
                  svg: 'pause',
                  event: 'pause-service',
                  disabled: false,
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
            {
              groupName: '资源',
              operations: [
                {
                  name: '网络',
                  svg: 'node',
                  event: 'network',
                }, {
                  name: '存储',
                  svg: 'cpu',
                  event: 'storage',
                },
              ],
            },
          ],
        },
      };
    },
    methods: {
      onRefresh() {
        console.log('更新');
      },
      onCreateService() {
        console.log('创建容器');
      },
      onRemoveService(rows) {
        console.log('删除容器', rows);
      },
      onPauseService(rows) {
        console.log('暂停容器', rows);
      },
    },
  };
</script>
```

## 参数
| 参数名     | 类型     | 说明                                       | 默认值  | 是否必填 |
| ------- | ------ | ---------------------------------------- | ---- | ---- |
| columns | Object | 分栏列表。它的每一个键值对代表一个分栏（Column），键代表一个分栏的名称。每个 Column  详细属性见下表。 | -    | 是    |
| rows    | Array  | 包含每一行的数据。它的每一个元素都是一个对象代表一行。每一行的属性代表一个单元格（Cell），每个 Cell 的键代表这个单元格的名称。每个 Cell 的详细属性见下表。 | -    | 是    |
| config  | Object | 其他表格配置。详细属性见下表。                          | -    | 是    |

#### Column

| 参数名      | 类型      | 说明                                       | 默认值         | 是否必填 |
| -------- | ------- | ---------------------------------------- | ----------- | ---- |
| name     | String  | 分栏的名称。                                   | -           | 是    |
| text     | String  | 分栏表头所显示的文本。                              | -           | 是    |
| unsortable | Boolean | 该分栏是否不能用于排序。                             | `false`     | 否    |
| isFilter | Boolean | 该分栏数据是否仅用作筛选用途。如果是的话，那么该分栏将不会展示在表格中，但是可以用于筛选。 | `undefined` | 否    |
| mainKey | Boolean | 该分栏数据是主键。如果列表中有主键，那么当 rows 更新时，原本的每一行的选中状态会保留。如果不设置主键，则没有这个功能。建议设置。 | `false` | 否    |

#### Cell

| 参数名    | 类型       | 说明                                       | 默认值         | 是否必填 |
| ------ | -------- | ---------------------------------------- | ----------- | ---- |
| text   | String   | 单元格所展示文本。                                | -           | 是    |
| value  | 不限       | 单元格所代表的值。一般用来排序。                         | -           | 是    |
| type   | String   | 单元格的类型。具体支持的类型，见后文。如果需要自定义模板，需要把该值设为 `'custom'`。 | `'text'`    | 否    |
| other  | Object   | 一些特殊类型单元格可能需要一些其他属性，都放在这个对象里面。           | `undefined` | 否    |
| render | Function | 用于自定义模板的函数。`render` 函数接受两个参数，第一个参数是 Vue 的 `createElement` 函数，第二个参数是当前的 Cell 对象。`render` 函数所需要返回的是一个 VNode。详情请见 [createElement](https://cn.vuejs.org/v2/guide/render-function.html#createElement-参数)。 | `undefined` | 否    |

### Config

| 参数名           | 类型     | 说明                                       | 默认值         | 是否必填 |
| ------------- | ------ | ---------------------------------------- | ----------- | ---- |
| tableId       | String | 用于标识这个列表的唯一 ID。                          | -           | 是    |
| tableName     | String | 表示列表的名称，会用于展示。这个名称应该是列表中的每一行元素的名称，比如“服务列表”的每一行元素名称是“服务”。 | -           | 是    |
| columnsOrder  | Array  | 分栏的顺序，每个元素是分栏的名字。                        | -           | 是    |
| sorting       | Object | 排序相关的设置。具体属性见下表。                         | `undefined` | 否    |
| pagination    | Object | 分页相关的设置。不传则不分页。具体属性见下表。                  | -           | 否    |
| mainOperation | Object | 表示左上角那个大按钮的属性。它是一个 Operation。Operation 的具体属性见下表。 | `undefined` | 否    |
| operations    | Array  | 所有操作的列表。它的每一个元素都是 OperationGroup。       | []          | 否    |
| hideCheckbox    | Boolean  | 是否隐藏 checkbox    | false |  否  |
| hideOperation    | Boolean  |  是否隐藏操作   | false |   否   |
| defaultCheck    | Boolean  |  是否一开始默认选中第一行   | true |   否   |

#### Sorting

| 参数名           | 类型     | 说明                            | 默认值     | 是否必填 |
| ------------- | ------ | ----------------------------- | ------- | ---- |
| defaultSortBy | String | 默认排序所依据的分栏名字。不传则默认不排序。        | -       | 否    |
| order         | String | 默认排序的顺序。只接受 `'asc'`和`'desc'`。 | `'asc'` | 否    |

#### Pagination

| 参数名   | 类型     | 说明      | 默认值  | 是否必填 |
| ----- | ------ | ------- | ---- | ---- |
| limit | Number | 每页显示的行数 | 10   | 是    |

#### OperationGroup

| 参数名        | 类型     | 说明                           | 默认值  | 是否必填 |
| ---------- | ------ | ---------------------------- | ---- | ---- |
| groupName  | String | 操作组的名称。                      | -    | 是    |
| operations | Array  | 操作组中的操作。每一个元素都是一个 Operation。 | -    | 是    |
| single | Boolean | 这个操作是单行操作。在每一行右边的操作菜单中执行，永远不会在工具栏和右键菜单中显示。 | `undefined` | 否    |
| alwaysShow | Boolean | 这个操作永远都会显示在工具栏上。默认情况下，一定要至少选中一行，工具栏上才会出现操作按钮。这个设置对 mainOperation 无效。 | `undefined` | 否    |

#### Operation

| 参数名             | 类型      | 说明                          | 默认值         | 是否必填 |
| --------------- | ------- | --------------------------- | ----------- | ---- |
| name            | String  | 操作的名称。                      | -           | 是    |
| svg             | String  | 操作的图标。                      | -           | 是    |
| event           | String  | 操作所触发的事件名称。这一事件可以在表格组件上监听到。 | -           | 是    |
| disabled        | Boolean | 是否禁用。                       | `false`     | 否    |
| disabledSvg     | String  | 禁用时所显示的图标。                  | `undefined` | 否    |
| disabledTooltip | String  | 禁用时所显示的说明。                  | `undefined` | 否    |

## 事件

|  事件名称   |           说明            |    回调参数     |
| :-----: | :---------------------: | :---------: |
| refresh |     在列表中点击刷新所触发的事件。     |      无      |
| checked-rows-change |   列表中选中的行变化时所触发的事件。   |  rows: Array |
| 自定义操作事件 | 在触发自定义操作时触发。参数是所有所操作的行。 | rows: Array |

##支持的 td 类型
#### goto
goto 类型的 td 用作带有跳转链接的 td
| 参数名             | 类型      | 说明                          | 默认值         | 是否必填 |
| --------------- | ------- | --------------------------- | ----------- | ---- |
| other.url            | String  | 链接地址。这个地址会被用作 a 元素的 href 属性。  | -           | 是    |

#### time 类型
time 类型的 td 专门用来表示时间。 time 类型的 td 不需要 text 属性，但是必须传入 value 属性，且 value 必须是一个时间戳。

#### filter 类型
filter 类型的 td 永远不会展示在列表中，它存在的意义仅仅是用来筛选。需要在 columns 中添加对应的分栏配合使用。
