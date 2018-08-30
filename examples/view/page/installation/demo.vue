<template>
  <div>
   <dao-input v-model="val"></dao-input>
   <button class="dao-btn blue">{{val}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 'input here',
    };
  },
};
</script>
