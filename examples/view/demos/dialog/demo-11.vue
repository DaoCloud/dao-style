<template>
  <div class="dao-dialog demo11">
    <button class="dao-btn blue" @click="fatherDialog.visible = true">打开外部对话框</button>
    <dao-dialog
      :visible.sync="fatherDialog.visible"
      :header="fatherDialog.header">
      <div class="body">
        <button class="dao-btn blue" @click="fatherDialog.childDialog.visible = true">打开内部对话框</button>
        <dao-dialog
          :visible.sync="fatherDialog.childDialog.visible"
          size="sm"
          :header="fatherDialog.childDialog.header">
          <div class="body">
            这是一个内部对话框
          </div>
        </dao-dialog>
      </div>
    </dao-dialog>
  </div>
</template>

<script>
export default {
  name: 'Demo11',
  data() {
    return {
      fatherDialog: {
        visible: false,
        header: {
          title: '这是外部对话框',
        },
        childDialog: {
          visible: false,
          header: {
            title: '这是内部对话框',
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.demo11 {
  .body {
    padding: 20px;
  }
}
</style>
