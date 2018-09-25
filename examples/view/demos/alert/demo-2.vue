<template>
  <div>
	  <button class="dao-btn blue" @click="alertCheckbox()">下次不再提醒</button>
  </div>
</template>
<script>
export default {
  methods: {
    alertCheckbox() {
      this.$daoAlert('这是一个 Alert', 'Alert Title')
        .checkbox('下次不再提醒')
        .show((res) => {
          console.log('confirm:', res);
        });
    },
  },
};
</script>