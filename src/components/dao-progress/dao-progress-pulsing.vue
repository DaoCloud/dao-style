<template>

<div class="dao-progress" :class="{'dao-progress-error':type === 'error'}">
  <div class="dao-progress-pulsing"
    :style="{
      'width': (progress || 0) * 100 + '%',
      'background-size': 1 / progress * 100 + '% 100%'
    }">
  </div>
  <div class="dao-progress-pulsing-overlay" :style="{
      'width': (progress || 0) * 100 + '%'
    }">
  </div>
</div>



</div>

</template>

<script>
export default {
  name: 'DaoProgressPulsing',
  props: {
    type: {
      type: String,
      default: ''
    },
    progress: {
      type: Number,
      default: 0,
    },
  },

};
</script>


<style lang="scss">
@import './dao-progress.scss';
</style>

