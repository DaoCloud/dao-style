<template>
  <div class="dao-dialog demo5">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :size="config.size">
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
  name: 'Demo5',
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '自定义大小',
        },
        size: {
          width: '888px',
          height: '333px',
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.demo5 {
  .body{
    padding: 20px;
    line-height: 40px;
  }
}
</style>
