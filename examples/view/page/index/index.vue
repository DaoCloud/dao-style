<template>
  <div class="index">
    <div class="center">
      <div class="name">
        <svg class="icon">
          <use xlink:href="#icon_daocloud"></use>
        </svg>
        <span class="text"><h2>Dao Style</h2></span>
      </div>
      <div class="desc">
        <h2>{{$t('index.desc')}}</h2>
        <i18n path="index.cr" tag="h4">
          <a href="https://www.daocloud.io/" target="_blank" place="company">DaoCloud</a>
        </i18n>
      </div>
      <div class="btns">
        <button class="dao-btn green" @click="goToGetStarted">{{$t('get_started')}}</button>
        <github-btn color="dark" :mini="false"></github-btn>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
  methods: {
    goToGetStarted() {
      this.$router.push('/components/installation');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "daoColor";
.index {
  background: #060e1b;
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: $white;
  .center {
    z-index: 1;
    max-width: 80vw;
    .name {
      font-size: 22px;
      margin-bottom: 40px;
      svg {
        height: 32px;
        width: 32px;
      }
    }
    .desc {
      margin-bottom: 50px;
      h2 {
        font-size: 36px;
      }
      h4 {
        font-size: 20px;
        margin-top: 25px;
        font-weight: 400;
        a {
          color: $white;
        }
      }
    }
  }
}
</style>
