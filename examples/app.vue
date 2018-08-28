
<template>
  <div class="app">
    <div class="top">
      <top-bar></top-bar>
    </div> 
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
};

</script>

<style lang="scss">
.app{
  height: 100vh;
  display: flex;
  flex-direction: column;
  .top{
    z-index: 1;
  }
  .main{
    flex: 1;
    overflow: auto;
  }
}
</style>