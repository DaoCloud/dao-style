<template>
    <ul class="nav-menu-dropdown">
        <li
            v-for="node in data"
            :key="node.key"
            :class="{
                'nav-menu-dropdown-item': true,
                'nav-menu-dropdown-item-disabled': node.disabled,
                'nav-menu-dropdown-item-dangerous': node.type === 'dangerous',
            }"
            @click.stop="onItemClick(node.key, $event)"
        >
            <span>{{ node.text }}</span>
        </li>
    </ul>
</template>

<script>
const prefix = 'nav-menu-dropdown-item'
export default {
  name: 'NavMenuDropdown',
  props: {
    data: {
        type: Array,
    },
    onClick: {
        type: Function,
    },
  },
  data: function() {
      return {
      };
  },
  computed: {
  },
  methods: {
      onItemClick(key, $event) {
          this.$emit('close-dropdown');
          Object.defineProperty($event, 'key', {
              configurable: true,
              enumerable: false,
              value: key,
              writable: false
          });
          this.onClick($event);
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import 'dropdown';
</style>