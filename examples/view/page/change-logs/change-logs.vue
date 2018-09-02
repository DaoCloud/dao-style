<template>
  <div class="change-logs">
    <change-log
      v-for="log in sortedLogs"
      :key="log.name"
      :log="log">
    </change-log>
  </div>
</template>

<script>

import ChangeLog from './change-log/index.vue';

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
    };
  },
  computed: {
    sortedLogs() {
      return sortVersions(this.logs);
    },
  },
  created() {
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
  components: {
    ChangeLog,
  },
};

</script>

<style lang="scss" scoped>

</style>
