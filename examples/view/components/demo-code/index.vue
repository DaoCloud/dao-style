<template>
  <div class="demo-code" :class="{ 'show-code': showCode, 'hide-code': !showCode}">
    <div class="header" @click="showCode =! showCode">
      {{ showCode ? $t('demoCode.hide_code') : $t('demoCode.show_code')}}
    </div>
    <div class="code" v-if="showCode">
      <slot name="code"></slot>
    </div>
    <div class="demo" v-if="$slots.demo">
      <div class="wrap">
        <slot name="demo"></slot>
      </div>
    </div>
    <div class="desc" v-if="$slots.desc">
      <slot name="desc"></slot>
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

<style lang="scss" scoped>
@import 'daoColor';
$padding : 15px;

.demo-code{
  border: 1px solid #ebebeb;
  border-radius: 5px;
  transition: .2s;
  border-radius: 4px;
  overflow: hidden;
  transition: all .1s ease-in-out;
  background-color: $white-light;
  box-shadow: 0 1px 4px rgba(204, 209, 217, 0.3);
  .header{
    padding: 10px $padding;
    cursor: pointer;
    user-select: none;
    font-size: 12px;
  }
   &.show-code{
    background-color: #1f4160;
    .header{
      color: #FFF;
      font-weight: 600;
    }
  }
  .desc{
    background-color: $white;
    padding: $padding;
    border-top: 1px solid #ebebeb;
  }
  .demo{
    padding: $padding;
    .wrap{
      padding: $padding;
      background-color: $white;
      border-radius: 3px;
      box-shadow: 0 0 0 1px rgba(67,90,111,.146);
    }
  }
  &.hide-code{
    .demo{
      padding-top: 0px;
    }
  }
}
</style>
