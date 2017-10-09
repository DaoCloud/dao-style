import _ from 'lodash';
import DaoListTh from './th.vue';
import StatusTd from './td/status-td.vue';
import OperationTd from './td/operation-td.vue';
import CheckAll from './check-all.vue';
import DaoListSettingsDialog from './dialogs/settings-dialog.vue';

export default {
  name: 'DaoList',
  components: {
    StatusTd,
    OperationTd,
    CheckAll,
    DaoListTh,
    DaoListSettingsDialog,
  },
  props: ['columns', 'rows', 'config'],
  data() {
    const columnsWidth = {};
    _.forEach(this.columns, (c) => {
      columnsWidth[c.name] = 'auto';
    });

    return {
      page: 0,
      checkedRows: [],
      filterTextRaw: '',
      filterText: '',
      isAllChecked: false,
      sortingConfig: {
        sortBy: this.config.sorting.defaultSortBy,
        order: this.config.sorting.order,
      },
      columnsWidth,
      // settings 代表组件内部的设置，config 代表外面传进来的配置
      // 有设置就读取设置，没有设置才去读取配置
      settings: {
        columnsOrder: null,
      },
      isSettingsDialogVisible: false,
    };
  },
  computed: {
    tableName() {
      return this.config.tableName;
    },
    rowsLimitPerPage() {
      return this.config.pagination.limit;
    },
    columnsOrder() {
      return this.settings.columnsOrder || this.config.columnsOrder;
    },
    mainOperation() {
      return this.config.mainOperation;
    },
    operations() {
      return this.config.operations;
    },
    filters() {
      const filters = {};
      _.forEach(this.rows, (r) => {
        _.forEach(r, (td, key) => {
          if (!filters[key]) {
            filters[key] = {
              // 一个问题就是，rows 里的有的属性可能 column 里没有，所以找不到 text
              text: this.columns[key] ? this.columns[key].text : key,
              options: [],
            };
          }
          // 如果在这个 filter 的 options 里没找到这个 value，那就添加到 options 里
          if (!_.find(filters[key].options, o => o.value === td.value)) {
            filters[key].options.push({
              text: td.text || '',
              value: td.value,
            });
          }
        });
      });

      return filters;
    },
    filterOptions() {
      const filterGroup = {
        tabName: '测试',
        keys: [],
      };

      // 把 filters 转换成 input-with-label 要求的格式
      filterGroup.keys = _.map(this.filters, (filter, name) => ({
        name: filter.text,
        val: name,
        vals: _.map(filter.options, o => ({
          name: o.text,
          val: o.value,
        })),
      }));

      return [filterGroup];
    },
    // 根据筛选的查询语句转换成的筛选条件
    filterQuery() {
      // TODO: 这里先简单地判断查询语句是否合法，以后可能要改成正则
      if (!this.filterText || !_.includes(this.filterText, ':')) return {};
      const filterTextFragments = this.filterText.trim().split(' ');
      const query = {};
      _.forEach(filterTextFragments, (t) => {
        const [name, value] = t.split(':');
        query[name] = value;
      });
      return query;
    },
    filteredRows() {
      return _.filter(this.rows, (r) => {
        let valid = true;
        _.forEach(this.filterQuery, (value, name) => {
          // TODO: 这里的判断条件可能要改成弱等于
          if (!r[name] || r[name].value !== value) {
            valid = false;
          }
        });
        return valid;
      });
    },
    sortedRows() {
      if (!this.sortingConfig.sortBy) return _.clone(this.filteredRows);
      return _.orderBy(
        this.filteredRows,
        r => r[this.sortingConfig.sortBy].value,
        this.sortingConfig.order,
      );
    },
    // 基本和sortedRows是一样的，只是加了 checked
    allRows() {
      const rowsClone = _.cloneDeep(this.sortedRows);
      _.forEach(rowsClone, (r) => {
        this.$set(r, '$checked', false);
      });
      return rowsClone;
    },
    chunks() {
      return _.chunk(this.allRows, this.rowsLimitPerPage);
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
      return this.chunks[this.page] || [];
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
  },
  methods: {
    // 选中一行
    checkRow(row, target) {
      // 修改行的选中状态
      this.$set(row, '$checked', target);
      this.changeIsAllChecked();
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
    changeIsAllChecked() {
      const checkedRowsNumber = _.filter(this.allRows, row => row.$checked).length;
      if (checkedRowsNumber === 0) {
        this.isAllChecked = 'no';
      } else if (checkedRowsNumber < this.allRows.length) {
        this.isAllChecked = 'partial';
      } else {
        this.isAllChecked = 'yes';
      }
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
    changeSortBy(sortBy) {
      if (this.sortingConfig.sortBy === sortBy) {
        this.sortingConfig.order = this.sortingConfig.order === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortingConfig.sortBy = sortBy;
        this.sortingConfig.order = 'asc';
      }
    },
    emit(operation) {
      if (!operation.disabled) {
        this.$emit(operation.event);
      }
    },
    refresh() {
      this.$emit('refresh');
    },
    onColumnResize(columnName, newWidth) {
      this.columnsWidth[columnName] = `${newWidth}px`;
    },
    openSettingsDialog() {
      this.isSettingsDialogVisible = true;
    },
    closeSettingsDialog() {
      this.isSettingsDialogVisible = false;
    },
    onSettingsDialogConfirm(settings) {
      this.settings.columnsOrder = _.map(_.filter(settings.columnsOrder, 'visible'), 'name');
    },
  },
};
