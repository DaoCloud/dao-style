<template>
  <div>
      <div class="example example1">
        <div class="top-body">
          <h1>size small</h1>
        </div>
        <dao-info-panel @changeTab="changeTab" size="small" class="bottom-body">
          <dao-info-panel-item heading="f1">
            <p>@p1</p>
          </dao-info-panel-item>
          <dao-info-panel-item heading="f2">
            <p>@p2</p>
          </dao-info-panel-item>
          <dao-info-panel-item heading="f3">
            <iframe src="https://www.baidu.com/" frameborder="0" width="100%" height="500px"></iframe>
          </dao-info-panel-item>
          <dao-info-panel-item heading="f444444444444444">
            <img src="https://img.moegirl.org/common/thumb/4/41/Nicky.jpg/250px-Nicky.jpg" alt="???">
          </dao-info-panel-item>
        </dao-info-panel>
      </div>
      <div class="example example2">
        <div class="top-body">
          <h1>size medium</h1>
          <h1>size medium</h1>
          <h1>size medium</h1>
          <h1>size medium</h1>
          <h1>size medium</h1>
          <h1>size medium</h1>
          <h1>size medium</h1>
          <h1>size medium</h1>
          <h1>size medium</h1>
          <h1>size medium</h1>
          <h1>size medium</h1>
          <h1>size medium</h1>
          <h1>size medium</h1>
        </div>
        <dao-info-panel @changeTab="changeTab" size="medium" class="bottom-body">
            <dao-info-panel-item heading="f1">
              <p>@p1</p>
            </dao-info-panel-item>
            <dao-info-panel-item heading="f2">
              <p>@p2</p>
            </dao-info-panel-item>
            <dao-info-panel-item heading="f3">
              <iframe src="https://www.baidu.com/" frameborder="0" width="100%" height="500px"></iframe>
            </dao-info-panel-item>
            <dao-info-panel-item heading="f444444444444444">
              <img src="https://img.moegirl.org/common/thumb/4/41/Nicky.jpg/250px-Nicky.jpg" alt="???">
            </dao-info-panel-item>
        </dao-info-panel>
      </div>
      <div class="example example3">
        <div class="top-body">
          <h1>size large</h1>
        </div>
        <dao-info-panel @changeTab="changeTab" size="large" minHeight="20%" class="bottom-body">
            <dao-info-panel-item heading="f1">
              <p>@p1</p>
            </dao-info-panel-item>
            <dao-info-panel-item heading="f2">
              <p>@p2</p>
            </dao-info-panel-item>
            <dao-info-panel-item heading="f3">
              <iframe src="https://www.baidu.com/" frameborder="0" width="100%" height="500px"></iframe>
            </dao-info-panel-item>
            <dao-info-panel-item heading="f444444444444444">
              <img src="https://img.moegirl.org/common/thumb/4/41/Nicky.jpg/250px-Nicky.jpg" alt="???">
            </dao-info-panel-item>
        </dao-info-panel>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    changeTab(v) {
      console.log(`change tab to: ${v}`);
    },
  },
};
</script>

<style lang="scss" scoped>
    .example {
        width: 100%;
        height: 500px;
        border: 1px solid #eee;
        margin: 20px 0;
        display: flex;
        flex-direction: column;

      .top-body {
        flex: 1 1 auto;
        overflow: auto;
      }

      .bottom-body {
        flex: 0 0 auto;
      }
    }
</style>
