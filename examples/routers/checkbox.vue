<template>
  <div>
    <h1>普通版</h1>
    <div class="dao-checkbox">
      <label>
        <input type="checkbox" checked>
        option 1
      </label>
    </div>
    <div class="dao-checkbox">
      <label>
        <input type="checkbox">
        option 2
      </label>
    </div>
    <div class="dao-checkbox disabled">
      <label>
        <input type="checkbox" disabled>
        disable option
      </label>
    </div>

    <h1>圆角版</h1>
    <label>
      <input type="checkbox" class="round half-check">
      半选
    </label>
    <label>
      <input type="checkbox" class="round">
      圆角
    </label>
    <label>
      <input type="checkbox" class="round" checked>
      圆角
    </label>
    <label>
      <input type="checkbox" class="round" disabled>
      圆角
    </label>
  </div>
</template>
<script>
  export default {
    data () {
      return {};
    },
  };
</script>
<style lang="scss" scoped>
</style>