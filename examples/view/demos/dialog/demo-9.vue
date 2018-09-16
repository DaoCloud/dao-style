<template>
  <div class="dao-dialog demo9">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :top="config.top"
      :bottom="config.bottom">
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
  name: 'Demo9',
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '修改 top 和 bottom',
        },
        top: '30px',
        bottom: '50px',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.demo9 {
  .body{
    padding: 20px;
    line-height: 40px;
  }
}
</style>
