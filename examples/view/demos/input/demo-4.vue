<template>
  <div class="demo4">
    <dao-input
      v-model="value"
      block
      :class="{'demo-width': isWidthLimit}"
      placeholder="请输入内容">
    </dao-input>
    <div class="switch-block">
      <dao-switch
        :option="{ on: '限制宽度为 40%', off: '不限制宽度' }"
        :with-notice="true"
        size="sm"
        v-model="isWidthLimit">
      </dao-switch>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Demo4',
  data() {
    return {
      value: '',
      classValue: '',
      isWidthLimit: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.demo4 {
  .demo-width {
    width: 40%;
  }
  .switch-block {
    margin-top: 10px;
  }
}
</style>
