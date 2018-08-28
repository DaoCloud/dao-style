<template>
  <span class="status-icon">
    <svg :class="status">
      <use :xlink:href="icon"></use>
    </svg>
  </span>
</template>

<script>

export default {
  name: 'StatusIcon',
  props: {
    status: {
      type: String,
      require: true,
      default: 'success',
    },
  },
  computed: {
    icon() {
      switch (this.status) {
        case 'success': {
          return '#icon_checkmark';
        }
        case 'failed': {
          return '#icon_cross';
        }
        default:
          return '#icon_checkmark';
      }
    },
  },
};

</script>

<style lang="scss" scoped>
  @import 'daoColor';
  .status-icon{
    .success{
      fill: $green;
    }
    .failed {
      fill: $red;
    }
  }
</style>
