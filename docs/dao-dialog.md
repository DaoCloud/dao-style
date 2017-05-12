# dialog ( 弹出框 )

dialog 是一个弹出框组件。代码请参照目录: [src/components/dao-dialog](../src/components/dao-dialog)。

## 使用方法

### html 使用方法

##### type 不为 multiStep 时

```HTML
<dao-dialog
  :config="config"
  @close="handleClose"
  @open="handleOpen"
  @confirm="handleConfirm"
  @cancel="handleCancel">

  body

  <div slot="footer">
    I'm footer
  </div>
</dao-dialog>
```

##### type 为 multiStep 时

```HTML
<dao-dialog
  :config="config"
  @close="handleClose"
  @open="handleOpen">

  <dao-dialog-step>
    Step 1
  </dao-dialog-step>
  <dao-dialog-step>
    Step 1
  </dao-dialog-step>

</dao-dialog>
```

### javascript 使用方法

##### type 不为 multiStep 时

``` js
  const config = {
    type: 'normal',
    title: 'hahah',
    size: 'lg',
    scrollable: true,
    showHeader: true,
    showFooter: true,
    close-on-click-modal: true,
    close-on-press-escape: true,
    visible: ture,
  };

  const handleClose = () => {
    console.log('close me!');
  };

  const handleOpen = () => {
    console.log('open me!');
  };

  const handleConfirm = () => {
    console.log('confirm me!');
  };

  const handleCancel = () => {
    console.log('cancel me!');
  };
```

##### type 为 multiStep 时

``` js
  const config = {
    type: 'multiStep',
    title: 'hahah',
    size: 'lg',
    scrollable: true,
    showHeader: true,
    showFooter: true,
    close-on-click-modal: true,
    close-on-press-escape: true,
    visible: ture,
    animate: false, // 只有 type 为 multiStep 时有效
  };

  const handleClose = () => {
    console.log('close me!');
  };

  const handleOpen = () => {
    console.log('open me!');
  };
```

## 组件参数

### dialog

#### 接受的参数

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
config | Object | 配置对象, 具体内容见 [config 对象] (#config-对象) | - | 是

#### config 对象

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
visible | Boolean | 设置 dialog 是否可见 | true | 否
type | String | 设置 dialog 的类型。 可选 `normal`, `resize`, `feature`, `animate`, `multiStep` | nomal | 否
title | String | 设置 dialog 的 title | '' | 否
showHeader | Boolean | 设置 dialog 的 header 是否显示, 若此参数为 false,  __title 的设置无效__ | true | 否
showFooter | Boolean | 设置 dialog 的 footer 是否显示, 若此参数为 false, __event confirm, cancel 的设置无效__ | true | 否
size | String | 设置 dialog 的大小。 可选 `sm`, `md`, `lg` | md | 否
scrollable | Boolean | 设置 dialog 的 body 部分是否可以滚动 | true | 否
closeOnClickModal | Boolean | 设置点击 modal 是否隐藏 dialog | true | 否
closeOnPressEscape | Boolean | 设置按键 ESC 时是否隐藏 dialog | true | 否
animate | Boolean | 设置 dialog 的页面跳转的时候是否有动画 ( __只有 type 为 multiStep 时有效__ ) | false | 否

#### dialog 触发的事件

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
open | Function | Dialog 打开时 ( _visible = true_ ) 的回调  | - | 否
close | Function | Dialog 关闭时 ( _visible = false_ ) 的回调 | - | 否
confirm | Function | Dialog 点击 确定 时的回调。( showFooter 为 false 的时候 或 type 为 multiStep 时__此绑定无效__ ) | - | 否
cancel | Function | Dialog 点击 取消 时的回调。( showFooter 为 false 的时候 或 type 为 multiStep 时__此绑定无效__ ) | - | 否

#### dialog 的具名 slot

名称 | 说明
-|-
 -- | dialog 的内容
footer | dialog 按钮操作区的内容

### dao-dialog-step

#### dao-dialog-step 的 slot

名称 | 说明
-|-
 -- | 每一页 dialog 的内容
