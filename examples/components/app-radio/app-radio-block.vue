<template>
  <div :class="[ 'app-radio-block', {
        'active': _value === label, 
        'disabled': disabled,
      }]" @click="handleClick">
    <div>
      <input 
        type="radio"
        :name="_name"
        :value="label"
        v-model="_value"
        :disabled="disabled">
      <slot></slot>
      <div>
        <div class="app-radio-block-headline">
          {{headline}}
        </div>
        <div class="app-radio-block-description">
          {{description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RadioBase from './mixins/radio-base';

  export default {
    name: 'appRadioBlock',
    mixins: [RadioBase],
    props: {
      headline: String,
      description: String,
    },
    methods: {
      handleClick() {
        if (this.disabled) return;
        this._value = this.label;
      },
    },
  };
</script>

<style lang="scss" src="./styles/app-radio-block.scss">
</style>
