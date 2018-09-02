<template>
  <div class="installation">
    <dcos-title :name="$t('installation')" size="lg"></dcos-title>
    <docs-section v-for="n in ['一', '二', '三']" :key="n">
      <template slot="title">
        第{{n}}种使用方式
      </template>
      <template slot="helper">
        [第{{n}}种使用方式的适用场景]
      </template>
      <template slot="content">
        <demo-code>
          <demo slot="demo"></demo>
          <code-reader slot="code" file="installation/demo.vue"></code-reader>
          <md-reader slot="desc">
          这里可以用来写这种使用方式的注意事项
          1. 简单 markdown 语法渲染
          2. table 会被渲染成 dao-table
          3. 只有一种高亮情况`我被高亮了`, 如果是代码的话，建议使用 `code-reader` 组件比较强大
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <dcos-title name="<Custom-Tag> 的属性" ></dcos-title>
      </template>
      <template slot="content">
        <docs-table :rows="atrrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <dcos-title name="<Custom-Tag> 的方法" ></dcos-title>
      </template>
      <template slot="content">
        <docs-table :rows="methods" type="method"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <dcos-title name="<Custom-Tag> 的事件" type="event"></dcos-title>
      </template>
      <template slot="content">
        <docs-table :rows="events" type="event"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <dcos-title name="<Custom-Tag> 的插槽"></dcos-title>
      </template>
      <template slot="content" type="slot">
        <docs-table :rows="slots" type="slot"></docs-table>
      </template>
    </docs-section>
</div>
</template>

<script>
import Demo from './demo.vue';

export default {
  name: 'Installation',
  components: {
    Demo,
  },
  data() {
    return {
      atrrs: [
        {
          name: 'a',
          type: 'String',
          desc: '你可以在这里写 `markdown` 语法',
          options: ['aaa', 'bbb'],
          default: 'aaa',
        },
        {
          name: 'b',
          type: ['String', 'Number'],
          desc: '',
          options: ['cccc', 'ddd'],
          default: '',
        },
      ],
      methods: [{
        name: 'a',
        parameter: '(a, b)',
        return: 'rows',
        desc: 'sss',
      }],
      events: [
        {
          name: 'a',
          parameter: '(a, b)',
          return: 'rows',
          desc: 'kkkk',
        },
      ],
      slots: [{
        name: 'a',
        desc: '你可以在这里写 `markdown` 语法',
      }],
    };
  },
};

</script>

<style lang="scss">

</style>
