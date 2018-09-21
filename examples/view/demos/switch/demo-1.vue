<template>
  <div class="demo1">
    <dao-switch
      :option="{ on: '是', off: '否' }"
      v-model="isChecked">
    </dao-switch>
    <p>isChecked: {{ isChecked }}</p>
  </div>
</template>

<script>
export default {
  name: 'Demo1',
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.demo1 p {
  margin-top: 20px;
}
</style>