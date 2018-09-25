<template>
  <div>
    <dao-radio-group type="grid" :grid-col="5">
      <dao-radio label="111" v-model="grid" headline="this is a headline" description="this is a description">
        <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
      <dao-radio label="222" v-model="grid" headline="this is a headline" description="this is a description">
        <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
      <dao-radio label="333" v-model="grid" headline="this is a headline" description="this is a description">
        <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
      <dao-radio label="444" v-model="grid" headline="this is a headline" description="this is a description">
        <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
    </dao-radio-group>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        grid: undefined,
      };
    },
  };
</script>
