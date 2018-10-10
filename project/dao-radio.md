# Radio (单选框)

Radio 是一个单选框组件。代码请参照目录：[src/components/dao-radio](../src/components/dao-radio)。

## 使用方法

由一个 radio-group 和 radio 组成。

### html 使用方法

1. dao-radio simple

```html
<dao-radio-group [name="sex"] [type="simple"]>
  <dao-radio label="male" v-model="vm.sex">男</dao-radio>
  <dao-radio label="female" v-model="vm.sex">女</dao-radio>
  <dao-radio label="none" v-model="vm.sex" [:disabled="true"]>无</dao-radio>
</dao-radio-group>
```
2. dao-radio block

```html
<dao-radio-group type="block" [name="sex"]>

  <dao-radio
    v-model="vm.sex"
    headline="男" 
    description="male" 
    label="male"
    [:disabled="true"]>

    <img scr="male.png">

  </dao-radio>

  <dao-radio
    v-model="vm.sex"
    headline="女" 
    description="female" 
    label="female">

    <img scr="female.png">

  </dao-radio>

</dao-radio-group>
```

3. dao-radio grid

```html
<dao-radio-group type="grid" [name="sex"] [:grid-col="2"]>

  <dao-radio
    v-model="vm.sex"
    label="male"
    [headline="male"]
    [description="男"]>

    <img slot="icon" src="male.png">
    <span slot="headlineSupplement">icon</span>
    <!-- 如果不添加指定的 slot 名，则视为不使用默认模板，而使用自定义模板，下同 -->

  </dao-radio>

  <dao-radio
    v-model="vm.sex"
    label="female"
    [headline="female"]
    [description="女"]>

    <img slot="icon" src="female.png">
    <span slot="headlineSupplement">icon</span>

  </dao-radio>

  <dao-radio
    v-model="vm.sex"
    label="none"
    :disabled="true"
    [headline="none"]
    [description="无"]>

    <img slot="icon" src="none.png">
    <span slot="headlineSupplement">icon</span>

  </dao-radio>

</dao-radio-group>
```

4. dao-radio card

```html
<dao-radio-group type="card" [name="sex"]>

  <dao-radio
    v-model="vm.sex"
    headline="男"
    subheadline="male"
    description="男性"
    label="male"
    [:disabled="true]">

    <img slot="icon" src="male.png">
    <span slot="headlineSupplement">icon</span>
    <!-- 如果不添加指定的 slot 名，则视为不使用默认模板，而使用自定义模板 -->

  </dao-radio>

</dao-radio-group>
```

5. dao-radio plus

```html
<dao-radio-group type="plus" [name="sex"]>

  <dao-radio
    v-model="vm.sex"
    headline="sex" 
    value="sex"
    :options="vm.sexOptions" 
    [select-title="选择性别"]
    [:async="vm.getSexOptions"]>

    <img slot="icon" src="male.png">
    <!-- slot="icon" 不能缺失 -->

  </dao-radio>

</dao-radio-group>
```

### js 使用方法

1. dao-radio plus

```js
// v-model 格式
{
  value: 1, // radio 的选中值
  select: 2, // select 的选中值
}

// options 格式
[
  {
    value: 1,
    text: '1',
  },
  {
    value: 2,
    text: '2',
  }
]
```

## 组件参数

### Radio-Group 参数

| 参数 | 类型 | 说明 | 默认值 | 是否必填 |
|-----|------|-----|-------|---------|
| grid-col | number | 启用 grid 布局，并指定列数 | - | 否 |
| name | string | radio 组的名称 | - | 否 |
| type | string | radio 组的类型，可选值为`simple`/`block`/`grid`/`card`/`plus` | simple | 否 |

### Radio 参数

| 参数 | 类型 | 说明 | 默认值 | 是否必填 |
|-----|------|-----|-------|---------|
| disabled | boolean | 控制 radio 是否被禁用 | false | 否 |
| label | string / number / object ... | radio 被选中的值 | - | 是 |

#### Radio-Block 参数

| 参数 | 类型 | 说明 | 默认值 | 是否必填 |
|-----|------|-----|-------|---------|
| headline | string | 指定 radio-block 中的标题 | - | 是 |
| description | string | 指定 radio-block 中的描述 | - | 是 |

#### Radio-Grid 参数

| 参数 | 类型 | 说明 | 默认值 | 是否必填 |
|-----|------|-----|-------|---------|
| headline | string | 指定 radio-grid 中的标题 | - | 是 |
| description | string | 指定 radio-grid 中的描述 | - | 是 |

#### Radio-card 参数

| 参数 | 类型 | 说明 | 默认值 | 是否必填 |
|-----|------|-----|-------|---------|
| headline | string | 指定 radio-card 中的标题 | - | 否 |
| subheadline | string | 指定 radio-card 中的副标题 | - | 否 |
| description | string | 指定 radio-card 中的描述 | - | 否 |

#### Radio-Plus 参数

| 参数 | 类型 | 说明 | 默认值 | 是否必填 |
|-----|------|-----|-------|---------|
| headline | string | 指定 radio-plus 中的标题 | - | 否 |
| select-title | string | radio-plus 中 select 的默认显示 | - | 否 |
| no-data-text | string | radio-plus 中 select 的 no-data-text 的默认显示 | 暂无结果 | 否 |
| options | object | radio-plus 中 select 的选项数据 | - | 否 |
| async | function | radio-plus 中获取 select 中数据的函数，当你传入了此参数时，该 function 会在 radio 被 check 或点击 radio 中的 select 时触发。另外值得注意的是，这个 async 方法必须返回一个 Promise，当这个 Promise 成功 resolve 之后就不在调用这个 function | - | 否 |

#### Radio-Plus 事件
| 事件名称 | 说明 | 回调参数 |
|---------|-----|---------|
| select-change | 这是 Radio-Plus 中 select 值改变时的回调事件 | {value: radio 的选中值, select: select 的选中值} |
