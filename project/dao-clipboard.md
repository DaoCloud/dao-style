# Clipboard (粘贴板)

Clipboard 组件用于实现复制到粘贴板的功能。代码请参照目录：[src/components/dao-clipboard](../src/components/dao-clipboard)

## 使用方法

### normal clipboard

#### html 使用方法

```html
<div class="dao-btn blue"
     is="dao-clipboard"
     caption="Click here to show"
     content="content to copy"
     :on-success="onSuccess"
     :on-error="onError">
</div>
```

#### JavaScript 使用方法

```javascript
{
  methods: {
    onSuccess: function(e) {
      alert('Content copied !');
    },

    onError: function(e) {
      alert('Something is wrong !');
    }
  }
}
```

### copy block

#### html 使用方法
```html
<dao-copy-block [:with-btn="false"]>asjdahkdjagsdjahgsdjgajsgdagjs</dao-copy-block>

<!--
   注：组件的内容最好只放文本，否则可能不支持。
      另外，这里内部使用的是 pre，所以会保留内容的格式，详见 demo
 -->
```

## 组件参数

### 组件接受的参数

#### normal

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| caption | String | 组件显示出来的文本 |-|否|
| content | String | 要复制的内容 |-|否|
| onSuccess | Function | 文本复制成功后的回调，接收唯一一个事件参数 |-|否|
| onError | Function | 文本复制失败的回调，接收唯一一个事件参数 |-|否|

#### copy block

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| with-btn | Boolean | 是否需要复制按钮，如果传入的是 false，则没有复制按钮，且点击文字可以全选并复制文本 |-|否|
| copy-text | String | 复制提示文本 | 点击复制 |否|
| copied-text | String | 复制成功提示文本 | 复制成功 |否|
| copy-failed-text | String | 复制失败提示文本 | 复制失败 |否|
