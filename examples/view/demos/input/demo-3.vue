<template>
  <div class="demo3">
    <h3>
      填写正确，有提示信息
    </h3>
    <dao-input
      v-model="success.value"
      :message="success.msg"
      :status="success.status"
      placeholder="请输入内容">
    </dao-input>
    <h3>
      填写错误，无提示信息
    </h3>
    <dao-input
      v-model="error.value"
      :status="error.status"
      placeholder="请输入内容">
    </dao-input>
    <h3>
      填写错误，有提示信息
    </h3>
    <dao-input
      v-model="bottomError.value"
      :status="bottomError.status"
      :message="bottomError.msg"
      message-placement="bottom"
      message-no-icon
      placeholder="请输入内容">
    </dao-input>
  </div>
</template>
<script>
export default {
  name: 'Demo3',
  data() {
    return {
      success: {
        value: '',
        msg: '输入正确',
        status: 'success',
      },
      error: {
        value: '',
        status: 'error',
      },
      bottomError: {
        value: '',
        msg: '输入错误',
        status: 'error',
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.demo3 h3{
  margin: 20px 0 10px;
  &:first-child {
    margin-top: 0;
  }
}
</style>

