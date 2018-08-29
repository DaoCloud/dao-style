<template>
  <div class="top-bar">
    <div class="left">
      <span class="main" @click="goToMain">
        <svg class="icon">
          <use xlink:href="#icon_daocloud"></use>
        </svg>
        <span>DaoStyle</span>
      </span>
      <router-link class="dao-btn mini grey" tag="button" to="/components/installation">
        GET STARTED
      </router-link>
      <router-link class="dao-btn mini grey" :class="{ active: activeComs }" tag="button" to="/components/status">
        COMPONENTS
      </router-link>
    </div>
    <div class="right">
      <github-btn color="grey" :mini="true"></github-btn>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TopBar',
  methods: {
    goToMain() {
      this.$router.push({
        name: 'Index',
      });
    },
  },
  computed: {
    activeComs() {
      const isComsSubRoute = _.get(this.$route.matched, '[0]', {}).name === 'Components';
      const isComponent = !_.get(_.get(this.$route.matched, '[1]', {}), 'meta.notComponent', false);
      return isComsSubRoute && isComponent;
    },
  },
};

</script>

<style lang="scss" scoped>
@import 'daoColor';

.top-bar{
  // text-align: center;
  box-shadow: 0 0 1px rgba(67,90,111,.415), 0 2px 4px -2px rgba(67,90,111,.301);
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
  user-select: none;
  .left{
    .main{
      margin-right: 20px;
      cursor: pointer;
      svg{
        width: 24px;
        height: 24px;
      }
      span{
        vertical-align: middle;
      }
    }
    .router-link-active, .active{
      background-color: rgba(1,108,209,.079);
      color: $blue;
    }
  }
}
</style>
