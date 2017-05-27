# numeric-badge

numeric-badge 是一个数字徽章样式组件。代码请参照目录：[src/components/dao-numeric-badge](../src/components/dao-numeric-badge)。

## 使用方法
### HTML
有两种使用法：使用 slot 分发内容、直接自己写各种 class。
#### 使用 slot 分发内容：
```HTML
<dao-numeric-badge [:ghost=""]>[数字]</dao-numeric-badge>
```
#### 写 class：
```HTML
<div class="dao-numeric-badge [ghost]">[数字]</div>
```

## 参数
### \<dao-numeric-badge> 接受的属性

| 参数名     | 类型     | 说明                                       | 默认值  | 是否必填 |
| ------- | ------ | ---------------------------------------- | ---- | ---- |
| ghost | boolean | 是否为镂空样式 | -    | 否    |