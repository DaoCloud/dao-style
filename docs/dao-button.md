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

### mini版：
mini版暂时只支持两种颜色：grey， blue 

```HTML
<button class="dao-btn mini blue">确定</button>
```

### 图标版：
Button 上的内容可以是文字和图标。文字和图标在按钮上垂直居中。图标可以在文字的左侧或右侧。特殊情况下，图标一侧的边距可能会有视觉调整（Optical Adjustment）。
请注意文字两侧均有图标时，右侧图标推荐使用"icon_caret-down"。
纯图标无文字版只支持一至两个图标，两个图标右侧图标推荐使用"icon_caret-down"。

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

<button class="dao-btn blue has-icons">
  <svg class="icon"><use xlink:href="#icon_sort-desc"></use></svg>
  <span class="text">确定</span>
  <svg class="icon"><use xlink:href="#icon_caret-down"></use></svg>
</button>

<button class="dao-btn blue icon-btn">
    <svg class="icon"><use xlink:href="#icon_play"></use></svg>
  </button>
  <button class="dao-btn blue opt-btn">
    <svg class="icon"><use xlink:href="#icon_setting"></use></svg>
    <svg class="icon"><use xlink:href="#icon_caret-down"></use></svg>
  </button>
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

<span class="dao-btn-group">
  <button class="dao-btn ghost icon-btn">
    <svg class="icon"><use xlink:href="#icon_trash"></use></svg>
  </button>
  <button class="dao-btn ghost icon-btn">
    <svg class="icon"><use xlink:href="#icon_trash"></use></svg>
  </button>
  <button class="dao-btn ghost icon-btn" :disabled="true">
    <svg class="icon"><use xlink:href="#icon_trash"></use></svg>
  </button>
</span>
```

## 参数
dao-button 支持的 class：

| 类名      | 说明       |
| ------- | ----------- |
| blue  | 蓝色的实心按钮 |
| green  | 绿色的实心按钮 |
| red  | 红色的实心按钮 |
| ghost  | 空心按钮 |
| mini  | 无边框按钮 |
| has-icon  | 单个图标按钮(含文字) |
| has-icons  | 多个图标按钮(含文字) |
| icon-btn  | 单个图标按钮(不含文字) |
| opt-btn  | 多个图标按钮(不含文字) |