<template>
  <dao-dialog
    :config="dialogConfig"
    :visible.sync="visible">

    <div v-html="text" class="dialog-body"></div>

    <div slot="footer">
      <button class="dao-btn ghost" @click="onCancel">{{ cancelText }}</button>
      <button :class="confirmClass" @click="onConfirm">{{ confirmText }}</button>
    </div>
  </dao-dialog>
</template>

<script>

  export default {
    data() {
      return {
        visible: false,
        title: '',
        text: '',
        theme: 'blue',
        confirmText: '确认',
        confirm: null,
        cancelText: '取消',
        cancel: null,
      };
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
        if (typeof this.confirm === 'function') {
          this.confirm('confirm');
        }
        this.visible = false;
      },
      onCancel() {
        if (typeof this.cancel === 'function') {
          this.cancel('cancel');
        }
        this.visible = false;
      },
    },
  };
</script>

<style scoped lang="scss">
  .dialog-body {
    padding: 20px;
  }
</style>
  