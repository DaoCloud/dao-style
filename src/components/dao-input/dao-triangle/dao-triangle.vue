<template>
  <span :class="['dao-triangle', { disabled : disabled}]">
    <span @click="onUp">
      <svg><use xlink:href="#numeric-input_triangle-up"></use></svg>
    </span>
    <span @click="onDown">
      <svg><use xlink:href="#numeric-input_triangle-down"></use></svg>
    </span>
  </span>
</template>
<script>

  export default {
    name: 'DaoTriangle',
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      onUp() {
        if (this.disabled) return;
        this.$emit('up');
      },
      onDown() {
        if (this.disabled) return;
        this.$emit('down');
      },
    },
  };
</script>

<style lang="scss" src="./dao-triangle.scss">
</style>
