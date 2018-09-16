<template>
  <div class="dao-dialog demo10">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :allowResize="config.allowResize">
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
  name: 'Demo10',
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '可以通过拖拽改变大小',
        },
        allowResize: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.demo10 {
  .body{
    padding: 20px;
    line-height: 40px;
  }
}
</style>
