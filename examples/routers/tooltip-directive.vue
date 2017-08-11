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
                <button class="dao-btn ghost" v-dao-tooltip:bottom="'Directive Tooltip'"> 下</button>
                <button class="dao-btn ghost" v-dao-tooltip:bottom.always="{ content: 'aaa', appendToBody: false }"> 下always</button>
            </div>
        </div>
        <br>
        <div class="ellipsis" v-dao-tooltip:top.ellipsis="'ellipsisText'">
            {{ ellipsisText }}
        </div>
        <input class="dao-control" type="text" v-model="ellipsisText">
        <br>
        <br>
        <div v-dao-tooltip:top.ellipsis="'这是一段未被省略掉的文本，应该不出现 tooltip'">
            这是一段未被省略掉的文本，应该不出现 tooltip
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        delay: 1000,
        innerHtml: '<button>I am a button</button>',
        ellipsisText: '这是一段被省略掉的文本，应该要出现一个 tooltip',
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
    .ellipsis {
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
