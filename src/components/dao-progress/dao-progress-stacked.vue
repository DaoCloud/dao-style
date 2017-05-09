<template>

<div class="dao-progress dao-progress-stacked" :class="{'dao-progress-error':type === 'error'}">
  <div class="dao-progress-green"
    v-if="green"
    :style="{'width': (green || 0) * 100 + '%'}">
  </div>
  <div class="dao-progress-red"
    v-if="red"
    :style="{'width': (red || 0) * 100 + '%'}">
  </div>
  <div class="dao-progress-stripe"
    v-if="stripe"
    :style="{'width': (stripe || 0) * 100 + '%'}">
  </div>
  <div class="dao-progress-black"
    v-if="black"
    :style="{'width': (black || 0) * 100 + '%'}">
  </div>
</div>


</template>

<script>
export default {
  name: 'DaoProgressStacked',
  props: {
    type: {
      type: Number,
      default: 0,
    },
    green: {
      type: Number,
      default: 0,
    },
    red: {
      type: Number,
      default: 0,
    },
    stripe: {
      type: Number,
      default: 0,
    },    
    black: {
      type: Number,
      default: 0,
    },

  },

};
</script>


<style lang="scss">
@import './dao-progress.scss';
</style>