# dao-progress（进度条）

dao-progress 是一个进度条组件。代码请参照目录：[src/components/dao-progress](../src/components/dao-progress)。

## 使用方法

dao-progress 的宽度由父元素决定，它会自动撑满父元素的宽度。

### 普通进度条 html 使用方法

```HTML
<dao-progress
  type=""
  progress=""
</dao-progress>
```

### 脉动进度条 html 使用方法

```HTML
<dao-progress-pulsing
  progress="0.3"
</dao-progress-pulsing>
```

### 分格进度条 html 使用方法

每一个颜色条都是 `flex: 1 1 auto` 的。也就是说，如果四种颜色的进度加起来不等于 1，那么剩余的宽度就会被四种颜色平分。

```HTML
<dao-progress-stacked
  [green="0.1"]
  [red="0.3"]
  [stripe="0.2"]
  [black="0.4"]
</dao-progress-stacked>
```

## 组件参数

| 名称       | 类型     | 说明                                       | 默认值  | 是否必填 |
| -------- | ------ | ---------------------------------------- | ---- | ---- |
| type     | String | 表示普通进度条的类型。可以接受三个值：`basic`、`usage` 和 `error` | -    | 是    |
| progress | Number | 表示进度。应该是大于等于 0，小于等于 1 的数。                | 0    | 否    |
| green    | Number | 表示分格进度条中绿色的进度。应该是大于等于 0，小于等于 1 的数。       | 0    | 否    |
| red      | Number | 表示分格进度条中红色的进度。应该是大于等于 0，小于等于 1 的数。       | 0    | 否    |
| stripe   | Number | 表示分格进度条中条纹的进度。应该是大于等于 0，小于等于 1 的数。       | 0    | 否    |
| black    | Number | 表示分格进度条中黑色的进度。应该是大于等于 0，小于等于 1 的数。       | 0    | 否    |