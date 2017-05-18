<template>
  <div class="dao-setting-item">
    <div class="dao-setting-label">
      <slot name="label"></slot>
    </div>
    <div class="dao-setting-content">
      <slot name="content"></slot>
      <div class="helper-text" v-if="contentHelper">
        <slot name="content-helper"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DaoSettingItem',
  data() {
    return {
      label: this.$slots.label,
      content: this.$slots.content,
      contentHelper: this.$slots['content-helper'],
    };
  },
};
</script>
<style lang="scss">
@import './dao-setting-layout.scss';
</style>