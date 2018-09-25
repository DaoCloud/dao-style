<template>
  <div>
    <button class="dao-btn blue" @click="alertDelete()">取消某个 Alert</button>
  </div>
</template>
<script>
export default {
  methods: {
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
  },
};
</script>