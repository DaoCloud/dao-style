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

<style lang="scss" scoped>
// color
$blue: #3890ff;
$green: #22c36a;
$yellow: #f7b32b;
$orange: #f56e25;
$red: #f1483f;
$purple: #7354e2;

// grey
$black-dark: #3d444f;
$black-darker: #1f2126;
$black-light: #595f69;
$grey-dark: #9ba3af;
$grey-light: #ccd1d9;
$white-dark: #e4e7ed;
$white-dark-lighter: #f1f3f6;
$white-light: #f5f7fa;
$white-lighter: #fbfcfc;
$white: #ffffff;

// function
@function generate-color($base-color, $level) {
  @if $level == -3 {
    @return desaturate(lighten($base-color, 36), 15);
  } @else if $level == -2 {
    @return desaturate(lighten($base-color, 25), 25);
  } @else if $level == -1 {
    @return lighten($base-color, 4);
  } @else if $level == 1 {
    @return desaturate(darken($base-color, 7), 11);
  } @else if $level == 2 {
    @return desaturate(darken($base-color, 13), 7);
  } @else if $level == 3 {
    @return desaturate(darken($base-color, 19), 9);
  } @else {
    @return $base-color;
  }
}

@mixin type-color($type) {
  $color: $red;
  @if $type == 'warning' {
    $color: $yellow;
  } @else if $type == 'info' {
    $color: $blue;
  }
  color: generate-color($color, 3);
  background-color: generate-color($color, -3);
  .bold-line {
    background-color: generate-color($color, 2);
  }
  .content {
    border-color: generate-color($color, -2);
    a {
      color: generate-color($color, 3);
    }
  }
  .close {
    color: generate-color($color, -2);
    opacity: .5;
    cursor: pointer;
    &:hover {
      color: generate-color($color, -2);
      opacity: 1;
    }
  }
}

.dao-callout {
  position: relative;
  line-height: 24px;
  display: flex;
  &.error {
    @include type-color('error');
  }
  &.warning {
    @include type-color('warning');
  }
  &.info {
    @include type-color('info');
  }
  .bold-line {
    width: 3px;
    border-radius: 2px 0 0 2px;
    flex: 0 0 auto;
  }
  .content {
    padding: 5px 10px 5px 15px;
    border: 1px solid;
    border-radius: 0 2px 2px 0;
    border-left-width: 0;
    word-break: break-all;
    a {
      margin: 0 5px;
      cursor: pointer;
      text-decoration: none;
      border-bottom: 1px solid;
    }
  }
  .close {
    margin-left: 10px;
  }
  &.normal {
    display: inline-flex;
    .content {
      display: flex;
      justify-content: space-between;
    }
    .close {
      flex: none;
      margin-top: 5px;
    }
  }
  &.big {
    .content {
      flex: auto;
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .title-text {
      font-weight: 500;
      font-size: 16px;
    }
  }
}
</style>
