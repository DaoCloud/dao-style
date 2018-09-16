<template>
  <div class="dao-dialog demo4">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :containerClass="config.containerClass">
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
  name: 'Demo4',
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '自定义 container class',
        },
        containerClass: 'custom-class',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.demo4 {
  .body{
    padding: 20px;
    line-height: 40px;
  }
}
</style>
