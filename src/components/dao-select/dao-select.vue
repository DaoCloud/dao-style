<template>
  <div :class="['dao-select', {'sm-select': size === 'sm'}]" v-clickoutside:dao-select-dropdown="closeMenu">
    <div :class="['dao-select-main', 'dao-select-rel', {'disabled': isDisabled, 'with-btn': withBtn}]" @click="handleClick" ref="reference">
      <div :class="['dao-select-switch', {'open': visible}]">
        <div class="dao-select-switch-text">
          <div v-show="!selectedText && !isLoading" class="placeholder">{{ placeholder }}</div>
          <div v-show="selectedText && !isLoading" class="selected-text">
            <span v-html="selectedText"></span>
          </div>
          <div v-show="isLoading" class="switch-loading">
            <svg class="icon loading">
              <use xlink:href="#icon_status-progress-circle"></use>
            </svg>
            <span class="loading-text">{{ loadingText }}</span>
          </div>
        </div>
        <div class="icon-box">
          <svg class="icon">
            <use xlink:href="#icon_caret-select"></use>
          </svg>
        </div>
      </div>
      <button v-if="withBtn" type="button" :class="['dao-btn', 'blue', 'dao-select-btn', {'disabled': disabled}]" @click.stop="handleBtnClick">{{ btnContent }}</button>
    </div>
    <div :class="[menuClass, 'dao-select-popper', 'dao-select-dropdown', {'withSearch': withSearch, 'withTab': withTab}]" v-show="visible" ref="popper">
      <div class="search-container" v-if="withSearch">
        <input class="dao-control search" type="text" :placeholder="searchPlaceholder" v-model="filter" required>
      </div>
      <div class="option-list">
        <slot>
          <div class="dao-select-noOption">{{ noDataText }}</div>
        </slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import './dao-select.scss';
  @import './dropdown.scss';
  @import '../dao-input/dao-input';
