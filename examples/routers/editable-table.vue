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
            validate(row, all) {
              if (row.name === '') {
                return '姓名不能是空的';
              }
              if (all.filter(r => r.name === row.name).length > 1) {
                return '姓名不能重复';
              }
              return true;
            },
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
      model: [
        { name: 'bowen', gender: '男', single: true, company: 'DaoCloud' },
        { name: 'mimo', gender: '男', single: false, company: 'DaoCloud' },
        { name: 'kay', gender: '男', single: false, company: 'DaoCloud' },
        { name: 'jamie', gender: '男', single: true, company: 'DaoCloud' },
      ],
    };
  },
  watch: {
    model(newModel) {
      console.log('model 已更新', newModel);
    },
  },
};
</script>
<style lang="scss" scoped>

</style>