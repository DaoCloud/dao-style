<template>
  <div>
    <div class="demo-container">
      <button class="dao-btn blue" @click="alert">alert</button>
      <button class="dao-btn blue" @click="confirm">confirm</button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      alert() {
        this.$alert({
          title: 'alert title',
          text: 'alert text',
          theme: 'blue',
          cancel() {
            console.log('alert cancel');
          },
          close() {
            console.log('alert close');
          },
          confirm() {
            console.log('alert confirm');
          },
        });
      },
      confirm() {
        this.$confirm({
          // 标题
          title: 'confirm title',
          // 内容
          text: 'confirm text',
          // 主题颜色，可以使用 dao-button 里的样式来控制确认按钮的颜色
          theme: 'red',
          // 取消按钮的文字
          cancelText: '取消文字',
          // 取消时候调用
          cancel() {
            console.log('confirm cancel');
          },
          // 关闭时调用
          close() {
            console.log('confirm close');
          },
          // 确认按钮的文字
          confirmText: '确认文字',
          // 确认时调用
          confirm() {
            console.log('confirm confirm');
          },
        });
      },
    },
  };
</script>
<style lang="scss" scoped>
.demo-container {
  margin-bottom: 30px;
}
</style>