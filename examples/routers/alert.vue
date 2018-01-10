<template>
  <div>
    <div class="demo-container">
      <button class="dao-btn blue" @click="alert('blue')">alert blue</button>
      <button class="dao-btn blue" @click="alert('red')">alert red</button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      alert(theme) {
        const alertInit = this.$alert({
          title: 'alert title',
          text: '3 秒后关闭',
          theme,
          cancel() {
            console.log('alert cancel');
          },
          confirm() {
            console.log('alert confirm');
          },
        });

        setTimeout(() => {
          alertInit.close();
        }, 3000);
      },
    },
  };
</script>
<style lang="scss" scoped>
.demo-container {
  margin-bottom: 30px;
}
</style>