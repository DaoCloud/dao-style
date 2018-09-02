<template>
  <div class="dao-table row docs-table" v-if="rows && rows.length">
    <thead>
      <tr>
        <th>{{name}}</th>
        <th v-if="showType">{{$t("type")}}</th>
        <th v-if="showOptions">{{$t("options")}}</th>
        <th v-if="showDefault">{{$t("default")}}</th>
        <th v-if="showParameter">{{$t('parameter')}}</th>
        <th v-if="showReturn">{{$t('return')}}</th>
        <th>{{$t('desc')}}</th>
      </tr>
    </thead>
    <tbody >
      <tr v-for="(row, index) in rows" :key="index">
        <td>
          <span class="name">
            {{row.name}}
          </span>
        </td>
        <td v-if="showType">
          <span class="type">
            {{getTypes(row.type)}}
          </span>
        </td>
        <td v-if="showOptions">
          <span v-if="row.options">
            {{row.options.join('、')}}
          </span>
          <span v-else>-</span>
        </td>
        <td v-if="showDefault">
          <span v-if="row.options">
            {{row.default}}
          </span>
          <span v-else>-</span>
        </td>
        <td v-if="showParameter">
          {{row.parameter}}
        </td>
        <td v-if="showReturn">
          {{row.return}}
        </td>
        <td>
          <span v-if="row.desc">
            <md-reader :source="row.desc">
            </md-reader>
          </span>
          <span v-else>-</span>
        </td>
      </tr>
    </tbody>
  </div>
</template>

<script>

// [{
// name: '', 参数名，时间名，方法名，插槽名
// desc: '', 说明
// type: [], 类型 // attr,
// options: [], 可选值 // attr,
// default: '', 默认值 // attr,
// parameter: '', 参数 // event，method
// return: '', 返回值 // method
// }]
export default {
  name: 'DocsTable',
  props: {
    type: {
      type: String,
      default: 'attr',
      validator(v) {
        // TODO 验证 rows
        return _.includes(['attr', 'event', 'method', 'slot'], v);
      },
    },
    rows: Array,
  },
  computed: {
    name() {
      switch (this.type) {
        case 'attr':
          return this.$t('attr_name');
        case 'event':
          return this.$t('event_name');
        case 'method':
          return this.$t('method_name');
        default:
          return this.$t('slot_name');
      }
    },
    showParameter() {
      return _.includes(['event', 'method'], this.type);
    },
    showReturn() {
      return _.includes(['method'], this.type);
    },
    showType() {
      return _.includes(['attr'], this.type);
    },
    showDefault() {
      return _.includes(['attr'], this.type);
    },
    showOptions() {
      return _.includes(['attr'], this.type);
    },
  },
  methods: {
    getTypes(val) {
      let vals = [];
      if (!val) {
        vals = [];
      } else if (_.isString(val)) {
        vals = [val];
      } else {
        vals = val;
      }
      return vals.map((v) => {
        const a = v.substring(0, 1);
        const b = v.substring(1);
        return `${a.toUpperCase()}${b.toLowerCase()}`;
      }).join('、');
    },
  },
};

</script>

<style lang="scss" scoped>
@import 'daoColor';

.docs-table{
  .name{
    font-weight: 500;
  }
  .type{
    color: $blue;
  }
}
</style>
