# svg (图标)

dao-svg 是 dao-style 的 svg 库，是通过 webpack 的 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 打包引入。
全部 svg 请参照目录：[src/components/dao-svg](../src/components/dao-svg)。

## 使用方法

### HTML

```HTML
<svg>
  <use xlink:href="#icon-name"></use>
</svg>
```

## 参数

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
xlink:href | String | 原生参数，必须是 `#` + `icon 名称` | \ | 是

## 设计师使用方法

- 如果你只需要添加新的 svg 而不需要观看效果的话，直接放入 _[src/components/dao-svg/](../src/components/dao-svg)_ 下即可。

- 如果你还需观看效果，请按以下步骤:
  + 填加新的 svg 文件到 _[src/components/dao-svg/](../src/components/dao-svg)_ 目录下
  + 运行 `npm run start` 命令
  + 在 demo 页上查看新添加的 svg
