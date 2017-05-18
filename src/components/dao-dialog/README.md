## dao-dialog
```HTML
<dao-dialog
  [type=""]
  [:visible=""]
  [title=""]
  [size=""]
  [scrollable=""]
  [:close = ""]
  [:open = ""]
  [:confirm = ""]
  [:cancel = ""]
  [:close-on-click-modal=""]
  [:close-on-press-escape=""]>
  <div slot="footer"></div>
</dao-dialog>
```
#### Dialog props

Param | Type | Details | option | default
-|-|-|-|-
visible | Boolean | 设置 dialog 是否可见 | 可选 | true
type | String | 设置 dialog 的类型。 可选 resize, feature  | 可选 |
title | String | 设置 dialog 的 title | 可选 | ''
showHeader | Boolean | 设置 dialog 的 header 是否显示, 若此参数为 false,  __title 的设置无效__ | 可选 | true
showFooter | Boolean | 设置 dialog 的 footer 是否显示, 若此参数为 false, __event confirm, cancel 的设置无效__ | 可选 | true
size | String | 设置 dialog 的大小。 可选 <code>sm</code>, <code>md</code>, <code>lg</code> | 可选 | md
scrollable | Boolean | 设置 dialog 的 body 部分是否可以滚动 | 可选 | true
closeOnClickModal | Boolean | 设置点击 modal 是否隐藏 dialog | 可选 | true
closeOnPressEscape | Boolean | 设置按键 ESC 时是否隐藏 dialog | 可选 | true

#### Dialog events
Param | Type | Details | option | default
-|-|-|-|-
open | Function | Dialog 打开时的回调 (visible = true) | 可选 | -
close | Function | Dialog 关闭时的回调(visible = false) | 可选 | -
confirm | Function | Dialog 点击 确定 时的回调 | 可选 | -
cancel | Function | Dialog 点击 取消 时的回调 | 可选 | -


#### Dialog slot

Param | Details
-|-
header | dialog 标题区的内容
- | dialog 的内容
footer | dialog 按钮操作区的内容
