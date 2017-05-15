<template>
  <div :class="[prefixCls]" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
    <div :class="[prefixCls + '-rel']" ref="reference">
      <slot></slot>
    </div>
    <div :class="[prefixCls + '-popper']" ref="popper" v-show="!disabled && (visible || always)">
      <div :class="[prefixCls + '-content']">
        <div :class="[prefixCls + '-arrow']"></div>
        <div :class="[prefixCls + '-inner']"><slot name="content">{{ content }}</slot></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Popper from '../base/popper';
  import { oneOf } from '../../utils/assist';

  const prefixCls = 'dao-tooltip';
  export default {
    name: 'Tooltip',
    mixins: [Popper],
    props: {
      placement: {
        validator(value) {
          return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
        },
        default: 'bottom',
      },
      content: {
        type: [String, Number],
        default: '',
      },
      delay: {
        type: Number,
        default: 0,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      controlled: {  // under this prop,Tooltip will not close when mouseleave
        type: Boolean,
        default: false,
      },
      always: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        prefixCls,
      };
    },
    methods: {
      handleShowPopper() {
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, this.delay);
      },
      handleClosePopper() {
        clearTimeout(this.timeout);
        if (!this.controlled) {
          this.visible = false;
        }
      },
    },
  };
</script>

<style scoped lang="scss">
$zindex-tooltip:           1070 !default;
$tooltip-max-width:        200px !default;
$tooltip-color:            #fff !default;
$tooltip-bg:               #000 !default;
// Base class
.dao-tooltip {
  display: inline-block;
}
.dao-tooltip-popper {
  z-index: $zindex-tooltip;
  display: block;
  font-size: 13px;
  line-height: 22px;
  position: absolute;

  // Wrapper for the tooltip content
  .dao-tooltip-inner {
    max-width: $tooltip-max-width;
    padding: 10px;
    color: $tooltip-color;
    text-align: left;
    background-color: $tooltip-bg;
    border-radius: 5px;
    word-break:break-all;
  }

  // Arrows
  .dao-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
}

// Note: Deprecated .top-left, .top-right, .bottom-left, and .bottom-right as of v3.3.1
.dao-tooltip-popper {
  &[x-placement^="top"] {
    padding: 5px 0 15px;
    .dao-tooltip-arrow {
      bottom: 6px;
      border-width: 13px 13px 0;
      border-top-color: $tooltip-bg;
    }
  }
  &[x-placement^="right"] {
    padding: 0 5px 0 15px;
    .dao-tooltip-arrow {
      left: 6px;
      border-width: 13px 13px 13px 0;
      border-right-color: $tooltip-bg;
    }
  }
  &[x-placement^="bottom"] {
    padding: 15px 0 5px;
    .dao-tooltip-arrow {
      top: 6px;
      border-width: 0 13px 13px;
      border-bottom-color: $tooltip-bg;
    }
  }
  &[x-placement^="left"] {
    padding: 0 15px 0 5px;
    .dao-tooltip-arrow {
      right: 6px;
      border-width: 13px 0 13px 13px;
      border-left-color: $tooltip-bg;
    }
  }
}

.dao-tooltip-popper[x-placement="top"] .dao-tooltip-arrow {
  left: 50%;
  margin-left: -13px;
}
.dao-tooltip-popper[x-placement="top-start"] .dao-tooltip-arrow {
  left: 16px;
}
.dao-tooltip-popper[x-placement="top-end"] .dao-tooltip-arrow {
  right: 16px;
}

.dao-tooltip-popper[x-placement="bottom"] .dao-tooltip-arrow {
  left: 50%;
  margin-left: -13px;
}
.dao-tooltip-popper[x-placement="bottom-start"] .dao-tooltip-arrow {
  left: 16px;
}
.dao-tooltip-popper[x-placement="bottom-end"] .dao-tooltip-arrow {
  right: 16px;
}

.dao-tooltip-popper[x-placement="left"] .dao-tooltip-arrow {
  top: 50%;
  margin-top: -13px;
}
.dao-tooltip-popper[x-placement="left-start"] .dao-tooltip-arrow {
  top: 8px;
}
.dao-tooltip-popper[x-placement="left-end"] .dao-tooltip-arrow {
  bottom: 8px;
}

.dao-tooltip-popper[x-placement="right"] .dao-tooltip-arrow {
  top: 50%;
  margin-top: -13px;
}
.dao-tooltip-popper[x-placement="right-start"] .dao-tooltip-arrow {
  top: 8px;
}
.dao-tooltip-popper[x-placement="right-end"] .dao-tooltip-arrow {
  bottom: 8px;
}

</style>
