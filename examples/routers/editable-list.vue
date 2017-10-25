<template>
  <div>
    <dao-editable-list>
      <li slot="list" v-for="(d, i) in data" @click="onClick(i)" :class="{active: index === i}">
        {{d.key}}
      </li>
      <div slot="content">
        {{this.currentData.key + ':' + this.currentData.value}}
      </div>
    </dao-editable-list>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        index: 0,
        data: [{
          key: 'aaa',
          value: '111',
        }, {
          key: 'bbb',
          value: '222',
        }],
      };
    },
    computed: {
      currentData() {
        return this.data[this.index];
      },
    },
    methods: {
      onClick(i) {
        this.index = i;
      },
    },
  };
</script>
<style lang="scss">
</style>
