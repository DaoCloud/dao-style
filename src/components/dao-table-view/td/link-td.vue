<template>
  <td class="link-td">
    <a target="_blank" :href="link.href">{{link.text}}</a>  
  </td>
</template>
<script>
export default {
  name: 'LinkTd',
  props: ['link'],
};
</script>
<style lang="scss">
  @import '../../dao-color.scss';
  .link-td a {
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
