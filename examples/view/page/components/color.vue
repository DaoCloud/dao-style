<template>
  <div style="padding:0 50px;">
  <h1 class="color-category">Color</h1>
  <div :ref="'aaa'" v-if="true"></div>
  <div class="color-demo-block" v-for="color in colors" ref="colors">
    <span class="color-block" :class="color.name"></span>
    <div class="info-block">
      <p class="color-info">SCSS: ${{ color.name }}</p>
      <p class="hex-info"><span class="name">HEX</span><span class="value">{{ color.hex }}</span></p>
      <p class="rgb-info"><span class="name">RGB</span><span class="value">{{ color.rgb }}</span></p>
    </div>
  </div>
  <h1 class="color-category">Grey</h1>
  <div class="color-demo-block" v-for="color in greys">
    <span class="color-block" :class="color"></span>
    <div class="info-block">
      <p class="color-info">SCSS: ${{ color }}</p>
      <p class="hex-info"><span class="name">HEX</span><span class="value"></span></p>
      <p class="rgb-info"><span class="name">RGB</span><span class="value"></span></p>
    </div>
  </div>

  <h1>Color Palette</h1>
  <table class="color-palette">
    <tr class="color-block" :class="color.name" v-for="color in colors">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="pure-color-line">
      <td colspan="7"></td>
    </tr>
    <tr class="transparent-color-line">
      <td colspan="7"></td>
    </tr>
  </table>
  <pre class="scss">@function generate-color($base-color, $level) {
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
  }</pre>
</div>
</template>

<script>

export default {
  name: 'DaoColorDemo',
  data() {
    const colors = [
      {
        name: 'blue',
        hex: '',
        rgb: '',
      },
      {
        name: 'green',
        hex: '',
        rgb: '',
      },
      {
        name: 'yellow',
        hex: '',
        rgb: '',
      },
      {
        name: 'orange',
        hex: '',
        rgb: '',
      },
      {
        name: 'red',
        hex: '',
        rgb: '',
      },
      {
        name: 'purple',
        hex: '',
        rgb: '',
      },
    ];
    const greys = [
      'black-dark',
      'black-darker',
      'black-light',
      'grey-dark',
      'grey-light',
      'white-dark',
      'white-dark-lighter',
      'white-light',
      'white-lighter',
      'white',
    ];
    return {
      colors,
      greys,
    };
  },
};

</script>

<style lang="scss">
@import 'daoColor';

@function getColor($value) {
  @return 'rgb('+red($value)+', '+green($value)+', '+blue($value)+')';
}
@mixin hover-card($generate-color) {
  background-color: $generate-color;
  $content: 'HEX: '+$generate-color + ' RGB: '+getColor($generate-color);
  &:hover:after {
    content: $content;
    position: absolute;
    padding: 10px;
    top: 5px;
    left: 60px;
    background: $white;
    border: 1px solid $grey-light;
    border-radius: 3px;
    z-index: 1;
    white-space: pre;
  }
}
// @import './mixins.scss';
$colors: ( 'blue': $blue, 'green': $green, 'yellow': $yellow, 'orange': $orange, 'red': $red, 'purple': $purple, );
$greys: ( 'black-dark': $black-dark, 'black-darker': $black-darker, 'black-light': $black-light, 'grey-dark': $grey-dark, 'grey-light': $grey-light, 'white-dark': $white-dark, 'white-dark-lighter': $white-dark-lighter, 'white-light': $white-light, 'white-lighter': $white-lighter, 'white': $white, );
.color-category {
  font-size: 30px;
  font-weight: 400;
  color: $black-dark;
}

.color-demo-block {
  margin-bottom: 45px;
  .color-block {
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 4px;
    box-shadow: inset 0px 0px 0.2px 0.8px rgba(0, 0, 0, 0.06);

    @each $colorlist in ($colors, $greys) {
      @each $key, $value in $colorlist {
        &.#{$key} {
          background-color: $value;
          @at-root &+.info-block .hex-info .name:after {
            content: "#{$value}";
            padding-left: 10px;
            user-select: text!important;
          }
          @at-root &+.info-block .rgb-info .name:after {
            content: getColor($value);
            padding-left: 10px;
          }
        }
      }
    }
  }
  .info-block {
    display: inline-block;
    font-size: 14px;
    line-height: 1;
    margin-left: 30px;
    vertical-align: top;
    .color-info {
      margin: 0 0 12px;
    }
    .hex-info,
    .rgb-info {
      font-size: 12px;
      margin: 0 0 10px;
      .name {
        margin-right: 15px;
        color: $grey-dark;
      }
    }
  }
}

.color-palette {
  .color-block {
    width: auto;
    height: auto;
    td {
      width: 60px;
      height: 50px;
    }
    @each $key,
    $value in $colors {
      &.#{$key} td {
        position: relative;
        &:nth-of-type(1) {
          $generate-color: generate-color($value, -3);
          @include hover-card($generate-color);
        }
        &:nth-of-type(2) {
          $generate-color: generate-color($value, -2);
          @include hover-card($generate-color);
        }
        &:nth-of-type(3) {
          $generate-color: generate-color($value, -1);
          @include hover-card($generate-color);
        }
        &:nth-of-type(4) {
          $generate-color: $value;
          @include hover-card($generate-color);
        }
        &:nth-of-type(5) {
          $generate-color: generate-color($value, 1);
          @include hover-card($generate-color);
        }
        &:nth-of-type(6) {
          $generate-color: generate-color($value, 2);
          @include hover-card($generate-color);
        }
        &:nth-of-type(7) {
          $generate-color: generate-color($value, 3);
          @include hover-card($generate-color);
        }
      }
    }
  }
  .pure-color-line {
    td {
      height: 10px;
    }
    @each $key,
    $value in $colors {
      &.#{$key} td {
        background-color: $value;
      }
    }
  }
  .transparent-color-line {
    td {
      height: 10px;
      background-color: transparent;
    }
  }
}

pre.scss {
  font-size: 14px;
  line-height: 2;
  padding: 30px;
  color: $black-dark;
  border: 1px solid $grey-light;
  background-color: $white-light;
}

</style>


