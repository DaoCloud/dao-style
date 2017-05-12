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
      v-model="demoDisabled"
      :disabled="disabled"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <input class="dao-control" type="text" disabled="disabled" placeholder="使用纯样式" v-model="demoDisabledByClass">
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
      :message-no-icon="true"
      :status="statusError"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoLoading"
      :icon-inside="true"
      :status="statusLoading"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoIconInsideSuccess"
      :icon-inside="true"
      :message="message"
      :status="statusSuccess"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoIconInsideError"
      :icon-inside="true"
      :message="message"
      :status="statusError"
      placeholder="请输入内容">
    </dao-input>
    <div class="dao-btn blue">保存</div>
    <br><br><br>
    <dao-input
      v-model="demoIconInsideInfo"
      :icon-inside="true"
      :message="message"
      :status="statusInfo"
      placeholder="请输入内容">
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoInputGroup"
      :icon-inside="true"
      :message="message"
      :status="statusError"
      placeholder="请输入内容">
      <template slot="prepend">
        <span class="dao-input-group-addon">http://</span>
      </template>
      <template slot="append">
        <span class="dao-input-group-addon">.com</span>
      </template>
    </dao-input>
    <br><br><br>
    <dao-input
      v-model="demoSearch"
      :search="true"
      placeholder="搜索">
    </dao-input>
    <br><br><br>
    <input class="dao-control search" type="text" placeholder="搜索(使用纯样式)" v-model="demoSearchByClass" required>
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
        disabled: true,
        demoDisabled: '',
        demoDisabledByClass: '',
        demoSuccess: '',
        demoErrorBottomNoIcon: '',
        demoLoading: '',
        demoIconInsideSuccess: '',
        demoIconInsideError: '',
        demoIconInsideInfo: '',
        demoInputGroup: '',
        demoSearch: '',
        demoSearchByClass: '',
        demoTextarea: '',
        statusLoading: 'loading',
        statusError: 'error',
        statusSuccess: 'success',
        statusInfo: 'info',
      };
    },
  };
</script>