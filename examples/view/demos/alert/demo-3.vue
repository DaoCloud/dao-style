<template>
  <div>
    <button class="dao-btn blue" @click="alertCustom()">自定义模板</button>
  </div>
</template>
<script>
export default {
  methods: {
    alertCustom() {
      this.$daoAlert('自定义 title', '<h3 style="color: red;">可以是 html</h3>')
        .theme('red')
        .confirmText('自定义确认')
        .cancelText('自定义取消')
        .show();
    },
  },
};
</script>