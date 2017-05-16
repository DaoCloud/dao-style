<template>
<div class="">
  <ul class="dialog-demo__wrap">
    <h3> type: Normal </h3>
    <li class="dialog-demo__item">
      1. 参数:
      <p> size: {{dialogConfig[0].config.size || '-'}}, 是否有 slot footer: {{dialogConfig[0].hasFooter || false}}</p>
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
        </div>
      </dao-dialog>
    </li>
    <li class="dialog-demo__item">
      2. 参数:
      <p> size: {{dialogConfig[1].config.size || '-'}}, 是否有 slot footer: {{dialogConfig[1].hasFooter || false}}</p>
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
    </li>
    <li class="dialog-demo__item">
      3. 参数:
      <p> size: {{dialogConfig[2].config.size || '-'}}, 是否有 slot footer: {{dialogConfig[2].hasFooter || false}}</p>
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
    </li>
    <li class="dialog-demo__item">
      4. 参数:
      <p> size: {{dialogConfig[3].config.size || '-'}}, 是否有 slot footer: {{dialogConfig[3].hasFooter || false}}</p>
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
    </li>
    <li class="dialog-demo__item">
      5. 参数:
      <p> size: {{dialogConfig[4].config.size || '-'}}, 是否有 slot footer: {{dialogConfig[4].hasFooter || false}}</p>
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
    </li>
    <h3> type: Feature </h3>
    <li class="dialog-demo__item">
      6. 参数:
      <p>size: {{dialogConfig[5].config.size}}, 是否有 slot footer: {{dialogConfig[5].hasFooter || false}}</p>
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
          <br>
        </div>
      </dao-dialog>
    </li>
    <h3> type: MultiStep </h3>
    <li class="dialog-demo__item">
      7. 参数:
      <p>size: {{dialogConfig[6].config.size}}, 是否有 slot footer: {{dialogConfig[6].hasFooter || false}}</p>
      <button class="dao-btn blue" @click="dialogConfig[6].visible = true">显示对话框</button>
      <dao-dialog
        :config="dialogConfig[6].config"
        :visible.sync="dialogConfig[6].visible"
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
        <div slot="footer" v-if="dialogConfig[6].hasFooter">
          <button class="dao-btn ghost" @click="">哈哈</button>
          <button class="dao-btn blue" @click="">确认</button>
        </div>
      </dao-dialog>
    </li>
    <li class="dialog-demo__item">
      8. 参数:
      <p>size: {{dialogConfig[7].config.size}}, 是否有 slot footer: {{dialogConfig[7].hasFooter || false}}</p>
      <button class="dao-btn blue" @click="dialogConfig[7].visible = true">显示对话框</button>
      <dao-dialog
        :config="dialogConfig[7].config"
        :visible.sync="dialogConfig[7].visible"
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
        <div slot="footer" v-if="dialogConfig[7].hasFooter">
          <button class="dao-btn ghost" @click="">哈哈</button>
          <button class="dao-btn blue" @click="">确认</button>
        </div>
      </dao-dialog>
    </li>
  </ul>
</div>

</template>
<style lang="scss" scoped>
  .dialog-demo__wrap {
    display: block;

    h3 {
      margin: 10px 0;
    }
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
