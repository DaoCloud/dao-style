<template>
  <div class="dao-dialog-step">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'DaoDialogStep',
  beforeCreate() {
    this.$parent.steps.push(this);
  },
};
</script>
