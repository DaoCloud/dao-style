<template>
  <dao-dialog
    id="dao-alert"
    :config="dialogConfig"
    @dao-dialog-close="handleDialogClose"
    :visible.sync="isShow">

    <div v-html="text" class="dialog-body"></div>

    <div slot="footer">
      <button class="dao-btn ghost" @click="onCancel">{{ cancelText }}</button>
      <button :class="confirmClass" @click="onConfirm">{{ confirmText }}</button>
    </div>
  </dao-dialog>
</template>

<script>
  import DaoDialog from '../dao-dialog';

  export default {
    data() {
      return {
        isShow: this.visible,
      };
    },
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: '',
      },
      text: {
        type: String,
        default: '',
      },
      theme: {
        type: String,
        default: 'blue',
      },
      confirmText: {
        type: String,
        default: '确认',
      },
      confirm: {
        type: Function,
        default: () => {},
      },
      cancelText: {
        type: String,
        default: '取消',
      },
      cancel: {
        type: Function,
        default: () => {},
      },
    },
    created() {
      this.$on('visible', (newVal) => {
        this.visible = newVal;
      });
    },
    computed: {
      dialogConfig() {
        return {
          type: 'normal',
          title: this.title,
          showHeader: true,
          showHeaderClose: false,
          showFooter: true,
          closeOnClickOutside: false,
          closeOnPressEscape: false,
        };
      },
      confirmClass() {
        const result = {
          'dao-btn': true,
        };
        if (this.theme) {
          result[this.theme] = true;
        }
        return result;
      },
    },
    methods: {
      onConfirm() {
        this.$emit('confirm');
        this.visible = false;
      },
      onCancel() {
        this.$emit('cancel');
        this.visible = false;
      },
      handleDialogClose() {
        this.$emit('close');
      },
    },
    component: {
      DaoDialog,
    },
    watch: {
      visible(newVal) {
        this.isShow = newVal;
      },
    },
  };
</script>

<style scoped lang="scss">
  #dao-alert{
    .dialog-body {
      padding: 20px;
    }
  }
  
</style>
  