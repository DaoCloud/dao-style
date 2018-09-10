<template>
  <div class="docs-button">
      <dcos-title :name="$t('button')" desc="dao-button 是用于表示按钮的组件"></dcos-title>
      <docs-section>
          <template slot="title">默认用法</template>
          <template slot="content">
            <demo-code>
              <demo1 slot="demo"></demo1>
              <code-reader slot="code" file="components/button/demos/demo-1.vue"></code-reader>
              <md-reader slot="desc">
                  mini 版暂时只支持两种颜色：grey, blue 
              </md-reader>
            </demo-code>
          </template>
      </docs-section>

      <docs-section>
          <template slot="title">Disabled</template>
          <template slot="content">
            <demo-code>
              <demo2 slot="demo"></demo2>
              <code-reader slot="code" file="components/button/demos/demo-2.vue"></code-reader>
            </demo-code>
          </template>
      </docs-section>

      <docs-section>
          <template slot="title">小号版</template>
          <template slot="content">
            <demo-code>
              <demo3 slot="demo"></demo3>
              <code-reader slot="code" file="components/button/demos/demo-3.vue"></code-reader>
            </demo-code>
          </template>
      </docs-section>

      <docs-section>
          <template slot="title">小号版 - disable</template>
          <template slot="content">
            <demo-code>
              <demo4 slot="demo"></demo4>
              <code-reader slot="code" file="components/button/demos/demo-4.vue"></code-reader>
            </demo-code>
          </template>
      </docs-section>

      <docs-section>
          <template slot="title">has icon(s)</template>
          <template slot="content">
            <demo-code>
              <demo5 slot="demo"></demo5>
              <code-reader slot="code" file="components/button/demos/demo-5.vue"></code-reader>
            </demo-code>
          </template>
      </docs-section>

      <docs-section>
          <template slot="title">icon btn</template>
          <template slot="content">
            <demo-code>
              <demo6 slot="demo"></demo6>
              <code-reader slot="code" file="components/button/demos/demo-6.vue"></code-reader>
            </demo-code>
          </template>
      </docs-section>

      <docs-section>
          <template slot="title">icon btn</template>
          <template slot="content">
            <demo-code>
              <demo7 slot="demo"></demo7>
              <code-reader slot="code" file="components/button/demos/demo-7.vue"></code-reader>
            </demo-code>
          </template>
      </docs-section>
  </div>
</template>
<script>
  import Demo1 from './demos/demo-1.vue';
  import Demo2 from './demos/demo-2.vue';
  import Demo3 from './demos/demo-3.vue';
  import Demo4 from './demos/demo-4.vue';
  import Demo5 from './demos/demo-5.vue';
  import Demo6 from './demos/demo-6.vue';
  import Demo7 from './demos/demo-7.vue';
  export default {
    data() {
      return {};
    },
    methods: {
      handleClick() {
        alert(1);
      },
    },
    components: {
      Demo1,
      Demo2,
      Demo3,
      Demo4,
      Demo5,
      Demo6,
      Demo7,
    },
  };
</script>
<style lang="scss" scoped>
.demo-container {
  margin-bottom: 30px;
}
</style>