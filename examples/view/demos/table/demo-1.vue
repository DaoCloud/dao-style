<template>
  <table class="dao-table slat demo1">
    <thead>
      <tr>
        <th class="name">
          <svg>
            <use xlink:href="#icon_stack"></use>
          </svg>
          <span>应用</span>
        </th>
        <th>
          <svg>
            <use xlink:href="#icon_container"></use>
          </svg>
          <span>容器</span>
        </th>
        <th>
          <svg>
            <use xlink:href="#icon_status"></use>
          </svg>
          <span>状态</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.name">
        <td class="name">
          <a :href="row.href" target="_blank">{{row.name}}</a>
        </td>
        <td>
          {{row.containers}} 个
        </td>
        <td>
          <dao-progress-stacked
            :green="row.status.green"
            :red="row.status.red"
            :stripe="row.status.stripe"
            :black="row.status.black">
          </dao-progress-stacked>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Demo1',
  data() {
    return {
      rows: [
        {
          name: 'DaoCloud Enterprise',
          href: 'https://www.daocloud.io/dce',
          containers: 1,
          status: {
            green: 0.1,
            red: 0.3,
            stripe: 0.4,
            black: 0.2,
          },
        },
        {
          name: 'DaoCloud Services',
          href: 'https://www.daocloud.io/dcs',
          containers: 2,
          status: {
            green: 0.4,
            red: 0.2,
            stripe: 0.1,
            black: 0.3,
          },
        },
        {
          name: 'DaoCloud DaoVoice',
          href: 'http://www.daovoice.io/',
          containers: 3,
          status: {
            green: 0.4,
            red: 0.3,
            stripe: 0.2,
            black: 0.1,
          },
        },
        {
          name: 'DaoCloud Insight',
          href: 'https://www.daocloud.io/dcei',
          containers: 4,
          status: {
            green: 0.1,
            red: 0.3,
            stripe: 0.4,
            black: 0.2,
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.demo1 {
  .name{
    padding-left: 10px;
    margin-left: 0px !important;
  }
}
</style>