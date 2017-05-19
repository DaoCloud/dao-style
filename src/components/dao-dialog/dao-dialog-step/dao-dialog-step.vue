<template>
  <div class="dao-dialog-step">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'DaoDialogStep',
  data() {
    return {
      index: -1,
      isActive: false,
    };
  },
  methods: {
    updateStatus(newVal, oldVal) {
      if (newVal === this.index) {
        // reset scrollTop
        if (oldVal > -1 && this.$parent.steps[oldVal].$el.scrollTop !== 0) {
          this.$parent.steps[oldVal].$el.scrollTop = 0;
        }
        this.isActive = true;
        return;
      }
      this.isActive = false;
    },
  },
  beforeCreate() {
    this.$parent.steps.push(this);
  },
  mounted() {
    const unwatch = this.$watch('index', (newVal, oldVal) => {
      if (oldVal === -1 && newVal > -1) {
        this.$watch('$parent.activeStep', this.updateStatus, { immediate: true });
        unwatch();
      }
    });
  },
};
</script>
