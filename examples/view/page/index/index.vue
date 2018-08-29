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
        <h2>A high quality UI Toolkit built on Vue.js.</h2>
        <h4>Build and Maintained Open‑Source by <a href="https://www.daocloud.io/" target="_blank">DaoCloud</a></h4>
      </div>
      <div class="btns">
        <button class="dao-btn green" @click="goToGetStarted">GET STARTED</button>
        <!-- 抽成 compoennt -->
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

@import 'daoColor';
.index{
  background: $black-light;
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items: center;
  text-align: center;
  color: $white;
  .center{
    .name, .desc{
      margin-bottom: 25px;
    }
    .name{
      font-size: 16px;
      svg{
        height: 26px;
        width: 26px;
      }
    }
    .desc{
      h2{
        font-size: 36px;
      }
      h4{
        font-size: 20px;
        margin-top: 25px;
        a{
          color: $white;
        }
      }
    }
  }
}
</style>
