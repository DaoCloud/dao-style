
     
    
# dao-table-view

dao-table-view 是一个全新的列表组件

## 使用方法

```html
<template>
 <dao-table-view
      :rows="rows"
      :config="config"
      :loading="loading"
      @search="onSearch"
      @event-a="onEventA"
      @page-change="onPageChange"
      @checked-rows-change="onCheckedRowsChange"
      @refresh="onRefresh">
      <!-- 这里会透传两个值，checkType 表示选择类型，all 是全部选择(注意：当是后端分页时候，这个数据是不准的) -->
      <!-- <checkedRow> 表示当前选择的行 -->
      <div slot="tool" slot-scope="{ checkType,checkedRows}">
         这个 slot 将会替代批量操作所在的区域位置
      </div>
      <div slot="search">
        这个 slot 替换搜索所在区域,可以替掉 input-with-label
      </div>
    </dao-table-view>
</template>
```
```javascript
  import _ from 'lodash';
export default {
    name: 'TableView',
    created() {
      this.loading = true;
      setTimeout(() => {
        this.rows = _.map(Array(20),(v,i) => ({
          create_at: (new Date()).getTime(),
          cpu: 0.5,
          memory: i * 2,
          containers: 10,
          mode: '弹性',
          status: i % 3 === 0 ? '运行中' : '已停止',
          service: `${i + 1}dce-plugin-applb`,
        }));
        this.loading = false;
      },1000);
    },
    data() {
      return {
        loading: false,
        config: {
          // id 用于标示一个 list，便于 localstorage 对当前配置的存储
          id: '1q2w3e'(localstorage 存储了包括表头宽度，表头顺序，排序规则，key 是DCE_List_Settings_${key})  
          // 是否隐藏右上角排序下拉框.默认不隐藏
          // hideSortHelper: true,

          // 加载中的文本，默认“加载中”
          // loadingText: '加载中.....',

          // 没有数据的文本，默认“没有数据”
          // emptyText: '没有数据呀呀呀呀呀呀',

          // 每一行是否可选，不可选的话会隐藏调 checkbox
          selectable: true,
  
          // 这个 search 如果不传，则隐藏搜索，并且将分页自动挪到 view 下面
          // 以下这个配置是 input-with-label 的打平版，具体请参考 input-with-label 的配置
          // 暂时没有把input-with-label 的事件全部冒泡上来，如果觉得这个搜索无法满足所有场景，那么可以自己传入 search 的 slot 去代替
          search: {
            shutDown: false,// 是否回退为普通搜索 默认 false
            autofocus: true,// 是否自动聚焦 默认 false,
            placeholder: '搜索哈哈哈哈哈',
            // 如果是前端分页，那么这个 options 默认是 rows 的所有在显示的 prop 和对应的去重 value
            // options: [],
          },
          // 分页配置
          // pagination: {
          // 考虑到可能是后端分页，如果是后端分页，那就会取这个值去替代 rows.length
          // 如果没传这个值，那就可以认为是前端分页！！！！！！
          // 如果是前端分页 -> 那么 dao-table-view 会接管所有可以做的工作，比如搜索，排序等都会在 dao-table-view 内部实现
          // total: 100,
          // 起始值是 1
          //   page: 1,
          //   per_page: 10,
          // },
          // 排序规则
          // 如果不传，则默认取第一个非 unsortable 属性升序
          // sort: {
          //   prop: 'create_at',
          //   order: 'asc',
          // },
          // props 获取规则，渲染规则
          // 提供几种默认的渲染规则， 如果有其他需求，请使用 render 方法传入组件
          props: {
            service: {
              name: '服务',
              type: 'goto',
              url(val) {
                return `${val}dce-plugin-applb`;
              },
            },
            status: {
              name: '状态',
              // 不支持排序的 key 请在这里指明
              unsortable: true,
              type: 'status',
              // 返回的是 color 的色值
              color(val) {
                if (val === '运行中') return 'green';
                return 'red';
              },
            },
            mode: {
              name: '模式',
              // 因为没有提供 value 方法，所以会直接取 row[prop] 的值来渲染
              type: 'text',
              unsortable: true,
            },
            // 默认是 text,可以不用传 type
            containers: {
              name: '容器数量',
              // type: 'text',
            },
            memory: {
              name: '内存',
              type: 'text',
              value(val) {
                return `哈哈哈哈-${val}`;
              },
            },
            cpu: {
              name: 'Cpu',
              type: 'custom',
              render: (h,val) => {
                const progress = val / 3;
                return h('dao-progress',{
                  props: {
                    progress,
                  },
                  domProps: {
                    innerHTML: 'baz',
                  },
                  on: {
                    click: this.clickHandler,
                  },
                });
              },
            },
            create_at: {
              name: '创建时间',
              type: 'time',
            },
          },
          operations: [
            {
              // 除了 event 其他都可以传入方法，第一个形参是当前 row
              name: '暂停',
              event: 'event-a',
              svg: '#icon_setting',
            },
            {
              name: '重启',
              event: 'event-b',
              svg: '#icon_setting',
            },
            {
              name: '状态',
              svg: '#icon_setting',
              children: [
                {
                  name(row) {
                    return `暂停${row.service}`;
                  },
                  svg: '#icon_setting',
                  disabledSvg: 'crown',
                  event: 'event-b',
                  disabled(row) {
                    if (row.name === '10dce-plugin-applb') return true;
                    return false;
                  },
                  disabledTooltip(row) {
                    return `${row.service}不可删除`;
                  },
                },{
                  name: '删除',
                  svg: '#icon_setting',
                  event: 'event-c',
                  disabled: true,
                  disabledSvg: 'crown',
                  disabledTooltip: '许可证到期',
                },
              ],
            },
            {
              name: '容器配置',
              event: 'event-b',
              svg: '#icon_setting',
              children: [
                {
                  name: '重启',
                  svg: '#icon_setting',
                  event: 'event-e',
                  disabled: false,
                  disabledSvg: 'crown',
                  disabledTooltip: '许可证到期',
                },{
                  name: '停止',
                  svg: '#icon_setting',
                  event: 'event-f',
                  disabled: true,
                  disabledSvg: 'crown',
                  disabledTooltip: '许可证到期',
                },
              ],
            },
          ],
        },
        rows: undefined,
      };
    },
    methods: {
      // 这个方法会把排序的规则暴露出来
      onSearch(query) {
        console.log('搜索了',query);
      },
      // 如果是外部分页，可能会需要这个方法
      onPageChange(page) {
        console.log('onPageChange',page);
        // 在这里重新传入 rows 和 config.pagination 对象 以重新构造 list
      },
      clickHandler(event) {
        console.log(event);
      },
      onRefresh() {
        console.log('onRefresh');
      },
      createApp(type,rows) {
        console.log('createApp',type,rows);
      },
      onEventA(row) {
        console.log('onEventA',row);
      },
      onCheckedRowsChange(rows) {
        console.log('onCheckedRowsChange',rows);
      },
    },
  };
</script>
```

