<template>
  <ul class="dao-tab-nav dao-tab-nav-tab">
    <li  v-for="(name, index) in names" :key="index" 
      class="dao-tab-nav-item" :class="{ active: name === currentTabHeading }" 
      @click="handleClick(name)" >
      {{name}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DaoTabNav',
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
    currentTabHeading() {
      return this.$parent.currentTabHeading;
    },
  },
  methods: {
    handleClick(name) {
      this.$parent.currentTabHeading = name;
    },
  },
};
</script>

<style lang="scss" src="./dao-tab-nav.scss">
</style>
