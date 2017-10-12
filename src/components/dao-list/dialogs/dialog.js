export default {
  name: 'Dialog',
  props: ['visible'],
  data() {
    return {
    };
  },
  methods: {
    onClose() {
      this.isShow = false;
    },
  },
  computed: {
    // 这个 isShow 是为了能够让组件外面用 .sync 双向绑定而加的丑陋的细节
    isShow: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('update:visible', val);
      },
    },
  },
};
