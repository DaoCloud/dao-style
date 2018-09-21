<template>
  <div class="demo5">
    <dao-switch
      :option="{ on: '是', off: '否' }"
      :with-notice="true"
      @change="onChange"
      v-model="isChecked">
    </dao-switch>
  </div>
</template>

<script>
export default {
  name: 'Demo5',
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    onChange(data) {
      this.$daoAlert('daostyle', `changed:${data}`).show();
    },
  },
};
</script>