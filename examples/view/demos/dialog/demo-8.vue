<template>
  <div class="dao-dialog demo8">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :middle="config.middle">
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
  name: 'Demo8',
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '垂直居中',
        },
        middle: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.demo8 {
  .body{
    padding: 20px;
    line-height: 40px;
  }
}
</style>
