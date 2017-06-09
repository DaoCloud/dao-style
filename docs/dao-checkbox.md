# dao-checkbox

dao-checkbox 是多选框组件。它是纯样式组件。代码请参照目录：[src/components/dao-checkbox](../src/components/dao-checkbox)。

## 使用方法

### 普通版

```HTML
  <div class="dao-checkbox">
    <label>
      <input type="checkbox" checked>
      option 1
    </label>
  </div>
```

### 圆角版：

```HTML
  <label>
    <input type="checkbox" class="round">
    圆角
  </label>
```

## 参数
dao-checbox 支持所有原生属性。另外，圆角版的 dao-checkbox 还有一个特殊的 class：

| 类名      | 说明       |
| ------- | ----------- |
| half-check  | 表示半选 |
