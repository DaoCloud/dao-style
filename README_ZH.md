# dao-style
[![dao-style](https://img.shields.io/npm/v/dao-style.svg?style=flat-square)](https://www.npmjs.org/package/dao-style)
[![NPM downloads](https://img.shields.io/npm/dt/dao-style.svg?style=flat-square)](https://npmjs.org/package/dao-style)

### 基于 Vue.js 构建的高质量组件库

[English](README.md) | 简体中文

## 文档

**[latest](https://daocloud.github.io/dao-style)**

## 谁正在使用 dao-style

- [DaoCloud](https://www.daocloud.io/)
- [DaoVoice](http://daovoice.io/)

> 如果你们也在使用 dao-style, 欢迎点击 [这里](https://github.com/DaoCloud/dao-style/issues/543) 告诉我们。

## 安装

使用 npm:
```
npm install dao-style --save
```

使用 HTML 标签引入:

```html
<script type="text/javascript" src="dao-style.min.js"></script>
<link rel="stylesheet" href="dist/styles/dao-style.css">
```

## 使用
``` javascript
import daoStyle from 'dao-style';
import 'dao-style/styles/dao-style.css';

Vue.use(daoStyle);
```
```vue
<template>
  <dao-input v-model="value"></dao-input>
</template>
<script>
  export default {
    data () {
      return {
        value: 'hello dao-style'
      };
    },
  }
</script>
```

## 兼容性

|浏览器|版本|
|--------|---------|
| Chrome| 30 |
| Safari| 10 |
| Firefox| 28 |
| IE     | 11 |

## 社区

如果你希望参与贡献，请先阅读[贡献者文档](./project/pr-spec.md)，或者给我们[报告 BUG](https://github.com/DaoCloud/dao-style/issues/new):


## 协议
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, DaoCloud
