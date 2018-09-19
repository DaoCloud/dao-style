<template>
  <div class="docs-setting-layout">
    <docs-title :name="$t('setting-layout')" desc="dao-setting-layout 是一套表单布局方面的组件"></docs-title>
    <docs-section>
      <template slot="title">默认用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="setting-layout/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            一般情况下 ``&lt;dao-setting-item&gt;`` 节点可省略不写
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">class 用法</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="setting-layout/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            一般情况下 ``class="dao-setting-item"`` 的节点可省略不写
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-setting-layout/> Slot" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="settingLayoutSlots" type="slot"></docs-table>
      </template>
    </docs-section>
  </div>
</template>

<script>
  import Demo1 from '@demos/setting-layout/demo-1';
  import Demo2 from '@demos/setting-layout/demo-2';

  export default {
    name: 'DocsSettingLayout',
    data() {
      return {
        settingLayoutSlots: [{
          name: 'layout-title',
          desc: '大标题',
        }, {
          name: 'layout-title-helper',
          desc: '大标题说明文字',
        }, {
          name: 'section-title',
          desc: '块内容标题',
        }, {
          name: 'section-title-helper',
          desc: '块内容标题说明文字',
        }, {
          name: 'label',
          desc: '左侧小标题',
        }, {
          name: 'content',
          desc: '右侧内容块',
        }, {
          name: 'content-helper',
          desc: '右侧内容块说明文字',
        }],
      };
    },
    components: {
      Demo1,
      Demo2,
    },
  };
</script>