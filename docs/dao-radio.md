# Radio (单选框)

Radio 是一个单选框组件。代码请参照目录：[src/components/dao-radio](../src/components/dao-radio)。

## 使用方法

由一个 radio-group 和 radio 组成。

### html 使用方法

```html
<dao-radio-group [name="sex"]>
  <dao-radio label="male" v-model="vm.sex">男</dao-radio>
  <dao-radio label="female" v-model="vm.sex">女</dao-radio>
  <dao-radio label="none" v-model="vm.sex" [:disabled="true"]>无</dao-radio>
</dao-radio-group>
```

## 组件参数

### Radio-Group 参数

| 参数 | 类型 | 说明 | 默认值 | 是否必填 |
|-----|------|-----|-------|---------|
| name | string | radio 组的名称 | - | 否 |

### Radio 参数

| 参数 | 类型 | 说明 | 默认值 | 是否必填 |
|-----|------|-----|-------|---------|
| disabled | boolean | 控制 radio 是否被禁用 | false | 否 |
| label | string / number / object ... | radio 被选中的值 | - | 是 |