</style>
<script>
  import { _find, _findIndex, _isEqual } from '../../utils/assist';
  import clickoutside from '../../directives/clickoutside';
  import Emitter from '../../mixins/emitter';
  import Popper from '../base/popper';

  export default {
    name: 'DaoSelect',
    componentName: 'Select',
    mixins: [Emitter, Popper],
    directives: { clickoutside },
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      withSearch: {
        type: Boolean,
        default: false,
      },
      asyncSearch: {
        type: Boolean,
        default: false,
      },
      searchPlaceholder: String,
      searchMethod: Function,
      withTab: {
        type: Boolean,
        default: false,
      },
      withBtn: {
        type: Boolean,
        default: false,
      },
      btnContent: String,
      placeholder: String,
      loading: {
        type: Boolean,
        default: false,
      },
      loadingText: {
        type: String,
        default: '加载中...',
      },
      noDataText: {
        type: String,
        default: '无数据',
      },
      noMatchText: {
        type: String,
        default: '无匹配数据',
      },
      async: Function,
      menuClass: String,
      value: {},
      // 指定 select 的大小
      size: String,
    },
    watch: {
      // 控制下拉的显示和隐藏
      // 搜索
      filter(val) {
        this.$emit('search-change', val);
        if (this.asyncSearch) {
          this.decorateAsync();
          return;
        }
        this.broadcastSearch();
      },
      value(val) {
        // 当 v-model 绑定的 value 值变化时更新一下 option 的状态
        this.updateOptionStatus(val);
      },
      // 控制组件加载状态
      loading(val) {
        this.isLoading = val;
      },
    },
    beforeCreate() {
      // select 初始化，获取所有的 options 的 value 和 节点
      this.$on('init', (value, nodesString, callback) => {
        // 首先查看是否有这个 value 在 options 中
        const opt = _find(this.options, { value });
        if (!opt) {
          this.options.push({ value, nodesString });
        } else {
          // 如果在的话，则更新一下 nodeSting
          opt.nodesString = nodesString;
        }
        // 如果这个值和已选值相等则调用回调，将 option 的状态修改一下
        if (value === this.selectedValue) {
          callback();
        }
      });
      // select 选项池更新，删除已被销毁的 option
      this.$on('option-destroy', (value) => {
        const index = _findIndex(this.options, { value });
        if (index > -1) {
          this.options.splice(index, 1);
        }
      });
      // 绑定一个 on-chosen 事件，定义当 option 点击选择之后需要做的事情
      this.$on('on-chosen', (val) => {
        this.closeMenu();
        this.selectedValue = val;
        // 清空 filter
        if (this.filter && !this.asyncSearch) {
          this.filter = '';
        }
      });
      // 绑定处理异步的事件
      this.$on('deal-async', (callback) => {
        this.handleAsync(callback);
      });
    },
    mounted() {
      // 挂载时把没有选项或没有搜索到的选项时默认文本传递给 option group
      this.broadcast('Option-group', 'init-group', this.noDataText, this.noMatchText);
      // 挂载时更新一下 option 的状态
      this.updateOptionStatus(this.selectedValue);
    },
    data() {
      return {
        options: [],
        isLoading: this.loading,
        asyncComplete: false,
        filter: '',
      };
    },
    computed: {
      isDisabled() {
        return this.disabled || this.isLoading;
      },
      selectedValue: {
        get() {
          return this.value;
        },
        set(val) {
          // 触发 input 事件实现双向绑定
          this.$emit('input', val);
          // 触发 change 事件
          if (_isEqual(val, this.value)) return;
          this.$emit('change', val);
        },
      },
      selectedText() {
        // 如果传入的 option 值为对象格式，而且传入的 v-model 为 {} 空对象，
        // lodash 的 find 会找到 options 里面的第一项，而 lodash 的 some 会返回 true
        // 所以这里使用原生的 find 筛出值之后选择第一项
        const option = _find(this.options, { value: this.selectedValue });
        return option ? option.nodesString : '';
      },
    },
    methods: {
      // 处理点击事件
      handleClick() {
        if (this.isDisabled) return;
        // 值不存在时 清空filter
        if (!this.selectedValue) this.filter = '';
        if (this.async && !this.asyncComplete && !this.visible) {
          this.decorateAsync();
        } else {
          this.toggleMenu();
        }
      },
      // 给 async 方法塞一层回调
      decorateAsync() {
        this.handleAsync(() => {
          // 在打开的状态下进行异步搜索，不需要去 toggleMenu
          if (!this.asyncSearch || (this.asyncSearch && !this.visible)) {
            this.toggleMenu();
          }
        });
      },
      // 处理按钮点击事件
      handleBtnClick() {
        if (this.isDisabled) return;
        this.$emit('btn-event', this.selectedValue);
      },
      // 处理 async
      handleAsync(callback) {
        this.isLoading = true;
        this.async(this.filter)
          .catch(() => {})
          .then((res) => {
            this.handleAsyncComplete();
            callback(res);
          });
      },
      // async 完成
      handleAsyncComplete() {
        // 搜索完成时候清空一下 v-model
        this.selectedValue = null;
        this.isLoading = false;
        this.asyncComplete = true;
      },
      broadcastSearch() {
        this.broadcast('Option', 'search', this.filter, this.searchMethod);
      },
      // 关闭下拉框
      closeMenu() {
        this.visible = false;
      },
      // 切换下拉框打开/关闭
      toggleMenu() {
        this.visible = !this.visible;
      },
      // 更新 option 状态
      updateOptionStatus(val) {
        this.broadcast('Option', 'status', val);
      },
    },
    created() {
      // validate
      if (this.asyncSearch) {
        if (!this.async) {
          throw new Error('method "async" was required');
        }
        if (this.searchMethod) {
          console.warn("method 'searchMethod' and 'async' may conflict");
        }
      }
    },
  };
</script>
