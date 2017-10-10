# dao-info-card

info-card 是一个将信息以键值对或者以表格形式呈现的组件。代码请参照目录：[src/components/dao-info-card]
(../src/components/dao-info-card)

## 使用方法

这个组件一共有三种模式 a,b,c

### 模式 a

info-card 将以键值对形式展示

代码：
<dao-info-card size="small" title="TEXT" type="a" :datavalue="keyvalue"></dao-info-card>

### 模式 b

info-card 将以表格形式展示

代码：
small 表格
<dao-info-card size="small" title="TEXT" type="b" :datavalue="tablevalue"></dao-info-card>

代码：
big 表格
<dao-info-card size="big" title="TEXT" type="b" :datavalue="tablevalue"></dao-info-card>

### 模式 c

info-card 将以键值对和表格的混合形式展示

<dao-info-card size="small" title="TEXT" type="c" :datavalue="tablevalue3"></dao-info-card>



## 组件传参

### size

只有2种选项small和big,small将以300px的大小展示，big将以610px的大小展示

### title

title选项是用来配置你info-card的标题，可以随意填值 ,例如TEXT,文本 
