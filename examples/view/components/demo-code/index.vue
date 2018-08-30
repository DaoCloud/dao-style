<template>
  <div class="demo-code" :class="{ showCode: showCode}">
    <div class="header" @click="showCode =! showCode">
      {{ showCode ? 'HIDE CODE' : 'SHOW CODE'}}
    </div>
    <div class="code" v-if="showCode">
      <slot name="code"></slot>
    </div>
    <div class="demo">
      <div class="wrap">
        <slot name="demo"></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DemoCode',
  data() {
    return {
      showCode: false,
    };
  },
};

</script>

<style lang="scss">
@import 'daoColor';
.demo-code{
  border: 1px solid #ebebeb;
  border-radius: 5px;
  transition: .2s;
  border-radius: 4px;
  overflow: hidden;
  transition: all .1s ease-in-out;
  background-color: $white-lighter;
  .header{
    padding: 8px;
    cursor: pointer;
    user-select: none;
    // color: #000;
    font-size: 12px;
  }
   &.showCode{
    background-color: #1f4160;
    .header{
      color: #FFF;
      font-weight: 600;
    }
  }
  .demo{
    padding: 6px;
    .wrap{
      padding: 16px;
      background-color: $white;
      border-radius: 3px;
      box-shadow: 0 0 0 1px rgba(67,90,111,.146);
    }
  }
}
</style>
