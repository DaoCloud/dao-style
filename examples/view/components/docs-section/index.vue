<template>
  <div class="docs-section">
    <div class="title" slot="section-title" v-if="$slots['title']"><slot name="title"></slot></div>
    <div class="helper" slot="section-title-helper" v-if="$slots.helper"><slot name="helper"></slot></div>
    <div class="content" slot="content" v-if="$slots.content"><slot name="content"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'DocsSection',
};
</script>

<style lang="scss" scoped>
@import 'daoColor';
.docs-section{
  position: relative;
  padding-top: 20px;
  &>.title{
    font-size: 16px;
    font-weight: 500;
  }
  &>.helper{
    padding: 5px 0;
  }
  &>.content{
    padding: 10px 0;
    overflow: auto;
  }
}
</style>
