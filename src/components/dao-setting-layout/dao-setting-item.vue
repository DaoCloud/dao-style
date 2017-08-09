<template>
  <div class="dao-setting-item">
    <div class="dao-setting-label">
      <slot name="label"></slot>
    </div>
    <div class="dao-setting-content">
      <slot name="content"></slot>
      <div class="helper-text">
        <slot name="content-helper"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DaoSettingItem',
};
</script>
