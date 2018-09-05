# dao-style-vue
[![dao-style-vue](https://img.shields.io/npm/v/dao-style-vue.svg?style=flat-square)](https://www.npmjs.org/package/dao-style-vue)
[![NPM downloads](https://img.shields.io/npm/dt/dao-style-vue.svg?style=flat-square)](https://npmjs.org/package/dao-style-vue)

### A high quality UI Toolkit built on Vue.js.

## Docs

**[latest](docs)**

## Features

- Dozens of useful and beautiful components.
- Friendly API. It's made for people with any skill level.
- Extensive documentation and demos.
- It is quite beautiful.

## Who's using dao-style-vue

- [DaoCloud](https://www.daocloud.io/)
- [DaoVoice](http://daovoice.io/)

> If your company or products use dao-style-vue, welcome to click [here](https://github.com/DaoCloud/dao-style-vue/issues/543) to leave a message.

## Install

> Please install Webpack first!

### Install dao-style-vue

Using npm:
```
npm install dao-style-vue --save
```

Using a script tag for global use:

```html
<script type="text/javascript" src="dao-style-vue.min.js"></script>
<link rel="stylesheet" href="dist/styles/dao-style-vue.css">
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

**Questions:** [Issues](https://github.com/DaoCloud/dao-style-vue/issues)  

**Bugs:** [Report bugs](https://github.com/DaoCloud/dao-style-vue/issues/new)

**Contribute:** [How to contribute](https://github.com/DaoCloud/dao-style-vue/tree/develop/project)

## All Contributors

Thanks to all contributors.
<a href="graphs/contributors"><img src="https://opencollective.com/dao-style-vue/contributors.svg?width=890&button=false" /></a>

## Ecosystem Links

- [Demo](http://192.168.1.26:32929)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, DaoCloud
