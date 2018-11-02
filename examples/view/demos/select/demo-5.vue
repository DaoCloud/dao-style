<template>
  <dao-select
    v-model="tab"
    placeholder="带标签选择器"
    :with-tab="true">
    <dao-tab direction="left">
      <dao-tab-item heading="标题1">
        <dao-option-group label="111">
          <dao-option :value="1" prefix="标题1：">111_1</dao-option>
          <dao-option :value="2" prefix="标题1：">111_2</dao-option>
          <dao-option :value="3" prefix="标题1：">111_3</dao-option>
        </dao-option-group>
      </dao-tab-item>
      <dao-tab-item heading="标题2">
        <dao-option-group label="222"></dao-option-group>
      </dao-tab-item>
    </dao-tab>
  </dao-select>
</template>
<script>
  export default {
    data() {
      return {
        tab: null,
      };
    },
  };
</script>
