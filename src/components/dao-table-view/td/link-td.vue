<template>
  <td class="link-td">
    <span class="link" @click.stop="onClick">{{this.row[this.prop]}}</span>
  </td>
</template>
<script>
export default {
  name: 'LinkTd',
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
  .link-td .link {
    display: inline-block;
    max-width: calc(100% - 20px);
    text-overflow: ellipsis;
    overflow: hidden;
    vertical-align: middle;
    cursor: pointer;
    color: #217EF2;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
