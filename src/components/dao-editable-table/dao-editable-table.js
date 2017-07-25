import _ from 'lodash';
import daoDrop from '../dao-select/dropdown.vue';
import clickoutside from '../../directives/clickoutside';

export default {
  name: 'DaoEditableTable',
  directives: {
    clickoutside,
  },
  components: {
    daoDrop,
  },
  props: ['config', 'value'],
  data() {
    return {
      activatedRow: null,
      rows: [],
    };
  },
  computed: {
    model() {
      return _.map(this.rows, this.rowToModel);
    },
    header() {
      return this.config.header.map(h => ({
        text: h.text ? h.text : h,
        tooltip: h.tooltip,
      }));
    },
  },
  watch: {
    // 当 model 变化时，要把 model 的数据转换成对应的 row 形式的数据
    value(newModel) {
      this.modelToRow(newModel);
    },
    config: {
      handler: function() {
        // 当 config 改变时，使用 input 事件，触发父组件 v-model 更新
        // 使整个 rows 根据新的 config 和 model 重新生成
        this.$emit('input', this.model);
        this.validteAndUpdate();
      },
      deep: true,
    },
  },
  methods: {
    // 根据 model 生成一行数据，不传 model 就直接生成一行默认的数据
    generateRow(model) {
      const resultRow = this.config.body.map((td) => {
        let value;
        switch (td.type) {
          case 'input':
          case 'select':
            value = td.default || '';
            break;
          case 'checkbox':
            value = td.default || false;
            break;
          case 'text':
            value = td.default || '';
            break;
          default:
        }
        return {
          name: td.name,
          type: td.type,
          value,
          options: td.options || null,
          label: td.label || '',
          validate: td.validate || null,
        };
      });
      // 如果有预先设置的值的话，就要把默认值塞进去
      if (model) {
        _.forEach(model, (val, key) => {
          _.find(resultRow, td => td.name === key).value = val;
        });
      }

      return resultRow;
    },
    // 把 model 的数据塞到当前的表格中
    modelToRow(model) {
      if (model === this.rows) return;
      this.rows = _.map(model, this.generateRow);
      this.inactivateRow();
    },
    // 根据一行的数据生成一行的 model
    rowToModel(row) {
      const obj = {};
      _.forEach(row, (td) => {
        obj[td.name] = td.value;
      });
      return obj;
    },
    // 添加一行
    addRow() {
      this.rows.push(this.generateRow());
      this.validate();
      this.updateModel();
    },
    // 删除一行
    removeRow(row) {
      const index = this.rows.indexOf(row);
      this.rows.splice(index, 1);
      this.validate();
      this.updateModel();
    },
    focusRow(rowIndex) {
      this.activatedRow = rowIndex;
    },
    inactivateRow() {
      this.activatedRow = null;
    },
    onBlur() {
      this.validteAndUpdate();
      this.inactivateRow();
    },
    // 验证数据
    validate() {
      _.forEach(this.rows, (row) => {
        _.forEach(row, (td) => {
          if (td.type === 'input' && td.validate) {
            td.valid = td.validate(this.rowToModel(row), this.model);
          }
        });
      });
    },
    // 更新 model
    updateModel() {
      let valid = true;
      _.forEach(this.rows, (row) => {
        if (_.some(row, td => _.isString(td.valid))) {
          valid = false;
          return false;
        }
        return true;
      });
      this.$emit('valid', valid);
      if (valid) {
        this.$emit('input', this.model);
      }
    },
    validteAndUpdate() {
      this.validate();
      this.updateModel();
    },
  },
  created() {
    this.modelToRow(this.value);
  },
};
