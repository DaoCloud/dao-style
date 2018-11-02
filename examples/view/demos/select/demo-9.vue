<template>
  <dao-select 
    v-model="asyncSearch" 
    placeholder="带异步搜索选择器" 
    search-placeholder="搜索条件在这里" 
    no-match-text="无匹配选项"
    :with-search="true" 
    :async-search="true"
    :async="asyncFun">
    <dao-option-group>
      <dao-option 
        v-for="item in asyncSearchItems" 
        :value="item"
        :key="item.value"
        :label="item.text">
      </dao-option>
    </dao-option-group>
  </dao-select>
</template>
<script>
  export default {
    data() {
      return {
        asyncSearch: null,
        asyncSearchItems: [{
          value: 1,
          text: '选项一',
        }, {
          value: 2,
          text: '选项二',
        }, {
          value: 3,
          text: '选项三',
        }],
      };
    },
    methods: {
      asyncFun(val) {
        console.log('asyncFun: ', val);
        return new Promise((resolve) => {
          setTimeout(() => {
            const num = parseInt((Math.random() * 100).toFixed(0), 10);
            const result = [];
            /* eslint-disable */
            for (let i = 0; i < num; i++) {
              const ran = (Math.random() * 10).toFixed(0);
              const item = {
                value: `value-${i + 1}-${ran}`,
                text: `text-${i + 1}-${ran}`,
              };
              result.push(item);
            }
            this.asyncSearchItems = result;
            resolve();
          }, 2000);
        });
      },
    }
  }
</script>
