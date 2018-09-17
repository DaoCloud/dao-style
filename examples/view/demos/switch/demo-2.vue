<template>
  <div class="demo2">
    <dao-switch
      :option="{ on: '是', off: '否' }"
      :with-notice="true"
      :disabled="true"
      :value="isChecked">
    </dao-switch>
  </div>
</template>

<script>
export default {
  name: 'Demo2',
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>