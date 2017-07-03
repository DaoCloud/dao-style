<template>
    <div>
        <div class="demo-container">
            <div class="top">
                <button class="dao-btn ghost" v-dao-tooltip:top-start="'Directive Tooltip'"> 上左</button>
                <button class="dao-btn ghost" v-dao-tooltip="{ content: 'Directive Tooltip', delay }"> 上auto延迟1000</button>
                <button class="dao-btn ghost" v-dao-tooltip:top-end.controlled="'Directive Tooltip'"> 上右controlled</button>
            </div>
            <div class="left">
                <button class="dao-btn ghost" v-dao-tooltip:left-start="'Directive Tooltip'"> 左</button>
                <button class="dao-btn ghost" v-dao-tooltip:left="'Directive Tooltip'"> 左</button>
                <button class="dao-btn ghost" v-dao-tooltip:left-end="'Directive Tooltip'"> 左</button>
            </div>
            <div class="right">
                <button class="dao-btn ghost" v-dao-tooltip:right-start="innerHtml"> 右内嵌html</button>
                <button class="dao-btn ghost" v-dao-tooltip:auto="'Directive Tooltip'"> 右auto</button>
                <button class="dao-btn ghost" v-dao-tooltip:right-end="'Directive Tooltip'"> 右</button>
            </div>
            <div class="bottom">
                <button class="dao-btn ghost" v-dao-tooltip:bottom-start="'Directive Tooltip'"> 下</button>
                <button class="dao-btn ghost" v-dao-tooltip:bottom.appendToBody="'Directive Tooltip'"> 下</button>
                <button class="dao-btn ghost" v-dao-tooltip:bottom.always="{ content: 'aaa', appendToBody: true }"> 下always</button>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        delay: 1000,
        innerHtml: '<button>I am a button</button>',
      };
    },
  };
</script>
<style lang="scss" scoped>
    .demo-container {
        width: 500px;
    }
    .top {
        text-align: center;
    }
    .left {
        float: left;
        width: 60px;
    }
    .right {
        float: right;
        width: 60px;
    }
    .bottom {
        clear: both;
        text-align: center;
    }
</style>
