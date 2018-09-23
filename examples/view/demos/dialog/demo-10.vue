<template>
  <div class="dao-dialog demo10">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :allowResize="config.allowResize">
      <dialog-demo-form></dialog-demo-form>
    </dao-dialog>
  </div>
</template>

<script>
import DialogDemoForm from './dialog-demo-form';

export default {
  name: 'Demo10',
  components: { DialogDemoForm },
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '可以通过拖拽改变大小',
        },
        allowResize: true,
      },
    };
  },
};
</script>
