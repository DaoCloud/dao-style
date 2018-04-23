<template>
  <div class="dao-table-view-container">
    <!-- 列表工具栏 -->
    <div class="dao-table-view-toolbar">
      <div class="left">
        <slot name="tool" :checkType="checkType" :checkedRows="checkedRows"></slot>
      </div>
      <div class="right">
        <!-- 排序下拉菜单 -->
        <dao-dropdown
          v-if="config.hideSortHelper !== true"
          trigger="click"
          placement="bottom-end">
          <button class="dao-btn ghost has-icon">
            <svg class="icon">
              <use v-bind="{'xlink:href': `#icon_sort-${settings.sort.order}`}"></use>
            </svg>
            <span class="text">{{config.props[settings.sort.prop].name}}</span>
            <svg class="icon">
              <use xlink:href="#icon_caret-down"></use>
            </svg>
          </button>
          <dao-dropdown-menu slot="list">
            <dao-dropdown-item v-for="prop in settings.columnsOrder"
              v-if="!config.props[prop].unsortable"
              :key="prop"
              @click="onSortByChange(prop)">
              <svg class="icon" :class="{invisible: settings.sort.prop !== prop}">
                <use xlink:href="#icon_checkmark-menu-item"></use>
              </svg>
              <span>{{config.props[prop].name}}</span>
            </dao-dropdown-item>
            <dao-dropdown-item :is-divided="true"></dao-dropdown-item>
            <dao-dropdown-item @click="settings.sort.order='asc'">
              <svg class="icon" :class="{invisible: settings.sort.order !== 'asc'}">
                <use xlink:href="#icon_checkmark-menu-item"></use>
              </svg>
              <span>升序</span>
            </dao-dropdown-item>
            <dao-dropdown-item @click="settings.sort.order='desc'">
              <svg class="icon" :class="{invisible: settings.sort.order !== 'desc'}">
                <use xlink:href="#icon_checkmark-menu-item"></use>
              </svg>
              <span>降序</span>
            </dao-dropdown-item>
          </dao-dropdown-menu>
        </dao-dropdown>
        <!-- 显示设置菜单 -->
        <dao-dropdown
          trigger="click"
          :append-to-body="true"
          v-if="config.hideSettingHelper !== true"
          placement="bottom-end">
          <button class="dao-btn ghost dao-icon">
            <svg class="icon"><use xlink:href="#icon_setting"></use></svg>
            <svg class="icon"><use xlink:href="#icon_caret-down"></use></svg>
          </button>
          <dao-dropdown-menu slot="list">
            <dao-dropdown-item @click="refresh">刷新</dao-dropdown-item>
            <dao-dropdown-item @click="openSettingsDialog">查看显示选项</dao-dropdown-item>
            <!-- <dao-dropdown-item @click="openCustomToolbarDialog">自定义工具栏</dao-dropdown-item> -->
          </dao-dropdown-menu>
        </dao-dropdown>
      </div>
    </div>
     <!-- 列表容器 -->
    <div class="dao-table-view-main">
      <!-- 列表的顶栏: 当支持搜索时候才会有 -->
      <div class="dao-table-view-topbar" v-if="showTopBar">
        <slot name="search">
          <dao-table-view-filter
            class="dao-table-view-filter"
            :rows="rows"
            :columnsOrder="settings.columnsOrder"
            :props="config.props"
            :config="search"
            @change="onKeywordChange">
          </dao-table-view-filter>
        </slot>
        <dao-table-view-pagination
          v-if="!isLoading || chunk.length"
          :pagination="pagination"
          :checkedRowsLength="checkedRows.length"
          :total="total"
          @pageChange="onPageChange">
        </dao-table-view-pagination>
      </div>
      <!-- 列表主体 -->
      <div class="dao-table-view-scrolldiv" v-if="chunk.length > 0">
        <table class="dao-table-view">
          <!-- 表头 -->
          <thead>
            <tr>
              <!-- 全选 -->
              <th class="checkbox" v-if="selectable">
                <input type="checkbox" class="round"
                  :checked="chunkAllChecked"
                  @click="onToggleCheck()">
                <dao-table-view-check-all
                  :total="total"
                  :per-page="chunk.length"
                  :checked="checkedCount"
                  @check="onCheck"
                  @uncheck="onCheckAll">
                </dao-table-view-check-all>
              </th>
              <!-- th -->
              <dao-table-view-th
                v-for="prop in settings.columnsOrder"
                :key="prop"
                :width="settings.columnsWidth[prop]"
                :class="{ unsortable:  config.props[prop].unsortable}"
                @resize="onColumnResize(prop, $event)"
                @click="onSortByChange(prop)">
                <span>{{config.props[prop].name || config.props[prop]}}</span>
                <template v-if="!config.props[prop].unsortable">
                  <svg class="sort-arrow" v-if="settings.sort.prop === prop" v-show="settings.sort.order === 'desc'">
                    <use xlink:href="#icon_down-arrow"></use>
                  </svg>
                  <svg class="sort-arrow" v-if="settings.sort.prop === prop" v-show="settings.sort.order === 'asc'">
                    <use xlink:href="#icon_up-arrow"></use>
                  </svg>
                </template>
              </dao-table-view-th>
              <!-- 预留给操作的 th -->
              <th v-if="operations.length"></th>
            </tr>
          </thead>
          <!-- 表身 -->
          <tbody>
            <tr :class="{checked: row.$checked}" v-for="(row, index) in chunk" :key="index"
              @click="onRowClick(row, $event)"
              @contextmenu.prevent="onContextMenu(row, $event)">
              <td class="checkbox" v-if="selectable">
                <input type="checkbox"
                @click.stop="onRowCheck(row)"
                class="round"
                :checked="row.$checked">
              </td>
              <template v-for="prop in settings.columnsOrder">
                <td 
                  :key="prop"
                  v-if="config.props[prop].type === 'text' || !config.props[prop].type"
                  :style="`width: ${settings.columnsWidth[prop]}`">
                  {{textRender(row, index, prop,config.props[prop].value)}}
                </td>
                <go-to-td
                  :key="prop"
                  v-if="config.props[prop].type === 'goto'"
                  :style="`width: ${settings.columnsWidth[prop]}`"
                  :row="row"
                  :prop="prop"
                  :index="index"
                  :callback="config.props[prop].onClick">
                </go-to-td>
                <status-td
                  :key="prop"
                  v-if="config.props[prop].type === 'status'"
                  :style="`width: ${settings.columnsWidth[prop]}`"
                  :color="textRender(row, index, prop,config.props[prop].color)"
                  :text="row[prop]">
                </status-td>
                <time-td
                  :key="prop"
                  v-if="config.props[prop].type === 'time'"
                  :timeFormat="settings.timeFormat"
                  :timeStamp="textRender(row, index, prop,config.props[prop].timeStamp)">
                </time-td>
                <custom-td 
                  :key="prop"
                  v-if="config.props[prop].type === 'custom'"
                  :style="`width: ${settings.columnsWidth[prop]}`"
                  :renderFunc="config.props[prop].render"
                  :td="row[prop]">
                </custom-td>
              </template>
              <operation-td
                v-if="operations.length"
                :row="row"
                @triggerEvent="distributeEvent"
                :operations="operations">
              </operation-td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 当列表为空或者正在加载时 -->
      <div class="dao-table-view-empty" v-if="chunk.length === 0 || isLoading">
        {{ isLoading ? config.loadingText || '加载中...' : config.emptyText || '列表为空'}}
      </div>
      <!-- 列表的底部：当没有搜索时候，将分页落到 table 下面 -->
      <div class="dao-table-view-bottombar"
        v-if="!config.search && !$slots.search && !isLoading && chunk.length">
        <dao-table-view-pagination 
          :pagination="pagination"
          :checkedRowsLength="checkedCount"
          :total="total"
          @pageChange="onPageChange">
        </dao-table-view-pagination>
      </div>
    </div>
    <!-- 右键菜单 -->
    <dao-table-view-context-menu
      class="dao-table-view-context-menu"
      :style="contextMenu.position"
      :visible.sync="contextMenu.visible"
      :operations="operations"
      :row="contextMenu.row"
      @triggerEvent="distributeEvent">
    </dao-table-view-context-menu>
    <!-- 显示设置弹窗 -->
    <dao-table-view-settings-dialog
      :visible.sync="dialogs.settings"
      @confirm="onSettingsDialogConfirm"
      :columnsOrder="settings.columnsOrder"
      :columns="config.props"
      :timeFormat="settings.timeFormat">
    </dao-table-view-settings-dialog>
  </div>
