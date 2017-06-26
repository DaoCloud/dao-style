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
  @import './dao-option-group.scss';
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
