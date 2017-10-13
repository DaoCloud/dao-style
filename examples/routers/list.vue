<template>
  <div id="thelist">
    <dao-list
      :columns="columns"
      :rows="rows"
      :config="config"
      @create-service="onCreateService"
      @remove-service="onRemoveService"
      @pause-service="onPauseService">
      <template slot="context-menu" scope="data">
        <div class="dao-dropdown-popper">
          <div class="dao-dropdown-inner">
            <ul class="dao-dropdown-menu">
              <li class="dao-dropdown-item dao-dropdown-item-subtitle">操作</li>
              <li class="dao-dropdown-item dao-dropdown-item-base">查看</li>
              <li class="dao-dropdown-item dao-dropdown-item-base" @click="removeService(data)">删除</li>
              <li class="dao-dropdown-item dao-dropdown-item-subtitle">数据</li>
              <li class="dao-dropdown-item dao-dropdown-item-base" v-for="(row, key) in data.checkedRows" :key="key">
                {{row.service.text}}
              </li>
            </ul>
          </div>
        </div>
     </template>
    </dao-list>
  </div>
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
          type: {
            text: '类型',
            name: 'type',
            sortable: true,
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
            type: {
              type: 'filter',
              value: Math.sin(i) > 0 ? '正sin' : '负sin',
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
                  svg: 'pause',
                  event: 'network',
                }, {
                  name: '存储',
                  svg: 'trash',
                  event: 'storage',
                },
              ],
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
      onPauseService(rows) {
        console.log('暂停容器', rows);
      },
      removeService({row, index}) {
        console.log(row, index);
        this.rows.splice(index, 1)
      }
    },
  };
</script>
<style lang="scss" scoped>
#thelist {
  height: 350px;
  // width: 300px;
}

</style>