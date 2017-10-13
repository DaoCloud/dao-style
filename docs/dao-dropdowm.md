# dropdown（下拉菜单）

dropdown 是一个下拉菜单组件。代码请参照目录：[src/components/dao-dropdown](../src/components/dao-dropdown)。

## 使用方法

### template

```html
<dao-dropdown
  trigger="click"
  :append-to-body="true"
  placement="bottom-start">
  <div class="dao-btn dao-icon ghost">
    <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_down-arrow"></use></svg>
  </div>
  <dao-dropdown-menu slot="list">
    <dao-dropdown-item :is-title="true">扩展</dao-dropdown-item>
    <dao-dropdown-item>
      <svg class="icon"><use xlink:href="#icon"></use></svg>
      <span class="text">扩展</span>
    </dao-dropdown-item>
    <dao-dropdown-item :is-divided="true"></dao-dropdown-item>
    <dao-dropdown-item>扩展</dao-dropdown-item>
  </dao-dropdown-menu>
</dao-dropdown>
```

## 组件参数

### dao-dropdown

参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
-|-|-|-|-|-
trigger | 触发方式 | String | click, hover, custom | hover | 否
append-to-body | 是否将下拉菜单挂 DOM 元素载到 body | Boolean | true, false | true |否
placement | 设置下拉菜单的相对位置 | String | (top\|bottom\|left\|right\|auto)(-start\|-end) | bottom |否

### dao-dropdown-menu

参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
-|-|-|-|-|-
slot | - | String | list | - | 是

### dao-dropdown-item

参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
-|-|-|-|-|-
is-title | 设置菜单标题 | String | - | - | 否
is-divided | 分隔选项 | Boolean | - | - | 否
is-disabled | 禁用选项 | Boolean | - | - | 否
