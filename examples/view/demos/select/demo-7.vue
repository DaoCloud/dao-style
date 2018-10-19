<template>
  <dao-select
    value=""
    placeholder="加载中的选择器"
    loading-text="加载中的选择器"
    :loading="loadingState">
    <dao-option-group>
      <dao-option :value="1" label="Hello"></dao-option>
    </dao-option-group>
  </dao-select>
</template>
<script>
  export default {
    data() {
      return {
        loadingState: true,
      };
    },
  }
</script>

