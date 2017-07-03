<template>
  <div :class="[{'dao-card-col': type === 'card'}, {'radio-box': isGrid}]" :style="collumn">
    <dao-radio-simple v-if="type === 'simple'" :name="name" :radio-value="label" :disabled="disabled" @input="handleInput">
      <slot></slot>
    </dao-radio-simple>
    <dao-radio-block v-if="type === 'block'" :name="name" :headline="headline" :description="description" :radio-value="label" :disabled="disabled" @input="handleInput">
      <slot></slot>
    </dao-radio-block>
    <dao-radio-grid v-if="type === 'grid' || type === 'card'" :type="type" :name="name" :headline="headline" :description="description" :radio-value="label" :subheadline="subheadline" :disabled="disabled" @input="handleInput" :defaultTemplate="defaultTemplate">
      <template slot="icon"><slot name="icon"></slot></template>
      <template slot="headlineSupplement"><slot name="headlineSupplement"></slot></template>
      <slot></slot>
    </dao-radio-grid>
    <dao-radio-plus v-if="type === 'plus'" :name="name" :headline="headline" :radio-value="label" :disabled="disabled" :select-title="selectTitle" :options="options || []" :async="async" @input="handleInput" @select-change="handleSelectChange">
      <template slot="icon"><slot name="icon"></slot></template>
    </dao-radio-plus>
  </div>
</template>
<style lang="scss">
  @import './dao-radio.scss';
</style>
<script>
  import daoRadioSimple from './dao-radio-simple.vue';
  import daoRadioBlock from './dao-radio-block.vue';
  import daoRadioGrid from './dao-radio-grid.vue';
  import daoRadioPlus from './dao-radio-plus.vue';

  export default {
    name: 'Radio',
    components: { daoRadioSimple, daoRadioBlock, daoRadioGrid, daoRadioPlus },
    props: {
      // common
      label: {},
      value: {},
      disabled: {
        type: Boolean,
        default: false,
      },
      // block, grid
      headline: String,
      description: String,
      subheadline: String,
      // plus
      selectTitle: String,
      options: Array,
      async: Function,
    },
    data() {
      return {
        gridCol: this.$parent.gridCol,
        name: this.$parent.name,
        type: this.$parent.type,
      };
    },
    computed: {
      isGrid() {
        return this.type !== 'simple' && this.type !== 'block';
      },
      defaultTemplate() {
        return Boolean(this.$slots.icon || this.$slots.headlineSupplement);
      },
      collumn() {
        return this.isGrid ? {
          width: `${100 / window.parseInt(this.gridCol, 10)}%`,
        } : {};
      },
    },
    methods: {
      handleInput(v) {
        this.$emit('input', v);
      },
      handleSelectChange(v) {
        this.$emit('select-change', v);
      },
    },
  };
</script>
