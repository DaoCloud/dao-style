<template>
  <div>
    当前选中的是: {{val}}
    <br>
    <br>
    <dao-radio-group>
      <dao-radio label="dce" v-model="val">DaoCloud Enterprise</dao-radio>
      <dao-radio label="dcs" v-model="val" :disabled="true">DaoCloud Services</dao-radio>
      <dao-radio label="dcv" v-model="val">DaoCloud Voice</dao-radio>
      <dao-radio label="dci" v-model="val">DaoCloud Insight</dao-radio>
    </dao-radio-group>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        val: 'dce',
      };
    },
  };
</script>
