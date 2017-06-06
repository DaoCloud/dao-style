<template>
  <div>
    <h1>基础版</h1>
    <span>value: {{model1}}</span>
    <dao-autocomplete :options="options1" v-model="model1"></dao-autocomplete>
    <h1>基础版（text/value）形式</h1>
    <span>value: {{model2}}</span>
    <dao-autocomplete :options="options2" v-model="model2"></dao-autocomplete>
    <h1>基础版（text/value）形式、异步数据</h1>
    <span>value: {{model3}}</span>
    <dao-autocomplete :options="options3" v-model="model3"></dao-autocomplete>
  </div>
</template>
<script>

const options1 = ['apple', 'banana', 'cherry', 'dear', 'fruit', 'goose'];

const options2 = [
  {
    text: '苹果',
    value: 'apple',
  },
  {
    text: '🍌香蕉',
    value: 'banana',
  },
  {
    text: '🍒',
    value: 'cherry',
  },
];

export default {
  data() {
    return {
      options1,
      options2,
      options3: [],
      model1: '',
      model2: '',
      model3: '',
    };
  },
  created() {
    setTimeout(() => {
      this.options3 = options2;
      setTimeout(() => {
        this.model3 = 'cherry';
      }, 0);
    }, 0);
  },
};
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 150px;
}
</style>
