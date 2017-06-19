<template>
  <div :class="['dao-radio-group', {'dao-card-layout': type === 'card'}]">
    <slot></slot>
  </div>
</template>
<style lang="scss">
  @import './variables.scss';

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
    // 特殊样式，只好加在这里
    > div:first-child .dao-radio-block {
      border-top: 1px solid $border-color;
    }
  }
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
