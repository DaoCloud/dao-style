<template>
  <dao-select
    v-model="select"
    placeholder="一个带搜索下拉框"
    :with-search="true"
    :search-method="search"
    search-placeholder="搜索条件在这里">
    <dao-option-group>
      <dao-option
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :label="item.text">
      </dao-option>
    </dao-option-group>
  </dao-select>
</template>
<script>
  export default {
    data() {
      return {
        select: 1,
        items: [{
          text: '苹果',
          value: '苹果',
        }, {
          text: '香蕉',
          value: '香蕉',
        }, {
          text: '梨',
          value: '梨',
        }]
      };
    },
    methods: { 
      search(keyword, value) {
        return value.indexOf(keyword) > -1;
      },
    },
  };
</script>
