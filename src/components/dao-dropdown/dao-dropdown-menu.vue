<template>
  <ul class="dao-dropdown-menu"><slot></slot></ul>
</template>
<script>
  export default {};
</script>
<style scoped lang="scss">
  @import '../dao-color.scss';
  .dao-dropdown-menu {
    font-size: 14px;

    min-width: 160px;
    padding: 5px 0;

    list-style: none;

    border-radius: 5px;
    background-color: $white;
    box-shadow: 0 0 0 1px rgba($black-dark, .06),0 5px 12px 0 rgba($black-dark, .3);
  }
</style>
