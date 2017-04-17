<template>
  <div>
    <button class="dao-btn blue" @click="modal1 = true">显示对话框</button>
    <dao-modal
      v-model="modal1"
      title="您确定？"
      v-if="modal1">
      <div slot="body" class="pure-text">
        <dao-dropdown
          trigger="click"
          placement="bottom-start">
          <button class="dao-btn ghost">adasdf</button>
          <dao-dropdown-menu slot="list">
            <dao-dropdown-item :is-title="true">扩展</dao-dropdown-item>
            <dao-dropdown-item>
              <svg class="icon"><use xlink:href="#icon"></use></svg>
              <span class="text">扩展</span>
            </dao-dropdown-item>
            <dao-dropdown-item :is-divided="true"></dao-dropdown-item>
            <dao-dropdown-item>扩展</dao-dropdown-item>
          </dao-dropdown-menu>
        </dao-dropdown>
      </div>
      <div slot="footer">
        <button class="dao-btn ghost" @click="">取消</button>
        <button class="dao-btn blue" @click="">确认</button>
      </div>
    </dao-modal>
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