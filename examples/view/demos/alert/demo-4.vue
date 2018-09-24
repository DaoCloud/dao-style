<template>
  <div>
    <button class="dao-btn blue" @click="alertDelay()">延迟打开</button>
  </div>
</template>
<script>
export default {
  methods: {
    alertDelay() {
      this.$daoAlert('提示', '延迟 2 秒打开')
        .delay(2000)
        .show();
    },
  },
};
</script>