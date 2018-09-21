<template>
  <div>
    <div class="color-demo blue"></div>
    <div class="color-demo green"></div>
    <div class="color-demo red"></div>
    <div class="color-demo black-dark"></div>
    <div class="color-demo generate-green-level-3"></div>
  </div>
</template>

<style lang="scss" scoped>
@import 'daoColor';
.color-demo {
  width: 15px;
  height: 15px;
  display: inline-block;
}
.blue {
  background-color: $blue;
}
.green {
  background-color: $green;
}
.red {
  background-color: $red;
}
.black-dark {
  background-color: $black-dark;
}
.generate-green-level-3 {
  background-color: generate-color($green, -3);
}
</style>