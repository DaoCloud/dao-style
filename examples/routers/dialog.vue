<template>
<div>
  <dao-setting-layout>
    <div slot="layout-title"> 内置 Dialog</div>
    <dao-setting-section v-for="config in configs" :key="config.title">
      <div slot="section-title">
        <div class="config-section">dialog size: <b>{{config.size}}</b></div>
        <div class="config-section">允许拖拽调整大小: <b>{{config.allowResize}}</b></div>
        <div class="config-section">容器类名: <b>{{config.containerClass}}</b></div>
        <div class="config-section">点击遮罩层关闭: <b>{{config.closeOnClickOutside}}</b></div>
        <div class="config-section">按 ESC 关闭: <b>{{config.closeOnPressEscape}}</b></div>
        <div class="config-section">header: <b>{{config.header}}</b></div>
        <div class="config-section">footer: <b>{{config.footer}}</b></div>
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="config.visible = true">显示对话框</button>
        <dao-dialog
          :visible.sync="config.visible"
          @before-close="onBeforeClose"
          @closed="onClosed"
          @before-open="onBeforeOpen"
          @opened="onOpened"
          @confirm="onConfirm"
          @cancel="onCancel"
          :header="config.header"
          :footer="config.footer"
          :allowResize="config.allowResize"
          :containerClass="config.containerClass"
          :closeOnClickOutside="config.closeOnClickOutside"
          :closeOnPressEscape="config.closeOnPressEscape"
          :size="config.size">
          <h2>TEST</h2>
          <h2>TEST</h2>
          <h2>TEST</h2>
          <h2>TEST</h2>
          <h2>TEST</h2>
          <h2>TEST</h2>
          <h2>TEST</h2>
          <h2>TEST</h2>
          <h2>TEST</h2>
          <h2>TEST</h2>
        </dao-dialog>
      </div>
    </dao-setting-section>
  </dao-setting-layout>
</div>
</template>

<script>
  export default {
    data() {
      return {
        configs: [
          {
            visible: false,
            header: {
              title: '测试 1',
              showClose: true,
            },
            footer: {
              confirmText: '确认 1',
              cancelText: '取消 1',
              confirmDisabled: false,
            },
            containerClass: 'dialog-custom-class',
            size: 'md',
            closeOnClickOutside: false,
            closeOnPressEscape: false,
            allowResize: false,
          },
          {
            visible: false,
            header: {
              title: '测试 2',
              showClose: true,
            },
            footer: {
              confirmText: '确认 2',
              cancelText: '取消 2',
              confirmDisabled: true,
            },
            containerClass: 'dialog-custom-class',
            size: 'md',
            closeOnClickOutside: false,
            closeOnPressEscape: false,
            allowResize: true,
          },
        ],
      };
    },
    methods: {
      onConfirm() {
        console.info('点击了确定');
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
  };
</script>

<style lang='scss' scoped>
.config-section{
  margin: 6px 0;
  font-size: 13px;
}
</style>