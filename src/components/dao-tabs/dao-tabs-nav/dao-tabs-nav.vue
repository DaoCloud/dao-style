<template>
  <ul class="dao-tabs-nav dao-tab-nav-tabs">
    <li class="dao-tabs-nav-item" @click="handleClick(name)" :class="{ active: name === active }" v-for="(name, index) in names">
      {{name}}
    </li>
  </ul>
</template>
<style lang="scss">
@import './dao-tabs-nav.scss';
</style>
<script>
export default {
  name: 'DaoTabsNav',
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    names() {
      return this.tabs.map((item) => item.heading);
    },
    active() {
      return this.value;
    },
  },
  methods: {
    handleClick: function handleClick(name) {
      this.active = name;
      this.$emit('input', name);
    },
  },
};
</script>
