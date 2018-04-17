<template>
    <li
        class="nav-menu"
        :key="config.key"
        v-clickoutside="closeDropdown"
    >
        <a
            :class="navButtonClass"
            @click.stop="onItemClick(config.key, config.onClick, $event)"
        >
            <span :class="iconClass" :style="iconStyle" v-if="config.icon"></span><span class="nav-button-text">{{ config.text }}</span>
            <svg
                class="caret-down"
                v-if="showCaret"
            ><use xlink:href="#icon_caret-down"></use></svg>
        </a>
        <transition name="slidedown">
            <nav-menu-dropdown
                :onClick="config.onClick"
                :data="config.data"
                v-if="showDropdown"
                @close-dropdown="closeDropdown"
            />
        </transition>
    </li>
</template>

<script>
const navButtonPrefix = 'nav-button';
import NavMenuDropdown from './NavMenuDropdown.vue';
import clickoutside from '../../directives/clickoutside';
export default {
  name: 'NavRight',
  directives: {
      clickoutside,
  },
  components: {
      NavMenuDropdown,
  },
  props: {
      config: {
          type: Object,
      }
  },
  data() {
      return {
          showDropdown: false,
      }
  },
  computed: {
      iconClass() {
          return {
              [`${navButtonPrefix}-icon`]: true,
          }
      },
      iconStyle() {
          return {
              background: `url(${this.config.icon})`
          }
      },
      navButtonClass() {
          return {
              [navButtonPrefix]: true,
              [`${navButtonPrefix}-with-text`]: this.config.text,
              [`${navButtonPrefix}-with-caret`]: this.showCaret,
          };
      },
      showCaret() {
          return Array.isArray(this.config.data) && this.config.data.length > 0
      }
  },
  methods: {
      onItemClick(key, onClick, $event) {
          this.showDropdown = !this.showDropdown;
          Object.defineProperty($event, 'key', {
              configurable: true,
              enumerable: false,
              value: key,
              writable: false
          });
          onClick($event);
      },
      closeDropdown() {
          this.showDropdown = false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import 'navButton';
    @import 'slidedown';
    .nav-menu {
        display: inline-block;
        list-style-type: none;
        position: relative;
    }
</style>
