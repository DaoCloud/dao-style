<template>
  <div class="step">
    <slot/>
  </div>
</template>

<script>

  export default {
    name: 'step',
    created() {
      this.$parent.addStep(this);
    },
  };
</script>

<style lang='scss'>

.step{
  flex: 1;
}

</style>