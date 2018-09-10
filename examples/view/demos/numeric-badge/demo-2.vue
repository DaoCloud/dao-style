<template>
  <div>
    镂空样式：
    <dao-numeric-badge :ghost="ghost">0</dao-numeric-badge>
    <dao-numeric-badge :ghost="ghost">1</dao-numeric-badge>
    <dao-numeric-badge :ghost="ghost">123</dao-numeric-badge>
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
