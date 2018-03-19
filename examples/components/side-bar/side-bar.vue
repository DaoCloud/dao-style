<template>
  <div class="dao-left-nav">
    <section class="dao-style-logo">
      <a ui-sref="/">
        <section class="svg-container">
          <div class="logo">
            <img
              :src="logo"
              alt="logo"/>
          </div>
        </section>
      </a>
    </section>
    <div class="sidebar-content">
      <side-bar-section
        v-for="section in menus"
        :key="section.name"
        :section="section">
      </side-bar-section>
    </div>
  </div>
</template>

<script>
import logo from '../../images/logo.png';
import SideBarSection from './side-bar-section.vue';

export default {
  name: 'SideBar',
  props: {
    menus: { type: Array, default: () => [] },
  },
  components: {
    SideBarSection,
  },
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss">
@import './side-bar.scss';
</style>
