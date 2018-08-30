<template>
  <div>
    <div class="demo-container">
      <button class="dao-btn blue" @click="alertSimple()">简单用法</button>
      <br>
      <br>
      <button class="dao-btn blue" @click="alertCheckbox()">下次不再提醒</button>
      <br>
      <br>
      <button class="dao-btn blue" @click="alertCustom()">自定义模板</button>
      <br>
      <br>
      <button class="dao-btn blue" @click="alertDelay()">延迟打开</button>
      <br>
      <br>
      <button class="dao-btn blue" @click="alertTimeout()">自动关闭</button>
      <br>
      <br>
      <button class="dao-btn blue" @click="alertQueue()">队列</button>
      <br>
      <br>
      <button class="dao-btn blue" @click="alertDelete()">取消某个 Alert</button>
      <br>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      alertSimple() {
        this.$daoAlert('这是一个 Alert', 'Alert Title').show();
      },
      alertCustom() {
        this.$daoAlert('自定义 title', '<h3 style="color: red;">可以是 html</h3>')
          .theme('red')
          .confirmText('自定义确认')
          .cancelText('自定义取消')
          .show();
      },
      alertDelay() {
        this.$daoAlert('提示', '延迟 2 秒打开')
          .delay(2000)
          .show();
      },
      alertTimeout() {
        this.$daoAlert('提示', '2 秒后自动关闭')
          .timeout(2000)
          .show();
      },
      alertQueue() {
        this.$daoAlert('提示1', '这是第一个 alert')
          .show();
        this.$daoAlert('提示2', '这是第二个 alert')
          .show();
        this.$daoAlert('提示3', '这是第三个 alert, <p style="color: red; margin: 0;">注意 3 秒后自动关闭, 并且自动打开第四个 alert</p>')
          .timeout(3000)
          .show();
        this.$daoAlert('提示4', '这是第四个 alert')
        .show();
      },
      alertDelete() {
        const confirmAlert = this.$daoAlert('提示', '您真的想好了要删除这个应用吗？').theme('red');
        this.$daoAlert('提示', '您确定要删除这个应用？')
          .theme('red')
          .show(() => {
            console.log('confirm');
          }, () => {
            console.log('cancel');
            confirmAlert.remove();
          });
        confirmAlert.show();
      },
      alertCheckbox() {
        this.$daoAlert('这是一个 Alert', 'Alert Title')
          .checkbox('下次不再提醒')
          .show((res) => {
            console.log('confirm:', res);
          });
      },
      doSometing() {
        console.log('doSometing');
      },
    },
  };
</script>
<style lang="scss" scoped>
.demo-container {
  margin-bottom: 30px;
}
</style>