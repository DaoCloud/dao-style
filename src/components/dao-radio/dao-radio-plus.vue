<template>
  <div :class="['dao-radio-plus', {'active': checked, 'disabled': disabled}]" v-model="value">
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
      /*
        option 的数据格式为：
        [{
          value: 1,
          text: '1111',
        }]
      */
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
        return this.$refs.select.asyncComplete;
      },
    },
    watch: {
      checked(val) {
        if (!val) this.select = undefined;
      },
    },
    methods: {
      // 处理点击事件
      handleClick() {
        if (this.disabled) return;
        // 首先把自身的 radioValue 值赋给 v-model 使其选中
        this.$emit('input', {
          value: this.radioValue,
          select: this.select,
        });
        // 点击时，处理 check
        this.handleCheck();
      },
      // 手动或 js 将 radio 选中时需要执行
      handleCheck() {
        // 首先需要判断是否有 async 方法
        if (this.async) {
          this.handleAsync();
        } else {
          this.chooseOption();
        }
      },
      // 处理 select 的 change 事件
      handleSelectChange() {
        // 当 select 的值被改变，即选中了一个选项时，仅仅需要把这个值给 emit 出去赋给 v-model
        const value = {
          value: this.radioValue,
          select: this.select,
        };
        this.$emit('input', value);
        this.$emit('select-change', value);
      },
      // select 选择某个选项
      chooseOption() {
        // 当 v-model 值变化时，修改现有 select 的选中值
        // v-model 中选中值在 options 中，select 更新为 v-model 的选中值
        // 不在，则默认选中第一项
        this.select = this.options.length ? this.options[0].value : undefined;
        if (find(this.options, { value: this.value.select })) {
          this.select = this.value.select;
        }
        // 选择完 option 之后，还需要把 option 值给 emit 出去
        this.handleSelectChange();
      },
      // 处理 async function
      handleAsync() {
        // 如果 async 方法已执行
        if (this.asyncComplete) {
          this.chooseOption();
        } else {
          this.broadcast('Select', 'deal-async', () => {
            // 此处，只有当前是选中状态时，才需要选择一个默认选项出来
            if (this.checked) this.chooseOption();
          });
        }
      },
    },
  };
</script>
