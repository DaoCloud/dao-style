<template>
  <div class="hahha">
   <dao-input v-model="val"></dao-input>
   <button class="dao-btn blue" @click="onConfirm">Confirm</button>
  </div>
</template>

<script>

export default {
  name: 'Hahha',
  data() {
    return {
      val: 'input here',
    };
  },
  methods: {
    onConfirm() {
      console.log(`input:${this.val}`);
    },
  },
};

</script>

<style lang="scss" scoped>
.hahha{
  color: red;
}
</style>
