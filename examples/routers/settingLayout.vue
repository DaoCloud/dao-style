<template>
  <dao-setting-layout>
    <div slot="layout-title">大标题</div>
    <div slot="layout-title-helper">大标题一定要有，表单必有头</div>
    <dao-setting-section>
      <div slot="section-title">块内容标题</div>
      <div slot="section-title-helper">一般情况下不需要块内容标题，需要显示表格时才可能要用到</div>
      <div slot="label">左侧小标题</div>
      <div slot="content">
        <div>右侧内容</div>
        <div>需要换行显示的内容一定要用 &lt;div&gt; 包裹</div>
      </div>
      <div slot="content-helper">&lt;dao-setting-section&gt; 之间是有分割线的</div>
    </dao-setting-section>
    <dao-setting-section>
      <dao-setting-item>
        <div slot="label">dao-setting-item-label</div>
        <div slot="content">注意这两个 dao-setting-item 中间没有分割线</div>
        <div slot="content-helper">中间不要有分割线的情况很少见，当遇到该需求时可以使用该 &lt;dao-setting-item&gt; 组件</div>
      </dao-setting-item>
      <dao-setting-item>
        <div slot="label">dao-setting-item-label</div>
        <div slot="content">注意这两个 dao-setting-item 中间没有分割线</div>
        <div slot="content-helper">中间不要有分割线的情况很少见，当遇到该需求时可以使用该 &lt;dao-setting-item&gt; 组件</div>
      </dao-setting-item>
    </dao-setting-section>
    <div slot="footer">
      <div class="dao-btn blue">保存</div>
    </div>
  </dao-setting-layout>
</template>
<script>
export default {
  data () {
    return {};
  },
};
</script>
<style lang="scss">
  
</style>