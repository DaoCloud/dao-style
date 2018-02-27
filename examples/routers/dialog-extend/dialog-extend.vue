<template>
<div>
  <!-- Confirm Dialog -->
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
          :confirmMessage="config.confirmMessage"
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

  <!-- Property dialog -->
  <dao-setting-layout>
    <div slot="layout-title"> Property Dialog</div>
    <dao-setting-section>
      <div slot="section-title">
        <div class="config-section">
        </div>
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="propertyDialog.visible = true">打开对话框</button>
        <property-dialog
          title="Property Dialog"
          :state="propertyDialog.state"
          :message="propertyDialog.message"
          :visible.sync="propertyDialog.visible">
          <dao-tab>
            <dao-tab-item heading="标题1">
              <h2>内容1</h2>
            </dao-tab-item>
            <dao-tab-item heading="标题2">
              <h2>内容2</h2>
            </dao-tab-item>
          </dao-tab>
        </property-dialog>
      </div>
    </dao-setting-section>
  </dao-setting-layout>

   <!-- Multistep dialog -->
  <dao-setting-layout>
    <div slot="layout-title"> Multistep Dialog</div>
    <dao-setting-section>
       <div slot="section-title">
        <div class="config-section">
          currentStep: {{multistepDialog.currentStep}}
        </div>
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="multistepDialog.visible = true">打开对话框</button>
        <multistep-dialog
          title="Step Dialog"
          :visible.sync="multistepDialog.visible">
          <multistep :step.sync="multistepDialog.currentStep">
            <step>
              <img src="https://www.daocloud.io/assets/images/screen3_image1.png" alt="">
              <br>
              <button class="dao-btn blue" @click="multistepDialog.currentStep = 2">去最后一个 step</button>
              <br>
              <br>
              <h1>第 0 个 step</h1>
            </step>
            <step>
              <img src="https://www.daocloud.io/assets/images/screen3_image4.png" alt="">
              <h1>第 1 个 step</h1>
            </step>
            <step>
              <img src="https://www.daocloud.io/assets/images/screen3_image5.png" alt="">
              <h1>第 2 个 step</h1>
            </step>
          </multistep>
          <div slot="footer">
            <button class="dao-btn blue" @click="preStep" :disabled="multistepDialog.currentStep === 0">上一步</button>
            <button class="dao-btn blue" @click="nextStep" :disabled="multistepDialog.currentStep === 2">下一步</button>
          </div>
        </multistep-dialog>
      </div>
    </dao-setting-section>
  </dao-setting-layout>
</div>
</template>

<script>

  import confirmExtend from './confirm-extend/confirm-extend.vue';
  import propertyDialog from './property-dialog/property-dialog.vue';
  import multistepDialog from './multistep-dialog/multistep-dialog.vue';
  import multistep from './multistep-dialog/multistep/multistep.vue';
  import step from './multistep-dialog/multistep/step.vue';

  export default {
    data() {
      return {
        // confirm dialog
        confirmDialogs: [{
          type: 'inputConfirm',
          visible: false,
          title: '确定删除镜像么？',
          confirmMessage: 'CONFIRM DELETE',
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
              title: 'dao-2048-dao-20481dao-2048-dao-20481',
              subtitle: '43 个版本',
            },
            {
              svg: '#icon_file-docker-image',
              title: 'dao-2048-dao-20482',
              subtitle: '44 个版本',
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
              title: 'dao-2048-dao-20481',
              subtitle: '43 个版本',
            },
            {
              svg: '#icon_file-docker-image',
              title: 'dao-2048-dao-20482',
              subtitle: '44 个版本',
            },
          ],
        }],
        // property dailog
        propertyDialog: {
          visible: false,
          state: 'error',
          message: '请重新检查 “常规” 和 “DNS” 设置',
        },
        // step dialog
        multistepDialog: {
          visible: false,
          currentStep: 1,
          steps: [
            {
              content: 'step1',
            },
            {
              content: 'step2',
            },
            {
              content: 'step3',
            },
          ],
        },
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
      preStep() {
        this.multistepDialog.currentStep -= 1;
      },
      nextStep() {
        this.multistepDialog.currentStep += 1;
      },
    },
    components: {
      confirmExtend,
      propertyDialog,
      multistepDialog,
      multistep,
      step,
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
img{
  width: 600px;
}

</style>
