<template>
  <dao-dialog
    :config="config"
    :visible.sync="isShow"
    @dao-dialog-open="onOpen"
    @dao-dialog-close="onClose">
    <div class="dao-list-settings-dialog">
      <div class="dialog-nav">
        <ul>
          <li :class="{active: tab === 'columns'}" @click="tab = 'columns'">列表分栏</li>
          <li :class="{active: tab === 'time'}" @click="tab = 'time'">时间格式</li>
        </ul>
      </div>
      <div class="dialog-content">
        <div v-show="tab === 'columns'" v-dao-droppable="{onChange: onColumnsOrderChange}">
          决定列表中所需要显示的分栏和显示顺序。
          <div class="draggable-column"
            v-for="c in settings.columnsOrder"
            :key="c.text"
            :data-key="c.name"
            v-dao-draggable>
            <svg>
              <use xlink:href="#icon_move"></use>
            </svg>
            <input type="checkbox" v-model="c.visible">
            <span>{{c.name}}</span>
          </div>
        </div>
        <div v-show="tab === 'time'">
          <input type="radio" id="dstf-relative" value="relative" v-model="settings.timeFormat">
          <label for="dstf-relative">
            使用相对日期
          </label>
          <br/>
          <input type="radio" id="dstf-absolute" value="absolute" v-model="settings.timeFormat">
          <label for="dstf-absolute">
            使用绝对日期
          </label> 
        </div>
      </div>
    </div>
    <div slot="footer">
      <button class="dao-btn ghost" @click="onClose">取消</button>
      <button class="dao-btn blue" @click="onConfirm">保存</button>
    </div>
  </dao-dialog>
</template>

<script>
  import {
    _forEach,
    _map,
    _find,
  } from '../../../../src/utils/assist';

  import Dialog from './dialog';

  export default {
    name: 'DaoTableViewSettingsDialog',
    extends: Dialog,
    props: ['visible', 'columns', 'columnsOrder', 'timeFormat'],
    data() {
      return {
        tab: 'columns',
        settings: {
          columnsOrder: [],
          timeFormat: this.timeFormat || 'relative',
        },
        config: {
          type: 'normal',
          title: '显示选项',
          showHeader: true,
        },
      };
    },
    methods: {
      onOpen() {
        this.settings.columnsOrder = this.getAllColumnsOrder();
        this.settings.timeFormat = this.timeFormat || 'relative';
      },
      // 获取所有分栏的顺序和是否显示的信息。和 columnsOrder 的不同在于，columnsOrder 中只有要显示的分栏。
      getAllColumnsOrder() {
        const order = [];
        const numberOfVisibleColumns = this.columnsOrder.length;
        let i = 0;

        _forEach(this.columns, (c, columnName) => {
          // 如果这个分栏仅仅只是用来筛选的话，那就不用显示
          if (c.isFilter) return false;
          const index = this.columnsOrder.indexOf(columnName);
          // 这样一来可以确保在 order 中，要显示的分栏都在前面，不要显示的都在后面
          if (index > -1) {
            order[index] = {
              visible: true,
              text: columnName,
              name: this.columns[columnName].name,
            };
          } else {
            order[numberOfVisibleColumns + i] = {
              visible: false,
              text: columnName,
              name: this.columns[columnName].name,
            };
            i += 1;
          }
          return true;
        });
        return order;
      },
      onColumnsOrderChange(newOrder) {
        this.settings.columnsOrder =
          _map(newOrder, c => _find(this.settings.columnsOrder, { name: c }));
      },
      onConfirm() {
        const result = {
          columnsOrder: _map(this.settings.columnsOrder
            .filter(column => column.visible), c => c.text),
          timeFormat: this.settings.timeFormat,
        };
        this.$emit('confirm', result);
        this.onClose();
      },
    },
  };
</script>

<style lang="scss">
@import '../../dao-color.scss';

//  TODO：带有导航栏的弹框的样式还不在 dao-style 里，所以自己写一个
.dao-list-settings-dialog {
  padding: 0;
  height: 100%;
  display: flex;
  .dialog-nav {
    width: 170px;
    flex-basis: 170px;
    flex: none;
    background-color: $white-dark;
    ul {
      margin: 10px 0;
      padding: 0;
      list-style: none;
      li {
        padding-left: 20px;
        color: $black-dark;
        line-height: 30px;
        cursor: pointer;
        &.active {
          background-color: rgba(155, 163, 175, .3);
        }
      }
    }
  }
  .dialog-content {
    padding: 20px;
    flex: auto;
  }
  .draggable-column {
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    svg {
      display: inline-block;
      height: 16px;
      width: 16px;
      margin-right: 3px;

      fill: $grey-light;
      cursor: move;
      vertical-align: middle;
    }
    input {
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
    }
  }
}
</style>
