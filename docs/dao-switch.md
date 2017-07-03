# DaoSwitch (开关按钮) 文档

DaoSwitch 用于二元选择场景，比如是/否，开/关。 代码请参照目录：[src/components/dao-switch](../src/components/dao-switch)。

## 使用方法

### HTML 使用方法

```html
<dao-switch :option="{ on: '是', off: '否' }"
            :with-notice="true"
            v-model="model"
            :value="isChecked"
            [:disabled="false"]
            [:on-text="开"]
            [:off-text="关"]
            [name="Switch Button"]
            [coreWidth="54"]
            [@input="onInput"]
            [@change="onChange"]>
</dao-switch>
```

### JavaScript 使用方法

```javascript
const isChecked = false;

function onChange(isChecked) {
  // code here
}

function onInput(val) {
  // code here
}
```

## 组件参数

### 组件接受的参数

| 参数名     | 类型    | 说明                                                          | 默认值                            | 是否必填 |
| ------     | -----   | ------                                                        | ------                            | ------   |
| option     | Object  | 配置对象。分别通过 'on' 和 'off' 属性指定开和关状态的提示文字 | `{ on: '已开启', off: '已关闭' }` | 否       |
| value      | Boolean | 控制按钮的开关状态                                            | `true`                            | 否       |
| disabled   | Boolean | 是否禁用按钮                                                  | `false`                           | 否       |
| onText     | String  | '开' 状态提示文字                                             | _空字符串_                        | 否       |
| offText    | String  | '关' 状态提示文字                                             | _空字符串_                        | 否       |
| name       | String  | 提交表单时使用的属性名称                                      | _空字符串_                        | 否       |
| withNotice | Boolean | 是否显示状态提示文字                                          | `true`                            | 否       |
| coreWidth  | Number  | 按钮的宽度                                                    | 54 像素                           | 否       |

### 暴露的事件
| 事件名 | 说明                                                  |
| ------ | ------                                                |
| input  | 状态变化的时间通知，接收一个参数，为 `value` 的当前值 |
| change | 同 `input` 事件                                       |
