<template>
  <div class="demo4">
    <div class="show-block">第 {{ count }} 次切换，切换到: {{ toTab }}。</div>
    <dao-tab :currentTab.sync="currentTab" @changeTab="onTabChange">
      <dao-tab-item heading="标签1">
        <h1>标签1 内容</h1>
      </dao-tab-item>
      <dao-tab-item heading="heading2">
        <h1>heading2 内容</h1>
      </dao-tab-item>
    </dao-tab>
  </div>
</template>
<script>
export default {
  name: 'Demo4',
  data() {
    return {
      currentTab: '标签1',
      count: 0,
      toTab: '',
    };
  },
  methods: {
    onTabChange(heading) {
      this.count += 1;
      this.toTab = heading;
    },
  },
};
</script>
<style lang="scss" scoped>
.show-block {
  margin-bottom: 20px;
}
</style>
