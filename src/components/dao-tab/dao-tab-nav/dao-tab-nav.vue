<template>
  <ul class="dao-tab-nav dao-tab-nav-tab">
    <li class="dao-tab-nav-item" @click="handleClick(name)" :class="{ active: name === active }" v-for="(name, index) in names">
      {{name}}
    </li>
  </ul>
</template>
<style lang="scss">
@import './dao-tab-nav.scss';
</style>
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
      return this.tabList.map((item) => item.heading);
    },
    active() {
      return this.$parent.activeName;
    },
  },
  methods: {
    handleClick: function handleClick(name) {
      this.$parent.activeName = name;
    },
  },
};
</script>
