<template>
  <div class="dao-info-panel-item" v-show="active">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'DaoInfoPanelItem',
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
  computed: {
    active: {
      get() {
        return this.updateActive();
      },
      set(newV) {
        return newV;
      },
    },
  },
  methods: {
    updateActive() {
      return this.$parent.activeName === this.heading;
    },
  },
  mounted() {
    this.$parent.addTab(this);
    this.active = this.updateActive();
  },
  beforeDestroy() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.$parent.removeTab(this);
  },
};
</script>

<style lang="scss" scoped>

</style>
