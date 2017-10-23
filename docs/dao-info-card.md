# dao-info-card

info-card 是一个将信息以键值对或者以表格形式呈现的组件。代码请参照目录：[src/components/dao-info-card]
(../src/components/dao-info-card)

## 使用方法

这个组件一共有 2 种模式, keyValue和tableValue

### 传参 keyValue

info-card 将以键值对形式展示

代码：
<dao-info-card size="sm" :keyValue="keyvalue">
    <div slot="title">
      TEXT
    </div>
</dao-info-card>

### 传参tableValue

info-card 将以表格形式展示

代码：
<dao-info-card size="sm" :tableValue="tablevalue1">
    <div slot="title">
      TEXT
    </div>
</dao-info-card>

### 同时传参 keyValue 和 tableValue

info-card 将以键值对和表格的混合形式展示

代码：
<dao-info-card size="sm" :tableValue="tablevalue3" :keyValue="keyvalue3" :config="config[1]">
    <div slot="title">
      TEXT
    </div>
</dao-info-card>



## 组件传参

### size

只有2种选项 sm 和 lg, sm 将以 300px 的大小展示，lg 将以 610px 的大小展示

### config

通过这个参数可以配置是否有小圆点

