<template>
<div class="">
  <ul class="dialog-demo__wrap">
    <li
      class="dialog-demo__item"
      v-for="item in dialogConfig">
      <div v-if="item.config.type === 'feature'">
        参数:
        <p>type: {{item.config.type}}, size: {{item.config.size}}, has footer Slot: {{item.hasFooter || false}}</p>
        <button class="dao-btn blue" @click="item.visible = true">显示对话框</button>
        <dao-dialog
          :config="item.config"
          v-model="item.visible"
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
            <br>
          </div>
        </dao-dialog>
      </div>
      <div v-else-if="item.config.type === 'multiStep'">
        参数:
        <p>type: {{item.config.type}}, size: {{item.config.size}}, has footer Slot: {{item.hasFooter || false}}</p>
        <button class="dao-btn blue" @click="item.visible = true">显示对话框</button>
        <dao-dialog
          :config="item.config"
          v-model="item.visible"
          @dao-dialog-close="handleClose"
          @dao-dialog-open="handleOpen"
        >
          <dao-dialog-step>
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
          </dao-dialog-step>
          <dao-dialog-step>
            第二页

          </dao-dialog-step>
          <dao-dialog-step>
            第三页
          </dao-dialog-step>
          <dao-dialog-step>
            第四页
          </dao-dialog-step>
          <div slot="footer" v-if="item.hasFooter">
            <button class="dao-btn ghost" @click="">哈哈</button>
            <button class="dao-btn blue" @click="">确认</button>
          </div>
        </dao-dialog>
      </div>
      <div v-else>
        参数:
        <p>type: {{item.config.type}}, size: {{item.config.size || '-'}}, has footer Slot: {{item.hasFooter || false}}</p>
        <button class="dao-btn blue" @click="item.visible = true">显示对话框</button>
        <dao-dialog
          :config="item.config"
          v-model="item.visible"
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
          <div slot="footer" v-if="item.hasFooter">
            <button class="dao-btn ghost" @click="">哈哈</button>
            <button class="dao-btn blue" @click="">确认</button>
          </div>
        </dao-dialog>
      </div>
    </li>
  </ul>
</div>

</template>
<style lang="scss" scoped>
  .dialog-demo__wrap {
    display: block;
  }
  .dialog-demo__item {
    margin-top: 10px;
    list-style: none;
    p {
      margin-bottom: 10px;
    }
  }
</style>
<script>
  export default {
    data () {
      return {
        dialogConfig: [
          {
            config: {
              type: 'normal',
              title: '这是个 Title',
              showHeader: true,
              showFooter: true,
              closeOnClickModal: true,
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
              closeOnClickModal: true,
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
              closeOnClickModal: true,
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
              closeOnClickModal: true,
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
              closeOnClickModal: true,
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
              closeOnClickModal: true,
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
              closeOnClickModal: true,
              closeOnPressEscape: true,
            },
            visible: false,
          },
          {
            config: {
              type: 'multiStep',
              title: 'Multi Dialog',
              size: 'md',
              showHeader: true,
              showFooter: true,
              closeOnClickModal: true,
              closeOnPressEscape: true,
            },
            visible: false,
            hasFooter: true,
          },
        ],
      };
    },
    methods: {
      handleConfirm () {
        console.info('点击了确定');
      },
      handleCancel () {
        console.info('点击了取消');
      },
      handleClose() {
        console.info('要关闭了');
      },
      handleOpen() {
        console.info('要打开了');
      },
    },
  };
</script>
