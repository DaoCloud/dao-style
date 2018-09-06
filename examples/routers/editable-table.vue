<template>
  <div>
    <h1>实时验证</h1>
    <dao-editable-table :config="config" v-model="model" @valid="validChange1"></dao-editable-table>
    <button class="dao-btn blue" @click="changeHeader">添加一列</button>
    <h1>非实时验证</h1>
    <ul class="red" v-for="th in validationMessage" :key="th">
        <li>{{th}}</li>
      </ul>
    <dao-editable-table
      :instantCheck="false"
      ref="EditableTable"
      :config="config"
      v-model="model"
      @valid="validChange2"
      @validation="validation">
      <template>
        <dao-tooltip v-for="th in config.header" :key="th" :slot="th" content="haha" placement="top">
          <svg class="icon"><use xlink:href="#icon_info-line"></use></svg>
        </dao-tooltip>
      </template>
    </dao-editable-table>
    <button class="dao-btn blue" @click="changeHeader">添加一列</button>
    <button class="dao-btn blue" @click="onValidate">触发验证</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        header: [
          '变量 ID',
          '变量名',
          '类型',
          '变量描述',
          '是否必填',
          '默认值',
        ],
        body: [{
          type: 'input',
          name: 'id',
          default: '',
          validate(row, all) {
            if (row.id === '') {
              return '变量 ID 不能为空';
            }
            if (all.filter(r => r.id === row.id).length > 1) {
              return '变量 ID 不能重复';
            }
            return true;
          },
        }, {
          type: 'input',
          name: 'name',
          default: '',
          validate(row) {
            if (row.name === '') {
              return '变量名不能为空';
            }
            return true;
          },
        }, {
          type: 'select',
          name: 'type',
          options: ['字符串', '布尔值', 'url', '密码', '文本'], // 此处具体的用法还要根据 select 而定
          default: '字符串',
        }, {
          type: 'input',
          name: 'description',
          default: '',
          validate(row) {
            if (row.description === '') {
              return '变量描述不能为空';
            }
            return true;
          },
        }, {
          type: 'checkbox',
          name: 'required',
          default: true,
          label: '必填',
        }, {
          type: 'input',
          name: 'default',
          placeholder: 'root',
          validate(row) {
            if (row.type === '布尔值' && row.default !== 'true' && row.default !== 'false') {
              console.log('currentRow1', row);
              return '默认值与类型不符';
            }
            if (row.type === 'url') {
              const urlReg = /^(https?:\/\/)?[a-z0-9-]+(\.[a-z0-9-]+)+\.?(\/.*)?$/i;
              if (!urlReg.test(row.default)) {
                console.log('currentRow2', row);
                return '默认值与类型不符';
              }
            }
            return true;
          },
        }],
      },
      model: [{
        default: '',
        description: 'The Root Password of MySQL',
        id: 'mysql_root_password',
        name: 'Root Password',
        required: true,
        type: '字符串',
        placeholder: '此列不应显示，显示说明有 bug',
      }],
      validationMessage: [],
    };
  },
  methods: {
    validChange1(val) {
      console.log('验证结果改变1', val);
    },
    validChange2(val) {
      console.log('验证结果改变2', val);
    },
    changeHeader() {
      this.config.header.push('最大值');
      this.config.body.push({
        type: 'input',
        name: 'age',
        default: 50,
      });
    },
    onValidate() {
      this.$refs.EditableTable.validate();
    },
    validation(value) {
      this.validationMessage = value;
    },
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