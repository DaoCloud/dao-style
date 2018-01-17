<template>
  <div class="dao-radio" :class="[{'disabled': disabled}]">
    <label>
      <input 
        type="radio"
        :name="name"
        :value="label"
        v-model="_value"
        :disabled="disabled">
      <slot>{{ value }}</slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'DaoRadio',
    props: {
      label: {},
      value: {},
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        name: this.$parent.name,
      };
    },
    computed: {
      _value: {
        set(val) {
          this.$emit('input', val);
        },
        get() {
          return this.value;
        },
      },
    },
  };
</script>

<style lang="scss" src="./styles/dao-radio.scss">
</style>
