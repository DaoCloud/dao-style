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
  data() {
    return {
      active: this.updateActive(),
      unwatch: null,
    };
  },
  methods: {
    updateActive: function updateActive() {
      return this.$parent.activeName === this.heading;
    },
  },
  created() {
    this.unwatch = this.$watch('$parent.activeName', (newV, oldV) => {
      if (newV !== oldV) {
        this.active = this.updateActive();
      }
    });
  },
  mounted() {
    this.$parent.addTab(this);
  },
  beforeDestroy() {
    // destroy 此 item 组件， parent 中的 heading 并不会减少, 需要手动去除
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.$parent.removeTab(this);
    this.unwatch();
  },
};
</script>
