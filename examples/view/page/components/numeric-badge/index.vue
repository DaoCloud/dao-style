<template>
  <div>
    默认样式：
    <dao-numeric-badge>0</dao-numeric-badge>
    <dao-numeric-badge>1</dao-numeric-badge>
    <dao-numeric-badge>123</dao-numeric-badge>
    <div class="dao-numeric-badge">123456</div>
    <br><br>
    镂空样式：
    <dao-numeric-badge :ghost="ghost">0</dao-numeric-badge>
    <dao-numeric-badge :ghost="ghost">1</dao-numeric-badge>
    <dao-numeric-badge :ghost="ghost">123</dao-numeric-badge>
    <div class="dao-numeric-badge ghost">123456</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ghost: true,
      };
    },
  };
</script>
