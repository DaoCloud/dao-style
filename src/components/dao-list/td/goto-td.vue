<template>
  <td class="goto-td">
    <span class="goto-span">{{text}}</span>  
    <a :href="url">
      <svg class="goto-icon">
        <use xlink:href="#icon_goto"></use>
      </svg>
    </a>
  </td>
</template>
<script>
export default {
  name: 'GoToTd',
  props: ['url', 'text'],
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
      fill: $grey-light;
      vertical-align: middle;
    }
  }
</style>
