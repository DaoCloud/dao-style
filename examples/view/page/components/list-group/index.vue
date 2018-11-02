<template>
  <div>
    <docs-title :name="$t('list-group')" desc="List Group 是一个用于侧边栏导航的样式，它是纯样式组件。"></docs-title>
    <docs-section>
      <template slot="title">默认用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="list-group/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            只需要遵循样式规范，使用指定的样式，你就可以轻易打造漂亮的侧边栏导航
            list-group 默认撑满父元素
            通过指定 list-group 的父级元素的宽度，可以改变 list-group 所有项的宽度
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">选中状态</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="spin/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            有的时候，你可能需要标记当前选中的导航栏是哪一个
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">添加图标</template>
      <template slot="content">
        <demo-code>
          <demo3 slot="demo"></demo3>
          <code-reader slot="code" file="spin/demo-3.vue"></code-reader>
          <md-reader slot="desc">
            如果你追求更加定制化的交互
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
  </div>
</template>

<script>
import Demo1 from '@demos/list-group/demo-1';
import Demo2 from '@demos/list-group/demo-2';
import Demo3 from '@demos/list-group/demo-3';

export default {
  components: {
    Demo1,
    Demo2,
    Demo3,
  },
};
</script>
