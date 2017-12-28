<template>
  <label class="dao-switch" :class="{ 'disabled': disabled, 'sm': size === 'sm' }">
    <input
      class="dao-switch-input"
      type="checkbox"
      v-model="_value"
      @change="handleChange"
      :name="name"
      :disabled="disabled">
    <span class="dao-switch-core" :class="{'dao-switch-checked': value }" :style="{ 'width': coreWidth + 'px' }">
      <span class="dao-switch-button" :style="buttonStyle"></span>
    </span>
    <span class="dao-switch-notice" v-if="withNotice && !onText && !offText">
      <span>{{value ? option.on : option.off}}</span>
    </span>
    <transition name="label-fade">
      <div
        class="dao-switch-label dao-switch-label--left"
        v-show="value" 
        :style="{ 'width': coreWidth + 'px' }">
        <span v-if="onText" class="on-text" v-text="onText"></span>
      </div>
    </transition>
    <transition name="label-fade">
      <div
        class="dao-switch-label dao-switch-label--right"
        v-show="!value"
        :style="{ 'width': coreWidth + 'px' }">
        <span v-if="offText" class="off-text" v-text="offText"></span>
      </div>
    </transition>
  </label>
</template>

<script>
export default {
  name: 'DaoSwitch',
  props: {
    value: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onText: {
      type: String,
      default: ''
    },
    offText: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    option: {
      type: Object,
      default: () => {
        return { on: '已开启', off: '已关闭' };
      }
    },
    withNotice: {
      type: Boolean,
      default: false
    },
    coreWidth: {
      type: Number,
      default: 54
    },
    size: {
      type: String,
      default: '',
    }
  },
  data () {
    return {
      buttonStyle: {
        transform: ''
      }
    };
  },
  computed: {
    _value: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      }
    }
  },
  watch: {
    value () {
      this.handleButtonTransform();
    }
  },
  methods: {
    handleChange (event) {
      this.$emit('change', event.currentTarget.checked);
    },
    handleButtonTransform () {
      if (this.size !== 'sm') {
        this.buttonStyle.transform = this.value ? `translate(${this.coreWidth - 32}px, 0px)` : '';
      } else {
        this.buttonStyle.transform = this.value ? `translate(${this.coreWidth - 26}px, 0px)` : '';
      }
    }
  },
  mounted () {
    this.handleButtonTransform();
  }
};
</script>

<style lang="scss" scoped>  
@import './dao-switch.scss';
</style>
