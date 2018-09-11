<template>
  <div class="demo">
    <div class="show-block">
      <button class="dao-btn btn-sm blue" @click.stop="changeTab">go to heading2 </button>
      <span>当前 tab：{{currentTab}}</span>
    </div>
    <dao-tab :currentTab.sync="currentTab">
      <dao-tab-item heading="标签1">
        <h1>标签1 内容</h1>
      </dao-tab-item>
      <dao-tab-item heading="heading2">
        <h1>heading2 内容</h1>
      </dao-tab-item>
      <dao-tab-item heading="哈哈哈">
        <h1>哈哈哈我是 哈哈哈 的内容</h1>
      </dao-tab-item>
    </dao-tab>
  </div>
</template>
<script>
export default {
  name: 'Demo3',
  data() {
    return {
      currentTab: '',
    };
  },
  methods: {
    changeTab() {
      this.currentTab = 'heading2';
    },
  },
};
</script>
<style lang="scss" scoped>
.show-block {
  margin-bottom: 20px;
  .dao-btn {
    margin-right: 10px;
  }
}
</style>
