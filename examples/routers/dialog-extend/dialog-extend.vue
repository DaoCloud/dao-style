<template>
<div>
  <!-- 高级用法 -->
  <dao-setting-layout>
    <div slot="layout-title"> Confirm Dialog</div>
    <dao-setting-section v-for="config in confirmDialogs" :key="config.type">
      <div slot="section-title">
        <div class="config-section">
          type: <b>{{config.type}}</b>
        </div>
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="config.visible = true">打开对话框</button>
        <confirm-extend
          :visible.sync="config.visible"
          :title="config.title"
          :content="config.content"
          :type="config.type"
          :rows="config.rows"
          :confirmText="config.confirmText"
          @before-close="onBeforeClose"
          @closed="onClosed"
          @before-open="onBeforeOpen"
          @opened="onOpened"
          @confirm="onConfirm"
          @cancel="onCancel">
        </confirm-extend>
      </div>
    </dao-setting-section>
  </dao-setting-layout>
</div>
</template>

<script>
  import confirmExtend from './confirm-extend/confirm-extend.vue';

  export default {
    data() {
      return {
        confirmDialogs: [{
          type: 'inputConfirm',
          visible: false,
          title: '确定删除镜像么？',
          confirmText: '删除镜像',
          content: "此操作将会删除 'dao-2048-dao-2048dao-2048dao-2048dao-2048' 镜像，并且该镜像的各种数据将全部销毁。",
        }, {
          type: 'checkboxConfirm',
          visible: false,
          title: '确定删除镜像么？',
          confirmText: '删除镜像',
          content: "此操作将会删除 'dao-2048-dao-2048dao-2048dao-2048dao-2048' 镜像，并且该镜像的各种数据将全部销毁。",
          rows: [
            {
              svg: '#icon_file-docker-image',
              name: 'dao-2048-dao-20481dao-2048-dao-20481',
              extra: '43 个版本',
            },
            {
              svg: '#icon_file-docker-image',
              name: 'dao-2048-dao-20482',
              extra: '44 个版本',
            },
          ],
        }, {
          type: 'listConfirm',
          visible: false,
          title: '确定删除镜像么？',
          confirmText: '删除镜像',
          content: "此操作将会删除 'dao-2048-dao-2048dao-2048dao-2048dao-2048' 镜像，并且该镜像的各种数据将全部销毁。",
          rows: [
            {
              svg: '#icon_file-docker-image',
              name: 'dao-2048-dao-20481',
              extra: '43 个版本',
            },
            {
              svg: '#icon_file-docker-image',
              name: 'dao-2048-dao-20482',
              extra: '44 个版本',
            },
          ],
        }],
      };
    },
    methods: {
      onConfirm(checkdRows) {
        console.info('点击了确定, 将删除以下数据:', checkdRows);
      },
      onCancel() {
        console.info('点击了取消');
      },
      onBeforeClose() {
        console.info('关闭之前');
      },
      onClosed() {
        console.info('关闭之后');
      },
      onBeforeOpen() {
        console.info('打开之前');
      },
      onOpened() {
        console.info('打开之后');
      },
    },
    components: {
      confirmExtend,
    },
  };
</script>

<style lang='scss' scoped>
.config-section{
  margin: 6px 0;
  font-size: 13px;
}
.body{
  padding: 20px;
  line-height: 40px;
}
</style>