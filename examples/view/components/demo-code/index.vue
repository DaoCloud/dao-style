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
$padding : 12px;

.demo-code{
  border: 1px solid #ebebeb;
  border-radius: 4px;
  transition: all .08s ease-in-out;
  overflow: hidden;
  background-color: $white-light;
  .header{
    padding: $padding;
    cursor: pointer;
    user-select: none;
    font-size: 12px;
  }
   &.show-code{
    background-color: #1f4160;
    .header{
      color: #FFF;
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
      border-radius: 4px;
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
