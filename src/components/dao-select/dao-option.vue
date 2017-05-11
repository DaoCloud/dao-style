<template>
  <div :class="['dao-option-item', {'disabled': disabled, 'active': active}]" @click="handleClick" v-show="matchedFilter">
    <svg class="icon checkmark">
      <use xlink:href="#icon_checkmark"></use>
    </svg>
    <span>
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>
<style lang="scss">
  .dao-option-item {
    padding: 5px 10px 5px 30px;
    cursor: pointer;
    line-height: 20px;
    word-break: break-all;
    position: relative;

    svg.checkmark {
      visibility: hidden;
      position: absolute;
      left: 10px;
      top: 7.5px;
    }
    svg.icon + span.text{
      display: inline;
      margin-left: 0px;
      line-height: 22px;
    }
  }
  .dao-option-item:hover {
    background-color: #3890ff;
    color: #fff;
  }
  .dao-option-item.disabled {
    cursor: not-allowed;
    color: rgb(204, 209, 217);
    background: #fff;
  }
  .dao-option-item.active {
    svg {
      visibility: visible;
    }
    svg.icon + span.text {
      margin-left: 0px;
    }
  }
</style>
<script>
  import Emitter from '../../mixins/emitter';

  export default {
    name: 'Option',
    componentName: 'Option',
    mixins: [Emitter],
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      value: {},
      label: String,
    },
    beforeCreate() {
      // 绑定选择事件
      this.$on('is-chosen', (v) => {
        if (this.value === v) return;
        this.active = false;
      });
      // 绑定搜索事件
      this.$on('search', (filter, filterMethod) => {
        let content;
        switch (typeof filterMethod) {
          case 'string':
            content = this.value[filterMethod];
            if (!content) {
              this.matchedFilter = false;
            }
            if (content && content.indexOf(filter) > -1) {
              this.matchedFilter = true;
            }
            break;
          case 'function':
            this.matchedFilter = filterMethod(filter);
            break;
          default:
          // 默认根据 label 来搜索
            if (!filterMethod) {
              this.matchedFilter = (this.label ? this.label.indexOf(filter) > -1 : true);
            }
        }
        this.dispatch('Option-group', 'search-result');
      });
      // 绑定获取 value 事件
      this.$on('pipe-value', (v) => {
        if (this.value === v) {
          this.dispatchOnChosen(this.value);
        }
      });
    },
    data() {
      return {
        active: false,
        matchedFilter: true,
      };
    },
    methods: {
      handleClick() {
        if (this.disabled) return;
        this.active = true;
        this.dispatchOnChosen(this.value);
      },
      // 触发选择事件
      dispatchOnChosen(val) {
        // 获取 slot 中的 dom 节点
        const nodes = this.$slots.default;
        let nodesString = '';
        if (nodes) {
          nodes.forEach((n) => {
            if (n.elm.nodeType === 3) {
              nodesString += n.text;
            } else {
              nodesString += n.elm.outerHTML;
            }
          });
        } else {
          nodesString = this.label;
        }
        this.dispatch('Select', 'on-chosen', val, nodesString);
      },
    },
  };
</script>
