<template>
  <div>
      <h2>size=small 的 example</h2>
      <div class="example example1">
        <dao-info-panel @changeTab="changeTab" size="small">
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
      <hr>
      <h2>size=medium 的 example</h2>
      <div class="example example2">
        <dao-info-panel @changeTab="changeTab" size="medium">
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
      <hr>
      <h2>size=large 的 example</h2>
      <div class="example example3">
        <dao-info-panel @changeTab="changeTab" size="large">
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
        position: relative;
        border: 1px solid #eee;
        margin: 20px 0;
    }

    .example1 {
      height: 200px;
    }

    .example2 {
      height: 300px;
    }

    .example3 {
      height: 400px;
    }
</style>
