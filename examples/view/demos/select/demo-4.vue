<template>
  <dao-select
    v-model="button"
    placeholder="带按钮选择器"
    btn-content="😆你好"
    :with-btn="true"
    @btn-event="buttonEvent">
    <dao-option-group>
      <dao-option :value="1" label="Hello"></dao-option>
      <dao-option :value="2" label="Aloha"></dao-option>
    </dao-option-group>
  </dao-select>
</template>
<script>
  export default {
    data() {
      return {
        button: null,
      };
    },
    methods: {
      buttonEvent(value) {
        alert(`The selected value is: ${value}`);
      },
    },
  };
</script>
