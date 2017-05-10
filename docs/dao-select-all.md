# select-all

v-dao-select-all 是一个实现鼠标点击全选功能的自定义指令。代码请参照目录：[src/components/dao-select-all](../src/components/dao-select-all)。

## 使用方法
### HTML
```HTML
<input class="dao-control" type="text" v-model="" v-dao-select-all>
<textarea v-dao-select-all></textarea>
<div v-dao-select-all></div>
```

## 指令
| 指令名              | 说明                                       | 是否必填 |
| :--------------- | ---------------------------------------- | ---- |
| v-dao-select-all | 使用时只需加上该指令即可，不用赋值。作用标签可以是 input、textarea、div，其中 input 如果要使用 dao-input 组件则必须是纯样式形式。 | 是    |

