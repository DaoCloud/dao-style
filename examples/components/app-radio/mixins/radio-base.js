export default {
  props: {
    label: {},
    value: {},
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    _value: {
      set(val) {
        console.log('input', val);
        this.$emit('input', val);
      },
      get() {
        return this.value;
      },
    },
    _name() {
      return this.name || this.$parent.name;
    },
  },
};
