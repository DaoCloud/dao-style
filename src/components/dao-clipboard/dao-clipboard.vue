<template>
  <div @click="handleClick" ><slot>{{ caption }}</slot></div>
</template>

<script>

import copySelect from '../../utils/copy-select';

export default {
  name: 'DaoClipboard',

  props: {
    caption: String,
    content: String,
    onSuccess: {
      type: Function,
      default() {
        return () => 0;
      },
    },
    onError: {
      type: Function,
      default() {
        return () => 0;
      },
    },
  },

  data() {
    return {
    };
  },
  methods: {
    handleClick() {
      copySelect(this.$el, this.content, (succeed) => {
        this.callback(succeed);
      });
    },
    callback(succeed) {
      if (succeed) {
        this.onSuccess();
      } else {
        this.onError();
      }
    },
  },
};
</script>
