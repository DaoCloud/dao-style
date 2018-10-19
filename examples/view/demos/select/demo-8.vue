<template>
  <dao-select
    v-model="asynchronous"
    placeholder="异步获取数据选择器"
    :async="asyncFunc">
    <dao-option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :label="option.text">
      {{ option.text }}
    </dao-option>    
  </dao-select>
</template>
<script>
  export default {
    data() {
      return {
        options: [],
        asynchronous: null,
      };
    },
    methods: {
      asyncFunc() {
        const options = [{
          value: 1,
          text: '选项一',
        }, {
          value: 2,
          text: '选项二',
        }, {
          value: 3,
          text: '选项三',
        }];
        const p = new Promise((res, rej) => {
          if (true) {
            setTimeout(() => {
              res(options);
            }, 2000);
          } else {
            rej(0);
          }
        });
        return p.then((res) => {
          this.options = res;
        });
      }
    },
  }
</script>

