# Card

Card 是一个将信息以卡片的形式呈现的组件。代码请参照目录：[src/components/dao-card](../src/components/dao-card)。

## 使用方法

### html 使用方法
``` html
<div class="dao-card-layout">
  <div class="dao-card-col">
    <div class="dao-card">
      <div class="dao-card-main">
        <div class="icon">
          [图标]
        </div>
        <div class="content">
          <div class="title">
            <span>[标题]</span>
            <svg class="icon-verified"><use xlink:href="#icon_badge-verified"></use></svg>
            <svg class="icon-cloud"><use xlink:href="#icon_cloud-line"></use></svg>
            [其他图标]
          </div>
          <div class="sub-title">[子标题]</div>
          <div class="desc">[描述]</div>
        </div>
      </div>
      <div class="dao-card-footer">
        <div class="footer-main">[底部文字]</div>
        <div class="footer-opt">
          <a href="#" class="dao-btn btn-sm blue">[按钮文字]</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

## 组件参数

### 在 .dao-card-layout 中可扩展的样式

以下样式都是与 .dao-card-layout 同级的。

| 样式名 | 说明 | 默认值 | 是否必填 |
|:-----:|:---:|:-----:|:------:|
| .no-side-blank | .dao-card-layout 左右不留边距 | - | 否 |
| .min-* | 限制一行最少显示几个，* 可选值 1-6 | min-1 | 否 |
| .max-* | 限制一行最多显示几个，* 可选值 1-6 | max-6 | 否 |
| .offset-* | 窗口大小对 dao-card-layout 的偏移量，* 可选值： xs, sm, md, lg | - | 否 |
