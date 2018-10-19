<template>
  <dao-select
    v-model="select"
    placeholder="一个小号下拉框"
    size="sm">
    <dao-option
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      :label="item.text">
    </dao-option>
  </dao-select>
</template>
<script>
  export default {
    data() {
      return {
        select: 1,
        items: [{
          text: '选项一',
          value: 1,
        }, {
          text: '选项二',
          value: 2,
        }, {
          text: '选项三',
          value: 3,
        }]
      };
    },
  };
</script>
