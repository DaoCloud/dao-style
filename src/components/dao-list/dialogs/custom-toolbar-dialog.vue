<template>
  <dao-dialog
    :config="config"
    :visible.sync="isShow"
    @dao-dialog-close="onClose"
    @dao-dialog-cancel="onClose">
    <div class="custom-toolbar-dialog-body">
      <p>将喜爱的操作拖入工具栏...</p>
      <div class="toolbar">
        <button class="dao-btn ghost has-icon" v-if="mainOperation">
          <svg class="icon" v-if="mainOperation.svg">
            <use xlink:href :href="`#icon_${mainOperation.svg}`"></use>
          </svg>
          <span class="text">{{mainOperation.name}}</span>
        </button>
        <div class="toolbar-operations" v-dao-droppable>
          <div class="dao-btn-group draggable"
            v-dao-draggable
            v-for="operationGroup in toolbarOperations"
            :data-key="operationGroup.groupName">
            <button class="dao-btn ghost dao-icon"
              v-for="o in operationGroup.operations">
              <svg class="icon" v-if="o.svg">
                <use xlink:href :href="`#icon_${o.svg}`"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="pull-right">
          <button class="dao-btn ghost has-icon">
            <svg class="icon">
              <use xlink:href :href="`#icon_sort-desc`"></use>
            </svg>
            <span class="text">排序依据</span>
            <svg class="icon">
              <use xlink:href="#icon_caret-down"></use>
            </svg>
          </button>
          <button class="dao-btn ghost dao-icon">
            <svg class="icon"><use xlink:href="#icon_setting"></use></svg>
            <svg class="icon"><use xlink:href="#icon_caret-down"></use></svg>
          </button>
        </div>
      </div>
      <div class="operation-container">
        <div class="operation"
          v-dao-draggable
          v-for="operationGroup in operations"
          :data-key="operationGroup.groupName">
          <div class="dao-btn-group operation-btn-group draggable">
            <button class="dao-btn ghost dao-icon" v-for="o in operationGroup.operations">
              <svg class="icon" v-if="o.svg">
                <use xlink:href :href="`#icon_${o.svg}`"></use>
              </svg>
            </button>
          </div>
          <div class="operation-name">{{operationGroup.groupName}}</div>
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
  // import _ from 'lodash';
  import Dialog from './dialog';

  export default {
    name: 'DaoListCustomToolbarDialog',
    extends: Dialog,
    props: ['operations', 'toolbarOperations', 'mainOperation'],
    data() {
      return {
        config: {
          size: 'resize',
          title: '自定义工具栏',
          showHeader: true,
        },
      };
    },
    methods: {
      onConfirm() {
        this.$emit('confirm', this.settings);
        this.onClose();
      },
    },
  };
</script>

<style lang="scss">
@import '../../dao-color.scss';

.custom-toolbar-dialog-body {
  padding: 20px;
  .toolbar {
    margin-top: 20px;
    height: 52px;
    padding: 10px;

    background-color: $white-light;
    border: solid 1px $white-dark;
  }
  .toolbar-operations {
    display: inline-block;
    .operation-name {
      display: none !important;
    }
  }
  .operation-container {
    height: 160px;
    margin-top: 10px;

    border: solid 1px $grey-light;
    .operation {
      display: inline-block;
      height: 80px;
      padding: 14px 27px;
    }

    .operation-btn-group {
      height: 32px;
      cursor: move;
      button {
        height: 32px;
        width: 32px;
        line-height: 32px;
        padding: 0;

        font-size: 16px;
        cursor: move;
        .icon {
          vertical-align: baseline;
        }
      }
    }
    .operation-name {
      margin-top: 8px;
      text-align: center;
    }
  }

  .draggable {
    cursor: move;
    button {
      cursor: move;
    }
  }
}
</style>
