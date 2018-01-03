# dao-spin（loading 菊花图）

dao-spin 是一个表示 loading 的旋转的菊花图

借用了 [spin.js](http://spin.js.org/) 

## 使用方法

```vue
<template>
  <dao-spin
    size="size"
    color="color">
  </dao-spin>
</template>
<script>
  export default {
    data() {
      return {
        size: 'normal',
        color: 'grey',
      };
    },
  };
</script>
```

## 参数
| 参数名     | 类型     | 说明                                       | 默认值  | 是否必填 |
| ------- | ------ | ---------------------------------------- | ---- | ---- |
| size | string | 图标的大小，暂时可选值就 normal | normal    | 否   |
|  color    | string  | 图标的颜色，可选值有 ['grey', 'white'] | grey    | 否    |