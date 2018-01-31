<template>
  <div>
    <h1>Input Normal</h1>
    <br><hr><br>
    <dao-input
      v-model="demoNormal"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <input class="dao-control" type="text" placeholder="使用纯样式" v-model="demoNormalByClass">
    <br><br><br>


    <h1>Input Block</h1>
    <br><hr><br>
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


    <h1>Input Disabled</h1>
    <br><hr><br>
    <dao-input
      v-model="demoDisabled"
      disabled
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <input class="dao-control" type="text" disabled="disabled" placeholder="使用纯样式" v-model="demoDisabledByClass">
    <br><br><br>
    <h1>Small Input</h1>
    <br><hr><br>
    <dao-input
      v-model="demoSizeSM"
      size="sm"
      placeholder="请输入内容，小号 Input">
    </dao-input>
    <br><br><br>
    <input class="dao-control" size="sm" type="text" placeholder="使用纯样式，小号 Input" v-model="demoSizeSMByClass">
    <br><br><br>

    <dao-input
      v-model="demoSizeSM"
      size="sm"
      placeholder="请输入内容，小号 Input"
      disabled>
    </dao-input>
    <br><br><br>
    <input class="dao-control" disabled size="sm" type="text" placeholder="使用纯样式，小号 Input" v-model="demoSizeSMByClass">
    <br><br><br>

    <dao-input
      v-model="demoSizeSM"
      size="sm"
      :status="statusError"
      placeholder="请输入内容，小号 Input">
    </dao-input>
    <br><br><br>
    <input class="dao-control error" size="sm" type="text" placeholder="使用纯样式，小号 Input" v-model="demoSizeSMByClass">
    <br><br><br>


    <h1>Input with Message</h1>
    <br><hr><br>
    <dao-input
      v-model="demoSuccess"
      :message="messageSuccess"
      :status="statusSuccess"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoErrorNoMessage"
      :status="statusError"
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


    <h1>Input with inside icon</h1>
    <br><hr><br>
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
      :message="messageSuccess"
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
      v-model="demoIconInsideError"
      icon-inside
      :message="message"
      :status="statusError"
      :show-tooltip-only-hover="false"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>


    <h1>Input with no border</h1>
    <br><hr><br>
    <dao-input
      v-model="demoNoborder"
      no-border
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoNoborder"
      no-border
      :status="statusError"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoNoborder"
      no-border
      size="sm"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>


    <h1>Input group</h1>
    <br><hr><br>
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


    <h1>Search</h1>
    <br><hr><br>
    <dao-input
      v-model="demoSearch"
      search
      placeholder="搜索">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoSearch"
      search
      show-helper-text
      placeholder="搜索">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoSearch"
      search
      show-helper-text
      disabled
      placeholder="搜索">
    </dao-input>
    <br><br><br>
    <input class="dao-control search" type="text" placeholder="搜索(使用纯样式)" v-model="demoSearchByClass" required>
    <br><br><br>

    <dao-input
      v-model="demoSearch"
      search
      size="sm"
      placeholder="小号搜索">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoSearch"
      search
      size="sm"
      show-helper-text
      placeholder="小号搜索">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoSearch"
      search
      size="sm"
      show-helper-text
      disabled
      placeholder="小号搜索">
    </dao-input>
    <br><br><br>
    <input class="dao-control search" type="text" placeholder="搜索(使用纯样式)" v-model="demoSearchByClass" required size="sm">
    <br><br><br>


    <h1>Editable Input</h1>
    <br><hr><br>
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


    <h1>Textarea</h1>
    <br><hr><br>
    <textarea class="dao-control" type="text" rows="3" placeholder="请填写内容" v-model="demoTextarea"></textarea>
    <br><br><br>
    <textarea class="dao-control" disabled="disabled" type="text" rows="3" placeholder="请填写内容" v-model="demoTextarea"></textarea>
    <br><br><br>
    <textarea class="dao-control error" type="text" rows="3" placeholder="请填写内容" v-model="demoTextarea"></textarea>
    <br><br><br>

    <h1>File Input</h1>
    <hr><br><br>
    <dao-file-input
      v-model="demoFileInput"
      accept="image/*"
      style="width: 287px;"
      @change="onFileChange"
      placeholder="请选择文件...">
      <span slot="append">GB</span>
    </dao-file-input>
    <br><br>
    <dao-file-input
      v-model="demoFileInput"
      accept="image/*"
      @change="onFileChange"
      placeholder="请选择文件...">
      <span slot="append">GB</span>
    </dao-file-input>
    
    <br><br><br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '输入错误',
        messageSuccess: '输入正确',
        demoNormal: '',
        demoNormalByClass: '',
        isWidthLimit: false,
        demoDisabled: '',
        demoDisabledByClass: '',
        demoSizeSM: '',
        demoSizeSMByClass: '',
        demoSuccess: '',
        demoErrorNoMessage: 'error',
        demoErrorBottomNoIcon: 'error',
        demoLoading: '',
        demoIconInsideSuccess: '',
        demoIconInsideError: 'error',
        demoIconInsideInfo: '',
        demoNoborder: 'no border',
        demoInputGroup: 'error',
        demoInputGroupSelect: 'error',
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
        demoFileInput: null,
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
      onFileChange(file) {
        console.log('select file:', file);
        console.log('model', this.demoFileInput);
      },
    },
  };
</script>
<style lang="scss" scoped>
  .demo-width {
    width: 40%;
  }
</style>
