<template>
  <li :class="classes" @click="handleClick"><slot></slot></li>
</template>
<style scoped lang="scss">
  @import '../dao-color.scss';
  .dao-dropdown.dao-dropdown-is-open > .dao-dropdown-rel > .dao-dropdown-item {
    color: $white;
    background-color: $blue;
    svg {
      fill: $white;
    }
  }
  .dao-dropdown-item {
    &.dao-dropdown-item-base {
      font-size: 14px;
      line-height: 16px;

      height: 30px;
      padding: 7px 10px;

      color: $black-dark;
      cursor: pointer;
      svg {
        width: 16px;
        height: 16px;
        vertical-align: middle;
        fill: $black-dark;
      }
      &:hover {
        color: $white;
        background-color: $blue;
        svg {
          fill: $white;
        }
      }
    }
    &.dao-dropdown-item-disabled {
      font-size: 14px;
      line-height: 16px;

      height: 30px;
      padding: 7px 10px;

      color: $grey-light;
      cursor: not-allowed;
      svg {
        width: 16px;
        height: 16px;
        vertical-align: middle;
        fill: $grey-light;
      }
    }
    &.dao-dropdown-item-subtitle {
      font-size: 12px;
      line-height: 20px;

      height: 21px;
      padding: 0 10px;

      color: $grey-dark;
      border-top: 1px solid $white-dark;
      background-color: $white-light;
    }
    &.dao-dropdown-item-divided {
      height: 1px;
      margin: 5px 0;

      background-color: $white-dark;
    }
  }
</style>
<script>
  const prefixCls = 'dao-dropdown-item';
  export default {
    name: 'DropdownItem',
    props: {
      name: {
        type: [String, Number]
      },
      isDisabled: {
        type: Boolean,
        default: false
      },
      // selected: {
      //   type: Boolean,
      //   default: false
      // },
      isDivided: {
        type: Boolean,
        default: false
      },
      isTitle: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      base() {
        return !this.isDisabled && !this.isDivided && !this.isTitle;
      },
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-disabled`]: this.isDisabled,
            // [`${prefixCls}-selected`]: this.selected,
            [`${prefixCls}-divided`]: this.isDivided,
            [`${prefixCls}-subtitle`]: this.isTitle,
            [`${prefixCls}-base`]: this.base,
          }
        ];
      }
    },
    methods: {
      handleClick () {
        const $parent = this.$parent.$parent.$parent;
        const hasChildren = this.$parent && this.$parent.$options.name === 'Dropdown';
        if (this.isDisabled) {
          this.$nextTick(() => {
            $parent.currentVisible = true;
          });
        } else if (hasChildren) {
          this.$parent.$emit('on-haschild-click');
        } else {
          if ($parent && $parent.$options.name === 'Dropdown') {
            $parent.$emit('on-hover-click');
          }
        }
        this.$emit('click');
        // console.log('click');
        // $parent.$emit('on-click', this.name);
      }
    },
    // mounted() {
    //   this.$on('on-click', () => {
    //     console.log('click');
    //     // const $parent = this.hasParent();
    //     // if ($parent) $parent.$emit('on-click', key);
    //   });
    // },
  };
</script>
<style>
</style>
