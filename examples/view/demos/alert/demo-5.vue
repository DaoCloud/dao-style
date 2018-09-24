<template>
  <div>
    <button class="dao-btn blue" @click="alertTimeout()">自动关闭</button>
  </div>
</template>
<script>
export default {
  methods: {
    alertTimeout() {
      this.$daoAlert('提示', '2 秒后自动关闭')
        .timeout(2000)
        .show();
    },
  },
};
</script>