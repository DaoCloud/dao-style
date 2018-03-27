<template>
  <div>
    <div class="demo-container">
      <h2>default size</h2>
      <br>
      <button class="dao-btn blue" @click="handleClick">blue</button>
      <button class="dao-btn green">green</button>
      <button class="dao-btn red">red</button>
      <button class="dao-btn default">default</button>
      <button class="dao-btn ghost">ghost</button>
      <button class="dao-btn mini grey">mini-grey</button>
      <button class="dao-btn mini blue">mini-blue</button>
    </div>

    <div class="demo-container">
      <h2>default size - disabled</h2>
      <br>
      <button class="dao-btn blue" :disabled="true">disabled</button>
      <button class="dao-btn green" :disabled="true">disabled</button>
      <button class="dao-btn red" :disabled="true">disabled</button>
      <button class="dao-btn default" :disabled="true">disabled</button>
      <button class="dao-btn ghost" :disabled="true">disabled</button>
      <button class="dao-btn" :disabled="true">disabled</button>
    </div>

    <div class="demo-container">
      <h2>small size</h2>
      <br>
      <button class="dao-btn btn-sm blue">blue</button>
      <button class="dao-btn btn-sm green">green</button>
      <button class="dao-btn btn-sm red">red</button>
      <button class="dao-btn btn-sm default">default</button>
      <button class="dao-btn btn-sm ghost">ghost</button>
      <button class="dao-btn btn-sm mini grey">mini-grey</button>
      <button class="dao-btn btn-sm mini blue">mini-blue</button>
    </div>

    <div class="demo-container">
      <h2>small size - disabled</h2>
      <br>
      <button class="dao-btn btn-sm blue" :disabled="true">disabled</button>
      <button class="dao-btn btn-sm green" :disabled="true">disabled</button>
      <button class="dao-btn btn-sm red" :disabled="true">disabled</button>
      <button class="dao-btn btn-sm default" :disabled="true">disabled</button>
      <button class="dao-btn btn-sm ghost" :disabled="true">disabled</button>
      <button class="dao-btn btn-sm" :disabled="true">disabled</button>
    </div>

    <div class="demo-container">
      <h2>has icon(s)</h2>
      <br>
      <button class="dao-btn blue has-icon">
        <svg class="icon"><use xlink:href="#icon_archive"></use></svg>
        <span class="text">blue</span>
      </button>
      <button class="dao-btn blue has-icon">
        <span class="text">blue</span>
        <svg class="icon"><use xlink:href="#icon_archive"></use></svg>
      </button>
      <button class="dao-btn blue has-icons">
        <svg class="icon"><use xlink:href="#icon_sort-desc"></use></svg>
        <span class="text">blue</span>
        <svg class="icon"><use xlink:href="#icon_caret-down"></use></svg>
      </button>
    </div>

    <div class="demo-container">
      <h2>icon btn</h2>
      <br>
      <button class="dao-btn blue icon-btn">
        <svg class="icon"><use xlink:href="#icon_play"></use></svg>
      </button>
      <button class="dao-btn blue opt-btn">
        <svg class="icon"><use xlink:href="#icon_setting"></use></svg>
        <svg class="icon"><use xlink:href="#icon_caret-down"></use></svg>
      </button>
    </div>

    <div class="demo-container">
      <h2>btn group</h2>
      <br>
      <span class="dao-btn-group">
        <button class="dao-btn ghost">ghost</button>
        <button class="dao-btn ghost dao-icon">
          <svg class="icon"><use xlink:href="#icon_down-arrow"></use></svg>
        </button>
      </span>

      <span class="dao-btn-group">
        <button class="dao-btn blue">blue</button>
        <button class="dao-btn blue">blue</button>
        <button class="dao-btn blue" :disabled="true">blue</button>
      </span>

      <span class="dao-btn-group">
        <button class="dao-btn ghost">ghost</button>
        <button class="dao-btn ghost">ghost</button>
        <button class="dao-btn ghost" :disabled="true">ghost</button>
      </span>
      
      <span class="dao-btn-group">
        <button class="dao-btn ghost icon-btn">
          <svg class="icon"><use xlink:href="#icon_trash"></use></svg>
        </button>
        <button class="dao-btn ghost icon-btn">
          <svg class="icon"><use xlink:href="#icon_trash"></use></svg>
        </button>
        <button class="dao-btn ghost icon-btn" :disabled="true">
          <svg class="icon"><use xlink:href="#icon_trash"></use></svg>
        </button>
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
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