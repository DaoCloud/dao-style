<template>
  <td>
    <span>{{text}}</span>  
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
  .goto-icon {
    fill: $grey-light !important;
  }
</style>
