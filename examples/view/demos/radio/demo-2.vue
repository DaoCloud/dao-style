<template>
  <div>
    <dao-radio-group type="block">
      <dao-radio label="111" v-model="block" headline="this is a headline" description="this is a description">
        <svg><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
      <dao-radio label="222" v-model="block" headline="this is a headline" description="this is a description">
        <svg><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
    </dao-radio-group>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        block: undefined,
      };
    },
  };
</script>
