<template>
  <div class="dao-dialog demo2">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header">
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
  name: 'Demo2',
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '显示关闭按钮',
          showClose: true,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.demo2 {
  .body{
    padding: 20px;
    line-height: 40px;
  }
}
</style>
