<template>
  <div class="dao-dialog demo3">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :footer="config.footer">
      <div class="body">
        <h2>Dialog Content</h2>
        <h2>Dialog Content</h2>
        <h2>Dialog Content</h2>
        <h2>Dialog Content</h2>
        <h2>Dialog Content</h2>
        <h2>Dialog Content</h2>
        <h2>Dialog Content</h2>
        <h2>Dialog Content</h2>
        <h2>Dialog Content</h2>
        <h2>Dialog Content</h2>
      </div>
    </dao-dialog>
  </div>
</template>

<script>
export default {
  name: 'Demo3',
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '自定义 footer 属性',
        },
        footer: {
          confirmText: '确认1',
          cancelText: '取消1',
          confirmDisabled: true,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.demo3 {
  .body{
    padding: 20px;
    line-height: 40px;
  }
}
</style>
