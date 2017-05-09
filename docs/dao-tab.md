# dao-tab

## 使用方法

### HTML

```HTML
<dao-tabset size="large" direction="right">
  <dao-tab heading="标题1">
    <h3> HTML 渲染 </h3>
    <label>Name</label>
    <input type="text" />
  </dao-tab>
  <dao-tab heading="标题2">
    Tab 2
  </dao-tab>
</dao-tabset>
```

## 参数

### dao-tabset

#### props

Param | Type | Details | Option | Default
-|-|-|-|-
size | String | 设置 tab 的尺寸。 有 3 个 选项, `sm`,`md`, `lg` (可以自己样式控制) | 可选 | md
direction | String | 控制 tab 的标签的方向。 有 2 个 选项, `left`, `right` | 可选 | left

### dao-tab

#### props

Param | Type | Details | Option | Default
-|-|-|-|-
heading | String | tab 标签的内容。 | 必选 | \

#### slot

Param | Details
-|-
- | tab 的内容
