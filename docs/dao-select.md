# Select (下拉选框)

Select 是一个下拉选框组件。代码请参照目录：[src/components/dao-select](../src/componenets/dao-editable-table)。

## 使用方法

Select 是由 Select 和 Option-Group 以及 Option 三个组件组合而成。

### html 使用方法

#### 普遍用法

```html
<dao-select 
  v-model="option"
  [placeholder="请选择"]
  [:loading="true"]
  [loading-text="加载中"]
  [:async="getOptions"]
  [:disabled="false"]
  [:with-btn="false"]
  [btn-content="按钮"]
  [:with-search="false"]
  [search-placeholder="搜索"]
  [menu-class="menuClass"]
  [no-data-text="无数据"]
  [no-match-text="无匹配数据"]>
  <dao-option-group :label="name">
    <dao-option :value="mimo" :label="mimo"></dao-option>
  </dao-option-group>
</dao-select>
```

#### 特殊情况：with-tab

```html
<dao-select
  v-model="option"
  :with-tab="true"
  [placeholder="请选择"]
  [:loading="true"]
  [loading-text="加载中"]
  [:async="getOptions"]
  [:disabled="false"]
  [menu-class="menuClass"]
  [no-data-text="无数据"]>
  <dao-tab direction="left">
    <dao-tab-item heading="标题1">
      <dao-option-group :label="male">
        <dao-option :value="mimo" :label="mimo"></dao-option>
      </dao-option-group>
    </dao-tab-item>
    <dao-tab-item heading="标题2">
      <dao-option-group :label="female">
        <dao-option :value="mary" :label="mary"></dao-option>
      </dao-option-group>
    </dao-tab-item>
  </dao-tab>
</dao-select>
```

## 组件参数

### Select 参数

| 参数 | 类型 | 说明 | 默认值 | 是否必填 |
|-----|------|-----|-------|---------|
| placeholder | string | 控制在未选中选项时显示的文字 | - | 否 |
| loading |	boolean |	控制 select 显示 loading 状态 |	false | 否 |
| loading-text | string | loading 状态显示文字 | '加载中' | 否 |
| async | function | 控制异步获取数据 | - | 否 |
| disabled | boolean | 控制 select 的 disable 状态 | false | 否 |
| with-btn | boolean | 控制 select 是否带 button | false | 否 |
| btn-content | string | 控制 select 带的 button 内的文字 | - | 否 |
| with-search | boolean | 是否有搜索框 | false | 否 |
| search-placeholder | string | 搜索框默认文本 | - | 否 |
| search-method | String | Function | 搜索方法：若传入的是一个 String，则这个 String 需要是 option 中 value 的一个 key；若传入的是一个 Function，则 Function 接受参数为 option value 值，需返回 true 或 false | - | 否 |
| with-tab | boolean | 是否有 tab | false | 否 |
| menu-class | string | select 下拉菜单的类名 | - | 否 |
| no-data-text | string | select 无数据时显示的文字 | '无数据' | 否 |
| no-match-text | string | select 搜索无匹配数据时显示的文字 | '无匹配数据' | 否 |

### Select 事件

| 事件名称 | 说明 | 回调参数 |
|----------|-----|---------|
| change | 选中值发生变化时的回调 | 当前选中值 |
| visible-change | 下拉框出现 / 隐藏时触发 | 出现则为 true，隐藏则为 false |
| btn-event | 按钮点击事件 | 当前选中值 |

### Option-Group 参数

| 参数 | 类型 | 说明 | 默认值 | 是否必填 |
|-----|-------|------|--------|------|
| label | string | 分组的组名 | - | 否 |
| disabled | boolean | 是否禁用分组下所有选项 | false | 否 |

### Option 参数

| 参数 | 类型 | 说明 | 默认值 | 是否必填 |
|-----|-------|------|--------|------|
| value | string / number / object ... | 选项的值 | - | 是 |
| label | string | 选项的标签 / number | - | 否 |
| disabled | boolean | 是否禁用该选项 | false | 否 |
