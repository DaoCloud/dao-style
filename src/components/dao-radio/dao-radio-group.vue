<template>
  <div :class="['dao-radio-group', {'dao-card-layout': type === 'card'}]">
    <slot></slot>
  </div>
</template>
<style lang="scss">
  @import './dao-radio-group.scss';
</style>
<script>
  export default {
    componnetName: 'Radio-group',
    props: {
      name: String,
      gridCol: {
        type: Number,
        default: 4,
      },
      type: {
        type: String,
        default: 'simple',
      },
    },
  };
</script>
