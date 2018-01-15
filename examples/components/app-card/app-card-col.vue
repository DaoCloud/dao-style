<template>
  <div class="app-card-col" :style="colStyle">
    <slot/>
  </div>
</template>

<script>
import { merge as _merge } from 'lodash';

export default {
  name: 'AppCardCol',
  data() {
    return {
      isFirst: false,
      isLast: false,
      noSideBlank: false,
      cardsPerRow: 3,
    };
  },
  computed: {
    colStyle() {
      let style = {
        width: `${(1 / this.cardsPerRow) * 100}%`,
      };
      if ((this.isFirst || this.isLast) && this.noSideBlank) {
        style = _merge(style, {
          paddingLeft: this.isFirst ? '0px' : '10px',
          paddingRight: this.isLast ? '0px' : '10px',
        });
      }
      return style;
    },
  },
};
</script>

<style lang="scss">

</style>
