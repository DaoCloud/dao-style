# Editable List (可编辑列表)

Editable List 是一个可编辑列表。代码请参照目录：[src/components/dao-editable-list](../src/componenets/dao-editable-list)。

## 使用方法
```
<dao-editable-list>
  <li slot="list" v-for="(d, i) in data" @click="onClick(i)" :class="{active: index === i}">
    {{d.key}}
  </li>
  <div slot="content">
    {{this.currentData.key + ':' + this.currentData.value}}
  </div>
</dao-editable-list>
```

## 使用说明
Editable List 是个几乎只有纯样式的组件。
它有两个 slot，一个是 list，一个是 content。
list slot 应该是 v-for 生成的 li 元素。可以添加上 active 类来让它以选中的样式展现。
content slot 里可以展示任何东西。

## 事件

| 事件名称 | 说明 | 回调参数 |
|----------|-----|---------|
| add | 点击加号触发的事件 | - |
| remove | 点击减号触发的事件| - |
