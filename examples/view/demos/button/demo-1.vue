<template>
  <div>
    <button class="dao-btn" @click="onClick">default</button>
    <button class="dao-btn blue">blue</button>
    <button class="dao-btn red">red</button>
    <button class="dao-btn ghost">ghost</button>
    <button class="dao-btn btn-sm blue">small</button>
    <button class="dao-btn mini grey">mini-grey</button>
    <button class="dao-btn mini blue">mini-blue</button>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick() {
        this.$daoAlert('hi', 'daostyle').show();
      },
    },
  };
</script>