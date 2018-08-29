
<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>

export default {
  name: 'App',
};

</script>

<style lang="scss">

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}
.fade-enter,
.fade-leave {
    opacity: 0
}

</style>