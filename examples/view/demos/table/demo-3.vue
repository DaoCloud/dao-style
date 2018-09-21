<template>
  <table class="dao-table flexrow">
    <thead>
      <tr>
        <th>应用</th>
        <th>容器</th>
        <th>状态</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.name">
        <td>{{row.name}}</td>
        <td>{{row.containers}} 个</td>
        <td>{{row.status}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Demo3',
  data() {
    return {
      rows: [
        {
          name: 'DaoCloud Enterprise',
          containers: 1,
          status: 'Running',
        },
        {
          name: 'DaoCloud Services',
          containers: 2,
          status: 'Waiting',
        },
        {
          name: 'DaoCloud DaoVoice',
          containers: 3,
          status: 'Stopped',
        },
        {
          name: 'DaoCloud Insight',
          containers: 4,
          status: 'Unknown',
        },
      ],
    };
  },
};
</script>