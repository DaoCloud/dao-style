# 文档站

## 1. 准备工作

```bash
# 确保每个 commit 都通过 eslint 的检查
cp pre-commit ./.git/hooks/

# 确保 pre-commit 有执行权限
chmod +x .git/hooks/pre-commit
```

## 2. 安装依赖

```bash
npm intsall
```

## 3. 启动开发环境 / Demo 站

```bash
npm run start
```


## 4. 开发指南

### 4.1 目录结构

```
examples
    ├── assets               静态资源
    ├── config               项目的配置数据
    ├── plugins              插件
    ├── utils                工具函数
    └── view                 视图层 
        ├── components       通用组件
        ├── page             页面级组件
        │   └── components   组件文档 
        └── router           路由配置
```

#### 4.2 全局数据

1. 挂载 window 下的变量有 _(lodash)
1. 挂载 Vue 原型上的变量有 _(lodash)


### 4.3 命名规范

1. 目录名、文件名、css class 名、常量名使用 kebab-case，普通变量名使用 camelCase。

2. i18n 翻译字段使用 i18n_key

## 5. 提交 Commit、发起 PR
1. 参考 [pr-spec](../docs/pr-spec.md)