</template>
<script>
  import DaoTableViewPagination from './dao-table-view-pagination.vue';
  import DaoTableViewContextMenu from './dao-table-view-context-menu.vue';
  import DaoTableViewCheckAll from './dao-table-view-check-all.vue';
  import DaoTableViewSettingsDialog from './dialogs/dao-table-view-settings-dialog.vue';
  import DaoTableViewTh from './dao-table-view-th.vue';
  import DaoTableViewFilter from './dao-table-view-filter.vue';
  import GoToTd from './td/goto-td.vue';
  import StatusTd from './td/status-td.vue';
  import TimeTd from './td/time-td.vue';
  import CustomTd from './td/custom-td';
  import OperationTd from './td/operation-td.vue';
  import assert from '../../utils/assert';
  import {
    _find,
    _get,
    _forEach,
    _orderBy,
    _every,
    _chunk,
    _filter,
    _isEqual,
    _includes,
  } from '../../utils/assist';

  export default {
    name: 'DaoTableView',
    props: ['rows', 'config', 'loading'],
    data() {
      return {
        // 是否可以选择-> 是否显示 checkbox
        selectable: false,
  
        // 分页配置
        pagination: {
          page: 1,
          per_page: 10,
        },

        // 配置
        settings: {
          // 表头的顺序
          columnsOrder: [],
          // 表头的宽度
          columnsWidth: {},
          // 时间格式
          timeFormat: '',
          // 排序规则
          sort: {
            prop: null,
            order: 'asc',
          },
          // 拿到全部 props, 用于做缓存的更新
          props: [],
        },

        // 搜索配置
        search: {
          shutDown: false,
          autofocus: false,
          query: {},
        },

        // 右键菜单
        contextMenu: {
          visible: false,
          position: {
            top: '',
            left: '',
          },
          row: {},
        },
        // 对话框显示控制
        dialogs: {
          settings: false,
        },

        // 选择类型
        checkType: 'page',
      };
    },
    computed: {
      // 是否全权交给 dao-table-view 处理
      fullControll() {
        // 有这个 total 这个字段，说明是前端分页
        return this.pagination && this.pagination.total === undefined;
      },
      filterRows() {
        // 只有在前端分页的时候才需要做 filter
        if (this.fullControll) {
          // 先做 filter
          const rows = _filter(this.rows, (row) => {
            let valid = true;
            _forEach(this.search.query, (value, prop) => {
              // 检查是否有命中 keywords
              if (prop === '$keywords' && this.search.query.$keywords.length) {
                // 看是否有命中关键词
                let catched = false;
                _forEach(this.search.query.$keywords, (keyword) => {
                  _forEach(this.settings.columnsOrder, (column) => {
                    if (_includes(row[column].toString(), keyword.toString())) {
                      catched = true;
                    }
                  });
                });
                valid = catched;
                // 是否有命中 key-value
              } else if (row[prop] !== value && prop !== '$keywords') {
                valid = false;
              }
            });
            return valid;
          });
          return rows;
        }
        return this.rows;
      },
      // 当前页面渲染的一块数据
      chunk() {
        if (this.isLoading || !this.rows.length) return [];
        // 如果是前端分页，那么就分 chunk
        if (this.fullControll) {
          // 先排序，再分块
          const rows = _orderBy(this.filterRows, row =>
            row[this.settings.sort.prop], this.settings.sort.order);
          return _chunk(rows, this.pagination.per_page)[this.pagination.page - 1] || [];
        }
        // 如果是后端分页，那么就直接把传入的数据直接灌进来
        return this.rows;
      },
      // localstorage 标记
      storageKey() {
        return `DCE_List_Settings_${this.config.id}`;
      },
      // 总共多少条数据
      total() {
        if (this.fullControll) return _get(this.filterRows, 'length', 0);
        return this.pagination.total;
      },
      // 当前选中的行
      checkedRows() {
        return _filter(this.rows, (row => row.$checked));
      },
      // 当前选中了多少个
      checkedCount() {
        // 前端分页
        if (this.fullControll || this.checkType !== 'all') return this.checkedRows.length;
        // 后端分页，权限
        return this.config.pagination.total;
      },
      // 当前页面被全选了
      chunkAllChecked() {
        return _every(this.chunk, '$checked');
      },
      // 所有操作
      operations() {
        return _get(this.config, 'operations', []);
      },
      isLoading() {
        return !this.rows || this.loading;
      },
      showTopBar() {
        // 前端分页但是数据是空的
        if (this.fullControll && !_get(this.rows, 'length', false)) return false;
        // 有 search 或者有 search slot
        return !!this.config.search || !!this.$slots.search;
      },
    },
    created() {
      this.$onInit();
    },
    methods: {
      // 同步缓存设置
      $onInit() {
        this.readSettingsFromStorage();
        this.syncConfig();
        // 数据刷新时候把全选重置
        this.unCheckAll();
        // 后面的事情，就交给 vue 的 computed 了
      },
      // 同步配置
      syncConfig() {
        this.selectable = this.config.selectable !== false;
        this.pagination = Object.assign(this.pagination, this.config.pagination);
        this.search = Object.assign(this.search, this.config.search);
      },
      // 同步来自缓存的设置
      readSettingsFromStorage() {
        const props = Object.keys(this.config.props);
        const storageSettings = localStorage.getItem(this.storageKey);
        const settings = storageSettings ? JSON.parse(storageSettings) : null;
        if (settings && _isEqual(settings.props.sort(), Object.keys(this.config.props).sort())) {
          this.settings = settings;
        } else {
          this.buildSettings(props, 'absolute');
        }
      },
      // 同步设置，辅助函数
      buildSettings(columnsOrder, timeFormat) {
        const columnsWidth = {};
        _forEach(columnsOrder, (prop) => {
          columnsWidth[prop] = `${((1 / columnsOrder.length) * 100).toFixed(2)}%`;
        });
        this.settings.columnsWidth = columnsWidth;
        this.settings.columnsOrder = columnsOrder;
        this.settings.timeFormat = timeFormat;
        this.settings.props = Object.keys(this.config.props);
        if (!this.settings.sort || !this.settings.order) {
          this.settings.sort = Object.assign(this.settings.sort, this.config.sort);
          // 允许 sort 不传指，默认是第一个非 unsortable 属性生序
          if (!this.settings.sort.prop) {
            const prop = _find(this.settings.columnsOrder, c => !this.config.props[c].unsortable);
            assert.expect(prop).component('DaoTableView').error('sort.prop can not be undefined');
            this.settings.sort.prop = prop;
          }
        }
        this.writeSettingsToStorage();
        this.dialogs.settings = false;
      },
      // 将数据缓存到 localstorage
      writeSettingsToStorage() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.settings));
      },
      // 右键菜单: TODO 在 iframe 里会出现定位差
      onContextMenu(row, event) {
        // 去掉全选
        this.unCheckAll();
        // 选中当前行
        this.$set(row, '$checked', true);
        this.checkedRowsChange();
        // 如果没有定义好的操作，就不要打开右键菜单
        if (!this.operations.length) return;
        const position = {
          top: `${event.clientY}px`,
          left: `${event.clientX}px`,
        };
        Object.assign(this.contextMenu, {
          position,
          row,
          visible: true,
        });
      },
      // 切换页码
      onPageChange(page) {
        this.pagination.page = page;
        this.$emit('page-change', this.pagination);
      },
      // 拖动调整宽度
      onColumnResize(prop, size) {
        this.settings.columnsWidth[prop] = `${size}px`;
        this.writeSettingsToStorage();
      },
      // 更改排序规则
      onSortByChange(prop) {
        if (this.config.props[prop].unsortable) return;
        if (this.settings.sort.prop === prop) {
          this.settings.sort.order = this.settings.sort.order === 'asc' ? 'desc' : 'asc';
        }
        this.settings.sort.prop = prop;
        this.writeSettingsToStorage();
      },
      // text 渲染处理
      textRender(row, index, prop, rule) {
        if (typeof rule === 'function') {
          return rule(row[prop], row, index);
        }
        return row[prop];
      },
      // 某一行被点击
      onRowClick(row) {
        this.unCheckAll();
        // if (!this.selectable) return;
        // 类型更改为在当前这一页选择，总之不是全选
        this.checkType = 'page';
        this.$set(row, '$checked', !row.$checked);
        this.checkedRowsChange();
      },
      // checked
      onRowCheck(row) {
        this.$set(row, '$checked', !row.$checked);
      },
      // 全选切换辅助函数
      changeChecked(rows, checked) {
        _forEach(rows, (row) => {
          this.$set(row, '$checked', checked);
        });
      },
      onCheckAll() {
        this.unCheckAll();
        this.checkedRowsChange();
      },
      // 全不选所有行，这个方法速度比 checkAll 快
      unCheckAll() {
        this.changeChecked(this.rows, false);
      },
      // 切换全选
      onToggleCheck() {
        this.changeChecked(this.chunk, !this.chunkAllChecked);
        this.checkedRowsChange();
      },
      // 两种全选方式
      onCheck(type) {
        this.checkType = 'type';
        switch (type) {
          case 'page': {
            // 先把所有的先取消全选
            this.changeChecked(this.rows, false);
            // 再把当前这一页全部选上
            this.changeChecked(this.chunk, true);
            break;
          }
          case 'all': {
            // 全选
            this.changeChecked(this.rows, true);
            break;
          }
          default: {
            break;
          }
        }
        this.checkedRowsChange();
      },
      // 选中行变化
      checkedRowsChange() {
        this.$emit('checked-rows-change', _filter(this.rows, row => row.$checked));
      },
      // 派发事件
      distributeEvent(eventName, row) {
        this.$emit(eventName, row);
      },
      // 刷新
      refresh() {
        this.$emit('refresh');
      },
      // 打开设置对话框
      openSettingsDialog() {
        this.dialogs.settings = true;
      },
      // 关闭设置对话框
      onSettingsDialogConfirm(settings) {
        this.buildSettings(settings.columnsOrder, settings.timeFormat);
      },
      // 搜索
      onKeywordChange(query) {
        this.search.query = query;
        this.unCheckAll();
        this.$emit('search', query);
      },
    },
    watch: {
      config: {
        handler() {
          this.$onInit();
        },
        deep: true,
      },
      rows() {
        this.$onInit();
      },
    },
    components: {
      DaoTableViewContextMenu,
      DaoTableViewPagination,
      DaoTableViewCheckAll,
      DaoTableViewSettingsDialog,
      DaoTableViewTh,
      DaoTableViewFilter,
      GoToTd,
      StatusTd,
      TimeTd,
      CustomTd,
      OperationTd,
    },
  };
