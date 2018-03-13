# DaoStyle Vue 变更日志（CHANGELOG）

变更日志（CHANGELOG）会按照 [commitizen](https://www.npmjs.com/package/commitizen) 项目建议的 commit message 风格解析并生成 Markdown 格式的内容，生成一个以当前版本号（version.js 中的版本号）为文件名的 Markdown 格式文件，存放于 changelogs 目录下。
每次生成的 CHANGELOG 内容为标记前一个版本号 tag 的 commit 到最新 commit 之间的 commit message。

## 上线／生成 CHANGELOG 流程

DaoStyle Vue 的变更日志（CHANGELOG）必须在规定的流程节点生成。

1. 决定发布后从 develop checkout 出 release/[version tag] 分支
2. 在该 release 分支上进行最后的上线测试和 bug 修复
3. 代码修改完毕，修改 version.js 文件中的版本号到本次上线的版本号
4. 执行 `node changelog` 命令，检查 changelogs 目录下是否正确生成 changelogs 文件
5. 将 release/[version tag] 提 PR 到 master 和 develop 分支
6. master 更新后给最新的 commit 打上版本号 tag（一般为 [version]）
7. 给 develop 分支最新的 commit 打上版本号 tag（一般为 [version]-dev），方便下次上线时生成 changelog
8. 删除 release/[version tag]

**注意**: `node changelog` 命令一定要在打版本号 tag 之前执行
