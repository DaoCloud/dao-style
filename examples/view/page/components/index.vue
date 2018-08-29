<template>
  <div class="components-page">
    <div class="top">
      <top-bar></top-bar>
    </div> 
    <div class="bottom">
      <div class="menu">
        <ul>
          <!-- get started  -->
          <li class="type-name">{{$t('getStarted')}}</li>
          <!-- installation -->
          <router-link tag="li" to="installation">{{$t('installation')}}</router-link>
          <!-- status -->
          <router-link tag="li" to="status">{{$t('componentStatus')}}</router-link>
          <li class="type-name">{{$t('components')}}</li>
          <router-link
            v-for="c in componentsRoutes"
            :to="c.path"
            tag="li"
            :key="c.path">{{$t(c.path)}}
          </router-link>
        </ul>
      </div>
      <div class="view">
        <div class="view-wrap">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Components',
  computed: {
    componentsRoutes() {
      return this.$router.options.routes
        .find(c => c.name === 'Components').children
        .filter(c => !c.meta.notComponent);
    },
  },
};

</script>

<style lang="scss">
@import 'daoColor';

// TODO media query
.components-page{
  height: 100vh;
  display: flex;
  flex-direction: column;
  .top{
    z-index: 1;
  }
  .bottom{
    flex: 1;
    overflow: auto;
    display: flex;
    height: calc(100vh - 50px);
    .menu{
      width: 250px;
      overflow: auto;
      padding: 10px 20px;
      height: 100%;
      overflow: auto;
      background-color: $white-dark-lighter;
      ul{
        list-style: none;
        li{
          color: #435a6f;
          height: 32px;
          line-height: 32px;
          font-size: 14px;
          border-radius: 3px;
          padding: 0px 8px;
          // margin-left: -8px;
          font-size: 14px;
          user-select: none;
          &.type-name{
            color: $black-dark;
            font-weight: 600;
          }
          &:not(.type-name) {
            cursor: pointer;
          }
          &:hover:not(.type-name){
            color: $blue;
            background-color: rgba(67,90,111,.041);
          }
          &.router-link-active{
            background-color: rgba(1,108,209,.079);
            color: $blue;
          }
        }
      }
    }
    .view{
      height: 100%;
      overflow: auto;
      width: 100%;
      padding: 40px;
      .view-wrap{
        width: 60vw;
        margin: 0 auto;
      }
    }
  }
}

</style>
