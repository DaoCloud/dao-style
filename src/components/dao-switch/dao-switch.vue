<template>
  <label class="dao-switch" :class="{ 'disabled': disabled }">
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
      this.buttonStyle.transform = this.value ? `translate(${this.coreWidth - 32}px, 0px)` : '';
    }
  },
  mounted () {
    this.handleButtonTransform();
  }
};
</script>

<style lang="scss" scoped>  
.dao-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  &-input {
    display: none;
  }
  &-core {
    display: inline-block;
    background: #fff;
    border: 1px solid #e4e7ed;
    position: relative;
    box-sizing: border-box;
    overflow: visible;
    width: 54px;
    height: 32px;
    padding: 0;
    margin: 0;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
    transition: 0.3s ease-out all;
    -webkit-transition: 0.3s ease-out all;
    top: -1px;
  }
  &-checked {
    background: #22c36a;
    border-color: #22c36a;
  }
  &-button {
    top: 0;
    left: 0;
    position: absolute;
    transition: 0.3s ease-out all;
    z-index: 20;
    border-radius: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.4);
    width: 30px;
    height: 30px;
    background-color: #fff;
  }
  &-label {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    span {
      line-height: 1;
      top: 9px;
      position: absolute;
      font-size: 13px;
      display: inline-block;
    }
    .off-text {
      right: 10%;
      color: #a9a9a9;
    }
    .on-text {
      left: 10%;
      color: #fff;
    }
  }
  &-notice {
    margin-left: 10px;
  }
}
.disabled {
  opacity: 0.50;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
