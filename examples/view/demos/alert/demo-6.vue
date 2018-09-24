<template>
  <div>
    <button class="dao-btn blue" @click="alertQueue()">队列</button>
  </div>
</template>
<script>
export default {
  methods: {
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
  },
};
</script>