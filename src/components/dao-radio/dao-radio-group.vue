<template>
  <div :class="['dao-radio-group', {'dao-card-layout': type === 'card'}]">
    <slot></slot>
  </div>
</template>
<style lang="scss">
  .dao-radio-group {
    *zoom: 1;
    &:before,
    &:after {
      display: table;
      line-height: 0;
      content: "";
    }
    &:after {
      clear: both;
    }
  }
</style>
<script>
  export default {
    componnetName: 'Radio-group',
    props: {
      name: String,
      gridCol: Number,
      type: {
        type: String,
        default: 'simple',
      },
    },
  };
</script>
