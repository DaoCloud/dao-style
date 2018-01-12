<template>
  <div :data-clipboard-text="content"><slot>{{ caption }}</slot></div>
</template>

<script>
import Clipboard from 'clipboard';
import { _isFunction } from '../../utils/assist';

export default {
  name: 'DaoClipboard',

  props: {
    caption: String,
    content: String,
    onSuccess: Function,
    onError: Function,
  },

  data() {
    return {
      clipboard: null,
    };
  },

  mounted() {
    this.clipboard = new Clipboard(this.$el);
    this.clipboard.on('success', (e) => {
      this.$nextTick(() => {
        if (_isFunction(this.onSuccess)) {
          this.onSuccess(e);
        }
      });
    });

    this.clipboard.on('error', (e) => {
      this.$nextTick(() => {
        if (_isFunction(this.onError)) {
          this.onError(e);
        }
      });
    });
  },
};
</script>