</script>
<style lang="scss">

@import '../dao-color.scss';

$tr-height: 30px;
// 这是算上上方1px边框的高度
$topbar-height: 35px;
$td-checkbox-width: 54px;

$font-size: 14px;

$zebra-bg: #f1f7fe;
$th-bg: $white-light;

$pagination-active-color: #217ef2;
$selected-bg: #096dec;

$outer-border: $grey-light;
$inner-border: $white-dark;

.invisible {
  visibility: hidden;
}

.dao-table-view-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.dao-table-view-toolbar {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 10px;
  .dao-btn.pseudo-disabled {
    color: #ccd1d9;
    border-color: #ccd1d9 !important;
    background: none !important;
    cursor: not-allowed;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 1px 0 rgba(255, 255, 255, 0.9) !important;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
  }
  .left{
    flex-grow: 1;
  }
}

.dao-table-view-main {
  display: flex;
  flex-direction: column;
  width: 100%;

  border: 1px solid $outer-border;

  svg {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
    fill: currentColor;
  }
}

.dao-table-view-topbar, .dao-table-view-bottombar {
  flex: 0 0 auto;
  height: $topbar-height;

  color: $grey-dark;
  line-height: $topbar-height - 1;
  border-bottom: 1px solid $outer-border;
  .dao-table-view-filter {
    width: 514px;
    display: inline-block;
    margin-left: 4px;
    // TODO: 由于没办法给 input 加 class，所以只能覆盖了
    input {
      height: 26px;
      vertical-align: inherit;
    }
    .close-icon {
      top: 0 !important;
    }
  }
  .dao-table-view-pagination {
    float: right;
    margin-right: 4px;
    .pagination {
      color: $pagination-active-color;
      display: inline-block;
    }
    svg {
      cursor: pointer;
    }
    .page {
      display: inline-block;
      height: 26px;
      width: 28px;

      line-height: 26px;
      border-radius: 3px;
      text-align: center; 
      background: none;
      border: 0;
      color: unset;
      font-size: 14px;
      cursor: pointer;
    }
    .disabled {
      color: $grey-dark;
      cursor: auto;
    }
    .active {
      background: rgba(56, 144, 255, 0.15);
    }
  }
}
.dao-table-view-bottombar{
  .dao-table-view-pagination{
    float: left;
    margin-left: 10px;
  }
  border-top: 1px solid $outer-border;
  border-bottom: none;
}

