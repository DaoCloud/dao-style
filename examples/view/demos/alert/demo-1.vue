<template>
  <div>
    <button class="dao-btn blue" @click="alertSimple()">简单用法</button>
  </div>
</template>
<script>
export default {
  methods: {
    alertSimple() {
      this.$daoAlert('这是一个 Alert', 'Alert Title').show();
    },
  },
};
</script>