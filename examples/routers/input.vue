<template>
  <div>
    <dao-input
      v-model="demoNormal"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <input class="dao-control" type="text" placeholder="使用纯样式" v-model="demoNormalByClass">
    <br><br><br>
    <dao-input
      v-model="demoNormal"
      :class="{'demo-width': isWidthLimit}"
      block
      placeholder="block 不限制宽度">
    </dao-input>
    <br>
    <dao-switch
      :option="{ on: '通过样式限制宽度，限制为 40%', off: '不限制宽度' }"
      :with-notice="true"
      v-model="isWidthLimit">
    </dao-switch>
    <br><br><br>
    <dao-input
      v-model="demoDisabled"
      disabled
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <input class="dao-control" type="text" disabled="disabled" placeholder="使用纯样式" v-model="demoDisabledByClass">
    <br><br><br>
    <dao-input
      v-model="demoSizeSM"
      size="sm"
      placeholder="请输入内容，小号 Input">
    </dao-input>
    <br><br><br>
    <input class="dao-control" size="sm" type="text" placeholder="使用纯样式，小号 Input" v-model="demoSizeSMByClass">
    <br><br><br>
    <dao-input
      v-model="demoSuccess"
      :message="message"
      :status="statusSuccess"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoErrorBottomNoIcon"
      :message="message"
      message-placement="bottom"
      message-no-icon
      :status="statusError"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoLoading"
      icon-inside
      :status="statusLoading"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoIconInsideSuccess"
      icon-inside
      :message="message"
      :status="statusSuccess"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoIconInsideError"
      icon-inside
      :message="message"
      :status="statusError"
      placeholder="请输入内容">
    </dao-input>
    <div class="dao-btn blue">保存</div>
    <br><br><br>
    <dao-input
      v-model="demoIconInsideInfo"
      icon-inside
      :message="message"
      :status="statusInfo"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoInputGroup"
      icon-inside
      :message="message"
      :status="statusError"
      placeholder="请输入内容">
      <span slot="prepend">http://</span>
      <span slot="append">.com</span>
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoInputGroupSelect"
      icon-inside
      :message="message"
      :status="statusError"
      placeholder="请输入内容">
      <dao-select slot="prepend" v-model="selectPrepend">
        <dao-option-group>
          <dao-option value="http://">http://</dao-option>
          <dao-option value="https://">https://</dao-option>
        </dao-option-group>
      </dao-select>
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoSearch"
      search
      placeholder="搜索">
    </dao-input>
    <br><br><br>
    <input class="dao-control search" type="text" placeholder="搜索(使用纯样式)" v-model="demoSearchByClass" required>
    <br><br><br>
    <dao-editable-input
      v-model="demoEditable"
      placeholder="不能输入 4 或 6"
      :message="demoEditableMessage"
      :status="demoEditableStatus"
      icon-inside
      save-btn-content="确认"
      :edit-state="true"
      :on-check="demoCheck"
      :on-success="demoEditableSuccess">
      <span slot="append">GB</span>
    </dao-editable-input>
    <br><br><br>
    <textarea class="dao-control" type="text" rows="3" placeholder="请填写内容" v-model="demoTextarea"></textarea>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '输入错误',
        demoNormal: '',
        demoNormalByClass: '',
        isWidthLimit: false,
        demoDisabled: '',
        demoDisabledByClass: '',
        demoSizeSM: '',
        demoSizeSMByClass: '',
        demoSuccess: '',
        demoErrorBottomNoIcon: '',
        demoLoading: '',
        demoIconInsideSuccess: '',
        demoIconInsideError: '',
        demoIconInsideInfo: '',
        demoInputGroup: '',
        demoInputGroupSelect: '',
        selectPrepend: 'https://',
        demoSearch: '',
        demoSearchByClass: '',
        demoEditable: 'editable',
        demoEditableMessage: '',
        demoEditableStatus: '',
        demoTextarea: '',
        statusLoading: 'loading',
        statusError: 'error',
        statusSuccess: 'success',
        statusInfo: 'info',
      };
    },
    methods: {
      demoCheck() {
        if (this.demoEditable === '4' || this.demoEditable === '6') {
          this.demoEditableMessage = '不能输入 4 或 6';
          this.demoEditableStatus = 'error';
          return false;
        }
        this.demoEditableMessage = '';
        this.demoEditableStatus = '';
        return true;
      },
      demoEditableSuccess() {
        console.log('保存成功');
      },
    },
  };
</script>
<style lang="scss" scoped>
  .demo-width {
    width: 40%;
  }
</style>
