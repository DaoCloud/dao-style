<template>
  <div class="dao-dialog demo1">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      @before-close="onBeforeClose"
      @closed="onClosed"
      @before-open="onBeforeOpen"
      @opened="onOpened"
      @confirm="onConfirm"
      @cancel="onCancel">
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
  name: 'Demo1',
  data() {
    return {
      config: {
        visible: false,
        header: '最简单的默认版本',
      },
    };
  },
  methods: {
    onConfirm() {
      console.info('点击了确定');
    },
    onCancel() {
      console.info('点击了取消');
    },
    onBeforeClose() {
      console.info('关闭之前');
    },
    onClosed() {
      console.info('关闭之后');
    },
    onBeforeOpen() {
      console.info('打开之前');
    },
    onOpened() {
      console.info('打开之后');
    },
  },
};
</script>

<style lang="scss" scoped>
.demo1 {
  .body{
    padding: 20px;
    line-height: 40px;
  }
}
</style>
