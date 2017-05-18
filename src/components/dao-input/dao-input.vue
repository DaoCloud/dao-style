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
      'dao-input-group': $slots.prepend || $slots.append
    }">
    <div class="dao-input-group-addon prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <div class="dao-input-inner">
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
      <span class="icon loading-icon" v-if="status === 'loading' && iconInside">
        <svg>
          <use xlink:href="#icon_status-progress-circle"></use>
        </svg>
      </span>
      <span class="icon info-icon" v-if="status === 'info' && iconInside">
        <svg>
          <use xlink:href="#icon_question"></use>
        </svg>
      </span>
      <span class="icon error-icon" v-if="status === 'error' && iconInside">
        <svg>
          <use xlink:href="#icon_warning"></use>
        </svg>
      </span>
      <span class="icon success-icon" v-if="status === 'success' && iconInside">
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
  export default {
    name: 'DaoInput',
    data() {
      return {
        currentValue: this.value,
      };
    },
    props: {
      type: {
        type: String,
        default: 'text',
      },
      disabled: Boolean,
      value: [String, Number],
      iconInside: Boolean,
      message: String,
      messagePlacement: {
        type: String,
        default: 'top-end',
      },
      messageNoIcon: Boolean,
      search: Boolean,
      status: String,
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
    },
    computed: {
      isRequired() {
        return this.required || this.search;
      },
    },
    watch: {
      value(val) {
        this.setCurrentValue(val);
      },
    },
    methods: {
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
    },
  };
</script>

<style lang="scss">
@import './dao-input.scss';
</style>
