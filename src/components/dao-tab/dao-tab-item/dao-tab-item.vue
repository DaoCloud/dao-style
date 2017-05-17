<template>
  <div class="dao-tab-item" v-show="active">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'DaoTabItem',
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
  computed: {
    active() {
      return this.updateActive();
    },
  },
  methods: {
    updateActive: function updateActive() {
      return this.$parent.activeName === this.heading;
    },
  },
  mounted() {
    this.$parent.addTab(this);
    this.active = this.updateActive();
  },
  beforeDestroy () {
    // destroy 此 item 组件， parent 中的 heading 并不会减少, 需要手动去除
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.$parent.removeTab(this);
  },
};
</script>
