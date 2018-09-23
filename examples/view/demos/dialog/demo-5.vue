<template>
  <div class="dao-dialog demo5">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :size="config.size">
      <dialog-demo-form></dialog-demo-form>
    </dao-dialog>
  </div>
</template>

<script>
import DialogDemoForm from './dialog-demo-form';

export default {
  name: 'Demo5',
  components: { DialogDemoForm },
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '自定义大小',
        },
        size: {
          width: '888px',
          height: '333px',
        },
      },
    };
  },
};
</script>
