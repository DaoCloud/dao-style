# PR 审核流程

## 标签(labels)

标签需要非常细心地添加于PR，主要用于：

* PR的可读性：maintainer一旦知道一个PR的当前状态，必须第一时间添加标签；
* PR过滤的有效性：不同的标签代表很多不同的审核工作，同时也能将PR交给相对应的maintainer来审核。

## 状态标签(status labels)

 * `status/0-triage`
 * `status/1-design-review`
 * `status/2-code-review`
 * `status/3-docs-review`
 * `status/4-ready-to-merge`
 * `close`

## 工作流(workflow)

一个开着的PR，可以处于以下的6种不同状态之一。

### 1.诊断(triage)`status/0-triage`

Maintainer们有权力与义务分流诊断新建的PR，分流的形式为删除标签`status/0-triage`，同时加上相应正确的标签
（比如，`status/1-design-review`）。删除`status/0-triage`后，Maintainer给PR添加的标签可以通过自己的判断，跳过某些特定的标签。

从`status/0-triage`状态有可能转到的状态标签是：

* 关闭PR：比如，这是一个完全没有价值的PR；
* `status/1-design-review`：一般情况都会进入这个标签；
* `status/2-code-review`：比如，比较严重的bug修复
* `status/3-docs-review`：比如，这是一个仅仅完善文档的PR，而不涉及任何代码。

### 2.设计审核(design review)`status/1-design-review`

Maintainer们有权力与义务对一个PR的设计初衷做出评论。

在这一阶段，仅仅审核PR的初衷，不会发生任何代码的审核。一旦设计初衷审核(design review)已经得到认可，一位mainatainer将需要把`status/1-design-review`标签删除，同时将PR的标签转移到下一个标签。

从`status/1-design-review`状态有可能转到的状态标签是：

* 关闭PR：比如，设计初衷被驳回时；
* `status/2-code-review`：比如，比较严重的bug修复
* `status/3-docs-review`：比如，这是一个仅仅完善文档的PR，而不涉及任何代码。

### 3.代码审核(code review)`status/2-code-review`

Maintainer们有能力与义务来审核PR的代码，并且保障代码的质量过关，而且同时拥有相应的文档修改（如果必需的话）。

新的**测试案例**将被要求添加在PR范围之内，如果必需的话。理想情况下，这些测试案例在新添代码缺失时失败，而在新添代码在时，能成功通过。测试案例要尽可能的达到足够的覆盖率。

代码的修改，必须得到Maintainer的审核，同时得到他们的批准，以LGTM表示，代表Look Good to Me。一旦有两位Maintainer已经添加LGTM的评论，则原则上PR的状态可以进行下一个状态转移。此时，一位Maintainer将删除标签`status/2-code-review`，从而进行标签的转移。

从`status/2-code-review`状态有可能转到的状态标签是

* 关闭PR：比如，代码设计不通过；
* `status/1-design-review`：比如，出现了较为严重的设计问题；
* `status/3-docs-review`：正常情况；
* `status/4-ready-to-merge`： PR的修改不涉及任何文档的修改。

### 4.文档审核(docs review)`status/3-docs-review`

Maintainer们有权力与义务来审核PR的文档修改，确保文档的一致性，完整性，有效性。Maintainer们有权力与义务要求PR发起者对文档进行任何有价值的修改，使得文档的一致性更高，更加易读。

对于一个PR而言，涉及到文档的部分可能存在以下几种情况：

* 如果这个PR不涉及任何文档，那么文档审核部分将直接跳过，随即该PR进入可以被merge的阶段，也就是标签`status/4-ready-to-merge`;
* 如果这个PR需要对相应的文档进行修改，不管是API层面，架构设计方面，那么这些变动都需要在PR中被包含，同时被maintainer们审核。一个涉及到文档修改的PR，必须得到两个及两个以上maintainer的LGTM，方能进入下一环节，添加标签`status/4-ready-to-merge`。

从`status/3-docs-review`状态有可能转到的状态标签是

* 关闭PR：比如，文档审核严重不通过；
* `status/1-design-review`：比如，又一次出现了较为严重的设计问题；
* `status/2-code-review`：比如，又出现了新的问题，需要再一次进行代码审核；
* `status/4-ready-to-merge`： PR的文档审核成功得到两个及以上maintainer的LGTM。

### 5.合并(merge)`status/4-ready-to-merge`

Maintainer们有权力与义务尽快的合并拥有标签`status/4-ready-to-merge`的PR。同时在这个标签下，maintainer们有权力要求PR发起者进行代码分支的rebase操作等。拥有标签`status/4-ready-to-merge`的PR，没有被立即合并的原因，有部分原因是：让其他没有参与审核的maintainer，有一个时间窗口来获取此PR的上下文，争取在maintainer之间达到更多的共识。

### 6.关闭(Close)

Maintainer们有权力与义务关闭一个PR，倘若此PR严重不符合审核的要求，或者最终决定暂时不满足当前项目的要求，同时Maintainer必须提供相应的证据与解释。