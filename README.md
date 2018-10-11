# dao-style
[![dao-style](https://img.shields.io/npm/v/dao-style-vue.svg?style=flat-square)](https://www.npmjs.org/package/dao-style-vue)
[![NPM downloads](https://img.shields.io/npm/dt/dao-style-vue.svg?style=flat-square)](https://npmjs.org/package/dao-style-vue)

### A high quality component library built on Vue.js.

English | [简体中文](README_ZH.md)

## Docs

**[latest](https://daocloud.github.io/dao-style)**

## Who's using dao-style

- [DaoCloud](https://www.daocloud.io/)
- [DaoVoice](http://daovoice.io/)

> If you are also using dao-style, please click [here](https://github.com/DaoCloud/dao-style/issues/543) to tell us.

## Install

Using npm:
```
npm install dao-style-vue --save
```

Using html tag:

```html
<script type="text/javascript" src="dao-style.min.js"></script>
<link rel="stylesheet" href="dist/styles/dao-style.css">
```

## Usage
``` javascript
import daoStyle from 'dao-style-vue';
import 'dao-style-vue/styles/dao-style.css';

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

## Compatibility

|Browser|Version|
|--------|---------|
| Chrome| 30 |
| Safari| 10 |
| Firefox| 28 |
| IE     | 11 |

## Community

If you want to contribute or have questions or bugs to report:

**Questions:** [Issues](https://github.com/DaoCloud/dao-style/issues)  

**Bugs:** [Report bugs](https://github.com/DaoCloud/dao-style/issues/new)

**Contribute:** [How to contribute](./project/pr-spec.md)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, DaoCloud
