<template>
  <div class="dao-numeric-badge" :class="{ ghost: ghost }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    // 是否是镂空的
    ghost: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import './dao-numeric-badge.scss';
</style>