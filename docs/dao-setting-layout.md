# setting-layout
setting-layout 是一套表单布局方面的规范。代码请参照目录：[src/components/dao-setting-layout](../src/components/dao-setting-layout)。

## 使用方法

### HTML

有两种使用法：使用 slot 分发内容、直接自己写各种 classs。

#### 使用 slot 分发内容（推荐）：

```html
<dao-setting-layout>
  <div slot="layout-title">[大标题]</div>
  <div slot="layout-title-helper">[大标题说明文字]</div>
  <!-- 第一个 section -->
  <dao-setting-section>
    <div slot="section-title">[块内容标题]</div>
    <div slot="section-title-helper">[块内容标题说明文字]</div>
    <div slot="label">[左侧小标题]</div>
    <div slot="content">[右侧内容]</div>
    <div slot="content-helper">[右侧内容说明文字]</div>
  </dao-setting-section>
  <!-- 两个 section 之间是会有分割线的 -->
  <!-- 第二个 section -->
  <dao-setting-section>
    <div slot="section-title">[块内容标题]</div>
    <div slot="section-title-helper">[块内容标题说明文字]</div>
    <!-- 第一个 item -->
    <dao-setting-item>
      <div slot="label">[左侧小标题]</div>
      <div slot="content">[右侧内容]</div>
      <div slot="content-helper">[右侧内容说明文字]</div>
    </dao-setting-item>
    <!-- 两个 item 之间是不会有分割线的，一般情况下用不到 item -->
    <!-- 第二个 item -->
    <dao-setting-item>
      <div slot="label">[左侧小标题]</div>
      <div slot="content">[右侧内容]</div>
      <div slot="content-helper">[右侧内容说明文字]</div>
    </dao-setting-item>
  </dao-setting-section>
  <div slot="footer">[footer]</div>
</dao-setting-layout>
```

（一般情况下 `<dao-setting-item>` 节点可省略不写，该节点的使用情景请见 [下文](#item)）

#### 写 class：

```HTML
<div class="dao-setting-layout">
  <div class="dao-setting-layout-title">
    <div class="dao-setting-title">
      [大标题]
      <div class="helper-text">[大标题说明文字]</div>
    </div>
  </div>
  <div class="dao-setting-section">
    <div class="dao-setting-title">
      [块内容标题]
      <div class="helper-text">[块内容标题说明文字]</div>
    </div>
    <div class="dao-setting-item">
      <div class="dao-setting-label">[左侧小标题]</div>
      <div class="dao-setting-content">
        <div class="helper-text">[说明文字]</div>
        [右侧内容块]
      </div>
    </div>
  </div>
  <div class="dao-setting-layout-footer">
    [footer]
  </div>
</div>
```

## 布局说明
## 规则

### 1. 提供两种使用方式

请参看以上示例代码，两种使用方式表现是一样的，推荐使用 slot 分发内容，更加简洁明了，也不用记忆过深的层级结构。

### 2. 每个 `setting-layout` 里一定有 `dao-setting-layout-title` （“表单必有头”）

![image](https://cloud.githubusercontent.com/assets/7001013/18115665/c778fc7a-6f73-11e6-9030-3c28e0f0da83.png)
![image](https://cloud.githubusercontent.com/assets/7001013/18115679/de3eb08a-6f73-11e6-8e06-831c43a00d06.png)

`dao-setting-layout-title` 必须有 `dao-setting-title`。我们通过表单的标题告诉用户这是什么表单。引导用户快速找到他需要的信息，告诉用户表单的结构。

`dao-setting-layout-title` 里建议添加有 `helper-text`，可以没有。因为标题作为引导，不建议过长；所以，更详细、更具体的描述可以放在 `helper-text` 里。

### 3. 每个 `setting-layout` 里可以有 footer （“尾巴不强求”）

![image](https://cloud.githubusercontent.com/assets/7001013/18118031/fc70318a-6f84-11e6-99ae-320547e89b4e.png)
<img width="787" alt="screen shot 2016-08-31 at 2 13 08 pm" src="https://cloud.githubusercontent.com/assets/7001013/18118451/82b5e698-6f87-11e6-8caf-fc5829c498c9.png">

如果 `setting-layout` 需要 footer，一般是为了 (1) 放“保存”按钮 (2) 放“下一步”按钮。但如果表单内容是自动保存（callback），则不需要。

### 4. `dao-setting-label` 和 `dao-setting-content` 有一个看似简单的对齐系统（“二三十最吼”）

![image](https://cloud.githubusercontent.com/assets/7001013/18118726/40f75ee2-6f89-11e6-9d25-9ab7e7c77810.png)

![image](https://cloud.githubusercontent.com/assets/7001013/18118845/ee2b841c-6f89-11e6-9537-344800938150.png)


如上图，`dao-setting-content` 中的第一行如果是比较高的元素（如：input）也需要和 `dao-setting-label` 水平中线对齐

现在的样式中已经对一些常见的特殊元素进行了处理，所以一般情况下不需要再次留意。但如果遇到一个没有被 dao-style 照顾到的元素（如：自己撸的组件），则需要加上一个 `.higher-ele` （必须加在 `dao-setting-content` 的直接子元素上）。

`dao-setting-content` 的每一个直接子元素都包裹着一行的内容。即：如果一行中有多个元素（input、button 等），需要用一个块级元素将它们包起来作为一行。

**注意**：`dao-setting-content` 的直接子元素必须是块级元素，习惯上一般为 `div`。

<h3 id="item">6. `dao-setting-item` 默认放在 `dao-setting-section`里</h3>

每两个 section 间都有一根线。“线很多”是我们表单的设计风格。选择这个风格的原因是为了引导用户在很长的表单中，可以轻松的从左看到右，比如引导眼睛先看 label 再看 input。从而增加表单的清晰度，避免用户犯错。

一般情况下，在第一种使用方式（slot）中，`<dao-setting-item>` 组件可以省去，内容直接写在 `<dao-setting-section>` 中即可。

如果有些情况下两个 section 间不需要加线，请在 `dao-setting-section` 里分别使用两个 `dao-setting-item` 包裹这两块内容，反映在第一种使用方式（slot）中，则是 `<dao-setting-item>` 不可省略了。