<template>
  <div class="dao-dialog demo3">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :footer="config.footer">
      <dialog-demo-form></dialog-demo-form>
    </dao-dialog>
  </div>
</template>

<script>
import DialogDemoForm from './dialog-demo-form';

export default {
  name: 'Demo3',
  components: { DialogDemoForm },
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '自定义 Footer',
        },
        footer: {
          confirmText: '确认1',
          cancelText: '取消1',
          confirmDisabled: true,
        },
      },
    };
  },
};
</script>
