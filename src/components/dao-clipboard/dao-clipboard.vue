<template>
  <div :data-clipboard-text="content">{{ caption }}</div>
</template>

<script>
import Clipboard from 'clipboard';
import { isFunction } from 'lodash';

export default {
  name: 'DaoClipboard',

  props: {
    caption: String,
    content: String,
    onSuccess: Function,
    onError: Function,
  },

  data: function() {
    return {
      __clipboard: null,
    }
  },

  mounted: function() {
    this.__clipboard = new Clipboard(this.$el);
    this.__clipboard.on('success', (e) => {
      this.$nextTick(() => {
        if (isFunction(this.onSuccess)) {
          this.onSuccess(e);
        }
      });
    });

    this.__clipboard.on('error', (e) => {
      this.$nextTick(() => {
        if (isFunction(this.onError)) {
          this.onError(e);
        }
      });
    });
  },
};
</script>
