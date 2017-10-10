<template>
  <div>
    <div class="demo-container">
      <button class="dao-btn blue" @click="handleClick">blue</button>
      <button class="dao-btn green">green</button>
      <button class="dao-btn yellow">yellow</button>
      <button class="dao-btn orange">orange</button>
      <button class="dao-btn red">red</button>
      <button class="dao-btn ghost">ghost</button>
      <button class="dao-btn blue" :disabled="true">disabled</button>
    </div>

    <div class="demo-container">
      <button class="dao-btn btn-sm blue">blue</button>
      <button class="dao-btn btn-sm green">green</button>
      <button class="dao-btn btn-sm yellow">yellow</button>
      <button class="dao-btn btn-sm orange">orange</button>
      <button class="dao-btn btn-sm red">red</button>
      <button class="dao-btn btn-sm ghost">ghost</button>
      <button class="dao-btn btn-sm blue" :disabled="true">disabled</button>
    </div>

    <div class="demo-container">
      <button class="dao-btn blue has-icon">
        <svg class="icon"><use xlink:href="#icon_archive"></use></svg>
        <span class="text">blue</span>
      </button>
      <button class="dao-btn blue has-icon">
        <span class="text">blue</span>
        <svg class="icon"><use xlink:href="#icon_archive"></use></svg>
      </button>
      <button class="dao-btn blue has-icon">
        <svg class="icon"><use xlink:href="#icon_archive"></use></svg>
        <span class="text">blue</span>
        <svg class="icon"><use xlink:href="#icon_archive"></use></svg>
      </button>
    </div>

    <div class="demo-container">
      <span class="dao-btn-group">
        <button class="dao-btn ghost">ghost</button>
        <button class="dao-btn ghost dao-icon">
          <svg class="icon"><use xlink:href="#icon_down-arrow"></use></svg>
        </button>
      </span>

      <span class="dao-btn-group">
        <button class="dao-btn blue">blue</button>
        <div class="space">11</div>
        <button class="dao-btn blue">blue</button>
        <button class="dao-btn blue">blue</button>
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {};
    },
    methods: {
      handleClick() {
        alert(1);
      },
    },
  };
</script>
<style lang="scss" scoped>
.demo-container {
  margin-bottom: 30px;
}
</style>