<template>
  <div> 
    <dao-radio-group>
      <dao-radio label="111" v-model="simple">1111</dao-radio>
      <dao-radio label="222" v-model="simple" :disabled="true">2222</dao-radio>
      <dao-radio label="333" v-model="simple">3333</dao-radio>
    </dao-radio-group>
    <h3>{{simple}}</h3>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        simple: '111',
      };
    },
  };
</script>
