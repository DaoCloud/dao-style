<template>
  <dao-dialog
    :config="dialogConfig"
    :visible.sync="visible"
    @dao-dialog-close="close"
    @dao-dialog-cancel="cancel">

    <div v-html="text" class="dialog-body"></div>

    <div slot="footer">
      <button class="dao-btn ghost" v-if="type === 'confirm'" @click="onCancel">{{ cancelText }}</button>
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
        type: 'confirm',
        theme: 'blue',
        confirmText: '确认',
        confirm: () => 0,
        cancelText: '取消',
        close: () => 0,
        cancel: () => 0,
      };
    },
    computed: {
      dialogConfig() {
        return {
          type: 'normal',
          title: this.title,
          showHeader: true,
          showFooter: true,
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
        this.confirm();
        this.visible = false;
      },
      onClose() {
        this.close();
        this.visible = false;
      },
      onCancel() {
        this.cancel();
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
  