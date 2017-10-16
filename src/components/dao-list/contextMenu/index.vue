<template>
  <div @contextmenu.prevent="noop">
    <div class="dao-dropdown-popper">
      <div class="dao-dropdown-inner">
        <ul class="dao-dropdown-menu">
          <template v-for="group in operations" >
            <li class="dao-dropdown-item dao-dropdown-item-subtitle" :key="group.groupName">{{group.groupName}}</li>
            <li class="dao-dropdown-item"
              v-for="o in group.operations"
              :class="itemClass(o.disabled)"
              :key="o.name"
              @click="operate(o.event)">
              <span>{{o.name}}</span>
              <svg v-if="o.disabled" v-dao-tooltip="o.disabledTooltip">
                <use xlink:href :href="`#icon_${o.disabledSvg}`"></use>
              </svg>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dao-list-context-menu',
  props: ['checkedRows', 'operations'],
  methods: {
    itemClass(disabled) {
      const baseClass = 'dao-dropdown-item-';
      const itemClass = baseClass.concat(disabled ? 'disabled' : 'base');
      return {
        [itemClass]: true,
      }
    },
    operate(event) {
      this.$parent.$emit(event, this.checkedRows);
    },
    noop() {},
  }
}
</script>
