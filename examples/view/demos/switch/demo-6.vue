<template>
  <div class="demo6">
    <dao-switch
      :option="{ on: '是', off: '否' }"
      :with-notice="true"
      size="sm"
      v-model="isChecked">
    </dao-switch>
    <p>isChecked: {{ isChecked }}</p>
  </div>
</template>

<script>
export default {
  name: 'Demo6',
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.demo6 p {
  margin-top: 20px;
}
</style>