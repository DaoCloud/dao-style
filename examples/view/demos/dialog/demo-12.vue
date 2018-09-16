<template>
  <div class="dao-dialog demo12">
    <button class="dao-btn blue" @click="bodyOnly.visible = true">没有header和footer</button>
    <dao-dialog
      :visible.sync="bodyOnly.visible"
      :closeOnClickOutside="true"
      :header="false"
      :footer="false">
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
    <button class="dao-btn blue" @click="customHeaderAndBody.visible = true">定制header, 定制footer</button>
    <dao-dialog
      :visible.sync="customHeaderAndBody.visible"
      :closeOnClickOutside="true">
      <div slot="header">custom header</div>
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
      <div slot="footer">custom footer</div>
    </dao-dialog>
    <button class="dao-btn blue" @click="customTitle.visible = true">自定义title</button>
    <dao-dialog
      :visible.sync="customTitle.visible"
      :closeOnClickOutside="true">
      <div slot="title"><i>自定义 title</i></div>
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
  name: 'Demo12',
  data() {
    return {
      bodyOnly: {
        visible: false,
      },
      customHeaderAndBody: {
        visible: false,
      },
      customTitle: {
        visible: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.demo12 {
  .body{
    padding: 20px;
    line-height: 40px;
  }
}
</style>
