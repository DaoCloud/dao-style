<template>
  <div>
    <button class="dao-btn blue" @click="loadingBeforeClose()">带有 loading 的 Alert</button>
  </div>
</template>
<script>
export default {
  methods: {
    loadingBeforeClose() {
      this.$daoAlert('这个对话框点击确认后会 loading 之后再关闭', 'loading Alert')
        .loadingText('loading...')
        .show((res) => {
          console.log('confirm:', res);
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log('inner loading timer');
              resolve();
            }, 3000);
          });
        });
    },
  },
};
</script>