<template>
  <dao-dialog
    :config="config"
    :visible.sync="isShow"
    @dao-dialog-close="onClose"
    @dao-dialog-cancel="onClose">
    将喜爱的操作拖入工具栏
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
    name: 'DaoListCustomToolbarDialog',
    extends: Dialog,
    props: [],
    data() {
      return {
        config: {
          size: 'lg',
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
</style>
