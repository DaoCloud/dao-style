<template>
  <div>
    <dao-radio-group type="simple">
      <dao-radio label="111" v-model="simple">1111</dao-radio>
      <dao-radio label="222" v-model="simple" :disabled="true">2222</dao-radio>
      <dao-radio label="333" v-model="simple">3333</dao-radio>
    </dao-radio-group>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        simple: undefined,
      };
    },
  };
</script>
