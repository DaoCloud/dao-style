<template>
  <div class="dao-dialog demo8">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :middle="config.middle">
      <dialog-demo-form></dialog-demo-form>
    </dao-dialog>
  </div>
</template>

<script>
import DialogDemoForm from './dialog-demo-form';

export default {
  name: 'Demo8',
  components: { DialogDemoForm },
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '垂直居中',
        },
        middle: true,
      },
    };
  },
};
</script>
