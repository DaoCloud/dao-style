<template>
  <td class="operation">
    <dao-dropdown
      trigger="click"
      :append-to-body="true"
      placement="bottom-start">
      <svg class="dropdown-trigger"><use xlink:href="#icon_more"></use></svg>
      <dao-dropdown-menu slot="list">
        <dao-dropdown-item v-for="o in flattenedOperations"
          :key="o.name"
          :is-disabled="o.disabled"
          @click="operate(o.event)">
          <span>{{o.name}}</span>
          <svg v-if="o.disabled" v-dao-tooltip="o.disabledTooltip">
            <use v-bind="{'xlink:href': `#icon_${o.disabledSvg}`}"></use>
          </svg>
        </dao-dropdown-item>
      </dao-dropdown-menu>
    </dao-dropdown>
  </td>
</template>
<script>
import {
  _flatten,
  _map,
} from '../../../utils/assist';

export default {
  name: 'OperationTd',
  props: ['operations', 'row'],
  computed: {
    flattenedOperations() {
      return _flatten(_map(this.operations, 'operations'));
    },
  },
  methods: {
    operate(event) {
      // 直接让列表组件 emit 事件，这样就不用通过列表透传事件了
      this.$parent.$emit(event, [this.row]);
    },
  },
};
</script>
