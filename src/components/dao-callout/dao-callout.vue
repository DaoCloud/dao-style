<template>
  <div class="dao-callout" v-show="!hide" :class="[title ? 'big' : 'normal', type]">
    <div class="bold-line"></div>
    <div class="content" v-if="!title">
      <slot name="content"></slot>
      <svg class="icon close" v-if="canClose" @click="hide = true"><use xlink:href="#icon_close-circled"></use></svg>
    </div>
    <div class="content" v-if="title">
      <div class="title">
        <span class="title-text">{{title}}</span>
        <svg class="icon close" v-if="canClose" @click="hide = true"><use xlink:href="#icon_close-circled"></use></svg>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DaoCallout',
  props: {
    canClose: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'info',
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      hide: false,
    };
  },
};
</script>

<style lang="scss" scoped src="./dao-callout.scss"></style>
