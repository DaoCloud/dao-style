<template>
  <div id="thelist">
    <dao-list
      :columns="columns"
      :rows="rows"
      :config="config"
      @create-service="onCreateService"
      @remove-service="onRemoveService"
      @pulse-service="onPulseService"></dao-list>
  </div>
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
        },
        rows: [
          {
            service: {
              text: 'dce-plugin-applb',
              value: 'dce-plugin-applb',
              type: 'text',
            },
            status: {
              text: '正在运行',
              value: 'running',
              type: 'status',
              other: {
                status: 'running',
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
              text: '0.5 核/3 核',
              type: 'text',
              value: 0.5,
            },
            creationTime: {
              text: '2017-09-23',
              type: 'text',
              value: 115454154878,
            },
          },
          {
            service: {
              text: 'dce-plugin-applb',
              value: 'dce-plugin-applb',
              type: 'text',
            },
            status: {
              text: '正在运行',
              value: 'running',
              type: 'status',
              other: {
                status: 'running',
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
              text: '0.5 核/3 核',
              type: 'text',
              value: 0.5,
            },
            creationTime: {
              text: '2017-09-23',
              type: 'text',
              value: 115454154878,
            },
          },
          {
            service: {
              text: 'dce-plugin-applb',
              value: 'dce-plugin-applb',
              type: 'text',
            },
            status: {
              text: '正在运行',
              value: 'running',
              type: 'status',
              other: {
                status: 'running',
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
              text: '0.5 核/3 核',
              type: 'text',
              value: 0.5,
            },
            creationTime: {
              text: '2017-09-23',
              type: 'text',
              value: 115454154878,
            },
          },
          {
            service: {
              text: 'dce-plugin-applb',
              value: 'dce-plugin-applb',
              type: 'text',
            },
            status: {
              text: '正在运行',
              value: 'running',
              type: 'status',
              other: {
                status: 'running',
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
              text: '0.5 核/3 核',
              type: 'text',
              value: 0.5,
            },
            creationTime: {
              text: '2017-09-23',
              type: 'text',
              value: 115454154878,
            },
          },
          {
            service: {
              text: 'dce-plugin-applb',
              value: 'dce-plugin-applb',
              type: 'text',
            },
            status: {
              text: '正在运行',
              value: 'running',
              type: 'status',
              other: {
                status: 'running',
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
              text: '0.5 核/3 核',
              type: 'text',
              value: 0.5,
            },
            creationTime: {
              text: '2017-09-23',
              type: 'text',
              value: 115454154878,
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
<style lang="scss" scoped>
#thelist {
  // height: 150px;
  // width: 300px;
}
</style>