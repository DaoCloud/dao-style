<template>
  <div class="docs-spin">
    <dcos-title :name="$t('spin')" desc="dao-spin 是用于表示加载中的组件"></dcos-title>
    <docs-section>
      <template slot="title">默认用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="components/spin/demos/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            即使你什么参数都不传, dao-spin 仍然可以很好地工作
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
     <docs-section>
      <template slot="title">更改颜色</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="components/spin/demos/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            在某些场景下，你可能需要传入`color`属性来更改 dao-spin 的颜色
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <dcos-title name="<dao-spin/> 属性" size="sm"></dcos-title>
      </template>
      <template slot="content" type="attr">
        <docs-table :rows="spinAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
  </div>
</template>

<script>
  import Demo1 from './demos/demo-1.vue';
  import Demo2 from './demos/demo-2.vue';

  export default {
    name: 'DocsSpin',
    data() {
      return {
        spinAttrs: [{
          name: 'size',
          type: 'String',
          desc: '暂时只支持 `normal`',
          options: ['normal'],
          default: 'normal',
        }, {
          name: 'color',
          type: 'String',
          desc: '',
          options: ['grey', 'white'],
          default: 'grey',
        }],
      };
    },
    components: {
      Demo1,
      Demo2,
    },
  };
</script>