<template>
  <div class="components-page">
    <div class="top">
      <top-bar></top-bar>
    </div> 
    <div class="bottom">
      <div class="menu">
        <ul>
          <!-- change logs -->
          <router-link tag="li" to="change-logs"  class="type-name ">{{$t('change_logs')}}</router-link>
          <!-- get started  -->
          <router-link tag="li" to="installation" class="type-name donot-active">{{$t('get_started')}}</router-link>
          <!-- installation -->
          <router-link tag="li" to="installation">{{$t('installation')}}</router-link>
          <!-- component list -->
          <router-link tag="li" to="status"  class="type-name">{{$t('components')}}</router-link>
          <router-link
            v-for="c in $router.options.components"
            :to="c.path"
            tag="li"
            v-if="!c.meta.notComponent"
            :key="c.path">{{$t(c.path)}}
          </router-link>
        </ul>
      </div>
      <div class="docs-view">
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
};

</script>

<style lang="scss">
@import 'daoColor';
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
      flex-shrink: 0;
      width: 222px;
      overflow: auto;
      padding: 10px 20px;
      height: 100%;
      overflow: auto;
      background-color: $white-lighter;
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
          cursor: pointer;
          &.type-name{
            color: $black-dark;
            font-weight: 600;
          }
          &:hover:not(.type-name){
            color: $blue;
            background-color: rgba(67,90,111,.041);
          }
          &.router-link-active:not(.donot-active){
            background-color: rgba(1,108,209,.079);
            color: $blue;
          }
        }
      }
    }
    .docs-view{
      height: 100%;
      overflow: auto;
      width: 100%;
      padding: 40px 10px;
      .view-wrap{
        @media (max-width: 768px) {
          padding: 10px;
        }
        @media (min-width: 768px) {
         padding: 0px 30px;
        }
        @media (min-width: 900px) {
         padding: 0px 50px;
        }
        @media (min-width: 1100px) {
         padding: 0px 80px;
        }
        margin: 0 auto;
        color: #5e6d82;
      }
    }
  }
}

</style>
