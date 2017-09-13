<template>
  <div
    class="dao-input-container"
    :class="{
      'loading': status === 'loading' && iconInside,
      'info': status === 'info' && iconInside,
      'error': status === 'error',
      'success': status === 'success',
      'search': search && !iconInside,
      'icon-inside': iconInside,
      'message-bottom': messagePlacement === 'bottom' && !iconInside,
      'no-message-icon': messageNoIcon,
      'dao-input-group': $slots.prepend || $slots.append,
      'input-sm': size === 'sm',
      'block': block
    }">
    <div class="dao-input-group-addon prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <div class="dao-input-inner" :class="{'has-append': !!$slots.append}">
      <dao-popover
        :content="currentMessage"
        :class="{
          'info': status === 'info' && iconInside,
          'error': status === 'error' && iconInside,
          'success': status === 'success' && iconInside,
          'hide': !iconInside || !messageEnabled || (showTooltipOnlyHover && !hovered),
        }"
        :placement="iconInsideMessagePlacement"
        :always="iconInside"
        :popper-cls="popperCls2Input"
        :append-to-body="appendToBody"
        :disabled="!iconInside || !messageEnabled || (showTooltipOnlyHover && !hovered)">
        <input
          v-bind="$props"
          :value="currentValue"
          :required="isRequired"
          ref="input"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @keyup="handleKeyUp"
          @keydown="handleKeyDown"
        >
      </dao-popover>
      <span class="icon loading-icon" v-if="status === 'loading' && iconInside" @mouseover="hoverIcon" @mouseleave="leaveIcon">
        <svg>
          <use xlink:href="#icon_status-progress-circle"></use>
        </svg>
      </span>
      <span class="icon info-icon" v-if="status === 'info' && iconInside" @mouseover="hoverIcon" @mouseleave="leaveIcon">
        <svg>
          <use xlink:href="#icon_question"></use>
        </svg>
      </span>
      <span class="icon error-icon" v-if="status === 'error' && iconInside" @mouseover="hoverIcon" @mouseleave="leaveIcon">
        <svg>
          <use xlink:href="#icon_warning"></use>
        </svg>
      </span>
      <span class="icon success-icon" v-if="status === 'success' && iconInside" @mouseover="hoverIcon" @mouseleave="leaveIcon">
        <svg>
          <use xlink:href="#icon_success"></use>
        </svg>
      </span>
    </div>
    <div class="dao-input-group-addon append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
    <slot name="button"></slot>
    <div class="dao-input-message error" v-if="status === 'error' && !!message && !iconInside && !$slots.prepend && !$slots.append">
      <svg class="icon"><use xlink:href="#icon_danger"></use></svg>
      <span v-html="message"></span>
    </div>
    <div class="dao-input-message success" v-if="status === 'success' && !!message && !iconInside && !$slots.prepend && !$slots.append">
      <svg class="icon"><use xlink:href="#icon_success"></use></svg>
      <span v-html="message"></span>
    </div>
  </div>
</template>
<script>
  import { oneOf } from '../../utils/assist';

  export default {
    name: 'DaoInput',
    data() {
      return {
        currentValue: this.value,
        currentMessage: this.message,
        hovered: false,
      };
    },
    props: {
      type: {
        type: String,
        default: 'text',
      },
      disabled: Boolean,
      value: [String, Number],
      size: String,
      iconInside: Boolean,
      message: String,
      messagePlacement: {
        validator(value) {
          return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
        },
        default: 'top-end',
      },
      messageNoIcon: Boolean,
      search: Boolean,
      status: {
        validator(value) {
          return oneOf(value, ['', 'loading', 'info', 'error', 'success']);
        },
        default: '',
      },
      block: Boolean,
      required: Boolean,
      // 以下使用 input 原生属性，不做特殊处理
      placeholder: String,
      readonly: Boolean,
      autofocus: Boolean,
      name: String,
      form: String,
      maxlength: Number,
      minlength: Number,
      max: Number,
      min: Number,
      step: Number,
      appendToBody: {
        type: Boolean,
        default: true,
      },
      showTooltipOnlyHover: Boolean,
    },
    computed: {
      isRequired() {
        return this.required || this.search;
      },
      messageEnabled() {
        return oneOf(this.status, ['info', 'error', 'success']) && !!this.message;
      },
      iconInsideMessagePlacement() {
        if (oneOf(this.messagePlacement, ['top-end', 'right-start', 'right'])) {
          return this.messagePlacement;
        }
        return 'top-end';
      },
      popperCls2Input() {
        return [
          this.iconInside && this.status,
          (!this.iconInside || !this.messageEnabled || (this.showTooltipOnlyHover && !this.hovered)) && 'hide',
          'dao-input-popover',
        ].filter(i => !!i);
      },
    },
    watch: {
      value(val) {
        this.setCurrentValue(val);
      },
      message(val) {
        this.setCurrentMessage(val);
      },
    },
    methods: {
      hoverIcon() {
        this.hovered = true;
      },
      leaveIcon() {
        this.hovered = false;
      },
      handleBlur(event) {
        this.$emit('blur', event);
      },
      handleFocus(event) {
        this.$emit('focus', event);
      },
      handleKeyUp(event) {
        this.$emit('keyup', event);
      },
      handleKeyDown(event) {
        this.$emit('keydown', event);
      },
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
        this.setCurrentValue(value);
        this.$emit('change', value);
      },
      setCurrentValue(value) {
        if (value === this.currentValue) return;
        this.currentValue = value;
      },
      setCurrentMessage(message) {
        if (message === this.currentMessage) return;
        this.currentMessage = message;
      },
    },
  };
</script>

<style lang="scss">
@import './dao-input.scss';
</style>
