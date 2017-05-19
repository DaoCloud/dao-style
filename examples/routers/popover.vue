<template>
  <div>
    <div class="demo-container">
      <div class="top">
        <dao-popover
          content="a"
          placement="top-start">
          <button class="dao-btn ghost">上左</button>
        </dao-popover>
        <dao-popover content="afgnsdjfghsdfhuieshfjfhduafyaufhdjkfhdskdjhfdsfhsdjhfushgjsghsfhgfdjkghfdjkhgfdkjghfdghfdgfdjghfdkj" placement="top">
          <button class="dao-btn ghost">上边</button>
        </dao-popover>
        <dao-popover content="Top Right 文字提示" placement="top-end">
          <button class="dao-btn ghost">上右</button>
        </dao-popover>
      </div>
      <div class="left">
        <dao-popover content="Left Top 文字提示" placement="left-start">
          <button class="dao-btn ghost">左上</button>
        </dao-popover><br><br>
        <dao-popover content="Left Center 文字提示" placement="left">
          <button class="dao-btn ghost">左边</button>
        </dao-popover><br><br>
        <dao-popover content="Left Bottom 文字提示" placement="left-end">
          <button class="dao-btn ghost">左下</button>
        </dao-popover>
      </div>
      <div class="right">
        <dao-popover content="dgfhfdhfchcgfhddrdgljlhkuhkhkjhkjhkjhkjhkjhkjhkjhkjh" placement="right-start">
          <button class="dao-btn ghost">右上</button>
        </dao-popover><br><br>
        <dao-popover content="Right Center 文字提示" placement="right">
          <button class="dao-btn ghost">右边</button>
        </dao-popover><br><br>
        <dao-popover content="Right Bottom 文字提示" placement="right-end">
          <button class="dao-btn ghost">右下</button>
        </dao-popover>
      </div>
      <div class="bottom">
        <dao-popover content="Bottom Left 文字提示" placement="bottom-start">
          <button class="dao-btn ghost">下左</button>
        </dao-popover>
        <dao-popover content="Bottom Center 文字提示" placement="bottom">
          <button class="dao-btn ghost">下边</button>
        </dao-popover>
        <dao-popover content="Bottom Right 文字提示" placement="bottom-end">
          <button class="dao-btn ghost">下右</button>
        </dao-popover>
      </div>
    </div>
    <div class="demo-container">
      <dao-popover
        content="Top Left 文字提示"
        placement="top-start">
        <button class="dao-btn ghost">slot</button>
        <div slot="content">slot content</div>
      </dao-popover>
    </div>
    <div class="demo-container">
      <dao-popover
        :content="test"
        :always="true">
        <input type="text" v-model="test">
      </dao-popover>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        test: 'asdf',
      };
    },
  };
</script>
<style lang="scss" scoped>
.demo-container {
  width: 500px;
}
.top {
  text-align: center;
}
.left {
  float: left;
  width: 60px;
}
.right {
  float: right;
  width: 60px;
}
.bottom {
  clear: both;
  text-align: center;
}
</style>
