<template>
  <div :class="['dao-select']" v-clickoutside:dao-select-dropdown="handleClose">
    <div :class="['dao-select-main', {'disabled': isDisabled, 'with-btn': withBtn}]" @click="handleClick">
      <div :class="['dao-select-switch', {'open': currentVisible}]">
        <div class="dao-select-switch-text">
          <div v-show="showPlaceholder" class="placeholder">{{ placeholder }}</div>
          <div v-show="showSelectedText">
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
            <use xlink:href="#icon_caret-down"></use>
          </svg>
        </div>
      </div>
      <button v-if="withBtn" type="button" :class="['dao-btn', 'blue', 'dao-select-btn', {'disabled': disabled}]" @click.stop="handleBtnClick">{{ btnContent }}</button>
    </div>
    <dao-drop :drop-class="[menuClass, {'withSearch': withSearch, 'withTab': withTab}]" v-show="currentVisible" placement="bottom" :append-to-body="optionsAppendToBody" ref="drop">
      <div class="search-container" v-if="withSearch">
        <input class="dao-control search" type="text" :placeholder="searchPlaceholder" v-model="filter" required>
      </div>
      <div class="option-list">
        <slot></slot>
      </div>
    </dao-drop>
  </div>
</template>
<style lang="scss">
  @import '../dao-color.scss';
  $select-color: $black-dark;
  $select-default-color: $grey-dark;
  $select-border-radius: 4px;
  $select-border-color: $grey-light;
  $select-bg-img: linear-gradient(to top, rgba(61,68,79,.05) 0%, rgba(61,68,79,0) 100%);
  $select-bg-color: $white-light;
  $select-disabled-color: $grey-light;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .dao-select {
    width: 287px;
    position: relative;
    .dao-select-main {
      color: $select-color;
      position: relative;
      display: inline-block;
      width: 100%;
      .dao-select-switch {
        width: 100%;
        display: flex;
        overflow: hidden;
        border: 1px solid $select-border-color;
        border-radius: $select-border-radius;
        height: 32px;
        background-image: $select-bg-img;
        cursor: pointer;
        &-text {
          height: 100%;
          padding-left: 10px;
          flex: 1;
          line-height: 30px;
          user-select: none;
        }
        &:hover {
          background-color: rgba(204,209,217,0.1);
        }
        &.open {
          background-color: rgba(204,209,217,0.15);
          box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.06),inset 0px 0px 4px 0px rgba(0, 0, 0, 0.08);
          background-image: none;
        }
      }
      .placeholder {
        color: $select-default-color;
      }
      .icon-box {
        padding: 7px;
        display: inline-block;
        height: 30px;
        line-height: 1;
        width: 30px;
        .icon {
          width: 16px;
          height: 16px;
          vertical-align: baseline;
        }
      }
      &.with-btn {
        display: flex;
        .dao-select-switch {
          border-top-right-radius:0;
          border-bottom-right-radius:0;
          border-right: none;
        }
        .dao-select-btn {
          flex-grow: 0;
          border-top-left-radius:0;
          border-bottom-left-radius:0;
          height: 32px;
        }
      }
      &.disabled {
        cursor: not-allowed!important;
        .dao-select-switch{
          cursor: not-allowed!important;
          &:hover {
            background-color: transparent;
            background-image: $select-bg-img;
          }
          &-text * {
            color: $select-disabled-color;
          }
          svg {
            fill: $select-disabled-color;
          }
          .switch-loading {
            display: flex;
            align-items: center;
            .loading {
              animation: loading 1.5s linear infinite;
            }
            .loading-text {
              margin-left: 6px;
            }
          }
        }
      }
    }
    .dao-select-dropdown {
      position: absolute;
      width: 100%;
      padding: 5px 0;
      list-style: none; 
      border-radius: 5px;
      background-color: $white;
      box-shadow: 0 0 0 1px rgba($black-dark, .06),0 5px 12px 0 rgba($black-dark, .3);
      max-height: 200px;
      overflow: auto;
      z-index: 1000;
      &.withSearch {
        padding-top: 0;
        overflow: hidden;
        max-height: none;
        .option-list {
          max-height: 200px;
          overflow: auto;
        }
        .dao-select-category:nth-of-type(1) .dao-select-category-label {
          border-top: none;
        }
      }
      .dao-tab .dao-tab__header {
        background-color: $select-bg-color;
        padding: 10px 10px 0px;
        margin-top: 0px;
        border-top-left-radius: $select-border-radius;
        border-top-right-radius: $select-border-radius;
      }
      &.withTab {
        max-height: none;
        padding-top: 0;
        .dao-select-category:first-child .dao-select-category-label {
          border-top: none;
        }
        .dao-tab-item{
          max-height: 200px;
          overflow-y: auto;
          margin: 0;
        }
      }
      &-options.withTab.withSearch {
        .search-container {
          margin-bottom: -1px;
        }
      }
      .search-container {
        background-color: $select-bg-color;
        padding: 10px 10px;
        border-top-left-radius: $select-border-radius;
        border-top-right-radius: $select-border-radius;
        border-bottom: 1px solid #e4e7ed;
        input.dao-control.search {
          width: 100%;
        }
      }
    }
  }
</style>
<script>
  import daoDrop from './dropdown.vue';
  import clickoutside from '../../directives/clickoutside';
  import Emitter from '../../mixins/emitter';

  export default {
    name: 'Select',
    componentName: 'Select',
    mixins: [Emitter],
    directives: { clickoutside },
    components: { daoDrop },
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      withSearch: {
        type: Boolean,
        default: false,
      },
      searchPlaceholder: String,
      searchMethod: [String, Function],
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
      optionsAppendToBody: {
        type: Boolean,
        default: false,
      },
      value: {},
    },
    watch: {
      currentVisible(val) {
        this.$emit('visible-change', Boolean(val));
      },
      filter(val) {
        this.broadcast('Option', 'search', val, this.searchMethod);
      },
      value(val) {
        this.broadcast('Option', 'pipe-value', val);
      },
    },
    created() {
      this.$on('on-chosen', (v, text) => {
        this.currentVisible = false;
        this.selectedValue = v;
        this.selectedText = text;
        this.broadcast('Option', 'is-chosen', v);
      });
    },
    mounted() {
      this.broadcast('Option-group', 'init-group', this.noDataText, this.noMatchText);
      this.broadcast('Option', 'pipe-value', this.value);
    },
    data() {
      return {
        isLoading: this.loading,
        currentVisible: false,
        asyncCompelete: false,
        selectedText: '',
        filter: '',
      };
    },
    computed: {
      isDisabled() {
        return this.disabled || this.isLoading;
      },
      showPlaceholder() {
        if (this.selectedValue === 0 || this.selectedValue === '') {
          return false;
        }
        return !this.isLoading && !this.selectedValue;
      },
      showSelectedText() {
        if (this.selectedValue === 0 || this.selectedValue === '') {
          return true;
        }
        return !this.isLoading && this.selectedValue;
      },
      selectedValue: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
          this.$emit('change', val);
        },
      },
    },
    methods: {
      handleClick() {
        if (this.isDisabled) return;
        if (this.async && !this.asyncCompelete) {
          this.isLoading = true;
          this.async()
            .then(() => {
              this.isLoading = false;
              this.asyncCompelete = true;
              this.currentVisible = !this.currentVisible;
            });
          return;
        }
        this.currentVisible = !this.currentVisible;
      },
      handleBtnClick() {
        if (this.isDisabled) return;
        this.$emit('btn-event', this.selectedValue);
      },
      handleClose() {
        this.currentVisible = false;
      },
    },
  };
</script>