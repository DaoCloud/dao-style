<template>
  <div class="dao-select-category">
    <div class="dao-select-category-label" v-show="label">{{ label }}</div>
    <slot>
      <div class="dao-select-noOption">{{ noDataText }}</div>
    </slot>
    <div class="dao-select-noOption" v-show="!hasMatched">{{ noMatchText }}</div>
  </div>
</template>
<style lang="scss">
  $select-default-color: #9ba3af;

  .dao-select-category {
    &-label {
      color: $select-default-color;
      padding: 0px 10px;
      background-color: #f5f7fa;
      border-top: 1px solid #e4e7ed;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
    }
    .dao-select-noOption {
      padding: 10px 20px 5px 20px;
      color: $select-default-color;
    }
  }
</style>
<script>
  import Emitter from '../../mixins/emitter';

  export default {
    name: 'Option-group',
    componentName: 'Option-group',
    mixins: [Emitter],
    props: {
      label: String,
    },
    beforeCreate() {
      this.$on('init-group', (noDataText, noMatchText) => {
        this.noDataText = noDataText;
        this.noMatchText = noMatchText;
      });
      this.$on('search-result', () => {
        this.hasMatched = this.$children.some(v => v.matchedFilter === true);
      });
    },
    data() {
      return {
        noDataText: '',
        noMatchText: '',
        hasMatched: true,
      };
    },
  };
</script>