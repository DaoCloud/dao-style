<template>
  <div class="installation">
    <docs-title :name="$t('installation')" size="lg"></docs-title>
    <docs-section>
      <template slot="title">1. {{$t('installationPage.use_npm')}}</template>
      <template slot="content">
        <code-reader readOnly file="installation/demo-1.sh"></code-reader>
        <br>
        <code-reader readOnly type="javascript" file="installation/demo-4.js"></code-reader>
      </template>
    </docs-section>
     <docs-section>
      <template slot="title">2. {{$t('installationPage.use_html')}}</template>
      <template slot="content">
        <code-reader readOnly file="installation/demo-2.html"></code-reader>
      </template>
    </docs-section>
     <docs-section>
      <template slot="title">
        <docs-title :name="$t('installationPage.usage')" size="sm"></docs-title>
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
