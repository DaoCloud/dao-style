<template>
  <div class="docs-tooltip-container">
    <div class="docs-tooltip-top">
      <dao-tooltip content="Top Left 提示文字" placement="top-start">
        <button class="dao-btn ghost">上左</button>
      </dao-tooltip>
      <dao-tooltip content="Top Center 提示文字" placement="top">
        <button class="dao-btn ghost">上边</button>
      </dao-tooltip>
      <dao-tooltip content="Top Right 提示文字" placement="top-end">
        <button class="dao-btn ghost">上右</button>
      </dao-tooltip>
    </div>
    <div class="docs-tooltip-left">
      <dao-tooltip content="Left Top 提示文字" placement="left-start">
        <button class="dao-btn ghost">左上</button>
      </dao-tooltip>
      <br><br>
      <dao-tooltip content="Left Center 提示文字" placement="left">
        <button class="dao-btn ghost">左边</button>
      </dao-tooltip>
      <br><br>
      <dao-tooltip content="Left Bottom 提示文字" placement="left-end">
        <button class="dao-btn ghost">左下</button>
      </dao-tooltip>
    </div>
    <div class="docs-tooltip-right">
      <dao-tooltip content="Right Top 提示文字" placement="right-start">
        <button class="dao-btn ghost">右上</button>
      </dao-tooltip>
      <br><br>
      <dao-tooltip content="Right Center 提示文字" placement="right">
        <button class="dao-btn ghost">右边</button>
      </dao-tooltip>
      <br><br>
      <dao-tooltip content="Right Bottom 提示文字" placement="right-end">
        <button class="dao-btn ghost">右下</button>
      </dao-tooltip>
    </div>
    <div class="docs-tooltip-bottom">
      <dao-tooltip content="Bottom Left 提示文字" placement="bottom-start">
        <button class="dao-btn ghost">下左</button>
      </dao-tooltip>
      <dao-tooltip content="Bottom Center 提示文字" placement="bottom">
        <button class="dao-btn ghost">下边</button>
      </dao-tooltip>
      <dao-tooltip content="Bottom Right 提示文字" placement="bottom-end">
        <button class="dao-btn ghost">下右</button>
      </dao-tooltip>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .docs-tooltip-container {
    width: 344px;

    .docs-tooltip-top {
      text-align: center;
    }

    .docs-tooltip-left {
      float: left;
    }

    .docs-tooltip-right {
      float: right;
    }

    .docs-tooltip-bottom {
      clear: both;
      text-align: center;
    }

    .docs-tooltip-top, .docs-tooltip-bottom {
      .dao-tooltip {
        margin: 0 4px;
      }
    }
  }
</style>
