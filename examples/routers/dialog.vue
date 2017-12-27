<template>
<div>
  <dao-setting-layout>
    <div slot="layout-title"> Normal 类</div>
    <dao-setting-section>
      <div slot="section-title">
        dialog 大小: {{dialogConfig[0].config.size || '无'}}，
        {{dialogConfig[0].hasFooter? '有' : '没有'}}
        Slot Footer
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="dialogConfig[0].visible = true">显示对话框</button>
        <dao-dialog
          :config="dialogConfig[0].config"
          :visible.sync="dialogConfig[0].visible"
          @dao-dialog-close="handleClose"
          @dao-dialog-open="handleOpen"
          @dao-dialog-confirm="handleConfirm"
          @dao-dialog-cancel="handleCancel"
        >
          <div class="pure-text">
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            <div v-for="item in items">
              hdhdhdhhdhdhhd1
              hdhdhdhhdhdhhd2
              hdhdhdhhdhdhhd3
              hdhdhdhhdhdhhd4
              hdhdhdhhdhdhhd5
              hdhdhdhhdhdhhd6
            </div>
            <button class="dao-btn blue" @click="items.push(1)">push data</button>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
    <dao-setting-section>
      <div slot="section-title">
        dialog 大小: {{dialogConfig[1].config.size || '无'}}，
        {{dialogConfig[1].hasFooter? '有' : '没有'}}
        Slot Footer
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="dialogConfig[1].visible = true">显示对话框</button>
        <dao-dialog
          :config="dialogConfig[1].config"
          :visible.sync="dialogConfig[1].visible"
          @dao-dialog-close="handleClose"
          @dao-dialog-open="handleOpen"
          @dao-dialog-confirm="handleConfirm"
          @dao-dialog-cancel="handleCancel"
        >
          <div class="pure-text">
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
          </div>
          <div slot="footer" v-if="dialogConfig[1].hasFooter">
            <button class="dao-btn ghost" @click="">哈222哈</button>
            <button class="dao-btn blue" @click="">确认</button>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
    <dao-setting-section>
      <div slot="section-title">
        dialog 大小: {{dialogConfig[2].config.size || '无'}}，
        {{dialogConfig[2].hasFooter? '有' : '没有'}}
        Slot Footer
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="dialogConfig[2].visible = true">显示对话框</button>
        <dao-dialog
          :config="dialogConfig[2].config"
          :visible.sync="dialogConfig[2].visible"
          @dao-dialog-close="handleClose"
          @dao-dialog-open="handleOpen"
          @dao-dialog-confirm="handleConfirm"
          @dao-dialog-cancel="handleCancel"
        >
          <div class="pure-text">
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
    <dao-setting-section>
      <div slot="section-title">
        dialog 大小: {{dialogConfig[3].config.size || '无'}}，
        {{dialogConfig[3].hasFooter? '有' : '没有'}}
        Slot Footer
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="dialogConfig[3].visible = true">显示对话框</button>
        <dao-dialog
          :config="dialogConfig[3].config"
          :visible.sync="dialogConfig[3].visible"
          @dao-dialog-close="handleClose"
          @dao-dialog-open="handleOpen"
          @dao-dialog-confirm="handleConfirm"
          @dao-dialog-cancel="handleCancel"
        >
          <div class="pure-text">
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
    <dao-setting-section>
      <div slot="section-title">
        dialog 大小: {{dialogConfig[4].config.size || '无'}}，
        {{dialogConfig[4].hasFooter? '有' : '没有'}}
        Slot Footer
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="dialogConfig[4].visible = true">显示对话框</button>
        <dao-dialog
          :config="dialogConfig[4].config"
          :visible.sync="dialogConfig[4].visible"
          @dao-dialog-close="handleClose"
          @dao-dialog-open="handleOpen"
          @dao-dialog-confirm="handleConfirm"
          @dao-dialog-cancel="handleCancel"
        >
          <div class="pure-text">
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
  </dao-setting-layout>
  <dao-setting-layout>
    <div slot="layout-title"> Feature 类</div>
    <div slot="layout-title-helper">
      若需要在 内容部分 使用组件已有样式，只需在包裹内容区的 div 增加 class: <b>dao-dialog-feature__text</b> 即可
    </div>
    <dao-setting-section>
      <div slot="section-title">
        dialog 大小: {{dialogConfig[5].config.size || '无'}}，
        {{dialogConfig[5].hasFooter? '有' : '没有'}}
        Slot Footer
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="dialogConfig[5].visible = true">显示对话框</button>
        <dao-dialog
          :config="dialogConfig[5].config"
          :visible.sync="dialogConfig[5].visible"
          @dao-dialog-close="handleClose"
          @dao-dialog-open="handleOpen"
          @dao-dialog-confirm="handleConfirm"
          @dao-dialog-cancel="handleCancel"
        >
          <img src="http://7xi8kv.com5.z0.glb.qiniucdn.com/dao-header.jpg"
             style="width: 100%; max-width: 100%">

          <div class="dao-dialog-feature__text">
            <em>
              size 设置没有效果 <br/>
            </em>
            这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br> 这里是内容块
            <br>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
  </dao-setting-layout>
  <dao-setting-layout>
    <div slot="layout-title"> MultiStep 类</div>
    <dao-setting-section>
      <div slot="section-title">
        dialog 大小: {{dialogConfig[6].config.size || '无'}}，
        {{dialogConfig[6].hasFooter? '有' : '没有'}}
        Slot Footer
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="dialogConfig[6].visible = true">显示对话框</button>
        <dao-dialog
          :config="dialogConfig[6].config"
          :visible.sync="dialogConfig[6].visible"
          :step.sync="dialogConfig[6].step"
          @dao-dialog-close="handleClose"
          @dao-dialog-open="handleOpen"
        >
          <dao-dialog-step>

            <div class="pure-text">
              第一页
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块这里是内容块这里是内容块这里是内容块这里是内容块这里是内容块这里是内容块这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
            </div>
          </dao-dialog-step>
          <dao-dialog-step>
            <div class="pure-text">
              第二页
            </div>
          </dao-dialog-step>
          <dao-dialog-step>
            <div class="pure-text">
              第三页
            </div>
          </dao-dialog-step>
          <dao-dialog-step>
            <div class="pure-text">
              第四页
            </div>
          </dao-dialog-step>
          <div slot="footer" v-if="dialogConfig[6].hasFooter">
            <button class="dao-btn ghost" @click="">哈哈</button>
            <button class="dao-btn blue" @click="">确认</button>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
    <dao-setting-section>
      <div slot="section-title">
        dialog 大小: {{dialogConfig[7].config.size || '无'}}，
        {{dialogConfig[7].hasFooter? '有' : '没有'}}
        Slot Footer
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="dialogConfig[7].visible = true">显示对话框</button>
        <dao-dialog
          :config="dialogConfig[7].config"
          :visible.sync="dialogConfig[7].visible"
          :step.sync="dialogConfig[7].step"
          @dao-dialog-close="handleClose"
        >
          <dao-dialog-step>
            <div class="pure-text">
              第一页
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块这里是内容块这里是内容块这里是内容块这里是内容块这里是内容块这里是内容块这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
              <br> 这里是内容块
            </div>
          </dao-dialog-step>
          <dao-dialog-step>
            <div class="pure-text">
              第二页
            </div>
          </dao-dialog-step>
          <dao-dialog-step>
            <div class="pure-text">
              第三页
            </div>
          </dao-dialog-step>
          <dao-dialog-step>
            <div class="pure-text">
              第四页
            </div>
          </dao-dialog-step>
          <div slot="footer" v-if="dialogConfig[7].hasFooter">
            <button class="dao-btn ghost" @click="goToTwo()">到第2页</button>
            <button class="dao-btn blue" @click="goToFour()">到第4页</button>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
  </dao-setting-layout>
  <dao-setting-layout>
    <div slot="layout-title"> Dialog 内打开 dialog </div>
    <dao-setting-section>
      <div slot="section-title">
        dialog 大小: {{dialogConfig[8].config.size || '无'}}，
        {{dialogConfig[8].hasFooter? '有' : '没有'}}
        Slot Footer； 内部 dialog 大小: {{dialogInner[0].size}}
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="dialogConfig[8].visible = true">显示对话框</button>
        <dao-dialog
          :config="dialogConfig[8].config"
          :visible.sync="dialogConfig[8].visible"
          @dao-dialog-close="handleClose"
          @dao-dialog-open="handleOpen"
          @dao-dialog-confirm="handleConfirm"
          @dao-dialog-cancel="handleCancel"
        >
          <button
            @click="dialogInner[0].visible = true"
            class="dao-btn blue">
            打开 内部 dialog
          </button>
          <dao-dialog
            :config="dialogInner[0]"
            :visible.sync="dialogInner[0].visible">
            这是一个 内部的 dialog
          </dao-dialog>
          <div class="pure-text">
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
    <dao-setting-section>
      <div slot="section-title">
        dialog 大小: {{dialogConfig[9].config.size || '无'}}，
        {{dialogConfig[9].hasFooter? '有' : '没有'}}
        Slot Footer； 内部 dialog 大小: {{dialogInner[1].size}}
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="dialogConfig[9].visible = true">显示对话框</button>
        <dao-dialog
          :config="dialogConfig[9].config"
          :visible.sync="dialogConfig[9].visible"
          @dao-dialog-close="handleClose"
          @dao-dialog-open="handleOpen"
          @dao-dialog-confirm="handleConfirm"
          @dao-dialog-cancel="handleCancel"
        >
          <button
            @click="dialogInner[1].visible = true"
            class="dao-btn blue">
            打开 内部 dialog
          </button>
          <dao-dialog
            :config="dialogInner[1]"
            :visible.sync="dialogInner[1].visible">
            这是一个 内部的 dialog
          </dao-dialog>
          <div class="pure-text">
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
    <dao-setting-section>
      <div slot="section-title">
        dialog 大小: {{dialogConfig[10].config.size || '无'}}，
        {{dialogConfig[10].hasFooter? '有' : '没有'}}
        Slot Footer； 内部 dialog 大小: {{dialogInner[2].size}}
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="dialogConfig[10].visible = true">显示对话框</button>
        <dao-dialog
          :config="dialogConfig[10].config"
          :visible.sync="dialogConfig[10].visible"
          @dao-dialog-close="handleClose"
          @dao-dialog-open="handleOpen"
          @dao-dialog-confirm="handleConfirm"
          @dao-dialog-cancel="handleCancel"
        >
          <button
            @click="dialogInner[2].visible = true"
            class="dao-btn blue">
            打开 内部 dialog
          </button>
          <dao-dialog
            :config="dialogInner[2]"
            :visible.sync="dialogInner[2].visible">
            这是一个 内部的 dialog
          </dao-dialog>
          <div class="pure-text">
            body<br/>
            body<br/>
            body<br/>
            body<br/>
            body<br/>
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
  </dao-setting-layout>
  <dao-setting-layout>
    <div slot="layout-title"> 其他测试 </div>
    <dao-setting-section>
      <div slot="section-title">
        dialog 大小: {{dialogConfig[11].config.size || '无'}}，
        {{dialogConfig[11].hasFooter? '有' : '没有'}}
        Slot Footer； 内部 dialog 大小: {{dialogInner[2].size}}
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="dialogConfig[11].visible = true">显示对话框(测试 dialog 里的 popover)</button>
        <dao-dialog
          :config="dialogConfig[11].config"
          :visible.sync="dialogConfig[11].visible">
          <div class="pure-text">
            <br>
            <dao-input
              v-model="input1"
              message="错误"
              status="error"
              placeholder="normal">
            </dao-input>
            <br>
            <br>
             <dao-input
              v-model="input1"
              message="错误"
              status="error"
              icon-inside
              :show-tooltip-only-hover="false"
              placeholder="show-tooltip-only-hover=false">
            </dao-input>
            <br>
            <br>
            <dao-input
              v-model="input1"
              message="错误"
              status="error"
              message-no-icon
              placeholder="message-no-icon">
            </dao-input>
            <br>
            <br>
            <dao-input
              v-model="input1"
              message="错误"
              status="error"
              icon-inside
              placeholder="icon-inside">
            </dao-input>
            <br>
            <br>
           
          </div>
        </dao-dialog>
      </div>
    </dao-setting-section>
    <dao-setting-section>
      <div slot="section-title">
        dialog 大小: {{dialogConfig[12].config.size || '无'}}，
        {{dialogConfig[12].hasFooter? '有' : '没有'}}
      </div>
      <div slot="content">
        <button class="dao-btn blue" @click="dialogConfig[12].visible = true">显示对话框(测试 MultiStep dialog 里的 popover)</button>
        <dao-dialog
          :config="dialogConfig[12].config"
          :visible.sync="dialogConfig[12].visible">
          <dao-dialog-step>
            <div class="pure-text">
              <br>
              <br>
              <br>
              <br>
              <dao-input
                v-model="input1"
                message="错误"
                status="error"
                icon-inside
                :show-tooltip-only-hover="false"
                placeholder="show-tooltip-only-hover=false">
              </dao-input>
            
            </div>
          </dao-dialog-step>
          <dao-dialog-step>
            看起来一切都很正常
          </dao-dialog-step>
          <dao-dialog-step>
            <div class="pure-text">
              <br>
              <dao-input
                v-model="input1"
                message="这是另一个错误"
                status="error"
                icon-inside
                :show-tooltip-only-hover="false"
                placeholder="show-tooltip-only-hover=false">
              </dao-input>
              <br>
            </div>
          </dao-dialog-step>
        </dao-dialog>
      </div>
    </dao-setting-section>
  </dao-setting-layout>
