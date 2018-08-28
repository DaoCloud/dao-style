<template>
  <div class="components">
    <div class="menu">
      <ul>
        <router-link
          tag="li"
          to="status">
          Component Status
        </router-link>
        <li class="type-name">
          Components
        </li>
        <router-link
          v-for="c in coms"
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
</template>

<script>

export default {
  name: 'Components',
  computed: {
    coms() {
      return this.$router.options.routes
        .find(c => c.name === 'Components').children
        .filter(c => !c.meta.isComponentsStatus);
    },
  },
};

</script>

<style lang="scss" scoped>
@import 'daoColor';
// TODO media query

.components{
  display: flex;
  height: calc(100vh - 50px);
  .menu{
    width: 240px;
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
</style>
