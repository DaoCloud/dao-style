<template>
  <div :class="['dao-radio-grid', {'active': checked, 'disabled': disabled, 'card': type === 'card'}]" v-model="value">
    <svg class="checked-icon" v-if="type !== 'card'" v-show="checked">
      <use xlink:href="#icon_success"></use>
    </svg>
    <div class="dao-radio-grid-wrap" @click="handleClick" v-if="type !== 'card'">
      <slot>
        <div class="dao-radio-grid-img">
          <slot name="icon"></slot>
        </div>
        <div class="dao-radio-grid-headline">
          {{headline}}
          <slot name="headlineSupplement"></slot>
        </div>
        <div class="dao-radio-grid-description">
          {{description}}
        </div>
      </slot>
    </div>
    <div class="dao-radio-grid-wrap dao-card" @click="handleClick" v-if="type === 'card'">
      <svg class="checked-icon" v-show="checked">
        <use xlink:href="#icon_success"></use>
      </svg>
      <slot>
        <div class="dao-card-main" v-if="defaultTemplate">
          <div class="icon">
            <slot name="icon"></slot>
          </div>
          <div class="content">
            <div class="title">
              <span>{{headline}}</span>
              <span>
                <slot name="headlineSupplement"></slot>
              </span>
            </div>
            <div class="sub-title">{{subheadline}}</div>
            <div class="desc">{{description}}</div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>
<style lang="scss">
  @import './dao-radio-grid.scss';
</style>
<script>
  export default {
    name: 'Radio-grid',
    component: 'Radio-grid',
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      headline: String,
      subheadline: String,
      description: String,
      radioValue: {},
      defaultTemplate: {
        type: Boolean,
        default: true,
      },
      type: {
        type: String,
        default: 'grid',
      },
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
      checked() {
        return this.value === this.radioValue;
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
