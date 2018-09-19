<template>
  <div class="docs-button">
      <docs-title :name="$t('button')" desc="dao-btn 是用于表示按钮的组件"></docs-title>
      <docs-section>
          <template slot="title">默认用法</template>
          <template slot="content">
            <demo-code>
              <demo1 slot="demo"></demo1>
              <code-reader slot="code" file="button/demo-1.vue"></code-reader>
              <md-reader slot="desc">
                  将 class 属性值设置为 `dao-btn` 即可实现`dao-btn`的效果，使用 class 属性来定义 button 的样式；需要注意的是， mini 版暂时只支持两种颜色：grey, blue。
              </md-reader>
            </demo-code>
          </template>
      </docs-section>

      <docs-section>
          <template slot="title">禁用状态</template>
          <template slot="content">
            <demo-code>
              <demo2 slot="demo"></demo2>
              <code-reader slot="code" file="button/demo-2.vue"></code-reader>
              <md-reader slot="desc">
                使用 disabled 属性来定义按钮不可用,设置为 `true` 即可。
              </md-reader>
            </demo-code>
          </template>
      </docs-section>

      <docs-section>
          <template slot="title">小号版</template>
          <template slot="content">
            <demo-code>
              <demo3 slot="demo"></demo3>
              <code-reader slot="code" file="button/demo-3.vue"></code-reader>
              <md-reader slot="desc">
                使用 class 属性来定义按钮的尺寸,设置为 `btn-sm` 即可。
              </md-reader>
            </demo-code>
          </template>
      </docs-section>

      <docs-section>
          <template slot="title">禁用状态的小号版</template>
          <template slot="content">
            <demo-code>
              <demo4 slot="demo"></demo4>
              <code-reader slot="code" file="button/demo-4.vue"></code-reader>
              <md-reader slot="desc">
                使用 class 属性来定义按钮的尺寸,设置为 `btn-sm`; disabled 属性来定义按钮不可用，设置为 `true` 即可。
              </md-reader>
            </demo-code>
          </template>
      </docs-section>

      <docs-section>
          <template slot="title">图标按钮</template>
          <template slot="content">
            <demo-code>
              <demo5 slot="demo"></demo5>
              <code-reader slot="code" file="button/demo-5.vue"></code-reader>
              <md-reader slot="desc">
                使用 class 属性来定义按钮是否带图标，包含文字时可使用 `has-icon` (单个图标)和 `has-icons` (多个图标)，不包含文字时使用 `icon-btn` (单个图标)和 `opt-btn` (多个图标），同时配合`svg`使用来定义图标。
              </md-reader>
            </demo-code>
          </template>
      </docs-section>

      <docs-section>
          <template slot="title">组合按钮</template>
          <template slot="content">
            <demo-code>
              <demo6 slot="demo"></demo6>
              <code-reader slot="code" file="button/demo-6.vue"></code-reader>
              <md-reader slot="desc">
                使用 class 属性来定义组合按钮，设置为 `dao-btn-group`，同时配合`dao-btn`使用，可参照实例进行选择使用。
              </md-reader>
            </demo-code>
          </template>
      </docs-section>
  </div>
</template>

<script>
  import Demo1 from '@demos/button/demo-1';
  import Demo2 from '@demos/button/demo-2';
  import Demo3 from '@demos/button/demo-3';
  import Demo4 from '@demos/button/demo-4';
  import Demo5 from '@demos/button/demo-5';
  import Demo6 from '@demos/button/demo-6';

  export default {
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
    },
  };
</script>

<style lang="scss" scoped>
.demo-container {
  margin-bottom: 30px;
}
</style>
