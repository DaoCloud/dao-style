<template>
  <li :class="classes" @click="handleClick"><slot></slot></li>
</template>
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
      },
      textColor: {
        type: String,
        default: 'black'
      },
      hoverColor: {
        type: String,
        default: 'blue'
      },
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
            [`${prefixCls}-${this.textColor}`]: !!this.textColor,
            [`${prefixCls}-hover-${this.hoverColor}`]: !!this.hoverColor,
          }
        ];
      }
    },
    methods: {
      handleClick () {
        const $parent = this.$parent.$parent;
        const hasChildren = this.$parent && this.$parent.$options.name === 'Dropdown';
        if (this.isDisabled) {
          this.$nextTick(() => {
            $parent.visible = true;
          });
          return;
        } else if (hasChildren) {
          this.$parent.$emit('on-haschild-click');
        } else {
          if ($parent && $parent.$options.name === 'Dropdown') {
            $parent.$emit('on-hover-click');
          }
        }
        this.$emit('click');
      }
    },
  };
</script>
<style scoped lang="scss" src="./dao-dropdown-item.scss"></style>
