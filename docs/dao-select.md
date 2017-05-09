# Select (下拉选框)

## Select Attributes

| 参数 |	类型 |	说明 |	默认值 |
|-----|-------|------|--------|
| default-title |	string |	控制在未选中选项时显示的文字 |	- |
| loading |	boolean |	控制 select 显示 loading 状态 |	false |
| loading-text |	string |	loading | 状态显示文字 |	'加载中' |
| async |	function |	控制异步获取数据 |	- |
| disabled |	boolean |	控制 select 的 disable 状态 |	false |
| with-btn |	boolean |	控制 select 是否带 button |	false |
| btn-content |	boolean |	控制 select 带的 button 内的文字 |	- |
| with-search	| boolean	| 是否有搜索框	| false | 
| search-placeholder	| string	| 搜索框默认文本	| - | 
| with-tab	| boolean	| 是否有 tab	| false |

## Select Events

| 事件名称	| 说明	| 回调参数 |
|----------|-----|---------|
| change	| 选中值发生变化时的回调	| 当前选中值 |
| visible-change	| 下拉框出现 / 隐藏时触发	| 出现则为 true，隐藏则为 false |
| btn-event	| 按钮点击事件 |	当前选中值 |

## Option Group Attributes

| 参数 |	类型 |	说明 |	默认值 |
|-----|-------|------|--------|
| no-option-tip	| string	| 控制在无 option 数据时的显示	'暂无结果' |
| label	string	| 分组的组名	| - |
| disabled	| boolean	| 是否禁用分组下所有选项	false |

## Option Attributes

| 参数 |	类型 |	说明 |	默认值 |
|-----|-------|------|--------|
| value |	string / number / object ... |	选项的值 |	- |
| label |	string |	选项的标签 / number |	- |
| disabled |	boolean |	是否禁用该选项 |	false |
