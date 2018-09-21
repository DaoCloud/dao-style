<template>
  <div>
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
      <button class="dao-btn icon-btn">
        <svg class="icon"><use xlink:href="#icon_trash"></use></svg>
      </button>
      <button class="dao-btn icon-btn">
        <svg class="icon"><use xlink:href="#icon_trash"></use></svg>
      </button>
      <button class="dao-btn icon-btn" :disabled="true">
        <svg class="icon"><use xlink:href="#icon_trash"></use></svg>
      </button>
    </span>
  </div>
</template>