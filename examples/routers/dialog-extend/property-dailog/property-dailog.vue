<template>
  <div class="property-dailog-wrapper">
     <dao-dialog
      :visible.sync="isShow"
      @before-close="onBeforeClose"
      @closed="onClosed"
      @before-open="onBeforeOpen"
      @opened="onOpened"
      :containerClass="containerClass"
      :size="size"
      :header = "{ title: title }">
      <slot></slot>
      <div slot="footer" class="property-dailog-footer">
        <div class="error-message">
          {{message}}
        </div>
        <div class="action-btn-group">
          <button class="dao-btn ghost" @click="onCancel">取消</button>
          <button class="dao-btn blue" @click="onConfirm">确定</button>
        </div>
      </div>
    </dao-dialog>
  </div>
</template>

<script>

  import dialogBase from '../dialog-base';

  export default {
    name: 'propertyDailog',
    extends: dialogBase,
    props: {
      state: {
        type: String,
        default: '',
      },
      message: String,
    },
    computed: {
      containerClass() {
        return `property-dailog ${this.state}`;
      },
    },
    methods: {
      onConfirm() {
        this.$emit('confirm');
      },
    },
  };
</script>

<style lang='scss'>

@import '../../../../src/components/dao-color.scss';

$error-color: generate-color($red, -3);

.property-dailog{
  .dao-tab .dao-tab__header{
    background-color: $white-light;
    padding: 0;
    .dao-tab-nav-item.active{
      padding-top: 10px;
      border-top: 1px solid $white-dark;
      color: $black-dark;
    }
    .dao-tab-nav .dao-tab-nav-item {
      font-size: 13px;
      padding: 6.5px 15px;
    }
  }
  .dao-dialog-header{
    box-shadow: none;
    background-image: none;
  }
  .dao-dialog-footer{
    padding: 0;
  }
  &.error{
    .dao-dialog-footer{
      border-top: none;
      .error-message{
        display: block;
      }
    }
  }
  &-footer{
    .error-message{
      display: none;
      background-color: $error-color;
      color: $red;
      text-align: left;
      box-shadow: inset 0 -1px 0 0 #f0c2c0, inset 0 1px 0 0 #f0c2c0;
      padding: 6px 10px;
    }
   
    .action-btn-group{
      padding: 10px;
    }
  }
}
</style>