# steps

steps 是一个多步骤视图组件。代码请参照目录：[src/components/dao-steps](../src/components/dao-steps)。

## 使用方法
### HTML
```HTML
<dao-steps v-model="">
  <!-- 一级步骤 -->
  <dao-step
     slot="step"
     index="1"
     title=""
     [:no-click]=""
     [:no-active]=""
     [:active]="">
    <!-- 二级步骤 -->
    <dao-substep
       index=""
       [:no-click]=""
       [:no-active]=""
       [:active]="">
    </dao-substep>
  </dao-step>
  <!-- 内容块 -->
  <dao-step-content
     slot="content"
     index="">
    [内容块]
  </dao-step-content>
</dao-steps>
```

## 参数
### \<dao-steps> 接受的属性

| 参数名     | 类型     | 说明                                       | 默认值  | 是否必填 |
| ------- | ------ | ---------------------------------------- | ---- | ---- |
| v-model | string | 当前激活步骤的 index。该值是父子组件联动的（即父子组件中对其做的修改都会被反馈到相应的子／父组件）。在组件外部可通过修改该 object 的 index，实现指定步骤跳转，也可以在组件外部监听该变量做特定操作。 | -    | 是    |

### \<dao-step> 接受的属性 

| 参数名         | 类型       | 说明                          | 默认值   | 是否必填 |
| :---------- | -------- | --------------------------- | ----- | ---- |
| slot="step" | -        | 表示这是一个步骤节点，和内容块区分开          | -     | 是    |
| index       | string   | 步骤唯一 ID，按照顺序应定为 1、2、3… 以此类推 | -     | 是    |
| title       | string   | 一级步骤标题                      | -     | 是    |
| no-click    | boolean  | 一级步骤以下的子步骤是否不可点击跳转          | false | 否    |
| no-active   | boolean  | 一级步骤以下的子步骤是否不可访问            | false | 否    |
| active      | function | 步骤激活回调函数                    | -     | 否    |

### \<dao-substep> 接受的属性

| 参数名       | 类型       | 说明                                    | 默认值   | 是否必填 |
| --------- | -------- | ------------------------------------- | ----- | ---- |
| index     | string   | 步骤唯一 ID，按照顺序应定为 1-1、1-2、2-1、2-2… 以此类推 | -     | 是    |
| title     | string   | 二级步骤标题                                | -     | 是    |
| no-click  | boolean  | 该步骤是否不可点击跳转                           | false | 否    |
| no-active | boolean  | 该步骤是否不可访问                             | false | 否    |
| active    | function | 步骤激活回调函数                              | -     | 否    |

### \<dao-step-content> 接受的属性

| 参数名            | 类型     | 说明                         | 默认值  | 是否必填 |
| -------------- | ------ | -------------------------- | ---- | ---- |
| slot="content" | -      | 表示这是一个内容节点，和步骤节点区分开        | -    | 是    |
| index          | string | 内容唯一 ID，必须与某个二级步骤的 ID 对应起来 | -    | 是    |