<template>
  <div>
    <button class="dao-btn blue" @click="visible=true">open resize dialog</button>
    <dao-spin></dao-spin>
    <dao-dialog 
      :config="config"
      :visible.sync="visible">
      <div>
        这里面也有一个spin【 <dao-spin></dao-spin> 】拖动到 spin 上去不会出现层叠的 BUG
        <br/>
        这里面也有一个spin【 <dao-spin></dao-spin> 】拖动到 spin 上去不会出现层叠的 BUG
        <br/>
        这里面也有一个spin【 <dao-spin></dao-spin> 】拖动到 spin 上去不会出现层叠的 BUG
        <br/>
        这里面也有一个spin【 <dao-spin></dao-spin> 】拖动到 spin 上去不会出现层叠的 BUG
        <br/>
        这里面也有一个spin【 <dao-spin></dao-spin> 】拖动到 spin 上去不会出现层叠的 BUG
        <br/>
        这里面也有一个spin【 <dao-spin></dao-spin> 】拖动到 spin 上去不会出现层叠的 BUG

      </div>
    </dao-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        config: {
          type: 'normal',
          size: 'resize',
        },
        visible: false,
      };
    },

  };
</script>

<style lang="scss"></style>