<template>
  <div class="app-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'appRadioGroup',
    props: {
      name: String,
    },
  };
</script>

<style lang="scss" src="./styles/app-radio-group.scss">
</style>
