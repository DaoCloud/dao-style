<template>
  <div>
    <dao-editable-table :config="config" v-model="model"></dao-editable-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        header: [
          '姓名',
          '性别',
          '单身',
          {
            text: 'DaoCloud',
            tooltip: '道客',
          },
        ],
        body: [
          {
            type: 'input',
            name: 'name',
            default: '',
          },
          {
            type: 'select',
            name: 'gender',
            options: ['男', '女'], // 此处具体的用法还要根据 select 而定
            default: '男',
          },
          {
            type: 'checkbox',
            name: 'single',
            default: false,
            label: '单身',
          },
          {
            type: 'text',
            name: 'company',
            default: 'DaoCloud',
          },
        ],
      },
      model: [],
    };
  },
  watch: {
    // 如果 question 发生改变，这个函数就会运行
    model(newModel) {
      console.log('改变了', newModel);
    },
  },
};
</script>
<style lang="scss" scoped>

</style>