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
    computed: {
      content() {
        return this.$slots.default[0].text;
      },
    },
    data() {
      return {
        copied: false,
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
