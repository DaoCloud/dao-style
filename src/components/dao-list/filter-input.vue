<template>
  <dao-input-with-label 
    class="dao-list-filter"
    v-model="filterTextRaw"
    @keydown.enter="onKeydown"
    size="sm"
    :placeholder="`搜索${tableName}`"
    :options="filtersOption">
  </dao-input-with-label>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'FilterInput',
  props: ['tableName', 'rows', 'columns'],
  data() {
    return {
      filterTextRaw: '',
      filterText: '',
    };
  },
  computed: {
    // 一个 filter 是指一个可以用来筛选的规则。filters 是根据所有行的数据拼出来的。
    filters() {
      const filters = {};
      _.forEach(this.rows, (r) => {
        _.forEach(r, (td, key) => {
          if (!filters[key]) {
            filters[key] = {
              // 一个问题就是，rows 里的有的属性可能 column 里没有，所以找不到 text
              text: this.columns[key] ? this.columns[key].text : key,
              options: [],
            };
          }
          // 如果在这个 filter 的 options 里没找到这个 value，那就添加到 options 里
          if (!_.find(filters[key].options, o => o.value === td.value)) {
            filters[key].options.push({
              text: td.text || '',
              value: td.value,
            });
          }
        });
      });

      return filters;
    },
    // 把 filter 转换成 dao-input-with-label 所要求的格式
    filtersOption() {
      const filterGroup = {
        // tabName: '测试',
        keys: [],
      };

      // 把 filters 转换成 input-with-label 要求的格式
      filterGroup.keys = _.map(this.filters, (filter, name) => ({
        name: filter.text,
        val: name,
        vals: _.map(filter.options, o => ({
          name: o.text,
          val: o.value,
        })),
      }));

      return [filterGroup];
    },
  },
  watch: {
    // 根据 input 中输入查询语句转换成的筛选条件，然后对外把筛选条件暴露出去
    filterText() {
      const query = {};
      query.$keywords = [];
      // TODO: 这里先简单地判断查询语句是否合法，以后可能要改成正则
      const filterTextFragments = this.filterText.trim().split(' ');
      _.forEach(filterTextFragments, (text) => {
        if (_.includes(text, ':')) {
          const [name, value] = text.split(':');
          query[name] = value;
        } else {
          // 如果没有冒号，表示它就是一个搜索关键词
          query.$keywords.push(text);
        }
      });
      this.$emit('change', query);
    },
  },
  methods: {
    onKeydown() {
      this.filterText = this.filterTextRaw;
    },
  },
};
</script>

<style lang="scss">
</style>
