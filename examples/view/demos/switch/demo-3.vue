<template>
  <div class="demo3">
    <dao-switch
      :option="{ on: '是', off: '否' }"
      :with-notice="true"
      v-model="isChecked">
    </dao-switch>
    <p>isChecked: {{ isChecked }}</p>
  </div>
</template>

<script>
export default {
  name: 'Demo3',
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.demo3 p {
  margin-top: 20px;
}
</style>