## 参数
| 参数名     | 类型     | 说明                                       | 默认值  | 是否必填 |
| ------- | ------ | ---------------------------------------- | ---- | ---- |
| rows    | Array  | 数据源。 | -    | 是    |
| config  | [Object](#Config) | 其他表格配置。详细属性见下表。  | -    | 是    |


### Config

| 参数名           | 类型     | 说明              | 默认值         | 是否必填 |
| ------------- | ------ | ---------------------------------------- | ----------- | ---- |
| id       | String | 用于标识这个列表的唯一 ID。  | -           | 是    |
| hideSortHelper  | Boolean  | 是否隐藏右上角排序下拉框。| false           | 是    |
| loadingText       | String | 加载中的提示文本。 | '加载中...' | 否    |
| emptyText       | String | 没有数据时的提示文本。 | '列表为空' | 否    |
| selectable  | Boolean  | 每一行时候可以被选中。| true           | 否    |
| search  | [Object](#Search)  |  搜索的配置  |  | 否    |
| pagination  | [Object](#Pagination)  |  分页配置  |  | 否    |
| props  | [Object](#渲染规则)  |  渲染规则  |  | 否    |



#### Search

| 参数名           | 类型     | 说明    | 默认值     | 是否必填 |
| ------------- | ------ | ----------------------------- | ------- | ---- |
| shutDown  | Boolean  | 是否回退为普通搜索。 | false | 否    |
| autofocus  | Boolean  |  是否自动聚焦。 | false | 否    |
| placeholder  | Boolean  | 提示。 | '搜索' | 否    |
| options  | Boolean  | 搜索选项。 | rows 的所有在显示的 prop 和对应的去重 value | 否    |


#### Pagination

| 参数名   | 类型     | 说明 | 默认值  | 是否必填 |
| ----- | ------ | ------- | ---- | ---- |
| page  | Number  | 当前第几页。 | 1   | 否    |
| per_page | Number  | 每页多少项。   | 10   | 否    |
| total | Number  | 总共多少项数据(如果没传这个值,如果没传这个值，那就可以认为是前端分页,组件会接管排序，搜索，分页)。   | 无   | 否    |


#### 事件

|  事件名称   |      说明            |    回调参数     |
| ----- | --------------------- | --------- |
| refresh |     在列表中点击刷新所触发的事件。| 无 |
| checked-rows-change |   列表中选中的行变化时所触发的事件。   |  rows: Array |
| page-change |  切换页码时触发。 | [Object](#Pagination) |

#### 渲染规则

|  渲染规则   |      方法名           |    说明     |
| ----- | --------------------- | --------- |
| goto | url  |  参数分别是 row, row[prop], index,可以不传方法，默认是 row[prop]
| status | color  |  参数分别是 row, row[prop], index,, 可以不传方法，默认是 row[prop]
| text | value  |  参数分别是 row, row[prop], index,,可以不传方法，默认是 row[prop]
| time | timeStamp  |  参数分别是 row, row[prop], index,,可以不传方法，默认是 row[prop],返回值必须是时间戳
| custom | render  |  第一参数是 render 函数，第二个参数是当前 row



