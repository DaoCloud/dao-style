<template>
  <div :class="['app-radio-card', {'active': checked, 'disabled': disabled, 'card': type === 'img-left'}]" v-model="value">
    <svg class="checked-icon" v-if="type === 'img-top'" v-show="checked">
      <use xlink:href="#icon_success"></use>
    </svg>
    <div class="app-radio-card-wrap" @click="handleClick" v-if="type === 'img-top'">
      <slot>
        <div class="app-radio-card-img">
          <slot name="icon"></slot>
        </div>
        <div class="app-radio-card-headline">
          {{headline}}
          <slot name="headlineSupplement"></slot>
        </div>
        <div class="app-radio-card-description">
          {{description}}
        </div>
      </slot>
    </div>
    <div class="app-radio-card-wrap app-card" @click="handleClick" v-if="type === 'img-left'">
      <svg class="checked-icon" v-show="checked">
        <use xlink:href="#icon_success"></use>
      </svg>
      <slot>
        <div class="app-card-main" v-if="defaultTemplate">
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

<script>
  import RadioBase from './mixins/radio-base';

  export default {
    name: 'appRadioCard',
    mixins: [RadioBase],
    props: {
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
        default: 'img-top',
      },
      name: String,
    },
    computed: {
      checked() {
        return this._value === this.label;
      },
    },
    methods: {
      handleClick() {
        if (this.disabled) return;
        this._value = this.label;
      },
    },
  };
</script>

<style lang="scss" src="./styles/app-radio-card.scss">
</style>
