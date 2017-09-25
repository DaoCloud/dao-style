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
<style lang="scss" scoped>
#thelist {
  // height: 150px;
  // width: 300px;
}
</style>