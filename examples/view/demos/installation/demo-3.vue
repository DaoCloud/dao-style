<template>
  <dao-input v-model="value"></dao-input>
</template>

<script>
  export default {
    data() {
      return {
        value: 'hello dao-style',
      };
    },
  };
</script>