# dialog ( 弹出框 )

dialog 是一个弹出框组件。代码请参照目录: [src/components/dao-dialog](../src/components/dao-dialog)。

## 组件参数

### dialog

#### 接受的参数

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
visible | Boolean | 控制 dao-dialog 是否显示的参数, 与父组件双向绑定 ( 需要加 sync 修饰符 ) | false | 是
header | Object/Boolean/String | header 配置对象, 具体内容见 [header 对象](#header) (当传入 header slot 时，该配置将不会生效), 当任何时候都不需要 header 时可以传入 false| [header](#header) | 否
footer | Object | footer 配置对象, 具体内容见 [footer 对象](#footer) (当传入 footer slot 时，该配置将不会生效)， 当任何时候都不需要 footer 时可以传入 false| [footer](#footer) |  否
size | String/Object | 设置 dialog 的大小。 可选 `sm`, `md`, `lg`, 或者传入 { width: *, height: * } 具体指定 | 'md'  | 否
containerClass | String | dialog 的容器类名 | - | 否
closeOnClickOutside | Boolean | 设置点击 dialog 外面( 遮罩层 ) 是否隐藏 dialog | true | 否
closeOnPressEscape | Boolean | 设置按键 ESC 时是否隐藏 dialog | true | 否
allowResize | Boolean | 是否可以拖拽调整大小 | false | 否
lockScroll | Boolean | 对话框出现时是否将 body 锁定不滚动 | true | 否

#### header 对象 <span id="header"></span>

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
title | String | 对话框 title | - | 否
showClose | Boolean | 是否显示关闭图标(为 true 时 title 向左对齐， 为 false 时 title 居中对齐) | false | 否

#### footer 对象 <span id="footer"></span>

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
confirmText | String | confrim text | 确认 | 否
cancelText | String | cancel text | 取消 | 否
confirmDisabled | Boolean | 禁用 confirm | false | 否

#### dialog 触发的事件

事件名称 | 说明  | 回调参数
-|-|-
before-open | Dialog 即将打开时的回调, 内部 DOM 还未渲染  | -
opened | Dialog 打开时的回调 ,内部 DOM 已经渲染完成 | -
before-close | Dialog 即将关闭时的回调, 内部 DOM 还在(confirm 和 cancel 的下一跳也会触发 close) | -
closed | Dialog 关闭时的回调, 内部 DOM 已经被移除(confirm 和 cancel 的下一跳也会触发 close) | -
confirm | Dialog 点击 确定 时的触发 | -
cancel | Dialog 点击 取消 时的触发 | -

#### dialog 的具名 slot

名称 | 说明
-|-
 -- | dialog body 内容
header | dialog header 的内容(同时配置的 title slot 将不会生效)
footer | dialog footer 的内容
title | dialog title 的内容
