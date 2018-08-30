<template>
  <div class="installation">
    <demo-code>
      <demo slot="demo"></demo>
      <code-board slot="code" :file="file"></code-board>
    </demo-code>
  </div>
</template>

<script>
/* eslint-disable */
import demo from './install.vue';

export default {
  name: 'Installation',
  components: {
    demo,
  },
  data() {
    return {
      file: 'page/installation/install.vue',
    };
  },
  methods: {
    change() {
      this.file = 'page/status/status.vue';
    },
  },
};

</script>

<style lang="scss" scoped>

</style>
