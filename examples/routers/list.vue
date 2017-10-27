<template>
  <div id="thelist">
    <dao-list
      :columns="columns"
      :rows="rows"
      :config="config"
      @refresh="onRefresh"
      @checked-rows-change="onCheckedRowsChange"
      @create-service="onCreateService"
      @remove-service="onRemoveService"
      @pause-service="onPauseService"></dao-list>
  </div>
</template>
<script>
  import _ from 'lodash';

  const nowTime = (new Date()).getTime();

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
          mode: {
            text: '模式',
            name: 'mode',
            sortable: true,
          },
          containers: {
            text: '容器数',
            name: 'containers',
            sortable: true,
          },
          memory: {
            text: '内存限制',
            name: 'memory',
            sortable: true,
          },
          cpu: {
            text: 'CPU 限制',
            name: 'cpu',
            sortable: true,
          },
          creationTime: {
            text: '创建时间',
            name: 'creationTime',
            sortable: true,
          },
          sin: {
            text: '正弦',
            name: 'sin',
            sortable: true,
            isFilter: true,
          },
        },
        rows: _.map(Array(100), (v, i) => (
          {
            service: {
              text: `${i}dce-plugin-applb`,
              value: `${i}dce-plugin-applb`,
              type: 'goto',
              other: {
                url: `${i}dce-plugin-applb`,
              },
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
              type: 'time',
              value: nowTime - ((1.23 ** (Math.random() * 100)) * 1000),
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
          hideCheckbox: false,
          hideOperation: false,
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
              single: true,
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
      onCheckedRowsChange(rows) {
        console.log('选中的行改变', rows);
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
<style lang="scss" scoped>
#thelist {
  height: 600px;
}
</style>