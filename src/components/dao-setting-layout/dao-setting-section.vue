<template>
  <div class="dao-setting-section">
    <div class="dao-setting-title" v-if="sectionTitle">
      <slot name="section-title"></slot>
      <div class="helper-text" v-if="sectionTitleHelper">
        <slot name="section-title-helper"></slot>
      </div>
    </div>
    <div class="dao-setting-item" v-if="label || content">
      <div class="dao-setting-label" v-if="label">
        <slot name="label"></slot>
      </div>
      <div class="dao-setting-content" v-if="content">
        <slot name="content"></slot>
        <div class="helper-text" v-if="contentHelper">
          <slot name="content-helper"></slot>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'DaoSettingSection',
  data() {
    return {
      sectionTitle: this.$slots['section-title'],
      sectionTitleHelper: this.$slots['section-title-helper'],
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