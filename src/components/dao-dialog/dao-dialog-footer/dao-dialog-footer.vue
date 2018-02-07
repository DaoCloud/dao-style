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

const defaultConfig = {
  confirmText: '确认',
  cancelText: '取消',
  confirmDisabled: false,
};

export default {
  name: 'DaoDialogFooter',
  props: {
    config: Object,
  },
  computed: {
    configure() {
      return _merge(_clone(defaultConfig), this.config);
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