</div>
</template>
<style lang='scss' scoped>
  .pure-text {
    padding: 20px;
  }
</style>
<script>
  export default {
    data() {
      return {
        dialogInner: [
          {
            type: 'normal',
            title: '这是个 Inner Title',
            size: 'lg',
            visible: false,
          },
          {
            type: 'normal',
            title: '这是个 Inner Title',
            size: 'lg',
            visible: false,
          },
          {
            type: 'normal',
            title: '这是个 Inner Title',
            size: 'resize',
            visible: false,
          },
        ],
        dialogConfig: [
          {
            config: {
              type: 'normal',
              title: '这是个 Title',
              size: 'resize',
              showHeader: true,
              showFooter: true,
              closeOnClickOutside: true,
              closeOnPressEscape: true,
            },
            visible: false,
            hasFooter: false,
          },
          {
            config: {
              type: 'normal',
              title: '这是个 Title',
              size: 'md',
              showHeader: true,
              showFooter: true,
              closeOnClickOutside: true,
              closeOnPressEscape: true,
            },
            visible: false,
            hasFooter: true,
          },
          {
            config: {
              type: 'normal',
              title: '这是个 Title',
              size: 'sm',
              showHeader: true,
              showFooter: true,
              closeOnClickOutside: true,
              closeOnPressEscape: true,
            },
            visible: false,
            hasFooter: false,
          },
          {
            config: {
              type: 'normal',
              title: '这是个 Title',
              size: 'lg',
              showHeader: true,
              showFooter: true,
              closeOnClickOutside: true,
              closeOnPressEscape: true,
            },
            visible: false,
          },
          {
            config: {
              type: 'normal',
              title: '这是个 Title',
              size: 'resize',
              showHeader: true,
              showFooter: true,
              closeOnClickOutside: true,
              closeOnPressEscape: true,
            },
            visible: false,
          },
          {
            config: {
              type: 'feature',
              title: '这是个 Title',
              size: 'sm',
              showHeader: true,
              showFooter: true,
              closeOnClickOutside: true,
              closeOnPressEscape: true,
            },
            visible: false,
          },
          {
            config: {
              type: 'multiStep',
              title: 'Multi Dialog',
              size: 'resize',
              showHeader: true,
              showFooter: true,
              closeOnClickOutside: true,
              closeOnPressEscape: true,
            },
            visible: false,
            step: 3,
          },
          {
            config: {
              type: 'multiStep',
              title: 'Multi Dialog',
              size: 'md',
              showHeader: true,
              showFooter: true,
              closeOnClickOutside: true,
              closeOnPressEscape: true,
            },
            visible: false,
            step: 2,
            hasFooter: true,
          },
          {
            config: {
              title: '普通 dialog 内打开 dialog',
              size: 'md',
              showHeader: true,
              showFooter: true,
              closeOnClickOutside: true,
              closeOnPressEscape: true,
            },
            visible: false,
            hasFooter: true,
          },
          {
            config: {
              title: 'dialog 为 resize 内打开 dialog',
              size: 'resize',
              showHeader: true,
              showFooter: true,
              closeOnClickOutside: true,
              closeOnPressEscape: true,
            },
            visible: false,
            hasFooter: true,
          },
          {
            config: {
              title: '普通 dialog 内打开 dialog',
              size: 'md',
              showHeader: true,
              showFooter: true,
              closeOnClickOutside: true,
              closeOnPressEscape: true,
            },
            visible: false,
            hasFooter: true,
          },
          {
            config: {
              title: '测试 popover',
              size: 'md',
              showHeader: true,
              showFooter: true,
              closeOnClickOutside: true,
              closeOnPressEscape: true,
            },
            visible: false,
            hasFooter: true,
          },
          {
            config: {
              title: '测试 MultiStep dialog 里的 popover',
              size: 'md',
              type: 'multiStep',
              showHeader: true,
              showFooter: true,
              closeOnClickOutside: true,
              closeOnPressEscape: true,
            },
            visible: false,
            hasFooter: true,
          },
        ],
        items: [],
        input1: '',
      };
    },
    methods: {
      handleConfirm() {
        console.info('点击了确定');
      },
      handleCancel() {
        console.info('点击了取消');
      },
      handleClose() {
        console.info('要关闭了');
      },
      handleOpen() {
        console.info('要打开了');
      },
      goToTwo() {
        this.dialogConfig[7].step = 1;
      },
      goToFour() {
        this.dialogConfig[7].step = 3;
      },
    },
  };
</script>
