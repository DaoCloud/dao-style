<template>
  <div>
    <div class="demo-block">
      <h2 class="demo-block__title"> Demo 1 </h2>
      <dao-tab direction="right" >
        <dao-tab-item heading="标题1">
          <p class="demo-tab-wrap first">
            Some Tab Content
          </p>
        </dao-tab-item>
        <dao-tab-item heading="标题2">
          <div class="demo-tab-wrap">
            <h3>Item 2</h3>
            <div class="demo-tab-input__wrap">
              <label for="example1"> Example 1 : </label>
              <input type="text" name="e1" value="" id="example1">
            </div>
            <div class="demo-tab-input__wrap">
              <label for="example2"> Example 2 : </label>
              <input type="text" name="e2" value="" id="example2">
            </div>
            <button type="submit" name="button" class="dao-btn blue"> 提交 </button>
          </div>
        </dao-tab-item>
      </dao-tab>
    </div>
    <div class="demo-block">
      <h2 class="demo-block__title"> Demo 2 </h2>
      <dao-tab direction="left" >
        <dao-tab-item :heading="tab.heading" key="index" v-for="(tab, index) in tabs" >
          <p class="demo-tab-wrap">
            {{tab.body}}
          </p>
        </dao-tab-item>
      </dao-tab>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .demo-block {
    margin-top: 50px;

    .demo-block__title {
      margin-bottom: 20px;
    }
  }

  .demo-tab-wrap {
    height: 300px;
    text-align: center;

    button {
      margin-top: 50px;
    }

    &.first {
      padding: 10px;
    }

    .demo-tab-input__wrap {
      margin-top: 20px;
      input {
        width: 30%;
        padding: 5px 8px;
      }
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        tabs: [
          {
            heading: 'HEAD1',
            body: "Some Tab Content",
          },
          {
            heading: 'HEAD2',
            body: "More Tab Content",
          },
        ],
      }
    }
  };
</script>
