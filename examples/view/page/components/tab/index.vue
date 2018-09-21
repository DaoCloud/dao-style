<template>
  <div>
    <docs-title :name="$t('tab')" desc="方便您通过选项卡方便的切换视图"></docs-title>
    <docs-section>
      <template slot="title">基本用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="tab/demo-1.vue"></code-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">更改选项卡方向</template>
      <template slot="content">
        <demo-code>
          <demo2 slot="demo"></demo2>
          <code-reader slot="code" file="tab/demo-2.vue"></code-reader>
          <md-reader slot="desc">
            可以通过`direction`属性来更改选项卡的的方向
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">动态切换选项卡</template>
      <template slot="content">
        <demo-code>
          <demo3 slot="demo"></demo3>
          <code-reader slot="code" file="tab/demo-3.vue"></code-reader>
          <md-reader slot="desc">
            可以通过改变`currentTab`属性动态切换选项卡
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">事件绑定</template>
      <template slot="content">
        <demo-code>
          <demo4 slot="demo"></demo4>
          <code-reader slot="code" file="tab/demo-4.vue"></code-reader>
          <md-reader slot="desc">
            currentTab 改变时会触发`changeTab`事件。
          </md-reader>
        </demo-code>
      </template>
    </docs-section> 
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-tab/> 属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="tabAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-tab/> 事件" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="tabEvents" type="event"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-tab-item/> 属性" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="tabItemAttrs" type="attr"></docs-table>
      </template>
    </docs-section>
    <docs-section>
      <template slot="title">
        <docs-title name="<dao-tab-item/> 插槽" size="sm"></docs-title>
      </template>
      <template slot="content">
        <docs-table :rows="tabItemSlotAttrs" type="slot"></docs-table>
      </template>
    </docs-section>
  </div>
</template>

<script>
  import Demo1 from '@demos/tab/demo-1';
  import Demo2 from '@demos/tab/demo-2';
  import Demo3 from '@demos/tab/demo-3';
  import Demo4 from '@demos/tab/demo-4';

  export default {
    name: 'DocsTab',
    data() {
      return {
        tabAttrs: [{
          name: 'direction',
          type: 'String',
          desc: '控制选项卡的方向',
          options: ['left', 'right'],
          default: 'left',
        }, {
          name: 'currentTab',
          type: 'String',
          desc: '当前选项卡显示的文字',
          options: ['-'],
          default: '第一个选项卡显示的文字',
        }],
        tabEvents: [{
          name: 'changeTab',
          desc: '切换选项卡触发的触发的事件',
          parameter: '将要切换到的选项卡显示的文字',
        }],
        tabItemAttrs: [{
          name: 'heading',
          type: 'String',
          desc: '选项卡显示的文字',
          options: ['-'],
          default: '-',
        }],
        tabItemSlotAttrs: [{
          name: '-',
          desc: '选项卡对应的视图',
        }],
      };
    },
    components: {
      Demo1,
      Demo2,
      Demo3,
      Demo4,
    },
  };
</script>
