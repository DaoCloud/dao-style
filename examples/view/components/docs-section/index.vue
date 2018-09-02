<template>
  <dao-setting-section class="docs-section">
    <div slot="section-title" v-if="$slots['title']"><slot name="title"></slot></div>
    <div slot="section-title-helper" v-if="$slots['helper']"><slot name="helper"></slot></div>
    <div slot="content" v-if="$slots.content"><slot name="content"></slot></div>
  </dao-setting-section>
</template>

<script>
export default {
  name: 'DocsSection',
};
</script>

<style lang="scss" scoped>
.docs-section{
  margin-bottom: 20px;
  padding-right: 0px;
  border-top: none;
}
</style>
