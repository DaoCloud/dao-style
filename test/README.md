# DaoStyle Vue 测试

dao-style-vue 项目的测试包含 **单元测试** 以及 **集成测试** 两种。

## 单元测试

dao-style-vue 项目的单元测试使用 [Karma](http://karma-runner.github.io/) 进行自动化测试。如何编写 Vue 2.0 框架下的单元测试，请查阅 [中文文档](https://cn.vuejs.org/v2/guide/unit-testing.html#main)。

### 快速上手

快速运行 dao-style-vue 项目的单元测试，只需按照以下命令执行即可：

```Shell
dao-style-vue $  npm test

> dao-style-vue@1.0.0 test /Users/AllenSun/gocode/src/github.com/daocloud/dao-style-vue
> npm run unit


> dao-style-vue@1.0.0 unit /Users/AllenSun/gocode/src/github.com/daocloud/dao-style-vue
> karma start test/unit/karma.conf.js --single-run

17 05 2017 16:16:31.510:WARN [karma]: Port 9876 in use
17 05 2017 16:16:31.514:INFO [karma]: Karma v1.7.0 server started at http://0.0.0.0:9877/
17 05 2017 16:16:31.514:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
17 05 2017 16:16:31.592:INFO [launcher]: Starting browser PhantomJS
17 05 2017 16:16:32.945:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket n7PuFgEubVFXSQH-AAAA with id 77172739
INFO LOG: 'You are running Vue in development mode.
Make sure to turn on production mode when deploying for production.
See more tips at https://vuejs.org/guide/deployment.html'

  Input
    ✓ create
    ✓ disabled
    Input Events
      ✓ event:focus & blur
      ✓ event:change

PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 4 of 4 SUCCESS (0.118 secs / 0.09 secs)
TOTAL: 4 SUCCESS


=============================== Coverage summary ===============================
Statements   : 100% ( 0/0 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 0/0 )
Lines        : 100% ( 0/0 )
================================================================================
dao-style-vue $
```

### 测试案例

dao-style-vue 项目中各个组件的单元测试测试案例位于 [dao-style-vue/test/unit/specs/*.spec.js](unit/specs) 。

## 集成测试

To be added soon.