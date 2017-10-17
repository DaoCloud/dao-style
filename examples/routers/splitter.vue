<template>
  <div>
    <div class="example example1">
      <dao-splitter>
        <template slot="dao-splitter-top">sb</template>
        <template slot="dao-splitter-bottom">sx</template>
      </dao-splitter>
    </div>
    <div class="example example2">
      <dao-splitter :config="config1">
        <template slot="dao-splitter-top">
          <p>h1</p>
          <p>h3</p>
          <p>h15</p>
          <p>h1</p>
          <p>h1</p>
          <p>h1</p>
          <p>h1</p>
          <p>h1</p>
        </template>
        <template slot="dao-splitter-bottom">
          <p>h2</p>
          <p>h2</p>
          <p>h2</p>
          <p>h2</p>
          <p>h2</p>
          <p>h2</p>
          <p>h2</p>
          <p>h2</p>
        </template>
      </dao-splitter>
    </div>
    <div class="example example3">
      <dao-splitter :config="config2">
        <div class="top-body" slot="dao-splitter-top">
          <p>h1</p>
          <p>h3</p>
          <p>h15</p>
          <p>h1</p>
          <p>h1</p>
          <p>h1</p>
          <p>h1</p>
          <p>h1</p>
        </div>
        <div class="bottom-body" slot="dao-splitter-bottom">
          <p>h2</p>
          <p>h2</p>
          <p>h2</p>
          <p>h2</p>
          <p>h2</p>
          <p>h2</p>
          <p>h2</p>
          <p>h2</p>
        </div>
      </dao-splitter>
    </div>
  </div>
</template>

<script>
export default {
  name: 'splitter',
  data() {
    return {
      config1: {
        height: '100%',
        topMin: '100px',
        bottomMin: '100px',
        dividerHeight: '10px',
      },
      config2: {
        height: '300px',
        topMin: '50px',
        bottomMin: '50px',
        dividerHeight: '5px',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .example1 {
    height: 500px;
    width: 400px;
    border: 1px solid grey;
  }

  .example2 {
    height: 500px;
    width: 600px;
    border: 1px solid grey;
    margin-top: 50px;
  }

  .example3 {
    height: 500px;
    width: 400px;
    border: 1px solid grey;
    margin-top: 50px;

    .top-body {
      overflow-y: scroll;
    }

    .bottom-body {
      overflow-y: scroll;
    }
  }
</style>
