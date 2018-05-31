<template>
  <div class="dao-clipboard">
    <pre v-if="withBtn"><slot></slot></pre>
    <pre v-else @click="handleClick" ref="selectAllEL"><slot></slot></pre>
    <div is="clipboard" 
      class="copy-button"
      @mouseleave.native="handleMouseleave"
      :on-success="copySuccess"
      :on-error="copyError"
      :content="content"
      v-if="withBtn">
      <tooltip :content="$daot('successfullyCopied')" v-if="success">
        <svg>
          <use xlink:href="#icon_clipboard-success"></use>
        </svg>
      </tooltip>
       <tooltip :content="$daot('copyFailed')" v-if="fail">
        <svg>
          <use xlink:href="#icon_clipboard"></use>
        </svg>
      </tooltip>
      <tooltip :content="$daot('clickToCopy')" v-if="!success && !fail">
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
  import select from '../../utils/select';
  import copySelect from '../../utils/copy-select';

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
        content: '',
        success: false,
        fail: false,
      };
    },
    methods: {
      copySuccess() {
        this.success = true;
      },
      copyError() {
        this.fail = true;
      },
      handleMouseleave() {
        this.success = false;
        this.fail = false;
      },
      handleClick() {
        const target = this.$refs.selectAllEL;
        copySelect(target, this.content);
        select(target);
      },
    },
  };
</script>

<style lang="scss" src="./dao-copy-block.scss">
</style>
