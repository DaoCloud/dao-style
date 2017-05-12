# tabs ( 标签 )

tabs 是 标签组件。代码请参照目录 : [src/components/dao-tabs](../src/components/dao-tabs)

## 使用方法

### html 使用方法

```HTML
<dao-tabs direction="right">
  <dao-tab-item heading="标题1">
    <h3> HTML 渲染 </h3>
    <label>Name</label>
    <input type="text" />
  </dao-tab-item>
  <dao-tab-item heading="标题2">
    Tab 2
  </dao-tab-item>
</dao-tabs>
```

## 组件参数

### dao-tabs

#### 组件接受的参数

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
direction | String | 控制 tab 的标签的方向。 有 2 个 选项, `left`, `right` | left | 否

### dao-tab-item

#### 组件接受的参数

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
heading | String | tab 标签名的内容。 | \ | 是

#### slot

slot名称 | 说明
-|-
 -- | tab 的内容
