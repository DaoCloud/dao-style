<template>
  <dao-dropdown
    trigger="click"
    :append-to-body="true"
    placement="bottom-start">
    <svg>
      <use xlink:href="#icon_caret-down"></use>
    </svg>
    <dao-dropdown-menu slot="list">
      <dao-dropdown-item @click="checkPage">选择已显示 ({{currentRowsNumber}})</dao-dropdown-item>
      <dao-dropdown-item @click="checkAll">选择全部 ({{allRowsNumber}})</dao-dropdown-item>
      <dao-dropdown-item @click="uncheckAll">取消选择 ({{checkedRowsNumber}})</dao-dropdown-item>
    </dao-dropdown-menu>
  </dao-dropdown>
</template>

<script>
export default {
  name: 'CheckAll',
  props: ['currentRowsNumber', 'allRowsNumber', 'checkedRowsNumber'],
  methods: {
    checkPage() {
      this.$emit('check-page');
    },
    checkAll() {
      this.$emit('check-all');
    },
    uncheckAll() {
      this.$emit('uncheck-all');
    },
  },
};
</script>
<style lang="scss">
  .dropdown-trigger {
    cursor: pointer;
  }
</style>
