<template>
  <ul class="dao-panel-nav">
    <li class="dao-panel-nav-item"
      @click="handleClick(name)"
      :class="{ active: name === active }"
      v-for="(name, index) in names"
      :key="index">
      {{ name }}
    </li>
    <li class="dao-panel-nav-icon first" @click="changeSize('l')" :class="{ active: activeSize === 'l' }">
      <span class="icon">
        <svg><use xlink:href="#icon_panel-size-large"></use></svg>
      </span> 
    </li>
    <li class="dao-panel-nav-icon" @click="changeSize('m')" :class="{ active: activeSize === 'm' }">
      <span class="icon">
        <svg><use xlink:href="#icon_panel-size-medium"></use></svg>
      </span> 
    </li>
    <li class="dao-panel-nav-icon" @click="changeSize('s')" :class="{ active: activeSize === 's' }">
      <span class="icon">
        <svg><use xlink:href="#icon_panel-size-small"></use></svg>
      </span> 
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DaoPanelNav',
  props: {
    tabList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    names() {
      return this.tabList.map(item => item.heading);
    },
    active() {
      return this.$parent.activeName;
    },
    activeSize() {
      return this.$parent.activeSize;
    },
  },
  methods: {
    handleClick(name) {
      this.$parent.activeName = name;
    },
    changeSize(size) {
      this.$parent.changeSize(size);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../dao-color.scss';
$header-height: 26px;

.dao-panel-nav-icon {
  display: block;
  float: right;
  height: $header-height;
  padding: 5px 2px 5px 1px;
  cursor: pointer;
  user-select: none;
  fill: #9ba3af;

  svg {
    width: 16px;
    height: 16px;
  }

  :hover svg {
    fill: #368bff;
  }
}

.dao-panel-nav-icon.active {
  svg {
    fill: #368bff;
  }
}

.dao-panel-nav-icon.first {
  margin-right: 8px;
}
</style>

