<template>
  <div class="dao-dialog demo9">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :top="config.top"
      :bottom="config.bottom">
      <dialog-demo-form></dialog-demo-form>
    </dao-dialog>
  </div>
</template>

<script>
import DialogDemoForm from './dialog-demo-form';

export default {
  name: 'Demo9',
  components: { DialogDemoForm },
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '修改 top 和 bottom',
        },
        top: '30px',
        bottom: '50px',
      },
    };
  },
};
</script>
