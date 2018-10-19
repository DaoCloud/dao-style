<template>
  <dao-select
    :value="1"
    placeholder="禁用的选择器"
    :disabled="true">
    <dao-option-group>
      <dao-option :value="1" label="Hello"></dao-option>
    </dao-option-group>
  </dao-select>
</template>
