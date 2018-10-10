# PR-提交规范

## 1. 分支及 commit 规范

分支名格式 | commit 格式 | 适用范围 
-|-|-
feat/***   | feat(area):***  | 新增组件，测试
fix/***    | fix(area):***   | 修复 BUG
perf/***   | perf(area):***  | 优化，重构等
docs/***   | docs(area):***  | 文档, DEMO
breaks/*** | breaks(area):***| 重大改动
other/**   | other(area):*** | 其他

## 2. PR 规范

您的 PR 信息应该至少包含以下内容(没有请填‘无’):

1. Pull Request 内容和 Issue 链接

2. Pull Request 针对问题的重现方式

3. Pull Request 可能涉及到的组件范围


## 3.示例

例如：我要修复一个 dao-btn 的 BUG， 那么

* 分支名称：
  
  `fix/dao-btn-some-bug`

* 提交信息：

  `fix(dao-btn): 在低版本浏览器下样式错误`

* PR 标题: 
  
  `fix(dao-btn): 在低版本浏览器下样式错误`

* PR 内容：
  ```
  1. Pull Request 内容和 Issue 链接

      修复了 da-btn 在 chrome 54 以下浏览器中的样式错误

  2. Pull Request 针对问题的重现方式

      在 mac 任意版本下打开 chrome 53 浏览器，可以稳定复现

  3. Pull Request 可能涉及到的组件范围 
    
      da-btn
  ```