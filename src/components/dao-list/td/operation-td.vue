<template>
  <td class="operation">
    <dao-dropdown
      trigger="click"
      :append-to-body="true"
      placement="bottom-start">
      <svg class="dropdown-trigger"><use xlink:href="#icon_more"></use></svg>
      <dao-dropdown-menu slot="list">
        <template v-for="group in operations">
          <dao-dropdown-item :is-title="true">{{group.groupName}}</dao-dropdown-item>
          <dao-dropdown-item v-for="o in group.operations"
            :key="o.name"
            :is-disabled="o.disabled"
            @click="operate(o.event)">
            <span>{{o.name}}</span>
            <svg v-if="o.disabled" v-dao-tooltip="o.disabledTooltip">
              <use xlink:href :href="`#icon_${o.disabledSvg}`"></use>
            </svg>
          </dao-dropdown-item>
        </template>
      </dao-dropdown-menu>
    </dao-dropdown>
  </td>
</template>
<script>
export default {
  name: 'OperationTd',
  props: ['operations', 'row'],
  methods: {
    operate(event) {
      // 直接让列表组件 emit 事件，这样就不用通过列表透传事件了
      this.$parent.$emit(event, [this.row]);
    },
  },
};
</script>
