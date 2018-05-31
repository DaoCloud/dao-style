
<template>
  <div class="app">
    <nav>
      <div class="routes">
        <ul>
          <li v-for="r in routes" :key="r.name" v-if="!r.hide">
            <router-link  :to="r.path">{{r.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="lang">
         <dao-dropdown
          trigger="click"
          placement="bottom-end">
          <div class="dao-btn dao-icon ghost">
            {{langs[lang]}}<svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_down-arrow"></use></svg>
          </div>
          <dao-dropdown-menu slot="list">
            <dao-dropdown-item
              v-for="(val, key) in langs"
              v-if="key !== lang"
              :key="key"
              @click="changeLang(key)">{{val}}
            </dao-dropdown-item>
          </dao-dropdown-menu>
        </dao-dropdown>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import { routes } from './router';
  import { generateLang, langs, storageKey } from './lang';

  export default {
    name: 'App',
    data() {
      return {
        routes,
        lang: generateLang(),
        langs,
      };
    },
    methods: {
      changeLang(lang) {
        localStorage.setItem(storageKey, lang);
        window.location.reload();
      },
    },
  };
</script>

<style lang="scss">
.app {
  padding: 10px;
  nav {
    margin-bottom: 20px;
    display: flex;
    .routes{
      ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
      }
      li {
        display: inline - block;
      }
      li + li {
        border-left: solid 1px #bbb;
        padding-left: 10px;
        margin-left: 10px;
      }
    }
  }
}
</style>