<template>
  <div>
    <h1>普通版</h1>
    <div class="dao-checkbox-group">
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
          <input type="checkbox" checked disabled>
          disable option
        </label>
      </div>
      <div class="dao-checkbox disabled">
        <label>
          <input type="checkbox" disabled>
          disable option
        </label>
      </div>
    </div>
    <br />
    <h1> inline 版 </h1>
    <div class="dao-checkbox-group checkbox-inline">
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
          <input type="checkbox" checked disabled>
          disable option
        </label>
      </div>
      <div class="dao-checkbox disabled">
        <label>
          <input type="checkbox" disabled>
          disable option
        </label>
      </div>
    </div>
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