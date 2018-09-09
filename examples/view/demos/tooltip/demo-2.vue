<template>
  <div>
    <dao-tooltip
            content="Right Center 提示文字"
            placement="right"
            :delay="delay">
      <button class="dao-btn ghost">右边 && 延迟 1000 ms</button>
    </dao-tooltip>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        delay: 1000,
      };
    },
  };
</script>
