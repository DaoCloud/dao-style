<template>
  <div class="dao-dialog-footer">
    <slot>
      <button class="dao-btn ghost" @click="onCancel">{{configure.cancelText}}</button>
      <button class="dao-btn blue" @click="onConfirm"
        :disabled="configure.confirmDisabled">{{configure.confirmText}}</button>
    </slot>
  </div>
</template>
<script>
import { _merge, _clone } from '../../../utils/assist';

export default {
  name: 'DaoDialogFooter',
  props: {
    config: Object,
  },
  data() {
    const that = this;
    return {
      defaultConfig: {
        confirmText: that.$daot('confirm'),
        cancelText: that.$daot('cancel'),
        confirmDisabled: false,
      },
    };
  },
  computed: {
    configure() {
      return _merge(_clone(this.defaultConfig), this.config);
    },
  },
  methods: {
    onConfirm() {
      this.$emit('confirm');
    },
    onCancel() {
      this.$emit('cancel');
    },
  },
};
</script>
