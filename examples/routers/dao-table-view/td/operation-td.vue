<template>
  <td class="operation">
    <dao-dropdown
      class="dao-table-view-operations"
      trigger="click"
      :append-to-body="true"
      placement="bottom-end">
      <svg class="dropdown-trigger"><use xlink:href="#icon_more"></use></svg>
      <dao-dropdown-menu slot="list">
        <template v-for="operation in operations">
          <!-- 没有二级菜单 -->
          <dao-dropdown-item
            v-if="!operation.children" 
            :key="handleFun(operation.name)"
            :is-disabled="handleFun(operation.disabled)"
            @click="operate(operation.event)">
            <svg class="icon"><use :xlink:href="handleFun(operation.svg)"></use></svg>
            <span>{{handleFun(operation.name)}}</span>
            <svg v-if="handleFun(operation.disabled)" v-dao-tooltip="handleFun(operation.disabledTooltip)">
              <use v-bind="{'xlink:href': `#icon_${handleFun(operation.disabledSvg)}`}"></use>
            </svg>
          </dao-dropdown-item>
          <!-- 有二级菜单 -->
          <dao-dropdown
            v-if="operation.children && operation.children.length"
            :key="handleFun(operation.name)"
            placement="left-start" :append-to-body="false">
            <dao-dropdown-item>
              <svg class="icon"><use :xlink:href="handleFun(operation.svg)"></use></svg>
              <span>{{handleFun(operation.name)}}</span>
              <svg class="icon icon-arrow-right" >
                <use xlink:href="#icon_down-arrow"></use>
              </svg>
            </dao-dropdown-item>
            <dao-dropdown-menu slot="list">
              <dao-dropdown-item
                v-for="child in operation.children"
                :key="handleFun(child.name)"
                :is-disabled="handleFun(child.disabled)"
                @click="operate(child.event)">
                <svg class="icon"><use :xlink:href="handleFun(child.svg)"></use></svg>
                <span>{{handleFun(child.name)}}</span>
                <svg v-if="handleFun(child.disabled)" v-dao-tooltip="handleFun(child.disabledTooltip)">
                  <use v-bind="{'xlink:href': `#icon_${handleFun(child.disabledSvg)}`}"></use>
                </svg>
              </dao-dropdown-item>
            </dao-dropdown-menu>
          </dao-dropdown>
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
      this.$emit('triggerEvent', event, this.row);
    },
    handleFun(key) {
      if (typeof key === 'function') {
        return key(this.row);
      }
      return key;
    },
  },
};
</script>

<style lang="scss">
.icon-arrow-right{
  transform: rotate(-90deg);
  float: right;
}
</style>

