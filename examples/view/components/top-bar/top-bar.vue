<template>
  <div class="top-bar">
    <span @click="goToStatus">DaoStyle</span>
  </div>
</template>

<script>

export default {
  name: 'TopBar',
  methods: {
    goToStatus() {
      this.$router.push({
        name: 'ComponentsStatus',
      });
    },
  },
};

</script>

<style lang="scss" scoped>
@import 'daoColor';

.top-bar{
  text-align: center;
  box-shadow: 0 0 1px rgba(67,90,111,.415), 0 2px 4px -2px rgba(67,90,111,.301);
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  span{
    cursor: pointer;
  }
}
</style>
