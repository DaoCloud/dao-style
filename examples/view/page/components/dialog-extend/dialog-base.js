export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: String,
  },
  data() {
    return {
      size: {
        width: '600px',
        height: 'auto',
      },
    };
  },
  computed: {
    isShow: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('update:visible', val);
      },
    },
  },
  methods: {
    onConfirm() {
      this.isShow = false;
      this.$emit('confirm');
    },
    onCancel() {
      this.isShow = false;
      this.$emit('cancel');
    },
    onBeforeClose() {
      this.$emit('before-close');
    },
    onClosed() {
      this.$emit('closed');
    },
    onBeforeOpen() {
      this.$emit('before-open');
    },
    onOpened() {
      this.$emit('opened');
    },
  },
};
