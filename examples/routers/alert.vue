<template>
  <div>
    <div class="demo-container">
      <button class="dao-btn blue" @click="alertSimple()">简单用法</button>
      <br>
      <br>
      <button class="dao-btn red" @click="alertComplete()">完整用法(延迟打开关闭)</button>
      <br>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      doSometing() {
        console.log('doSometing');
      },
      alertSimple() {
        // 最简单的用法
        this.$daoAlert('这是一个 alert').show();
      },
      // 完整的用法
      alertComplete() {
        this.$daoAlert('<h4 style="color: red;">延迟2秒打开，打开后3秒自动关闭</h4>', '这是 title')
          .theme('red')
          .confirmText('自定义确认')
          .cancelText('自定义取消')
          .timeout(3000)
          .delay(2000)
          .show((action) => {
            // 如果当前环境不支持 promise 会回退到这里
            if (action === 'confirm') {
              console.log('fallback confirm');
              this.doSometing();
            }
            if (action === 'cancel') {
              console.log('fallback cancel');
              this.doSometing();
            }
          })
          .then(() => {
            console.log('promise confirm');
            this.doSometing();
          }, () => {
            console.log('promise cacel');
            this.doSometing();
          });
      },
    },
  };
</script>
<style lang="scss" scoped>
.demo-container {
  margin-bottom: 30px;
}
</style>