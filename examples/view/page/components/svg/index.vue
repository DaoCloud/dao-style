
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
            `dao-svg`是 dao-style 的 svg 图标库， 使用 webpack 的[svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 打包引入，你可以轻松使用 `css` 属性 `fill` 去更改图标的颜色
          </md-reader>
        </demo-code>
      </template>
    </docs-section>
     <docs-section>
      <template slot="title">
        <docs-title name="所有图标" size="sm"></docs-title>
      </template>
      <template slot="content">
        <ul class="svg-list">
          <li v-for="(svg, index) in svgs" :key="index">
            <span class="icon">
              <svg>
                <use :xlink:href="`#${svg}`"></use>
              </svg>
            </span>
            <span class="icon-id">
              {{svg}}
            </span>
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
      width: 120px;
      height: 90px;
      padding: 10px;
      font-size: 10px;
      line-height: 1.4;
      text-align: center;
      background-color: #f9f9f9;
      border: 1px solid #fff;

      &:hover {
        color: #fff;
        background-color: #2ecc71;
      }

      .icon {
        display: inline-block;
        margin-top: 10px;
        width: 32px;
        height: 32px;

        svg {
          max-width: 100%;
          max-height: 100%;
        }
      }

      .icon-id {
        display: block;
        word-wrap: break-word;
      }
    }
  }
</style>