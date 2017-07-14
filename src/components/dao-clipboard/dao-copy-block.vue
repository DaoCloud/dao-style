<template>
  <div :class="['dao-clipboard', {'select-all': !withBtn}]">
    <pre><slot></slot></pre>
    <div is="clipboard" 
      class="copy-button"
      @mouseleave.native="copied = false"
      :on-success="copySuccess"
      :content="content"
      v-if="withBtn">
      <tooltip content="复制成功" v-show="copied">
        <svg>
          <use xlink:href="#icon_clipboard-success"></use>
        </svg>
      </tooltip>
      <tooltip content="点击复制" v-show="!copied">
        <svg>
          <use xlink:href="#icon_clipboard"></use>
        </svg>
      </tooltip>
    </div>
  </div>
</template>
<script>
  import clipboard from './dao-clipboard.vue';
  import tooltip from '../dao-tooltip';

  export default {
    name: 'dao-copy-block',
    components: { clipboard, tooltip },
    props: {
      withBtn: {
        type: Boolean,
        default: true,
      },
    },
    // 原本简单的用 computed 无法及时的获取到已修改的内容
    // 改成当组件挂载和更新之后赋值，可以及时获取
    // 暂时没有想到更好的解决办法，留待改进
    mounted() {
      this.content = this.$slots.default[0].text;
    },
    updated() {
      this.content = this.$slots.default[0].text;
    },
    data() {
      return {
        copied: false,
        content: '',
      };
    },
    methods: {
      copySuccess() {
        this.copied = true;
      },
    },
  };
</script>
<style lang="scss" src="./dao-copy-block.scss"></style>
