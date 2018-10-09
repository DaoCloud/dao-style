<template>
  <div class="docs-spin">
    <docs-title :name="$t('steps')" desc="dao-steps 是一个多步骤视图组件"></docs-title>
    <docs-section>
      <template slot="title">默认用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="steps/demo-1.vue"></code-reader>
          <md-reader slot="desc">
          该多步骤视图组件由 `dao-steps` `dao-step` `dao-substep`  `dao-step-content` 四个组件组合而成。
          其中 `dao-steps` 的 `v-model` 允许通过编程的方式调整当前激活的 step
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title
          size="sm"
          name="<dao-step/> 属性"
          desc="需要 `step` 作为插槽名">
        </docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="stepAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title
          size="sm"
          name="<dao-substep/> 属性">
        </docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="substepAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title
          size="sm"
          name="<dao-step-content/> 属性"
          desc="需要 `content` 作为插槽名">
        </docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="stepContentAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
  </div>
</template>
<script>
import Demo1 from '@demos/steps/demo-1';

export default {
  name: 'DocsSteps',
  data() {
    return {
      stepAttrs: [{
        name: 'index',
        type: 'String',
        desc: 'step 的唯一标志',
      }, {
        name: 'title',
        type: 'String',
        desc: 'step 的 title',
      }, {
        name: 'no-click',
        type: 'Boolean',
        desc: '是否可点击',
        options: [true, false],
        default: true,
      }, {
        name: 'no-active',
        type: 'Boolean',
        desc: '是否可激活',
        options: [true, false],
        default: true,
      }, {
        name: 'active',
        type: 'Function',
        desc: '激活的回调',
      }],
      substepAttrs: [{
        name: 'index',
        type: 'String',
        desc: 'substep 的唯一标志',
      }, {
        name: 'no-click',
        type: 'Boolean',
        desc: '是否可点击',
        options: [true, false],
        default: true,
      }, {
        name: 'no-active',
        type: 'Boolean',
        desc: '是否可激活',
        options: [true, false],
        default: true,
      }, {
        name: 'active',
        type: 'Function',
        desc: '激活的回调',
      }],
      stepContentAttrs: [{
        name: 'index',
        type: 'String',
        desc: 'step-content 的唯一标志',
      }],
    };
  },
  components: {
    Demo1,
  },
};
</script>
<style lang="scss">
  
</style>
