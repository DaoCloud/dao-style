# Draggable (可拖拽组件)

Draggable 是一个可拖拽组件。代码请参照目录：[src/components/dao-draggable](../src/componenets/dao-draggable)。
Draggable-directive 是可拖拽组件的指令版本。代码请参照目录：[src/directives/draggable](../src/directives/draggable)。

## 使用方法

分为 component 版本和 directive 版本，各有优劣，凭喜好选择使用。Directive 版本分为两个指令，一个是可放置指令：droppable，另一个是可拖拽指令 draggable；两个指令结合使用将会更为有用。

### html 使用方法

#### component 版本用法

```html
<dao-draggable v-model="items"
[dragging-style="opacity: 0.5;"]
[dragging-class="green"]
[:disabled="true"]
[:clone="false"]
[:no-sort="false"]
[:remove-when-drag-out="true"]
[:no-repeat="false"]
@change="handleChange">
  <template v-for="item in items" :slot="item.key">
    <!-- 你的自定义模板 -->
  </template>
</dao-draggable>
```

#### directive 版本用法

```html
<div v-dao-droppable[.remove][.fixed]="{
  [onChange: handleChange],
  [disabled: isDisabled],
}">
  <span data-key="1" v-dao-draggable[.clone]="{
    [disabled: isItemDisabled],
    [style: 'color: red;'],
    [class: 'green'],
  }">Draggable Item</span>
</div>
```

## 组件参数

### Draggable (component) 参数

| 参数 | 类型 | 说明 | 默认值 | 是否必填 |
|-----|------|-----|-------|---------|
| v-model | array | 是一个对象数组，指定了组件所有可拖拽元素的数据与内容，详见[数据格式](#数据格式) | - | 是 |
| dragging-style | string | 指定了组件内元素拖动时的样式 | - | 否 |
| dragging-class | string | 指定了组件内元素拖动时的 css 类 | - | 否 |
| disabled | boolean | 组件内元素是否不能拖动 | false | 否 |
| clone | boolean | 指定拖动是组件内元素还是其复制，指定了这个属性为 true 时，组件内拖动排序的功能可能会受影响 | false | 否 |
| no-sort | boolean | 是否禁止组件内元素的拖动排序 | false | 否 |
| remove-when-drag-out | boolean | 组件内元素拖动到组件外时，是否需要立即从组件中删除该元素。如果是 false 且 clone 也为 false 的话，则只有元素拖动到另外的组件内时才会把元素从组件中删除 | false | 否 |
| no-repeat | boolean | 是否禁止组件内拖入相同内容的元素 | false | 否 |

### Draggable (component) 事件

| 事件名称 | 说明 | 回调参数 |
|----------|-----|---------|
| change | 拖动结束时组件值的变化 | 拖动结束时组件的值 |

#### 数据格式

```javascript
[
  {
    key: '1', // 拖动元素的唯一标识符
    [context]: '<div>Drag item 1</div>', // 指定了组件内拖动元素的内容，会将字符串以 html 的形式渲染到组件子元素内
    [draggingStyle]: 'opacity: 0.5', // 指定了单个元素拖动时的样式，比组件指定的优先级高
    [draggingClass]: 'green', // 指定了单个元素拖动时的 css 样式类，比组件指定的优先级高
    [style]: 'color: red;', // 指定了单个元素的额外样式
    [class]: 'red', // 指定了单个元素的额外 css 样式类
    [disabled]: true, // 指定了单个元素是否禁止拖动
  },
  // ...
  // 注：方括号的属性代表可以不指定
]
```

### Draggable (directive) 参数

| 参数 | 类型 | 说明 | 默认值 | 是否必填 |
|-----|-------|------|--------|------|
| value (指令的绑定值) | object | 指令的详细配置，[value](#指令绑定值格式) | - | 否 |
| modifiers (指令的修饰符) | - | 指令的额外配置，可取值：[.clone] 指定拖动元素是否要复制 | - | 否 |

### Droppable (directive) 参数
| 参数 | 类型 | 说明 | 默认值 | 是否必填 |
| value (指令的绑定值) | object | 指令的详细配置，[value](#指令绑定值格式) | - | 否 |
| modifiers (指令的修饰符) | - | 指令的额外配置，可取值：[.remove] 指定 draggable 元素拖动到 droppable 元素外时是否需要立即删除, [.fixed] 指定当前 droppable 内部的元素是否禁止拖动排序 | - | 否 |

#### 指令绑定值格式

* draggable
```javascript
{
  disabled: false, // 是否禁用拖动
  style: 'color: red;', // 拖动时额外样式
  class: 'green', // 拖动时额外 css 类
}
```

* droppable
```javascript
{
  onChange: handleChange, // 拖动完成数据变化的回调
  disabled: false, // 是否禁止元素放置
}
```
