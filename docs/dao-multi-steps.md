# multi-step
## 使用方法
### HTML
```HTML
<dao-multi-steps
   [v-on:index=""]
   [:ordered=""]>
  <dao-step
   [title=""]
   [:is-mainmenu=""]
   [:is-submenu=""]
   [:is-successful=""]
   [:is-warning=""]
   [:is-locked=""]
   [:no-active=""]>
  </dao-step>
</dao-multi-steps>
```

## 参数
### \<dao-multi-steps> 接受的属性 

| 参数名        | 类型       | 说明                                       | 默认值  | 是否必填 |
| :--------- | -------- | ---------------------------------------- | ---- | ---- |
| v-on:index | function | 子组件向外输出变量，function(number) 接受参数为记录当前处于第几步的变量。number 从 1 开始计数，且计数包括父级 step、子级 step、不可点 step 等所有可显示出来的  <dao-step> 节点。 | -    | 否    |
| ordered    | boolean  | 父级 step 是否显示数字编号，设置为 false 则显示一个 ">" 符号。 | true | 否    |

### \<dao-step> 接受的属性

| 参数名           | 类型      | 说明         | 默认值   | 是否必填 |
| ------------- | ------- | ---------- | ----- | ---- |
| title         | string  | 步骤名称       | -     | 否    |
| is-mainmenu   | boolean | 是否为父级 step | false | 否    |
| is-submenu    | boolean | 是否为子级 step | true  | 否    |
| is-successful | boolean | 是否显示成功图标   | false | 否    |
| is-warning    | boolean | 是否显示警告图标   | false | 否    |
| is-locked     | boolean | 是否显示锁定图标   | false | 否    |
| no-active     | boolean | 是否可点击      | true  | 否    |
