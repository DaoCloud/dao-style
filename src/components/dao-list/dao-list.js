import _ from 'lodash';
import DaoListTh from './th.vue';
import FilterInput from './filter-input.vue';
import StatusTd from './td/status-td.vue';
import CustomTd from './td/custom-td';
import OperationTd from './td/operation-td.vue';
import CheckAll from './check-all.vue';
import DaoListSettingsDialog from './dialogs/settings-dialog.vue';
import DaoListCustomToolbarDialog from './dialogs/custom-toolbar-dialog.vue';

export default {
  name: 'DaoList',
  components: {
    FilterInput,
    StatusTd,
    CustomTd,
    OperationTd,
    CheckAll,
    DaoListTh,
    DaoListSettingsDialog,
    DaoListCustomToolbarDialog,
  },
  props: ['columns', 'rows', 'config'],
  data() {
    // 从 localStorage 中读取配置
    const localStorageSettings = this.getLocalStorageSettings();
    let columnsWidth = {};
    let columnsOrder = [];
    if (localStorageSettings) {
      columnsWidth = localStorageSettings.columnsWidth;
      columnsOrder = localStorageSettings.columnsOrder;
    } else {
      _.forEach(this.columns, (c) => {
        columnsWidth[c.name] = 'auto';
      });
      columnsOrder = null;
    }

    return {
      page: 0,
      checkedRows: [],
      filterTextRaw: '',
      filterText: '',
      isAllChecked: false,
      filterQuery: {},
      sortingConfig: {
        sortBy: this.config.sorting.defaultSortBy,
        order: this.config.sorting.order,
      },
      contextMenu: {
        visible: false,
        clickedRow: {},
        clickedIndex: '',
        position: {
          top: '',
          left: '',
        },
      },
      columnsWidth,
      // settings 代表组件内部的设置，config 代表外面传进来的配置
      // 有设置就读取设置，没有设置才去读取配置
      settings: {
        columnsOrder,
      },
      isSettingsDialogVisible: false,
      isCustomToolbarDialogVisible: false,
      checkedAnchorIndex: null,
    };
  },
  created() {
    // 有全局的点击事件时将右键菜单隐藏
    document.body.addEventListener('click', () => {
      this.contextMenu.visible = false;
      this.contextMenu.clickedIndex = null;
    });
  },
  computed: {
    tableId() {
      return this.config.tableId;
    },
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
    filteredRows() {
      const filteredRows = _.filter(this.rows, (r) => {
        let valid = true;
        _.forEach(this.filterQuery, (value, name) => {
          if (name !== '$keywords') {
            // 如果是一般的 filter，才要判断
            // TODO: 这里的判断条件可能要改成弱等于
            if (!r[name] || r[name].value !== value) {
              valid = false;
            }
          }
        });
        return valid;
      });

      let searchedRows = filteredRows;
      if (_.get(this.filterQuery, '$keywords', []).length > 0) {
        // 如果还有搜索关键词，就继续搜索
        searchedRows = _.filter(filteredRows, (r) => {
          let valid = true;
          // 如果有多个搜索关键词，那么结果是取交集，也就是说一行数据要包含所有关键词才算是匹配到。
          _.forEach(this.filterQuery.$keywords, (keyword) => {
            let matchCurrentKeyword = false;
            _.forEach(r, (td) => {
              // 注意，搜索和筛选不同。筛选是根据 value 筛选，搜索是根据 text 搜索。
              if (_.includes(td.text, keyword)) {
                matchCurrentKeyword = true;
                return false;
              }
              return true;
            });
            valid = matchCurrentKeyword;
            return valid;
          });
          return valid;
        });
      }

      return searchedRows;
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
      // 每当 currentRows 改变，就要把点击的锚点重置
      this.checkedAnchorIndex = null;
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
      if (target && !this.checkedRows.includes(row)) {
        // 如果这行被选中的话，就添加到选中的行数组里
        this.checkedRows.push(row);
      }

      if (!target) {
        // 如果取消选中就移除掉
        this.checkedRows = _.filter(this.checkedRows, r => r !== row);
      }
      this.changeIsAllChecked();
    },
    // 点击某一行的事件
    onRowClick(row, event) {
<<<<<<< HEAD
=======
      // event.preventDefault();
>>>>>>> feat(dao-list-menu): 添加基础右键菜单
      // 点击一共分三种情况、ctrl 点击、shift 点击、普通点击、点击 checkbox
      if (event.ctrlKey || event.target.nodeName === 'INPUT') {
        // 如果是按住 ctrl 点的或者点击的是 checkbox，那就选中当前行
        this.checkRow(row, !row.$checked);
        this.checkedAnchorIndex = this.currentRows.indexOf(row);
      } else if (event.shiftKey) {
        // 如果是按住 shift 点的，那就把这次点的行和上次点的行之间的行全都 check
        if (_.isNumber(this.checkedAnchorIndex)) {
          // 如果上一次已经点过一行了，就按 shift 点击处理
          const currentClickedRowIndex = this.currentRows.indexOf(row);
          const deltaRowsNumber = Math.abs(currentClickedRowIndex - this.checkedAnchorIndex) + 1;
          let startRowIndex;
          if (currentClickedRowIndex > this.checkedAnchorIndex) {
            startRowIndex = this.checkedAnchorIndex;
          } else {
            startRowIndex = currentClickedRowIndex;
          }
          this.unCheckAll();
          for (let i = 0; i < deltaRowsNumber; i += 1) {
            this.checkRow(this.currentRows[startRowIndex + i], true);
          }
        } else {
          // 如果之前一行都没有点过，那么按照普通点击处理
          this.checkRow(row, !row.$checked);
          this.checkedAnchorIndex = this.currentRows.indexOf(row);
        }
      } else if (!(event.target.nodeName === 'use' ||
        event.target.nodeName === 'svg' ||
        event.target.nodeName === 'SPAN' ||
        event.target.nodeName === 'A' ||
        event.target.nodeName === 'BUTTON' ||
        // 当其点在 popover 绑定元素上面也不能选中列表
        event.path.some(node => node.classList && node.classList.contains('dao-popover')))) {
        // 如果是普通点击，那就先清空所有点击的行，然后再选中这一行
        this.unCheckAll();
        this.checkRow(row, true);
        this.checkedAnchorIndex = this.currentRows.indexOf(row);
      }
    },
    onContextMenu(row, index, event) {
      const position = {
        top: `${event.clientY}px`,
        left: `${event.clientX}px`,
      };
      Object.assign(this.contextMenu, {
        position,
        visible: true,
        clickedRow: row,
        clickedIndex: index,
      });
    },
    // 选中所有行
    checkAll() {
      _.forEach(this.allRows, (row) => {
        this.$set(row, '$checked', true);
      });
      this.checkedRows = this.allRows;
    },
    // 全不选所有行，这个方法速度比 checkAll 快
    unCheckAll() {
      _.forEach(this.allRows, (row) => {
        this.$set(row, '$checked', false);
      });
      this.checkedRows = [];
    },
    // 选中当前页所有行
    checkPage(wantToCheck) {
      const target = wantToCheck || !_.every(this.currentRows, r => r.$checked);
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
    onFilterInputChange(queries) {
      this.filterQuery = queries;
    },
    onColumnResize(columnName, newWidth) {
      this.columnsWidth[columnName] = `${newWidth}px`;
      this.saveLocalStorageSettings();
    },
    openSettingsDialog() {
      this.isSettingsDialogVisible = true;
    },
    closeSettingsDialog() {
      this.isSettingsDialogVisible = false;
    },
    onSettingsDialogConfirm(settings) {
      this.settings.columnsOrder = _.map(_.filter(settings.columnsOrder, 'visible'), 'name');
      this.saveLocalStorageSettings();
    },
    openCustomToolbarDialog() {
      this.isCustomToolbarDialogVisible = true;
    },
    closeCustomToolbarDialog() {
      this.isCustomToolbarDialogVisible = false;
    },
    onCustomToolbarDialogConfirm() {
    },
    getLocalStorageSettings() {
      return JSON.parse(localStorage.getItem(`${this.config.tableId}Settings`));
    },
    saveLocalStorageSettings() {
      const settings = {
        columnsWidth: this.columnsWidth,
        columnsOrder: this.settings.columnsOrder,
      };
      const json = JSON.stringify(settings);
      localStorage.setItem(`${this.tableId}Settings`, json);
    },
  },
};
