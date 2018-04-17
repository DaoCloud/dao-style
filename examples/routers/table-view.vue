<template>
  <div>
    <!-- <h3>ddd</h3> -->
    <dao-table-view :rows="rows" :config="config">
      <!-- 这里会透传两个值，checkType 表示选择类型，all 是全部选择(注意：当是后端分页时候，这个数据是不准的) -->
      <!-- 这里会透传两个值，checkedRows 表示当前选择的行 -->
      
      <!-- <div slot="tool" slot-scope="{ checkType, checkedRows}" style="display: flex;justify-content: space-between;">
        <button class="dao-btn blue">创建应用</button>
        <div>
          <dao-input placeholder="这是通过 slot 传入的 input"></dao-input>
        </div>
      </div> -->
      <!-- <div slot="search"> -->
        <!-- 这里可以自定义搜索位置的搜索, 可以替掉 input-with-label -->
      <!-- </div> -->
    </dao-table-view>
  </div>

</template>
<script>
  import _ from 'lodash';

  // mock data
  const rows = _.map(Array(100), (v, i) => ({
    create_at: (new Date()).getTime(),
    cpu: 0.5,
    memory: i * 2,
    containers: 10,
    mode: '弹性',
    status: i % 3 === 0 ? '运行中' : '已停止',
    service: `${i + 1}dce-plugin-applb`,
  }));

  export default {
    name: 'TableView',
    data() {
      return {
        config: {
          // id 用于标示一个 list，便于 localstorage 对当前配置的存储
          id: '1q2w3e',
          // 表格名称
          tableName: '服务',
          // 每一行是否可选
          // selectable: true,
          // 是否支持搜索功能 -> 如果不支持搜索功能，则将分页自动挪到 view 下面
          // 以下这个配置是 input-with-label 的打平版，具体请参考 input-with-label 的配置
          // input-with-label 的冒泡事件，会加上前缀 'search', 比如 @search-input
          search: {
            shutDown: false, // 是否回退为普通搜索 默认 false
            autofocus: false, // 是否自动聚焦 默认 false,
            block: false,  // 是否不限制宽度 默认 false
            // 如果是后端分页，那么这个默认是 []
            // 如果是前端分页，那么这个默认是 rows 的所有 key
            options: [],
          },
          // 分页配置
          // pagination: {
            // 考虑到可能是后端分页，如果是后端分页，那就会取这个值去替代 rows.length
            // 如果没传这个值，那就可以认为是前端分页！！！！！！！ 这个很重要，不要再立一堆 flag 来标记是否是后端分页
            // 如果是前端分页 -> 那么 dao-table-view 会接管所有可以做的工作，比如搜索，排序等，会在 dao-table-view 内部实现
            // total: 100,
            // 起始值是 1
          //   page: 1,
          //   per_page: 10,
          // },
          // 排序规则
          // 如果不传，则默认取第一个非 unsortable 属性生序
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
            containers: {
              name: '容器数量',
              type: 'text',
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
              render: (h, val) => {
                const progress = val / 3;
                return h('dao-progress', {
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
        },
        rows,
      };
    },
    methods: {
      // 这个方法会把排序的规则暴露出来
      onSearch(keyword, { props, order }) {
        console.log('搜索了', keyword, props, order);
      },
      // 如果是外部分页，可能会需要这个方法
      onPageChange(page) {
        console.log('DaoTable -> onPageChange', page);
        // 在这里重新传入 rows 和 config.pagination 对象 以重新构造 list
      },
      clickHandler(event) {
        console.log(event);
      },
      onRefresh() {
        console.log('onRefresh');
      },
    },
  };
</script>
<style lang="scss" scoped>

</style>