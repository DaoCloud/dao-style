
<template>
  <!-- <transition name="fade"> -->
    <router-view></router-view>
  <!-- </transition> -->
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import 'daoColor';

html, body{
  min-width: 600px;
  a{
    color: $black-light;
  }
}
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s
// }
// .fade-enter, .fade-leave {
//   opacity: 0
// }
</style>