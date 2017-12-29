<template>
  <div 
    ref="container"
    class="dao-input-with-label-container" 
    :class="{ block: block }"
    v-clickoutside="handleClickoutside" >
    <input type="text" 
      class="dao-control search" 
      v-bind="$props" 
      ref='input' 
      v-model="currentValue"
      @keyup="handleKeyUp()"
      @keydown="emit('keydown', $event)"
      @input="handleInput()"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)">
    <span  
      class="icon close-icon"
      :class="{ disabled: disabled }"
      @click="resetCurrentVal()">
      <svg>
        <use xlink:href="#icon_close-circled"></use>
      </svg>
    </span>
    <div ref="reference" class="reference"></div>
    <dao-dropdown 
      class="dao-input-with-label-popper"
      placement="right-start" 
      ref="popper"
      v-show="visible">
      <dao-dropdown-menu> 
        <div v-for="(tab, index) in filterCurrentOptions" :key="index">
          <dao-dropdown-item :is-title="true" v-if="tab.tabName">{{tab.tabName}}</dao-dropdown-item>
          <dao-dropdown v-if="key.operates.length" 
            v-for="(key, index) in tab.keys" 
            :key="index" 
            placement="right-start" 
            class="dao-input-with-label-popper-dropdown">
            <dao-dropdown-item>
              <span>{{key.name}}</span>
              <svg class="dao-input-with-label-popper-arrow-icon">
                <use xlink:href="#icon_down-arrow"></use>
              </svg>
            </dao-dropdown-item>
            <dao-dropdown-menu 
              slot="list"
              class="dao-input-with-label-popper-dropdown-menu">
              <template v-if="key && key.operates.length && showAllOperations">
                <dao-dropdown  
                  v-for="(operate, index) in key.operates" 
                  :key="index" 
                  placement="right-start">
                  <dao-dropdown-item>{{operate.val | translate}}</dao-dropdown-item>
                  <dao-dropdown-menu slot="list">
                    <template v-if="operate.vals.length">
                       <dao-dropdown-item 
                        class="dao-input-with-label-dropdown-item-base"
                        v-for="(val, index) in operate.vals" 
                        :key="index" 
                        @click="handleSelect(tab, key, val, operate)">
                        {{val.name}}
                      </dao-dropdown-item>
                    </template>  
                    <template v-else> 
                      <dao-dropdown-item :isDisabled="true">
                        {{emptyItemText}}
                      </dao-dropdown-item>
                    </template>  
                  </dao-dropdown-menu>
                </dao-dropdown>
              </template>
              <template v-else>
                <template v-if="key.operates[0].vals.length">
                  <dao-dropdown-item 
                    class="dao-input-with-label-dropdown-item-base"
                    v-for="(val, index) in key.operates[0].vals" 
                    :key="index" 
                    @click="handleSelect(tab, key, val)">
                    {{val.name}}
                  </dao-dropdown-item>
                </template>
                <template v-else> 
                  <dao-dropdown-item :isDisabled="true">
                    {{emptyItemText}}
                  </dao-dropdown-item>
                </template>  
              </template>
            </dao-dropdown-menu>
          </dao-dropdown>
        </div>
      </dao-dropdown-menu>
    </dao-dropdown>
  </div>
</template>
<script>
import {
  getSelectPosition as GetSelectPosition,
  simpleMerge as SimpleMerge,
  getTextSize as GetTextSize,
} from '../../utils/assist';
import clickoutside from '../../directives/clickoutside';
import Popper from '../base/popper';

const INPUT_PADDING = 32;
const DEFAULT_INPUT_HEIGHT = 32;
const DEFAULT_OPERATE = ':';
const EMPTY_ITEM_TEXT = '暂无选项';
const TRANSLATE_MAP = {
  ':': '是',
  '=': '等于',
  '<': '小于',
  '>': '大于',
  '>=': '大等于',
  '<=': '小等于',
  '!=': '不等于',
};

