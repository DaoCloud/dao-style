# Clipboard (粘贴板)

Clipboard 组件用于实现复制到粘贴板的功能。代码请参照目录：[src/components/dao-clipboard](../src/components/dao-clipboard)

## 使用方法

### html 使用方法

```html
<div class="dao-btn blue"
     is="dao-clipboard"
     caption="Click here to show"
     content="content to copy"
     :on-success="onSuccess"
     :on-error="onError">
</div>
```

### JavaScript 使用方法

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

## 组件参数

### 组件接受的参数

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| caption | String | 组件显示出来的文本 |-|否|
| content | String | 要复制的内容 |-|否|
| onSuccess | Function | 文本复制成功后的回调，接收唯一一个事件参数 |-|否|
| onError | Function | 文本复制失败的回调，接收唯一一个事件参数 |-|否|
