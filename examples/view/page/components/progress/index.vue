<template>
  <div class="docs-progress">
    <docs-title :name="$t('progress')" desc="dao-progress 是用于表示进度条的组件，及其宽度由父元素决定，它会自动撑满父元素的宽度。"></docs-title>
    <docs-section>
      <template slot="title">默认用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="progress/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            通过设置 `type` 属性更改进度条类型且为必填，并通过`progress` 属性来设置进度，必须在 0 - 1。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>

    <docs-section>
      <template slot="title">脉动版</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="progress/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            `dao-progress-pulsing` 组件设置 `progress` 属性即可，必须在 0 - 1。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>

    <docs-section>
      <template slot="title">组合版</template>
      <template slot="content">
        <demo-code>
          <demo3 slot="demo"></demo3>
          <code-reader slot="code" file="progress/demo-3.vue"></code-reader>
          <md-reader slot="desc">
            `dao-progress-stacked` 组件设置 `green` `red` `stripe` `black` 属性即可。每个色条都是 `flex: 1 1 auto`,也就是说，如果四种颜色的进度加起来不等于 1，那么剩余的宽度就会被四种颜色平分。
          </md-reader>
        </demo-code>
      </template>
    </docs-section>

    <docs-section>
      <template slot="title">
        <docs-title name="<progress/> 属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="progressAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
  </div>
</template>

<script>
  import Demo1 from '@demos/progress/demo-1';
  import Demo2 from '@demos/progress/demo-2';
  import Demo3 from '@demos/progress/demo-3';

  export default {
    name: 'DocsProgress',
    data() {
      return {
        progressAttrs: [{
          name: 'type',
          type: 'string',
          desc: '普通进度条的类型，必填',
          options: ['basic', 'usage', 'error'],
          default: '-',
        }, {
          name: 'progress',
          type: 'number',
          desc: '进度条的进度，可选',
          options: ['0 - 1'],
          default: '0',
        }, {
          name: 'green',
          type: 'number',
          desc: '分格进度条中绿色的进度，可选',
          options: ['0 - 1'],
          default: '0',
        }, {
          name: 'red',
          type: 'number',
          desc: '分格进度条中红色的进度，可选',
          options: ['0 - 1'],
          default: '0',
        }, {
          name: 'stripe',
          type: 'number',
          desc: '分格进度条中条纹的进度，可选',
          options: ['0 - 1'],
          default: '0',
        }, {
          name: 'black',
          type: 'number',
          desc: '分格进度条中黑色的进度，可选',
          options: ['0 - 1'],
          default: '0',
        }],
      };
    },
    components: {
      Demo1,
      Demo2,
      Demo3,
    },
  };
</script>

<style lang="scss" scoped>
.demo-container {
  margin-bottom: 30px;
}
</style>
