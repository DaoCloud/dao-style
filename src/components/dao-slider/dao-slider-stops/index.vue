<template>
  <!-- stops -->
  <div
    class="dao-slider-stop-wrap"
    :class="{'disabled-fill': disabled}">
    <div
      class="dao-slider-stop"
      :style="{left: stop * 100 + '%'}"
      v-for="stop in stops">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DaoSliderStops',
    props: ['disabled', 'stops'],
  };
</script>
<style lang="scss">
  @import '../varibles.scss';

  .dao-slider-stop-wrap {
    .dao-slider-stop {
      width: $slider-height;
      height: $slider-height;
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: $stop-bg;
      border-radius: 50%;
      transform: translateX(-50%) translateY(-50%);

      &:first-child {
        width: 0;
      }
      &:last-child {
        @extend %width;
      }
    }

    &.disabled-fill {
      .dao-slider-stop {
        background-color: $slider-disabled-bg;
      }
    }
  }
</style>
