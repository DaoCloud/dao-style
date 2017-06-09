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
  computed: {
    result() {
      const result = {};
      this.config.body.forEach((v) => {
        switch (v.type) {
          case 'input':
          case 'select':
          case 'text':
            result[v.name] = v.default || '';
            break;
          case 'checkbox':
            result[v.name] = v.default || false;
            break;
          default:
        }
      });
      return result;
    },
  },
  data() {
    const header = this.config.header.map(h => ({
      text: h.text ? h.text : h,
      tooltip: h.tooltip,
    }));
    const struct = this.config.body.map((tr) => {
      let value;
      switch (tr.type) {
        case 'input':
        case 'select':
          value = tr.default || '';
          break;
        case 'checkbox':
          value = tr.default || false;
          break;
        case 'text':
          value = tr.default || '';
          break;
        default:
      }
      return {
        name: tr.name,
        type: tr.type,
        value,
        options: tr.options || null,
        label: tr.label || '',
      };
    });
    return {
      header,
      struct,
      activatedRow: null,
      rows: [],
    };
  },
  watch: {
    value(val) {
      if (val === this.rows) return;
      this.rows = val;
      this.inactivateRow();
    },
  },
  methods: {
    addRow() {
      this.rows.push(_.cloneDeep(this.struct));
      this.$emit('input', this.rows);
    },
    removeRow(row) {
      const index = this.rows.indexOf(row);
      this.rows.splice(index, 1);
      this.$emit('input', this.rows);
    },
    inactivateRow() {
      this.activatedRow = null;
    },
    onBlur() {
      this.updateValue();
      this.inactivateRow();
    },
    focusRow(rowIndex) {
      this.activatedRow = rowIndex;
    },
    updateValue() {
      const newRows = _.clone(this.rows);
      this.$emit('input', newRows);
    },
  },
  mounted() {},
};
