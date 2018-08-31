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
        {{$t('get_started')}}
      </router-link>
      <router-link class="dao-btn mini grey" :class="{ active: activeComs }" tag="button" to="/components/status">
        {{$t('component_status')}}
      </router-link>
    </div>
    <div class="right">
      <button class="dao-btn mini grey" @click="changeLange(otherLang)">{{langMap[otherLang]}}</button>
      <github-btn color="grey" :mini="true"></github-btn>
    </div>
  </div>
</template>

<script>

import { setLang, getLang } from '../../../utils';

export default {
  name: 'TopBar',
  data() {
    return {
      currentLang: getLang(),
      langMap: {
        en: 'English',
        zh: '中文',
      },
    };
  },
  computed: {
    activeComs() {
      const isComsSubRoute = _.get(this.$route.matched, '[0]', {}).name === 'Components';
      const isComponent = !_.get(_.get(this.$route.matched, '[1]', {}), 'meta.notComponent', false);
      return isComsSubRoute && isComponent;
    },
    otherLang() {
      return this.currentLang === 'zh' ? 'en' : 'zh';
    },
  },
  methods: {
    goToMain() {
      this.$router.push({
        name: 'Index',
      });
    },
    changeLange(lang) {
      this.currentLang = lang;
      this.$i18n.locale = lang;
      setLang(lang);
    },
  },
};

</script>

<style lang="scss" scoped>
@import 'daoColor';

.top-bar{
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
