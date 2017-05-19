# dialog ( 弹出框 )

dialog 是一个弹出框组件。代码请参照目录: [src/components/dao-dialog](../src/components/dao-dialog)。

## 使用方法

### Vue 使用方法

#### type 为 normal 时

```Js
<template>
  <div>
    <dao-dialog
      :config="config"
      :visible.sync="visible"
      [@dao-dialog-close]="handleClose"
      [@dao-dialog-open]="handleOpen"
      [@dao-dialog-confirm]="handleConfirm"
      [@dao-dialog-cancel]="handleCancel">

      [body]

      <div slot="footer">
        footer
      </div>
    </dao-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        config: {
          type: 'normal',
          title: 'normalDialog',
          size: 'md',
          showHeader: true,
          showFooter: true,
          closeOnClickOutside: true,
          closeOnPressEscape: true,
        },
        visible: false,
      };
    },
    methods: {
      handleClose() {
        console.info('要关闭了');
      },
      handleOpen() {
        console.info('要打开了');
      },
      handleConfirm() {
        console.log('确认!');
      },
      handleCancel() {
        console.log('取消!');
      },
    },
  };
</script>
```

#### type 为 feature 时

```Js
<template>
  <div>
    <dao-dialog
      :config="config"
      :visible.sync="visible"
      [@dao-dialog-close]="handleClose"
      [@dao-dialog-open]="handleOpen"
      [@dao-dialog-confirm]="handleConfirm"
      [@dao-dialog-cancel]="handleCancel"
    >
      // 需要有一个 img
      <img src="http://your_image_path.jpg"
         style="width: 100%; max-width: 100%">

      // 可以使用内置的 class 'dao-dialog-feature__text', 也可以使用自定义 class
      <div class="dao-dialog-feature__text">
         [这里是内容块]
      </div>
    </dao-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        // type 为 feature 时, 参数 size, showHeader 设置没有作用
        config: {
          type: 'feature',
          title: 'featureDialog',
          showFooter: true,
          closeOnClickOutside: true,
          closeOnPressEscape: true,
        },
        visible: false,
      };
    },
    methods: {
      handleClose() {
        console.info('要关闭了');
      },
      handleOpen() {
        console.info('要打开了');
      },
      handleConfirm() {
        console.log('确认!');
      },
      handleCancel() {
        console.log('取消!');
      },
    },
  };
</script>
```

#### type 为 multiStep 时

```js
<template>
  <div>
    <dao-dialog
      :config="config"
      :visible.sync="visible"
      [@dao-dialog-close]="handleClose"
      [@dao-dialog-open]="handleOpen"

      <dao-dialog-step>
        [Step 1]
      </dao-dialog-step>
      <dao-dialog-step>
        [Step 2]
      </dao-dialog-step>

    </dao-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        config: {
          type: 'multiStep',
          title: 'multiStepDialog',
          size: 'md',
          showHeader: true,
          showFooter: true,
          closeOnClickOutside: true,
          closeOnPressEscape: true,
        },
        visible: false,
      };
    },
    methods: {
      handleClose() {
        console.info('要关闭了');
      },
      handleOpen() {
        console.info('要打开了');
      },
    },
  };
</script>
```

## 组件参数

### dialog

#### 接受的参数

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
config | Object | 配置对象, 具体内容见 [config 对象](#config) | - | 是
visible | Boolean | 控制 dao-dialog 是否显示的参数, 与父组件双向绑定 ( 需要加 sync 修饰符 ) | false | 是

#### config 对象 <span id="config"></span>

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
type | String | 设置 dialog 的类型。 可选 `normal`, `feature`, `multiStep` | normal | 否
title | String | 设置 dialog 的 title | '' | 否
showHeader | Boolean | 设置 dialog 的 header 是否显示, 若此参数为 false,  __title 的设置无效__ | true | 否
showFooter | Boolean | 设置 dialog 的 footer 是否显示, 若此参数为 false, __dao-dialog-confirm, dao-dialog-cancel 事件的设置无效__ | true | 否
size | String | 设置 dialog 的大小。 可选 `sm`, `md`, `lg`, `resize` | md / 无高度限制  | 否
closeOnClickOutside | Boolean | 设置点击 dialog 外面( 遮罩层 ) 是否隐藏 dialog | true | 否
closeOnPressEscape | Boolean | 设置按键 ESC 时是否隐藏 dialog | true | 否

#### dialog 触发的事件

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
dao-dialog-open | Function | Dialog 打开时 ( _visible = true_ ) 的回调  | - | 否
dao-dialog-close | Function | Dialog 关闭时 ( _visible = false_ ) 的回调 | - | 否
dao-dialog-confirm | Function | Dialog 点击 确定 时的回调。( showFooter 为 false 的时候 或 type 为 multiStep 时__此绑定无效__ ) | - | 否
dao-dialog-cancel | Function | Dialog 点击 取消 时的回调。( showFooter 为 false 的时候 或 type 为 multiStep 时__此绑定无效__ ) | - | 否

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
