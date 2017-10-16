<template>
  <ul class="dao-info-panel-nav">
      <li class="dao-info-panel-nav-item"
        @click="handleClick(name)"
        :class="{ active: name === active }"
        v-for="(name, index) in names"
        :key="index">
        {{ name }}
      </li>
      <li class="dao-info-panel-nav-icon" @click="changeSize('large')" :class="{ active: activeSize === 'large' }">
        <span class="icon">
          <svg><use xlink:href="#icon_panel-size-large"></use></svg>
        </span> 
      </li>
      <li class="dao-info-panel-nav-icon" @click="changeSize('medium')" :class="{ active: activeSize === 'medium' }">
        <span class="icon">
          <svg><use xlink:href="#icon_panel-size-medium"></use></svg>
        </span> 
      </li>
      <li class="dao-info-panel-nav-icon" @click="changeSize('small')" :class="{ active: activeSize === 'small' }">
        <span class="icon">
          <svg><use xlink:href="#icon_panel-size-small"></use></svg>
        </span> 
      </li>
  </ul>
</template>

<script>
export default {
  name: 'DaoInfoPanelNav',
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
      return this.$parent.userSize;
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

.dao-info-panel-nav-icon {
  display: block;
  float: right;
  height: $header-height;
  padding: 5px 2px;
  cursor: pointer;
  user-select: none;

  svg {
    width: 16px;
    height: 16px;
  }

  :hover svg {
    fill: $blue;
  }
}

.dao-info-panel-nav-icon.active {
  svg {
    fill: $blue;
  }
}
</style>

