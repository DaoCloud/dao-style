<template>
  <div @click="handleClick" ><slot>{{ caption }}</slot></div>
</template>

<script>

import select from '../../utils/select';
import assert from '../../utils/assert';

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
      let succeed = true;
      try {
        const fakeEle = document.createElement('textarea');
        fakeEle.value = this.content;
        fakeEle.style.position = 'absolute';
        fakeEle.style.left = '-9999px';
        fakeEle.style.opacity = '0';
        this.$el.appendChild(fakeEle);
        select(fakeEle);
        succeed = document.execCommand('copy');
        this.$el.removeChild(fakeEle);
      } catch (err) {
        succeed = false;
      }

      assert.expect(succeed).component('DaoClipboard').warn("your browser doesn't allow access to the clipboard via scripts");
      this.callback(succeed);
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
