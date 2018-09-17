<template>
  <div class="demo4">
    <dao-switch
      :option="{ on: '是', off: '否' }"
      :with-notice="true"
      :core-width="coreWidth"
      v-model="isChecked">
    </dao-switch>
    <p>isChecked: {{ isChecked }}</p>
    <p>core-width: <input type="number" v-model.number="coreWidth"></p>
  </div>
</template>

<script>
export default {
  name: 'Demo4',
  data() {
    return {
      isChecked: false,
      coreWidth: 100,
    };
  },
};
</script>

<style lang="scss" scoped>
.demo4 p {
  margin-top: 20px;
}
</style>
