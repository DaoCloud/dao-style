<template>
    <div>
        <nav class="g-nav">
            <slot name="nav-left"></slot>
            <slot name="nav-center"></slot>
            <slot name="nav-right"></slot>
        </nav>
    </div>
</template>

<script>
import AppSwitcher from './AppSwitcher.vue';
import NavCenter from './NavCenter.vue';
import NavRight from './NavRight.vue';
export default {
  name: 'GNav',
  components: {
      AppSwitcher,
      NavCenter,
      NavRight,
  },
  props: {
      gConfig: {
          type: Object,
          default() {
              return {};
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style
    scoped
    lang="scss"
>
    nav.g-nav {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        background: #1f2126;
        height: 40px;
        position: relative;
        /* position: fixed;
        top: 0;
        right: 0;
        left: 0; */
        /* display: block; */
        /* text-align: center; */
    }
    /* nav::before,
    nav::after {
        content: "";
        display: table;
    }
    nav::after {
        clear: both;
    } */
</style>
