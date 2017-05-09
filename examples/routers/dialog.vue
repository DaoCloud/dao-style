<template>
  <div>
    <button class="dao-btn blue" @click="modal1 = true">显示对话框</button>
    <dao-dialog
      v-model="modal1"
      title="您确定？"
      v-if="modal1">
      <div slot="body" class="pure-text">
      </div>
      <div slot="footer">
        <button class="dao-btn ghost" @click="">取消</button>
        <button class="dao-btn blue" @click="">确认</button>
      </div>
    </dao-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        modal1: false
      };
    },
    methods: {
      ok () {
        this.$Message.info('点击了确定');
      },
      cancel () {
        this.$Message.info('点击了取消');
      }
    }
  };
</script>
