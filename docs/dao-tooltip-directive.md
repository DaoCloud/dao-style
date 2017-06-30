# tooltip-directive（提示文字）

tooltip-directive 是一个显示提示文字的指令。代码请参照目录：[src/directives/dao-tooltip](../src/components/dao-tooltip)。

## 使用方法

### 指令使用方法

```html
<div v-dao-tooltip[:placement][.modifier]="options"></div>
```

## 指令参数

### 指令接受的参数 options （如果options为字符串则直接赋值给content）

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| content | String | 提示文字 |-|是|
| delay | Number | 延时多长时间显示提示文字 | 0 |否|
| always | Boolean | 指定为true时一直存在 | false |否|
| disabled | Boolean | 禁用 | false |否|

### 指令绑定的参数 placement
|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| placement | String | 提示框出现位置，可选值 ```top, bottom, left, right```。 |auto|否|

### 指令绑定的修饰符 modifiers
|修饰符名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| variations | String | 提示框对齐位置，可选值 ```start, end```。 |auto|否|
| always | Boolean | 指定为true时一直存在 | false |否|
| controlled | Boolean | 指定为true时鼠标移出不会消失 | false |否|

#### modifiers 和 options 同时制定某一个属性时 options会将modifiers中的覆盖

## 指令example

```html
<div v-dao-tooltip="'content'">something</div>
<div v-dao-tooltip:top.start.always="{ content: 'content', delay: 1000 }">something</div>
```