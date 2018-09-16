<template>
  <div class="dao-dialog demo7">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :lockScroll="config.lockScroll">
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
  name: 'Demo7',
  data() {
    return {
      config:           {
        visible: false,
        header: {
          title: '不锁定 body 滚动',
        },
        lockScroll: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.demo7 {
  .body{
    padding: 20px;
    line-height: 40px;
  }
}
</style>
