# dao-splitter

splitter 是一个纵向分割的布局方式，由一个 divider 分割上下两栏，且可以拖动 divider 来控制两栏的大小。代码请参照目录：[src/components/dao-splitter](../src/components/dao-splitter)。

## 使用方法

### html 使用方法

```html
<dao-splitter :config="config">
  <template slot="dao-splitter-top">
    top content body
  </template>
  <template slot="dao-splitter-bottom">
    bottom content body
  </template>
</dao-splitter>
```

### JavaScript 使用方法

```javascript
export default {
  data() {
    return {
      config: {
        height: '100%',
        topMin: '100px',
        bottomMin: '100px',
        dividerHeight: '10px',
      },
    };
  },
};
```

## 组件参数

### 组件接受的参数

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| config | Object | 配置项，具体可看[config 对象](#config) | - |否

#### config 对象 <span id="config"></span>

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
 height | String | dao-splitter 的高度，可以是`100%`,或者`100px` | 100% | 否
topMin | String | 上半部分的最低高度 | '0' | 否
bottomMin | String | 下半部分的最低高度 | '0' | 否
dividerHeight | String | divider 的高度 | '5px' | 否

#### dao-splitter 的具名 slot

slot名称 | 说明
-|-
 dao-splitter-top | 上半部分的内容
 dao-splitter-bottom | 下半部分的内容