.dao-table-view-scrolldiv {
  width: 100%;
  overflow: auto;
}

table.dao-table-view {
  table-layout: fixed;
  position: relative;
  height: 100%;
  width: 100%;

  border-collapse: collapse;

  overflow: auto;
  thead {
    // 注意 thead 的 tr 下面有一个 border，这 1px 的 border 不在 30px 中
    height: $tr-height + 1;
    
    border-bottom: 1px solid $inner-border;
    background: $white-light;
  }
  
  tr {
    height: 30px;
    color: $black-dark;
    .dropdown-trigger {
      cursor: pointer;
      fill: transparent;
    }
    &:nth-child(even) {
      background: $zebra-bg;
    }
    &.checked {
      color: white;
      background-color: $selected-bg;
      svg {
        fill: white;
      }
      .dropdown-trigger {
        fill: $selected-bg;
        }
      &:hover {
        .dropdown-trigger {
          fill: white !important;
        }
      }
    }
    &:hover {
      .dropdown-trigger {
        fill: $grey-dark;
      }
    }
  }
  
  th, td {
    padding: 0 10px;
  
    font-size: $font-size;
    font-weight: normal;
    line-height: $tr-height;
    white-space: nowrap;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    &.checkbox {
      width: $td-checkbox-width;
      input {
        vertical-align: text-bottom;
      }
      svg {
        fill: $black-dark;
      }
    }
    &.operation {
      width: 36px;
    }
    &.unsortable {
      cursor: default;
    }
  }
  
  th {
    position: relative;
    border-right: 1px solid $inner-border;
    cursor: pointer;
    .sort-arrow {
      position: absolute;
      right: 10px;
      top: 7px;
      fill: $grey-dark;
    }
    &:last-child {
      border-right: none;
      width: 56px;
    }
    &:active {
      background: $white-dark;
    }
  }
}

.dao-table-view-context-menu {
  position: absolute;
  user-select: none;
}

.dao-table-view-empty{
  padding: 40px;
  text-align: center;
  color: $grey-dark;
  background-color: #fbfcfc;
  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
}

</style>
