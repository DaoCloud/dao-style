<template>
  <div class="dao-radio-plus" :class="[{'active': checked, 'disabled': disabled}]" v-model="value">
    <div class="dao-radio-plus-wrap">
      <div class="dao-radio-plus-content" @click="handleClick">
        <div class="radio-plus-img">
          <slot name="icon"></slot>
        </div>
        <div class="radio-plus-text">{{ headline }}</div>
      </div>
      <div class="radio-select">
        <dao-select :async="async" :disabled="disabled" v-model="select" :placeholder="selectTitle" :loading="loading" @change="handleSelectChange">
          <dao-option-group no-data-text="暂无结果">
            <dao-option v-for="option in options" :value="option.value" :label="option.label"></dao-option>
          </dao-option-group>
        </dao-select>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import './dao-radio-plus.scss';
</style>
<script>
  import daoSelect from '../dao-select';
  import Emitter from '../../mixins/emitter';

  export default {
    name: 'Radio-plus',
    componentName: 'Radio-plus',
    components: {
      daoSelect,
      daoOptionGroup: daoSelect.Group,
      daoOption: daoSelect.Option,
    },
    mixins: [Emitter],
    props: {
      headline: String,
      selectTitle: String,
      options: Array,
      async: Function,
      disabled: {
        type: Boolean,
        default: false,
      },
      radioValue: {},
    },
    data() {
      return {
        loading: false,
        select: undefined,
      };
    },
    computed: {
      value: {
        get() {
          return this.$parent.value;
        },
        set(v) {
          this.$emit('input', v);
        },
      },
      checked() {
        return this.value === this.radioValue;
      },
    },
    watch: {
      checked(val) {
        this.select = undefined;
        if (val) {
          if (!this.select && this.async) {
            this.broadcast('Select', 'click');
          }
          if (this.select) {
            this.select = Array.isArray(this.options) ? this.options[0].value : undefined;
          }
        }
      },
      select(val) {
        if (val) {
          this.checked = true;
        }
      },
    },
    methods: {
      handleClick() {
        if (this.disabled) return;
        this.value = this.radioValue;
      },
      handleSelectChange() {
        this.$emit('input', this.radioValue);
      },
    },
  };
</script>
