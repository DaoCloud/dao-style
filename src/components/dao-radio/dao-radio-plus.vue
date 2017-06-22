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
        <dao-select ref="select" :async="async" :disabled="disabled" v-model="select" :placeholder="selectTitle" :loading="loading" @change="handleSelectChange">
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
  import { find } from 'lodash';
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
    mounted() {
      // 挂载时，如果被选中，则执行
      if (this.checked) {
        if (this.async) {
          this.handleAsync();
          return;
        }
        // 相等，则确定 select 的值
        this.chooseOption(this.value);
      }
    },
    data() {
      return {
        loading: false,
        select: undefined,
      };
    },
    computed: {
      value() {
        return this.$parent.value;
      },
      checked() {
        return this.value.value === this.radioValue;
      },
      asyncComplete() {
        console.log(this.$refs.select.asyncComplete)
        return this.$refs.select.asyncComplete;
      },
    },
    watch: {
      // 当 value 即绑定的 v-model 值变化时
      value(val) {
        // 如果 v-model 值和 radioValue 值不等，则将 select 值重置为 undefined
        this.select = undefined;
        if (val.value === this.radioValue) {
          // 如果有 async 方法，则处理一下该方法
          if (this.async) {
            this.handleAsync();
            return;
          }
          // 相等，则确定 select 的值
          this.chooseOption(val);
        }
      },
    },
    methods: {
      // 处理点击事件
      handleClick() {
        if (this.disabled) return;
        // 点击时，调用 onCheck 方法
        this.onCheck();
      },
      // radio 选中时需要执行
      onCheck() {
        // 将自身的 radioValue 和 select 整合赋值给 v-model
        this.$emit('input', {
          value: this.radioValue,
          select: this.select,
        });
      },
      // 处理 select 的 change 事件
      handleSelectChange() {
        this.onCheck();
        this.$emit('select-change', this.value);
      },
      // select 选择某个选项
      chooseOption(value) {
        // 当 v-model 值变化时，修改现有 select 的选中值
        // v-model 中选中值在 options 中，select 更新为 v-model 的选中值
        // 不在，则默认选中第一项
        this.select = this.options.length ? this.options[0].value : undefined;
        if (find(this.options, { value: value.select })) {
          this.select = value.select;
        }
      },
      // 处理 async function
      handleAsync() {
        // 如果 async 方法已执行
        if (this.asyncComplete) {
          this.chooseOption(this.value);
        } else {
          this.broadcast('Select', 'deal-async', () => {
            this.chooseOption(this.value);
          });
        }
      },
    },
  };
</script>
