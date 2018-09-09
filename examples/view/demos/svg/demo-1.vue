<template>
  <div>
    <svg class="icon" v-for="icon in icons" :key="icon">
      <use :xlink:href="icon"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Demo1',
  data() {
    return {
      icons: [
        '#icon_daocloud',
        '#icon_move',
        '#icon_bell',
        '#icon_camera',
        '#icon_close-circled',
        '#icon_cw-alt',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.icon{
  margin: 4px;
}
</style>

