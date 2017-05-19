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
            <dao-option v-for="option in options" :key="option.value" :value="option.value" :label="option.label"></dao-option>
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
    beforeCreate() {
      this.$on('onChecked', () => {
        // v-model 赋值
        this.value = this.radioValue;
        if (this.async) { // async 方法存在
          this.handleAsync();
        } else { // async 方法不存在
          this.chooseOption();
        }
      });
    },
    mounted() {
      if (this.checked) this.$emit('onChecked');
    },
    data() {
      return {
        loading: false,
        select: undefined,
        asyncComplete: false,
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
        if (!val) this.select = undefined;
      },
      select(val) {
        if (val || val === '' || val === 0) {
          this.$emit('onChecked');
          this.$emit('select-change', {
            value: this.value,
            select: this.select,
          });
        }
      },
    },
    methods: {
      // 处理点击事件
      handleClick() {
        if (this.disabled) return;
        this.$emit('onChecked');
      },
      // 处理 select 的 change 事件
      handleSelectChange() {
        this.$emit('onChecked');
      },
      // select 选择某个选项
      chooseOption() {
        if (this.select || this.select === '' || this.select === 0) return;
        this.select = Array.isArray(this.options)
          && this.options.length ? this.options[0].value : undefined;
      },
      // 处理 async function
      handleAsync() {
        // 如果 async 方法已执行
        if (this.asyncComplete) {
          this.chooseOption();
        } else {
          this.broadcast('Select', 'deal-async', (complete) => {
            this.asyncComplete = complete;
            this.chooseOption();
          });
        }
      },
    },
  };
</script>
