<template>
  <div>
      <div class="example" v-for="demo in demos" :key="demo.size">
        <div class="top-body">
          <h1>{{demo.desc}} -> size: {{demo.size}}</h1>
        </div>
        <dao-panel @changeTab="changeTab" :size="demo.size" class="bottom-body">
          <dao-panel-item heading="heading1">
            <p>@content1</p>
          </dao-panel-item>
          <dao-panel-item heading="heading2">
            <p>@content2</p>
          </dao-panel-item>
        </dao-panel>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demos: [
        {
          desc: 'demo1',
          size: 's',
        },
        {
          desc: 'demo2',
          size: 'm',
        },
        {
          desc: 'demo3',
          size: 'l',
        },
      ],
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
