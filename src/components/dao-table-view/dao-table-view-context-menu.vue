<template>
  <div @contextmenu.prevent="noop" v-dao-clickoutside="handleClickoutside" v-show="visible">
    <dao-dropdown-menu>
      <template
        v-for="group in operations"
        v-if="isGroupShouldShow(group)">
        <dao-dropdown-item
          v-for="o in group.operations"
          :key="o.name"
          :is-disabled="o.disabled"
          @click="operate(o.event)">
          <span>{{o.name}}</span>
          <svg v-if="o.disabled" v-dao-tooltip="o.disabledTooltip">
            <use v-bind="{'xlink:href': `#icon_${o.disabledSvg}`}"></use>
          </svg>
        </dao-dropdown-item>
      </template>
    </dao-dropdown-menu>
  </div>
</template>

<script>
export default {
  name: 'DaoTableViewContextMenu',
  props: ['checkedRows', 'operations', 'visible'],
  computed: {
    isMultiChecked() {
      return this.checkedRows.length > 1;
    },
  },
  methods: {
    operate(event) {
      this.$parent.$emit(event, this.checkedRows);
    },
    isGroupShouldShow(group) {
      if (this.isMultiChecked && (group.single === true)) {
        return false;
      }
      return true;
    },
    noop() {},
    handleClickoutside() {
      this.$emit('update:visible', false);
    },
  },
};
</script>
