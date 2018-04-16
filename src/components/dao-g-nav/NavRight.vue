<template>
<div class="right">
    <div class="nav-right-container">
        <slot>
            <ul class="nav-right-menu">
                <NavMenu
                    v-for="config in rightConfig"
                    :key="config.key"
                    :config="config"
                >
                </NavMenu>
            </ul>
        </slot>
    </div>
</div>
</template>

<script>
import NavMenu from './NavMenu.vue';
export default {
  name: 'NavRight',
  components: {
      NavMenu,
  },
  props: {
      rightConfig: {
          type: Array,
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .right {
        flex: 1;
    }
    .nav-right-container {
        float: right;
        padding: 0 8px 0 0;
        .nav-right-menu {
            margin: 0;
            padding: 0;
        }
    }
</style>
