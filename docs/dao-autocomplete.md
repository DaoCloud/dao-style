# dao-autocomplete（自动补全）

dao-autocomplete 是一个自动补全的组件。代码请参照目录：[src/components/dao-autocomplete](../src/components/dao-autocomplete)。

## 使用方法

### 基本版

基本版的 autocomplete 支持传入一个数组作为选项列表。数组里可以是字符串，也可以是 text/value 形式的对象，也可以两者混用。

#### HTML

```HTML
<dao-autocomplete
  v-model="model"
  :options="options"
  [placeholder="请输入内容"]
  [:append-to-body="appendToBody"]
  [:popper-cls="popperCls"]>
</dao-autocomplete>
```

#### JavaScript

```javascript
export defualt {
  data() {
    return {
      model: '',
      options: ['apple', 'banana', 'cherry'],
    }
  }
}
```

或者

```javascript
export defualt {
  data() {
    return {
      model: '',
      options: [
        {
          text: '苹果',
          value: 'apple',
        },
        {
          text: '🍌香蕉',
          value: 'banana'
        },
        {
          text: '🍒',
          value: 'cherry'
        }
      ],
    }
  }
}
```

## 参数

| 参数名         | 类型     | 说明                                       | 默认值  | 是否必填 |
| ----------- | ------ | ---------------------------------------- | ---- | ---- |
| v-model     | String | 绑定的值                                     | -    | 是    |
| placeholder | String | 占位符                                      | -    | 否    |
| options     | Array  | 备选的选项。其中可以是字符串，也可以是 text/value 形式的对象。其中，`text` 的值是用来展示和筛选的，`value` 的值是用来绑定到 model 上的。也就是说，`value` 对用户来说是感知不到的。如果数组里的元素是字符串的话，那么 text 和 value 就是一样的。options 还支持异步修改。 | -    | 是    |
| appendToBody | Boolean | 是否将 popper 元素添加到 body |true|否|
| popperCls | Array | appendToBody 之后为 popper 元素添加的类，一般用于修改 popper 元素的样式 | - |否|
| validate | Function   | 验证函数。这个函数应该是个纯函数。它接受一个参数，就是当前 auto-complete 中的值。如果返回 `true`，表示验证通过。如果返回其他字符串，表示验证不通过，且错误信息是字符串内容。 | -  | 否  |

## 事件

| 事件名称 | 说明 | 回调参数 |
|:-------:|:---:|:-------:|
| change | 在 AutoComplete 值改变时触发 | (value: String) |
