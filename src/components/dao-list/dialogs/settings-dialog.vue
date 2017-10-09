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
        </ul>
      </div>
      <div class="dialog-content">
        <div v-show="tab === 'columns'">
          hhhhhh
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
  import Dialog from './dialog';

  export default {
    name: 'DaoListSettingsDialog',
    extends: Dialog,
    props: ['visible', 'columns'],
    data() {
      return {
        tab: 'columns',
        config: {
          type: 'normal',
          title: '显示选项',
          showHeader: true,
        },
      };
    },
    methods: {
      onConfirm() {
        this.$emit('confirm');
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
