<template>
  <td class="goto-td">
    <span class="goto-span">{{this.row[this.prop]}}</span>  
    <svg class="goto-icon" @click.stop="onClick">
      <use xlink:href="#icon_goto"></use>
    </svg>
  </td>
</template>
<script>
export default {
  name: 'GoToTd',
  props: ['callback', 'row', 'prop', 'index'],
  methods: {
    onClick() {
      if (typeof this.callback === 'function') {
        this.callback(this.row[this.prop], this.row, this.index);
      }
    },
  },
};
</script>
<style lang="scss">
  @import '../../dao-color.scss';
  .goto-td {
    .goto-span {
      display: inline-block;
      max-width: calc(100% - 20px);
      text-overflow: ellipsis;
      overflow: hidden;
      vertical-align: middle;
    }
    .goto-icon {
      cursor: pointer;
      fill: $grey-light;
      vertical-align: middle;
    }
  }
</style>
