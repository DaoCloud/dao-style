<template>
  <dao-dialog
    :config="config"
    :visible.sync="isShow"
    @dao-dialog-close="onClose"
    @dao-dialog-cancel="onClose">
    <div class="dao-list-settings-dialog">
      <div class="dialog-nav">
        <ul>
          <li :class="{active: tab === 'columns'}" @click="tab = 'columns'">列表分栏</li>
          <li :class="{active: tab === 'time'}" @click="tab = 'time'">时间格式</li>
        </ul>
      </div>
      <div class="dialog-content">
        <div v-show="tab === 'columns'">
          决定列表中所需要显示的分栏和显示顺序。
          <div v-for="c in settings.columnsOrder" :key="c.text">
            <label>
              <input type="checkbox" class="round" v-model="c.visible">
              {{c.text}}
            </label>
          </div>
        </div>
        <div v-show="tab === 'time'">
          time
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
  import _ from 'lodash';
  import Dialog from './dialog';

  export default {
    name: 'DaoListSettingsDialog',
    extends: Dialog,
    props: ['visible', 'columns', 'columnsOrder'],
    data() {
      return {
        tab: 'columns',
        settings: {
          columnsOrder: [],
        },
        config: {
          type: 'normal',
          title: '显示选项',
          showHeader: true,
        },
      };
    },
    created() {
      this.settings.columnsOrder = this.getAllColumnsOrder();
    },
    methods: {
      // 获取所有分栏的顺序和是否显示的信息。和 columnsOrder 的不同在于，columnsOrder 中只有要显示的分栏。
      getAllColumnsOrder() {
        const order = [];
        const numberOfVisibleColumns = this.columnsOrder.length;
        let i = 0;

        _.forEach(this.columns, (c, columnName) => {
          // 如果这个分栏仅仅只是用来筛选的话，那就不用显示
          if (c.isFilter) return false;
          const index = this.columnsOrder.indexOf(columnName);
          // 这样一来可以确保在 order 中，要显示的分栏都在前面，不要显示的都在后面
          if (index > -1) {
            order[index] = {
              visible: true,
              text: c.text,
              name: columnName,
            };
          } else {
            order[numberOfVisibleColumns + i] = {
              visible: false,
              text: c.text,
              name: columnName,
            };
            i += 1;
          }
          return true;
        });
        return order;
      },
      onConfirm() {
        this.$emit('confirm', this.settings);
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
}
</style>
