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
<style lang="scss">
  @import '../dao-color.scss';

  $svg-active-color: #217ef2;
  $svg-normal-color: $blue;
  $clipboard-bg: $white-light;
  $clipboard-border-color: $grey-light;
  $clipboard-color: $black-dark;
  $clipboard-height: 30px;
  $clipboard-line-height: 22px;
  $clipboard-margin: ($clipboard-height - $clipboard-line-height) / 2;
  $clipboard-font-size: 13px;
  $clipboard-svg-size: 14px;

  .dao-clipboard {
    display: flex;
    justify-content: space-between;
    background: $clipboard-bg;
    border: 1px solid $clipboard-border-color;
    border-radius: 4px;
    padding: $clipboard-margin 0;
    &.select-all {
      user-select: all;
    }
    pre {
      padding: 0 1em;
      word-break: break-all;
      color: $clipboard-color;
      white-space: pre-line;
      font-size: $clipboard-font-size;
      font-family: Consolas, "Liberation Mono", Courier, monospace;
      border: none;
      overflow: hidden;
      margin: 0;
      line-height: $clipboard-line-height;
    }
    .copy-button {
      padding-right: 8px;
      svg {
        width: $clipboard-svg-size;
        height: $clipboard-svg-size;
        cursor: pointer;
        vertical-align: -1.5px;
        transition: fill .3s;
        &:hover {
          fill:$svg-normal-color;
        }
        &:active {
          fill:$svg-active-color;
        }
      }
    }
  }
</style>
