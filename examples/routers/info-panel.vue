<template>
  <div>
      <div class="example1">
        <dao-info-panel @changeTab="changeTab">
            <dao-info-panel-item heading="f1">
              <p>@p1</p>
            </dao-info-panel-item>
            <dao-info-panel-item heading="f2">
              <p>@p2</p>
            </dao-info-panel-item>
            <dao-info-panel-item heading="f3">
              <p>@p3</p>
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
    .example1 {
        width: 100%;
        height: 500px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
