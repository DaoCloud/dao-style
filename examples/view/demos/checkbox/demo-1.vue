<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'Demo1',
}
</script>
