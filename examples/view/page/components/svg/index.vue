
<template>
  <div class="docs-svg">
    <docs-title :name="$t('svg')" desc="基于 svg 的图标库"></docs-title>
    <docs-section>
      <template slot="title">默认用法</template>
      <template slot="content">
        <demo-code>
          <demo1 slot="demo"></demo1>
          <code-reader slot="code" file="svg/demo-1.vue"></code-reader>
          <md-reader slot="desc">
            `dao-svg`是 dao-style 的 svg 图标库， 使用 webpack 的 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 打包引入，你可以轻松使用 `css` 属性 `fill` 去更改图标的颜色
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
     <docs-section>
      <template slot="title">
        <docs-title
          name="所有图标"
          desc="点击文字可以直接复制代码"
          size="sm">
        </docs-title>
      </template>
      <template slot="content">
        <ul class="svg-list">
          <li v-for="(svg, index) in svgs" :key="index">
            <div class="svg-item">
              <div class="svg-item-top">
                <svg class="icon">
                  <use :xlink:href="`#${svg}`"></use>
                </svg>
              </div>
              <div
                class="svg-item-bottom"
                is="dao-clipboard"
                v-dao-select-all
                :content="getCopyContent(svg)">
                #{{svg}}
              </div>
            </div>
          </li>
        </ul>
      </template>
    </docs-section>
  
  </div>
</template>
<script>
  import Demo1 from '@demos/svg/demo-1';

  export default {
    data() {
      return {
        svgs: [],
      };
    },
    methods: {
      importAll(svgsRoute) {
        svgsRoute.keys().forEach((name) => {
          const nameArr = name.split('/');
          const len = nameArr.length;
          const nameStr = nameArr[len - 1];
          const newName = nameStr.substring(0, nameStr.length - 4);
          this.svgs.push(newName);
        });
      },
      getCopyContent(svg) {
        return `<svg class="icon">
  <use xlink:href="#${svg}"></use>
</svg>`;
      },
    },
    created() {
      const svgsRoute = require.context('@/components/dao-svg', true, /\.svg$/);
      this.importAll(svgsRoute);
    },
    components: {
      Demo1,
    },
  };
</script>

<style lang="scss" scoped>
  .svg-list {
    zoom: 1;
    &:before,
    &:after {
      content: " ";
      display: table;
      clear: both;
    }
    &>li {
      list-style: none;
      float: left;
      padding: 10px;
      font-size: 10px;
      background-color: #f9f9f9;
      border: 1px solid #fff;
      &:hover {
        color: #fff;
        background-color: #2ecc71;
      }
      .svg-item{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        flex-direction: column;
        div{
          width: 90px;
        }
        &-top{
          height: 32px;
          .icon{
            width: 32px;
            height: 32px;
          } 
        }
        &-bottom{
          padding-top: 8px;
          height: 50px;
          cursor: pointer;
          word-wrap: break-word;
        }
      }
    }
  }
</style>