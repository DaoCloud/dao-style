# Button (按钮)

Button 是一个 32 像素高的（包括 border）表单元素（Form Element）。它是纯样式组件。代码请参照目录：[src/components/dao-button](../src/components/dao-button)。

## 使用方法

### 普通版

```HTML
<button class="dao-btn blue">确定</button>
```

### Disabled

```HTML
<button class="dao-btn blue" :disabled="true">确定</button>
```

### 小号版：

```HTML
<button class="dao-btn btn-sm blue">确定</button>
```

### 图标版：
Button 上的内容可以是文字和图标。文字和图标在按钮上垂直居中。图标可以在文字的左侧或右侧。特殊情况下，图标一侧的边距可能会有视觉调整（Optical Adjustment）。

```HTML
<button class="dao-btn blue has-icon">
  <svg class="icon">
    <use xlink:href="#icon_archive"></use>
  </svg>
  <span class="text">确定</span>
</button>
<div class="dao-btn ghost has-icon compact">
  <span class="text">下一步</span>
  <svg class="icon">
    <use xlink:href="#icon_caret-right"></use>
  </svg>
</div>
```

### 按钮组：

```HTML
<span class="dao-btn-group">
  <button class="dao-btn ghost">确定</button>
  <button class="dao-btn ghost dao-icon">
    <svg class="icon">
      <use xlink:href="#icon_down-arrow"></use>
    </svg>
  </button>
</span>

<span class="dao-btn-group">
  <button class="dao-btn blue">确定</button>
  <button class="dao-btn blue">确定</button>
  <button class="dao-btn blue">确定</button>
</span>
```

## 参数
dao-button 支持的 class：

| 类名      | 说明       |
| ------- | ----------- |
| ghost  | 空心按钮 |
| blue  | 蓝色的实心按钮 |
| green  | 绿色的实心按钮 |
| yellow  | 黄色的实心按钮 |
| orange  | 橙色的实心按钮 |
| red  | 红色的实心按钮 |
