<template>
<div>
  <!-- 内置 -->
  <dao-setting-layout>
    <div slot="layout-title"> 内置 Dialog</div>
    <dao-setting-section v-for="config in configs" :key="config.title">
      <div slot="section-title">
        <div class="config-section">dialog size: <b>{{config.size}}</b></div>
        <div class="config-section">允许拖拽调整大小: <b>{{config.allowResize}}</b></div>
        <div class="config-section">容器类名: <b>{{config.containerClass}}</b></div>
        <div class="config-section">点击遮罩层关闭: <b>{{config.closeOnClickOutside}}</b></div>
        <div class="config-section">按 ESC 关闭: <b>{{config.closeOnPressEscape}}</b></div>
        <div class="config-section">锁定 body 滚动: <b>{{config.lockScroll}}</b></div>
        <div class="config-section">header: <b>{{config.header}}</b></div>
        <div class="config-section">footer: <b>{{config.footer}}</b></div>
        <div class="config-section">垂直居中: <b>{{config.middle}}</b></div>
        <div class="config-section">top: <b>{{config.top}}</b></div>
        <div class="config-section">bottom: <b>{{config.bottom}}</b></div>
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="config.visible = true">{{config.header.title || config.header}}</button>
        <dao-dialog
          :visible.sync="config.visible"
          @before-close="onBeforeClose"
          @closed="onClosed"
          @before-open="onBeforeOpen"
          @opened="onOpened"
          @confirm="onConfirm"
          @cancel="onCancel"
          :middle="config.middle"
          :header="config.header"
          :footer="config.footer"
          :top="config.top"
          :bottom="config.bottom"
          :allowResize="config.allowResize"
          :containerClass="config.containerClass"
          :closeOnClickOutside="config.closeOnClickOutside"
          :closeOnPressEscape="config.closeOnPressEscape"
          :lockScroll="config.lockScroll"
          :size="config.size">
          <div class="body">
            <template v-if="config.content">
            <h3>
              <div v-html="config.content"></div>
            </h3>
            </template>
            <template v-else>
              <h2>TEST1</h2>
              <h2>TEST2</h2>
              <h2>TEST3</h2>
              <h2>TEST4</h2>
              <h2>TEST5</h2>
              <h2>TEST6</h2>
              <h2>TEST7</h2>
              <h2>TEST8</h2>
              <h2>TEST9</h2>
              <h2>TEST10</h2>
              <h2>TEST11</h2>
              <h2>TEST12</h2>
              <h2>TEST13</h2>
              <h2>TEST14</h2>
              <h2>TEST15</h2>
            </template>
            <button class="dao-btn blue" v-if="config.footer"
              @click="config.footer.confirmDisabled = !config.footer.confirmDisabled ">切换 disabled 属性</button>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
  </dao-setting-layout>

  <!-- 嵌套 -->
  <dao-setting-layout>
    <div slot="layout-title"> 嵌套 Dialog</div>
    <dao-setting-section >
      <div slot="content">
        <button class="dao-btn blue" @click="fatherDialog.visible = true">打开外部对话框</button>
        <dao-dialog
          :visible.sync="fatherDialog.visible"
          @before-close="onBeforeClose"
          @closed="onClosed"
          @before-open="onBeforeOpen"
          @opened="onOpened"
          @confirm="onConfirm"
          @cancel="onCancel"
          :header="fatherDialog.header">
          <div class="body">
            <button class="dao-btn blue" @click="fatherDialog.childDialog.visible = true">打开内部对话框</button>
            <dao-dialog
              :visible.sync="fatherDialog.childDialog.visible"
              @before-close="onBeforeClose"
              @closed="onClosed"
              @before-open="onBeforeOpen"
              @opened="onOpened"
              size="sm"
              @confirm="onConfirm"
              @cancel="onCancel"
              :header="fatherDialog.childDialog.header">
              <div class="body">
                这是一个内部对话框
              </div>
            </dao-dialog>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
  </dao-setting-layout>

  <!-- 定制化 -->
  <dao-setting-layout>
    <div slot="layout-title"> header, footer 定制版 Dialog</div>
    <dao-setting-section >
      <div slot="section-title">
        没有 header, 没有 footer
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="bodyOnly.visible = true">打开对话框</button>
        <dao-dialog
          :visible.sync="bodyOnly.visible"
          @before-close="onBeforeClose"
          @closed="onClosed"
          @before-open="onBeforeOpen"
          @opened="onOpened"
          @confirm="onConfirm"
          @cancel="onCancel"
          :closeOnClickOutside="true"
          :header="false"
          :footer="false">
          <div class="body">
              <h2>TEST1</h2>
              <h2>TEST2</h2>
              <h2>TEST3</h2>
              <h2>TEST4</h2>
              <h2>TEST5</h2>
              <h2>TEST6</h2>
              <h2>TEST7</h2>
              <h2>TEST8</h2>
              <h2>TEST9</h2>
              <h2>TEST10</h2>
              <h2>TEST11</h2>
              <h2>TEST12</h2>
              <h2>TEST13</h2>
              <h2>TEST14</h2>
              <h2>TEST15</h2>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
    <dao-setting-section >
      <div slot="section-title">
        定制 header, 定制 footer
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="customHeaderAndBody.visible = true">打开对话框</button>
        <dao-dialog
          :visible.sync="customHeaderAndBody.visible"
          @before-close="onBeforeClose"
          @closed="onClosed"
          @before-open="onBeforeOpen"
          @opened="onOpened"
          @confirm="onConfirm"
          @cancel="onCancel"
          :closeOnClickOutside="true">
          <div slot="header">custom header</div>
          <div class="body">
              <h2>TEST1</h2>
              <h2>TEST2</h2>
              <h2>TEST3</h2>
              <h2>TEST4</h2>
              <h2>TEST5</h2>
              <h2>TEST6</h2>
              <h2>TEST7</h2>
              <h2>TEST8</h2>
              <h2>TEST9</h2>
              <h2>TEST10</h2>
              <h2>TEST11</h2>
              <h2>TEST12</h2>
              <h2>TEST13</h2>
              <h2>TEST14</h2>
              <h2>TEST15</h2>
          </div>
          <div slot="footer">custom footer</div>
        </dao-dialog>
      </div>
    </dao-setting-section>
     <dao-setting-section >
      <div slot="section-title">
        定制 header 的 title
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="customTitle.visible = true">打开对话框</button>
        <dao-dialog
          :visible.sync="customTitle.visible"
          @before-close="onBeforeClose"
          @closed="onClosed"
          @before-open="onBeforeOpen"
          @opened="onOpened"
          @confirm="onConfirm"
          @cancel="onCancel"
          :closeOnClickOutside="true">
          <div slot="title"><i>自定义 title</i></div>
          <div class="body">
            <h1>只是自定义了 title</h1>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
  </dao-setting-layout>

  <!-- 定制化 -->
  <dao-setting-layout>
    <div slot="layout-title"> 对旧版 dialog 的兼容</div>
    <dao-setting-section >
      <!-- <div slot="section-title">
        对旧版 dialog 的兼容
      </div> -->
      <div slot="content">
        <button class="dao-btn blue" @click="oldDialog.visible = true">打开对话框</button>
        <dao-dialog
          :visible.sync="oldDialog.visible"
          :config="oldDialog.config"
          @dao-dialog-close="onClosed"
          @dao-dialog-open="onOpened"
          @dao-dialog-confirm="onConfirm"
          @dao-dialog-cancel="onCancel">
          <div class="body">
              <h2>完美兼容旧版 dialog</h2>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
  </dao-setting-layout>

  <!-- 更多示例-->
  <dao-setting-layout>
    <div slot="layout-title"> 更多示例 </div>
    <dao-setting-section >
      <div slot="content">
        <router-link to="/dialog-extend">Dialog Extend</router-link>
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
            header: '最简单的默认版本',
          },
          {
            visible: false,
            header: {
              title: '显示关闭按钮',
              showClose: true,
            },
          },
          {
            visible: false,
            header: {
              title: '自定义 footer 属性',
            },
            footer: {
              confirmText: '确认1',
              cancelText: '取消1',
              confirmDisabled: true,
            },
          },
          {
            visible: false,
            header: {
              title: '自定义 container class',
            },
            containerClass: 'custom-class',
          },
          {
            visible: false,
            header: {
              title: '自定义大小',
            },
            size: {
              width: '888px',
              height: '333px',
            },
          },
          {
            visible: false,
            header: {
              title: '可以通过点击外部关闭 Dialog',
            },
            closeOnClickOutside: true,
          },
          {
            visible: false,
            header: {
              title: '不可以通过 ESC 关闭 Dialog',
            },
            closeOnPressEscape: false,
          },
          {
            visible: false,
            header: {
              title: '不锁定 body 滚动',
            },
            lockScroll: false,
          },
          {
            visible: false,
            header: {
              title: '垂直居中',
            },
            middle: true,
          },
          {
            visible: false,
            header: {
              title: '修改 top 和 bottom',
            },
            top: '30px',
            bottom: '50px',
          },
          {
            visible: false,
            header: {
              title: '可以通过拖拽改变大小',
            },
            allowResize: true,
            content: '可以通过右下角拖拽图标进行拖拽<br>这个拖拽做了边缘检测，无法拖出屏幕窗口<br>并且如果你调整窗口大小，dialog 也会跟着做最合适的调整',
          },
          {
            visible: false,
            header: {
              title: '全部配置全部用上',
              showClose: true,
            },
            footer: {
              confirmText: '确认2',
              cancelText: '取消3',
              confirmDisabled: true,
            },
            containerClass: 'custom-class',
            size: {
              width: '888px',
              height: '440px',
            },
            closeOnClickOutside: true,
            closeOnPressEscape: true,
            allowResize: true,
          },
        ],
        bodyOnly: {
          visible: false,
        },
        oldDialog: {
          visible: false,
          config: {
            title: '旧版 dialog',
            size: 'md',
            // closeOnClickOutside: true,
            // closeOnPressEscape: true,
            // showHeader: false,
            showHeaderClose: true,
            // showFooter: true,
          },
        },
        customHeaderAndBody: {
          visible: false,
        },
        customTitle: {
          visible: false,
        },
        fatherDialog: {
          visible: false,
          header: {
            title: '这是外部对话框',
          },
          childDialog: {
            visible: false,
            header: {
              title: '这是内部对话框',
            },
          },
        },
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
.body{
  padding: 20px;
  line-height: 40px;
}
</style>