export default {
  directives: {
    clickoutside,
  },
  mixins: [Popper],
  name: 'DaoInputWithLabel',
  props: {
    value: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    options: Array,
    config: Object,
    placeholder: String,
  },
  data() {
    return {
      currentValue: '',
      currentConfig: {
        shutDown: false,
      },
      currentOptions: [],
      visible: false,
      clickoutside: false,
      showAllOperations: false,
      emptyItemText: EMPTY_ITEM_TEXT,
    };
  },
  created() {
    this.currentValue = this.formatInput(this.value);
    this.currentOptions = this.formatOptions(this.options);
    this.currentConfig = SimpleMerge(this.currentConfig, this.config);
  },
  computed: {
    // 过滤掉已经被选择的
    filterCurrentOptions() {
      const currentValueArr = this.currentValue.split(' ');
      const cpOptions = JSON.parse(JSON.stringify(this.currentOptions));
      return cpOptions.map((tab) => {
        tab.keys = tab.keys.map((key) => {
          key.operates = key.operates.map((operate) => {
            operate.vals = operate.vals.filter(val => !currentValueArr.includes(`${key.val}${operate.val}${val.val}`));
            return operate;
          });
          return key;
        });
        return tab;
      });
    },
  },
  methods: {
    // 透传最新值
    updateModel(val) {
      this.emit('input', val);
      this.emit('change', val);
    },
    shouldShowPopper() {
      if (this.currentConfig.shutDown) return false;
      // 当前输入框没有值
      if (!this.currentValue) return false;
      // 没有选项可供选择
      if (!this.filterCurrentOptions.length) return false;
      // 点击了外部，在没有更新值之前不需要显示
      if (this.clickoutside) return false;
      // 输入的不是空格如果也无法匹配到选项中的值也不需要显示
      if (!this.currentValue.endsWith(' ')) {
        const frag = this.currentValue.split(' ').pop();
        let catched = false;
        this.currentOptions.forEach((option) => {
          option.keys.forEach((key) => {
            if (key.val.startsWith(frag) || key.name.startsWith(frag)) {
              catched = true;
            }
          });
        });
        if (!catched) return false;
      }
      // TODO 支持在文本中间操作
      if (GetSelectPosition(this.$refs.input).position < this.currentValue.length) return false;
      return true;
    },
    // 更新 popper 位置
    updatePoperPosition() {
      if (!this.shouldShowPopper()) {
        this.visible = false;
        return;
      }
      const calipersWidth = GetTextSize(this.currentValue).width;
      const inputWidth = this.$refs.input.offsetWidth;
      const maxWidth = inputWidth - (INPUT_PADDING * 2);
      // 对 left 值做简单的碰撞检测
      const left = (calipersWidth > maxWidth ? maxWidth : calipersWidth) + INPUT_PADDING;
      this.$refs.reference.style.left = `${left}px`;
      this.$refs.reference.style.top = `${DEFAULT_INPUT_HEIGHT}px`;
      this.visible = true;
      this.updatePopper('right-start');
    },
    // 格式化数据
    formatInput(val) {
      // 1.多个空格全部改成一个空格
      let result = val.replace(/\s+/g, ' ');
      // 2.去掉开头空格
      if (result.startsWith(' ') && result.length > 1) {
        result = result.slice(1);
      }
      // 3.如果用户在key-value中插入并输入空格也认定是错误的输入
      // 4.keyword 只能在第一个位置，之后的位置都应该是key:value的形式，
      // 如果在其他位置，都可以认定为非法输入需要修正，直接丢弃是最安全的方案
      // fallback: 如果无法正确格式化的数据，则粗暴地将原始数据直接strim掉
      return result;
    },
    // 格式化选项
    formatOptions(options) {
      this.showAllOperations = false;
      const storeOperations = [];
      options = options || [];
      options = options.map((tab) => {
        tab.keys = tab.keys.map((key) => {
          if (!key.name) {
            key.name = key.val;
          }
          if (!key.operations) {
            key.operations = [DEFAULT_OPERATE];
          }
          if (key.operations.length === 1) {
            storeOperations.push(key.operations[0]);
          }
          if (key.operations.length > 1) {
            this.showAllOperations = true;
          }
          key.vals = key.vals.map((val) => {
            if (!val.name) {
              val.name = val.val;
            }
            return val;
          });
          key.operates = key.operations.map(oper => ({ val: oper, vals: key.vals }));
          // delete key.vals;
          return key;
        });
        return tab;
      });
      // 如果都是只有一个操作符，那么如果操作符不全同也需要全部显示操作符
      if (!this.showAllOperations && new Set(storeOperations).size > 1) {
        this.showAllOperations = true;
      }
      return options;
    },
    // emit
    emit(eventName, val) {
      this.$emit(eventName, val);
    },
    // keyup 事件
    handleKeyUp() {
      if (this.currentConfig.shutDown) {
        this.updateModel(this.currentValue);
        return;
      }
      this.currentValue = this.formatInput(this.currentValue);
      this.updatePoperPosition();
      this.updateModel(this.currentValue);
      this.emit('keyup');
    },
    // input 事件
    handleInput() {
      this.clickoutside = false;
    },
    // clickoutside 事件
    handleClickoutside() {
      this.clickoutside = true;
      this.updatePoperPosition();
    },
    // 选中值
    handleSelect(tab, key, val, operate = { val: DEFAULT_OPERATE }) {
      const selectValue = `${key.val}${operate.val}${val.val}`;
      // 输入补全
      const currentValArr = this.currentValue.split(' ');
      currentValArr.pop();
      currentValArr.push(selectValue);
      this.currentValue = this.formatInput(currentValArr.join(' '));
      this.updatePoperPosition();
      this.updateModel(this.currentValue);
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    // 重置输入值
    resetCurrentVal() {
      this.currentValue = '';
      this.updateModel(this.currentValue);
      this.emit('reset');
      this.$nextTick(() => {
        this.updatePoperPosition();
      });
    },
  },
  watch: {
    // 对异步数据的支持
    value(newVal) {
      if (newVal === this.currentValue) return;
      this.currentValue = this.formatInput(newVal);
    },
    options(newVal) {
      this.currentOptions = this.formatOptions(newVal);
    },
    config(newVal) {
      this.currentConfig = SimpleMerge(this.currentConfig, newVal);
    },
  },
  filters: {
    translate(key) {
      return TRANSLATE_MAP[key] || key;
    },
  },
};
</script>

<style lang="scss">
  @import './dao-input-with-label.scss';
</style>

