# dao-style
[![dao-style](https://img.shields.io/npm/v/dao-style.svg?style=flat-square)](https://www.npmjs.org/package/dao-style)
[![NPM downloads](https://img.shields.io/npm/dt/dao-style.svg?style=flat-square)](https://npmjs.org/package/dao-style)

### A high quality UI Toolkit built on Vue.js.

## Docs

**[latest](docs)**

## Features

- Dozens of useful and beautiful components.
- Friendly API. It's made for people with any skill level.
- Extensive documentation and demos.
- It is quite beautiful.

## Who's using dao-style

- [DaoCloud](https://www.daocloud.io/)
- [DaoVoice](http://daovoice.io/)

> If your company or products use dao-style, welcome to click [here](https://github.com/DaoCloud/dao-style/issues/543) to leave a message.

## Install

Using npm:
```
npm install dao-style --save
```

Using html tag:

```html
<script type="text/javascript" src="dao-style.min.js"></script>
<link rel="stylesheet" href="dist/styles/dao-style.css">
```

## Usage
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

**Contribute:** [How to contribute](https://github.com/DaoCloud/dao-style/project/pr-spec.md)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, DaoCloud
