import _ from 'lodash';
import StatusTd from './td/status-td.vue';

export default {
  name: 'DaoList',
  components: {
    StatusTd,
  },
  props: ['columns', 'rows', 'config'],
  data() {
    return {
      page: 0,
    };
  },
  computed: {
    pageLimit() {
      return this.config.pagination.limit;
    },
    columnsOrder() {
      return this.config.columnsOrder;
    },
    filteredRows() {
      // TODO: 筛选逻辑待完善
      return this.rows;
    },
    sortedRows() {
      // TODO: 排序逻辑待完善
      const result = this.filteredRows;
      // 基本上和 sortedRows 是一样的，区别在于 currentRows 里会添加 checked
      this.currentRows = _.clone(result);
      return result;
    },
    chunks() {
      // TODO：分页逻辑待完善
      return [this.sortedRows];
    },
    // 指的是当前页的行
    currentRows() {
      return this.chunks[this.page];
    },
  },
  methods: {
  },
};
