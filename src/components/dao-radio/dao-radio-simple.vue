<template>
  <div class="dao-radio-simple" :class="{'disabled': disabled}">
    <label>
      <input type="radio" :name="name" :value="radioValue" v-model="value" :disabled="disabled">
      <slot>{{ value }}</slot>
    </label>
  </div>
</template>
<style lang="scss">
  @import './dao-radio-simple.scss';
</style>
<script>
  export default {
    name: 'Radio-simple',
    componentName: 'Radio-simple',
    props: {
      radioValue: {},
      name: String,
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      value: {
        get() {
          return this.$parent.value;
        },
        set(v) {
          this.$emit('input', v);
        },
      },
    },
    methods: {
      handleClick() {
        if (this.disabled) return;
        this.value = this.radioValue;
      },
    },
  };
</script>
