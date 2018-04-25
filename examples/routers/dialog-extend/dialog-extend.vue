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
        <confirm-dialog
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
        </confirm-dialog>
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
        <!-- confrim 不会关闭对话框，可以在外部验证数据合法之后再手动关闭对话框 -->
        <property-dialog
          title="Property Dialog"
          :currentTab.sync="propertyDialog.currentTab"
          :status="propertyDialog.status"
          :formatLayout="true"
          @confirm="propertyDialog.confirm"
          :visible.sync="propertyDialog.visible">
          <dao-tab :currentTab.sync="propertyDialog.currentTab">
            <!-- 需在这里加上 formatLayout 类 以修改默认样式 -->
            <dao-tab-item heading="常规" class="formatLayout">
              <dao-setting-layout>
                <!-- 需要阴影的在这里加上 formatSection 类 -->
                <dao-setting-section class="formatSection">
                  <template slot="label">
                    IP 地址池
                    <dao-tooltip content="IP 地池" placement="bottom">
                      <svg class="icon">
                        <use xlink:href="#icon_info-line"></use>
                      </svg>
                    </dao-tooltip>
                  </template>
                  <template slot="content">
                    <div class="label">开始地址</div>
                    <div>
                      <dao-input
                        v-model="propertyDialog.input1"
                        message="请输入有效的 IP 地址"
                        message-placement="bottom"
                        block
                        message-no-icon
                        status="error">
                      </dao-input>
                    </div>
                    <div class="label">结束地址</div>
                    <div>
                      <dao-input
                        v-model="propertyDialog.input2"
                        block>
                      </dao-input>
                    </div>
                  </template>
                </dao-setting-section>
                <dao-setting-section>
                  <template slot="label">
                     网关地址
                    <dao-tooltip content="网关地址" placement="bottom">
                      <svg class="icon">
                        <use xlink:href="#icon_info-line"></use>
                      </svg>
                    </dao-tooltip>
                  </template>
                  <template slot="content">
                    <div>
                      <dao-input
                        v-model="propertyDialog.input3"
                        message="请输入有效的 IP 地址"
                        message-placement="bottom"
                        message-no-icon
                        status="error"
                        block>
                      </dao-input>
                    </div>
                  </template>
                </dao-setting-section>
              </dao-setting-layout>
            </dao-tab-item>
            <dao-tab-item heading="路由" class="formatLayout">
              <dao-setting-layout>
                <!-- 需要阴影的在这里加上 formatSection 类 -->
                <dao-setting-section>
                  <template slot="label">
                    IP 地址池
                    <dao-tooltip content="IP 地池" placement="bottom">
                      <svg class="icon">
                        <use xlink:href="#icon_info-line"></use>
                      </svg>
                    </dao-tooltip>
                  </template>
                  <template slot="content">
                    <div>
                      <dao-input
                        v-model="propertyDialog.input1"
                        message="请输入有效的 IP 地址"
                        message-placement="bottom"
                        block
                        message-no-icon
                        status="error">
                      </dao-input>
                    </div>
                  </template>
                </dao-setting-section>
              </dao-setting-layout>
            </dao-tab-item>
            <dao-tab-item heading="DNS">
              <h2>DNS</h2>
            </dao-tab-item>
          </dao-tab>
          <!-- <template slot="footer">
            <button class="dao-btn ghost" @click="onCancel">取消</button>
            <button class="dao-btn blue" @click="onConfirm">确定</button>
          </template> -->
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

  import confirmDialog from './confirm-dialog/confirm-dialog.vue';
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
          currentTab: '常规',
          visible: false,
          status: {
            type: 'error',
            tab: '路由',
            message: "请检查 '路由' 的输入",
          },
          input1: '',
          input2: '192.168.100.182',
          input3: '',
          confirm() {
            console.log('propertyDialog confirm');
          },
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
      confirmDialog,
      propertyDialog,
      multistepDialog,
      multistep,
      step,
    },
  };
</script>

<style lang='scss'>

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
.dao-tab-item{
  padding: 20px;
}

.formatLayout{
  padding: 0px 0 0 20px;
  .dao-setting-layout{
    border: none;
    border-radius: none;
    box-shadow: none;
    .dao-setting-section{
      padding: 20px 20px 20px 0px; 
      .dao-setting-label{
        padding-top: 4px;
      }
    }
    .formatSection .dao-setting-content{
      padding: 20px;
      border-radius: 4px;
      background-color: #f5f7fa;
      .label:not(:first-child){
        padding-top: 10px;
      }
    }
    .dao-setting-content > *:not(.dao-btn){
      line-height: 1 !important;
    }
  }
}

</style>
