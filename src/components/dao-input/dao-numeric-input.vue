<template>
  <div :class="wrapClass">
    <input :class="inputClass" type="text" 
      :placeholder="placeholder" 
      :disabled="disabled"
      @input="onInput"
      @keydown="onKeyDown"
      @blur="onBlur"
      v-model="num"/>
    <div :class="assistClass">
      <div class="triangle">
        <dao-triangle @up="onUp" @down="onDown" :disabled="disabled">
        </dao-triangle>
      </div>
      <div v-if="unit" class="unit">{{unit}}</div>
    </div>
  </div>
</template>
<script>

  import DaoTriangle from './dao-triangle/dao-triangle.vue';

  function isInt(num) {
    if (num === undefined) return false;
    return /^(0|[1-9][0-9]*)$/.test(num >= 0 ? num : num.toString().slice(1));
  }

  function isFloat(num) {
    return /^(-?\d+)(\.\d+)?$/.test(num);
  }

  function isEndWithDot(num) {
    const arr = num.toString().split('.');
    if (arr.length === 2 && isInt(arr[0]) && arr[1] === '') {
      return true;
    }
    return false;
  }

  export default {
    name: 'DaoNumericInput',
    props: {
      min: Number,
      max: Number,
      unit: String,
      value: [String, Number],
      placeholder: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'float',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      required: {
        type: Boolean,
        default: false,
      },
      block: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        num: this.value,
        lastNum: null,
        timer: null,
        dirty: true,
      };
    },
    computed: {
      assistClass() {
        return {
          assist: true,
          'with-unit': this.unit,
        };
      },
      wrapClass() {
        return {
          'dao-numeric-input': true,
          'with-unit': this.unit,
          block: this.block,
        };
      },
      inputClass() {
        return {
          'dao-control': true,
          error: this.required && this.dirty && (this.num === ''),
        };
      },
    },
    methods: {
      onUp(withShift) {
        this.preCheck((this.num || 0) + (withShift ? 10 : 1));
      },
      onDown(withShift) {
        this.preCheck((this.num || 0) - (withShift ? 10 : 1));
      },
      onInput() {
        this.preCheck(this.num);
      },
      onKeyDown(event) {
        if (event.keyCode === 38) {
          event.preventDefault();
          this.onUp(event.shiftKey);
        }
        if (event.keyCode === 40) {
          event.preventDefault();
          this.onDown(event.shiftKey);
        }
      },
      onBlur() {
        this.dirty = true;
        if (this.type === 'float' && isEndWithDot(this.num)) {
          this.preCheck(this.num.toString().split('.').shift());
        }
      },
      preCheck(num) {
        this.num = num;
        // not required
        if ((!num && num !== 0) && !this.required) {
          this.updateModel();
          return;
        }
        if (isNaN(parseFloat(num, 10))) {
          this.reset();
          return;
        }
        // check  int
        if (this.type === 'int' && isInt(num)) {
          if (isInt(this.min) && this.min > num) {
            this.reset();
            return;
          }
          if (isInt(this.max) && this.max < num) {
            this.reset();
            return;
          }
          this.updateModel();
          return;
        }
        // check  float
        if (this.type === 'float') {
          // if end with dot, do nothing just input go ahead
          if (isEndWithDot(num)) return;
          if (isFloat(num)) {
            if (isFloat(this.min) && this.min > num) {
              this.reset();
              return;
            }
            if (isFloat(this.max) && this.max < num) {
              this.reset();
              return;
            }
            this.updateModel();
          }
        }
        this.reset();
      },
      reset() {
        // debounce
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.num = this.lastNum;
        }, 500);
      },
      updateModel() {
        this.lastNum = this.num;
        const parsedNum = parseFloat(this.num);
        const result = isNaN(parsedNum) ? '' : parsedNum;
        this.$emit('input', result);
        this.$emit('change', result);
      },
    },
    watch: {
      value: {
        handler(newV) {
          this.preCheck(newV);
        },
        immediate: true,
      },
    },
    components: {
      DaoTriangle,
    },
  };
</script>

<style lang="scss" src="./dao-numeric-input.scss">
</style>
