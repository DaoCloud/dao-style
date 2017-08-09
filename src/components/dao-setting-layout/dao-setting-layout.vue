<template>
  <div class="dao-setting-layout">
    <div class="dao-setting-layout-title" v-if="layoutTitle()">
      <div class="dao-setting-title">
        <slot name="layout-title"></slot>
        <div class="helper-text" v-if="layoutTitleHelper()">
          <slot name="layout-title-helper"></slot>
        </div>
      </div>
    </div>
    <slot></slot>
    <div class="dao-setting-layout-footer" v-if="footer()">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DaoSettingLayout',
  methods: {
      layoutTitle () {
        return this.$slots['layout-title'];
      },
      layoutTitleHelper () {
        return this.$slots['layout-title-helper'];
      },
      footer () {
        return this.$slots.footer;
      },
  },
};
</script>
<style lang="scss">
@import './dao-setting-layout.scss';
</style>