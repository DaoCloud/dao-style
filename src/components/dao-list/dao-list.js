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
      selectedRows: [],
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
      return result;
    },
    // 基本和sortedRows是一样的，只是加了 checked
    readyRows() {
      _.forEach(this.sortedRows, (r) => {
        this.$set(r, '$checked', false);
      });
      return this.sortedRows;
    },
    chunks() {
      // TODO：分页逻辑待完善
      return [this.readyRows];
    },
    // 指的是当前页的行
    currentRows() {
      return this.chunks[this.page];
    },
    isAllChecked() {
      const checkedRowsNumber = _.filter(this.currentRows, row => row.$checked).length;
      if (checkedRowsNumber === 0) {
        return 'no';
      } else if (checkedRowsNumber < this.currentRows.length) {
        return 'partial';
      }
      return 'yes';
    },
  },
  methods: {
    // 选中一行
    checkRow(row, target) {
      // 修改行的选中状态
      this.$set(row, '$checked', target);
      if (row.$checked && !this.selectedRows.includes(row)) {
        // 如果这行被选中的话，就添加到选中的行数组里
        this.selectedRows.push(row);
      } else if (!row.$checked) {
        // 如果取消选中就移除掉
        _.remove(this.selectedRows, row);
      }
    },
    // 点击某一行的事件
    click(row, event) {
      if (event.target.nodeName === 'use' ||
        event.target.nodeName === 'svg' ||
        event.target.nodeName === 'SPAN' ||
        event.target.nodeName === 'A' ||
        event.target.nodeName === 'BUTTON' ||
        // 当其点在 popover 绑定元素上面也不能选中列表
        event.path.some(node => node.classList && node.classList.contains('dao-popover'))
      ) {
        return;
      }
      this.checkRow(row, !row.$checked);
    },
    // 点击全选框
    checkAll() {
      // 如果当前状态是 no 或者 partial，就要全部选中
      const target = this.isAllChecked === 'no' || this.isAllChecked === 'partial';
      _.forEach(this.currentRows, (row) => {
        this.checkRow(row, target);
      });
    },
  },
};
