<template>
  <div class="dao-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'daoRadioGroup',
    props: {
      name: String,
    },
  };
</script>

<style lang="scss" src="./styles/dao-radio-group.scss">
</style>
