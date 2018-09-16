<template>
  <div class="dao-dialog demo6">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :closeOnClickOutside="config.closeOnClickOutside"
      :closeOnPressEscape="config.closeOnPressEscape">
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
  name: 'Demo6',
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '设置关闭Dialog的方式',
        },
        closeOnClickOutside: true,
        closeOnPressEscape: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.demo6 {
  .body{
    padding: 20px;
    line-height: 40px;
  }
}
</style>
