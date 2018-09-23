<template>
  <div class="dao-dialog demo7">
    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>
    <dao-dialog
      :visible.sync="config.visible"
      :header="config.header"
      :lockScroll="config.lockScroll">
      <dialog-demo-form></dialog-demo-form>
    </dao-dialog>
  </div>
</template>

<script>
import DialogDemoForm from './dialog-demo-form';

export default {
  name: 'Demo7',
  components: { DialogDemoForm },
  data() {
    return {
      config: {
        visible: false,
        header: {
          title: '不锁定 body 滚动',
        },
        lockScroll: false,
      },
    };
  },
};
</script>
