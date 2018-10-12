<template>
  <div class="dao-dialog demo1">
    <button class="dao-btn blue" @click="config.visible = true">最简单的默认版本</button>
    <dao-dialog :visible.sync="config.visible" header="demo1">
      <div class="body">
        在这里自定义Dialog 内容
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
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.demo1 {
  .body {
    padding: 20px;
  }
}
</style>
