<template>
  <div>
    <div class="demo-container">
      <div class="top">
        <dao-tooltip
          content="Top Left 文字提示"
          placement="top-start"
          :delay="delay">
          <button class="dao-btn ghost">上左 & delay 1000 ms</button>
        </dao-tooltip>
        <dao-tooltip content="Top Center 文字提示" placement="top">
          <button class="dao-btn ghost">上边</button>
        </dao-tooltip>
        <dao-tooltip content="Top Right 文字提示" placement="top-end">
          <button class="dao-btn ghost">上右</button>
        </dao-tooltip>
      </div>
      <div class="left">
        <dao-tooltip content="Left Top 文字提示" placement="left-start">
          <button class="dao-btn ghost">左上</button>
        </dao-tooltip><br><br>
        <dao-tooltip content="Left Center 文字提示" placement="left">
          <button class="dao-btn ghost">左边</button>
        </dao-tooltip><br><br>
        <dao-tooltip content="Left Bottom 文字提示" placement="left-end">
          <button class="dao-btn ghost">左下</button>
        </dao-tooltip>
      </div>
      <div class="right">
        <dao-tooltip content="Right Top 文字提示asdfasd;fasj;dkfjas;djf;asd;asd;fjas;dfj;asd" placement="right-start">
          <button class="dao-btn ghost">右上</button>
        </dao-tooltip><br><br>
        <dao-tooltip content="Right Center 文字提示" placement="right">
          <button class="dao-btn ghost">右边</button>
        </dao-tooltip><br><br>
        <dao-tooltip content="Right Bottom 文字提示" placement="right-end" :append-to-body="false">
          <button class="dao-btn ghost">右下</button>
        </dao-tooltip>
      </div>
      <div class="bottom">
        <dao-tooltip content="Bottom Left 文字提示" placement="bottom-start">
          <button class="dao-btn ghost">下左</button>
        </dao-tooltip>
        <dao-tooltip content="Bottom Center 文字提示" placement="bottom">
          <button class="dao-btn ghost">下边</button>
        </dao-tooltip>
        <dao-tooltip content="Bottom Right 文字提示" placement="bottom-end">
          <button class="dao-btn ghost">下右</button>
        </dao-tooltip>
      </div>
    </div>
    <div class="demo-container">
      <!-- <dao-tooltip
        content="delay 1000ms"
        placement="top-start"
        :delay="delay">
        <button class="dao-btn ghost">delay 1000ms</button>
      </dao-tooltip> -->
      <table>
        <tr>
          <td style="border:1px solid black;overflow:hidden;">
            <dao-tooltip
              content="test">
              <button class="dao-btn ghost">test</button>
            </dao-tooltip>
          </td>
        </tr>
      </table>
    </div>
    <div>
      <div class="dao-btn-group">
        <dao-tooltip content="this is a test button group" placement="top">
          <button class="dao-btn blue">with tooltip</button>
        </dao-tooltip>
        <button class="dao-btn green">without</button>
        <dao-tooltip content="this is a test button group" placement="top">
          <button class="dao-btn yellow">with</button>
        </dao-tooltip>
        <button class="dao-btn red">with</button>
      </div>
    </div>
    <br>
    <div class="dao-btn-group">
        <dao-tooltip content="this is a test button group" placement="top">
          <button class="dao-btn ghost">with tooltip</button>
        </dao-tooltip>
        <button class="dao-btn ghost">without</button>
        <dao-tooltip content="this is a test button group" placement="top">
          <button class="dao-btn ghost">with</button>
        </dao-tooltip>
        <button class="dao-btn ghost">with</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        delay: 1000,
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
