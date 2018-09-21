<template>
  <div class="installation">
    <docs-title :name="$t('installation')" size="lg"></docs-title>
    <docs-section>
      <template slot="title">1.使用 npm 安装</template>
      <template slot="content">
        <code-reader readOnly file="installation/demo-1.sh"></code-reader>
        <br>
        <code-reader readOnly type="javascript" file="installation/demo-4.js"></code-reader>
      </template>
    </docs-section>
     <docs-section>
      <template slot="title">2.使用 script 标签引入</template>
      <template slot="content">
        <code-reader readOnly file="installation/demo-2.html"></code-reader>
      </template>
    </docs-section>
     <docs-section>
      <template slot="title">
        <docs-title name="使用" size="sm"></docs-title>
      </template>
      <template slot="content">
        <code-reader readOnly file="installation/demo-3.vue"></code-reader>
      </template>
    </docs-section>
  </div>
</template>

<script>

export default {
  name: 'Installation',
};

</script>
