<template>
  <div class="dao-dialog demo6">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :closeOnClickOutside="config.closeOnClickOutside"
      :closeOnPressEscape="config.closeOnPressEscape">
      <dialog-demo-form></dialog-demo-form>
    </dao-dialog>
  </div>
</template>

<script>
import DialogDemoForm from './dialog-demo-form';

export default {
  name: 'Demo6',
  components: { DialogDemoForm },
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '设置关闭Dialog的方式',
        },
        closeOnClickOutside: true,
        closeOnPressEscape: false,
      },
    };
  },
};
</script>
