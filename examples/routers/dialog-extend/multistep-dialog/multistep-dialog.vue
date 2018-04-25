<template>
  <div>
    <dao-dialog
      :visible.sync="isShow"
      @before-close="onBeforeClose"
      @closed="onClosed"
      @before-open="onBeforeOpen"
      @opened="onOpened"
      containerClass="step-dialog"
      :size="size"
      :header="header">
      <slot></slot>
      <div slot="footer">
        <template v-if="$slots.footer">
          <slot name="footer"></slot>
        </template>
        <template v-else>
          <button class="dao-btn ghost" @click="onCancel">取消</button>
          <button class="dao-btn blue" @click="onConfirm">确定</button>
        </template>
      </div>
    </dao-dialog>
  </div>
</template>

<script>

  import dialogBase from '../dialog-base';

  export default {
    name: 'multistepDailog',
    extends: dialogBase,
    data() {
      return {
        size: 'md',
      };
    },
    computed: {
      header() {
        return {
          title: this.title,
          showClose: true,
        };
      },
    },
  };
</script>

<style lang='scss'>

.step-dialog{
  .dao-dialog-body{
    & > div{
      overflow-x: hidden;
    }
  }
}

</style>