# slider ( 滑动 )

slider 是 滑动组件 : [src/components/dao-slider](../src/components/dao-slider)

## 使用方法

### html 使用方法

```HTML
<dao-slider
  @onChange="handleChange"
  v-model="value"
  [:min="0"]
  [:max="10"]
  [:step="step"]
  [:diabled="false"]
  [:showStops="false"]
  [:showTips="false"]
>
</dao-slider>
```

### Js 使用方法

```JS
handleChange(data) {
  console.log(`value change: ${data}`);
}
```

## 组件参数

### dao-slider

#### 组件接受的参数

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
v-model | Number | 滑块选中的值 | - | 是
min | Number | 最小值 | 0 | 否
max | Number | 最大值( 应比 min 大 ) | 10 | 否
step | Number | 步长，此值应能被 max-min 整除 | - | 否
disabled | Boolean | 是否禁用 | false | 否
showStops | Boolean | 是否显示间断点的站点( 当有 step 时生效 )| false | 否
showTips | Boolean | 是否显示间断点的提示( 当有 step 时生效 )| true | 否

#### 组件接受的事件

| 事件名称 | 说明 | 回调参数 |
|----------|-----|---------|
| onChange | 值改变时触。当使用鼠标拖曳时，只有在松开鼠标后才会触发 | 新的值 |
