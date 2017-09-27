import _ from 'lodash';
import StatusTd from './td/status-td.vue';
import OperationTd from './td/operation-td.vue';
import CheckAll from './check-all.vue';

export default {
  name: 'DaoList',
  components: {
    StatusTd,
    OperationTd,
    CheckAll,
  },
  props: ['columns', 'rows', 'config'],
  data() {
    return {
      page: 0,
      checkedRows: [],
    };
  },
  computed: {
    tableName() {
      return this.config.tableName;
    },
    pageLimit() {
      return this.config.pagination.limit;
    },
    columnsOrder() {
      return this.config.columnsOrder;
    },
    operations() {
      return this.config.operations;
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
    allRows() {
      _.forEach(this.sortedRows, (r) => {
        this.$set(r, '$checked', false);
      });
      return this.sortedRows;
    },
    chunks() {
      return _.chunk(this.allRows, this.pageLimit);
    },
    // 这个 pages 始终只包括当前页前后共五页的页码
    pages() {
      const pagesNumber = this.chunks.length;
      if (pagesNumber <= 5) {
        // 如果总页数小于5，那就全显示
        return _.map(this.chunks, (c, i) => i);
      } else if (pagesNumber > 5 && this.page <= 2) {
        // 如果总页数大于5，且当前页是第一或第二页，那就显示前五页
        return _.map(this.chunks, (c, i) => i).slice(0, 5);
      } else if (pagesNumber > 5 && this.page >= pagesNumber - 1 - 2) {
        // 如果总页数大于5，且当前页是倒数第一或第二页，那就显示后五页
        return _.map(this.chunks, (c, i) => i).slice(-5);
      }
      // 最后是一般情况，显示当前页和前后两页
      return [this.page - 2, this.page - 1, this.page, this.page + 1, this.page + 2];
    },
    // 指的是当前页的行
    currentRows() {
      return this.chunks[this.page];
    },
    currentRowsNumber() {
      return this.currentRows.length;
    },
    checkedRowsNumber() {
      return this.checkedRows.length;
    },
    pagesNumber() {
      return this.chunks.length;
    },
    allRowsNumber() {
      return this.allRows.length;
    },
    isAllChecked() {
      const checkedRowsNumber = _.filter(this.allRows, row => row.$checked).length;
      if (checkedRowsNumber === 0) {
        return 'no';
      } else if (checkedRowsNumber < this.allRows.length) {
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
      if (row.$checked && !this.checkedRows.includes(row)) {
        // 如果这行被选中的话，就添加到选中的行数组里
        this.checkedRows.push(row);
      } else if (!row.$checked) {
        // 如果取消选中就移除掉
        this.checkedRows = _.remove(this.checkedRows, row);
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
    // 选中所有行
    checkAll(wantToChecked) {
      let target;
      if (_.isBoolean(wantToChecked)) {
        target = wantToChecked;
      } else {
        // 如果当前状态是 no 或者 partial，就要全部选中
        target = this.isAllChecked === 'no' || this.isAllChecked === 'partial';
      }
      _.forEach(this.allRows, (row) => {
        this.checkRow(row, target);
      });
    },
    // 选中当前页所有行
    checkPage() {
      const target = !_.every(this.currentRows, r => r.$checked);
      _.forEach(this.currentRows, (row) => {
        this.checkRow(row, target);
      });
    },
    goToPage(p) {
      this.page = p;
    },
    nextPage() {
      this.page = this.page + 1;
    },
    prevPage() {
      this.page = this.page - 1;
    },
  },
};
