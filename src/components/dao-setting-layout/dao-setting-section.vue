<template>
  <div class="dao-setting-section">
    <div class="dao-setting-title" v-if="sectionTitle">
      <slot name="section-title"></slot>
      <div class="helper-text" v-if="sectionTitleHelper">
        <slot name="section-title-helper"></slot>
      </div>
    </div>
    <slot>
      <div class="dao-setting-item">
        <div class="dao-setting-label" v-if="label">
          <slot name="label"></slot>
        </div>
        <div class="dao-setting-content">
          <slot name="content"></slot>
          <div class="helper-text" v-if="contentHelper">
            <slot name="content-helper"></slot>
          </div>
        </div>
      </div>
    </slot>
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
      contentHelper: this.$slots['content-helper'],
    };
  },
};
</script>
<style lang="scss">
@import './dao-setting-layout.scss';
</style>