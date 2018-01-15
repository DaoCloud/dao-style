<template>
  <div class="app-card">
    <div class="app-card-main">
      <div class="icon">
        <slot name="icon"/>
      </div>
      <div class="content">
        <slot name="content"/>
      </div>
    </div>
    <div class="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppCard',
  };
</script>

<style lang="scss" src="./styles/app-card.scss">
</style>
