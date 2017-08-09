<template>
  <div class="dao-setting-item">
    <div class="dao-setting-label" v-if="label()">
      <slot name="label"></slot>
    </div>
    <div class="dao-setting-content">
      <slot name="content"></slot>
      <div class="helper-text" v-if="contentHelper()">
        <slot name="content-helper"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DaoSettingItem',
  methods: {
      label () {
        return this.$slots.label;
      },
      contentHelper () {
        return this.$slots['content-helper'];
      },
  },
};
</script>
