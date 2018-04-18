<template>
  <dao-input-with-label 
    class="dao-list-filter"
    v-model="filterTextRaw"
    @keydown.enter="onKeydown"
    size="sm"
    :config="config"
    :placeholder="config.placeholder || '搜索'"
    :options="options"
    :autofocus="config.autofocus"
    @reset="resetVal">
  </dao-input-with-label>
</template>

<script>
import {
  _forEach,
  _uniqBy,
  _includes,
} from '../../utils/assist';

export default {
  name: 'DaoTableViewFilter',
  props: ['rows', 'columnsOrder', 'props', 'placeholder', 'config'],
  data() {
    return {
      filterTextRaw: '',
      filterText: '',
    };
  },
  computed: {
    // 一个 filter 是指一个可以用来筛选的规则。filters 是根据所有行的数据拼出来的。
    options() {
      if (this.config.options) return this.config.options;
      const filters = {};
      _forEach(this.rows, (row) => {
        _forEach(this.columnsOrder, (prop) => {
          const val = {
            name: row[prop],
            val: row[prop],
          };
          if (!filters[prop]) {
            filters[prop] = {
              name: this.props[prop].name || prop,
              val: prop,
              vals: [val],
            };
          } else {
            filters[prop].vals.push(val);
          }
        });
      });
      const keys = [];
      Object.keys(filters).forEach((filter) => {
        const item = filters[filter];
        item.vals = _uniqBy(item.vals, 'val');
        keys.push(item);
      });
      return [{ keys }];
    },
  },
  watch: {
    // 根据 input 中输入查询语句转换成的筛选条件，然后对外把筛选条件暴露出去
    filterText() {
      const query = {};
      query.$keywords = [];
      // TODO: 这里先简单地判断查询语句是否合法，以后可能要改成正则
      const filterTextFragments = this.filterText.trim().split(' ');
      _forEach(filterTextFragments, (text) => {
        if (_includes(text, ':')) {
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
    resetVal() {
      this.filterText = '';
    },
    textRender(val, rule) {
      if (typeof rule === 'function') {
        return rule(val);
      }
      return val;
    },
  },
};
</script>

<style lang="scss">
</style>
