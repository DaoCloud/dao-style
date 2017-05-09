<template>

<div class="dao-progress" :class="{'dao-progress-error':type === 'error'}">
  <div v-if="type == 'usage' || type == 'basic'"
  :class="{
    'dao-progress-usage':type === 'usage',
    'dao-progress-basic':type === 'basic'
    }"
    :style="{
      'width': (progress || 0) * 100 + '%',
      'background-size': 1 / progress * 100 + '% 100%'
    }">
  </div>

</div>

</template>

<script>
export default {
  name: 'DaoProgress',
  props: {
    type: {
      type: String,
      default: 'usage'
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

