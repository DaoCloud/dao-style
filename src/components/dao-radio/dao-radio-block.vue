<template>
  <div class="dao-radio-block" :class="[{'active': value === radioValue, 'disabled': disabled}]" @click="handleClick">
    <div>
      <input type="radio" :name="name" :value="radioValue" v-model="value" :disabled="disabled">
      <slot></slot>
      <div>
        <div class="dao-radio-block-headline">
          {{headline}}
        </div>
        <div class="dao-radio-block-description">
          {{description}}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import './dao-radio-block.scss';
</style>
<script>
  export default {
    name: 'Radio-block',
    componentName: 'Radio-block',
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      headline: String,
      description: String,
      radioValue: {},
      name: String,
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
