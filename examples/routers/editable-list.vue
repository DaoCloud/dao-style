<template>
  <div>
    <dao-editable-list @add="onAdd" @remove="onRemove">
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
  import _ from 'lodash';

  export default {
    data() {
      return {
        index: 0,
        data: [{
          key: 'a1',
          value: '1',
        }, {
          key: 'a2',
          value: '2',
        }],
      };
    },
    computed: {
      currentData() {
        return this.data[this.index] || { key: '', value: '' };
      },
    },
    methods: {
      onClick(i) {
        this.index = i;
      },
      onAdd() {
        this.data.push({
          key: `a${this.data.length + 1}`,
          value: this.data.length + 1,
        });
      },
      onRemove() {
        this.data = _.filter(this.data, d => d.key !== this.currentData.key);
        this.index = 0;
      },
    },
  };
</script>
<style lang="scss">
</style>
