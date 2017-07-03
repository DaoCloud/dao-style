<style lang="scss" scoped>
  .svg-demo-wrap {
    margin: 50px auto;
  }

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
<template>
  <div class="svg-demo-wrap">
    <ul class="svg-list">
      <li v-for="name in svgs">
        <span class="icon">
          <svg>
            <use :xlink:href="`#${name}`"></use>
          </svg>
        </span>
        <span class="icon-id">
          {{name}}
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
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
          const NameString = nameArr[len - 1];
          const newName = NameString.substring(0, NameString.length - 4);
          this.svgs.push(newName);
        });
      },
    },
    created() {
      const svgsRoute = require.context('@/components/dao-svg', true, /\.svg$/);
      this.importAll(svgsRoute);
    },
  };
</script>