<template>
  <div class="change-logs">
    <dcos-title :name="$t('change_logs')" size="lg"></dcos-title>
    <br>
    <div v-for="(chunk, index) in chunks" :key="index" v-if="index <= page">
      <change-log
        class="log-block"
        v-for="log in chunk"
        :key="log.name"
        :log="log">
      </change-log>
    </div>
    <div class="show-more-btn" v-if="page < pages">
      <a @click="showMore" class="dao-btn">{{$t('show_more')}}</a>
    </div>
  </div>
</template>

<script>

import ChangeLog from './change-log';

/* eslint-disable */
function sortVersions(versions) {
  // TODO 改写成递归方式排序
  return versions.sort((pre, next) => {
    const [a1, a2, a3] = pre.name.split('.').map(v => _.toNumber(v.replace('v', '')));
    const [b1, b2, b3] = next.name.split('.').map(v => _.toNumber(v.replace('v', '')));
    if (a1 > b1) return -1;
    else if (a1 < b1) return 1;
    else {
      if (a2 > b2) return -1;
      else if (a2 < b2) return 1;
      else {
        if (a3 > b3) return -1;
        else if (a3 < b3) return 1;
        else {
          return 0;
        } 
      }
    }
  });
}

export default {
  name: 'ChangeLogs',
  data() {
    return {
      source: '',
      logs: [],
      page: 0,
    };
  },
  computed: {
    chunks() {
      return _.chunk(sortVersions(this.logs), 3);
    },
    pages() {
      return this.chunks.length - 1;
    },
  },
  created() {
    this.page =_.toNumber(_.get(this.$route, 'query.page')) || 0;
    // TODO 修改 version.js 在 examples 目录下打一个版本列表，用于这里做更新记录的懒加载
    const keys = require.context('!!raw-loader!../../../../changelogs', true, /\.md$/).keys();
    _.map(keys, (key) => {
      const formatKey = key.replace('./', '');
      import(`!!raw-loader!../../../../changelogs/${formatKey}`)
        .then((res) => {
          this.logs.push({
            name: formatKey.replace('.md', ''),
            source: res.default,
          });
        });
    });
  },
  methods: {
    showMore() {
      this.page += 1;
      this.$router.push({
        name: 'ChangeLogs',
        query: {
          page: this.page,
        },
      });
    },
  },
  components: {
    ChangeLog,
  },
};

</script>

<style lang="scss" scoped>
.change-logs{
  .log-block:not(:last-child){
    margin-bottom: 50px;
  }
  .show-more-btn{
    text-align: center;
  }
}
</style>
