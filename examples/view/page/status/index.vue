<template>
  <div class="status">
    <docs-title :name="$t('components')" size="lg"></docs-title>
    <br>
    <table class="dao-table row">
      <thead>
        <tr>
          <th>{{$t('status.component')}}</th>
          <th>{{$t('status.docs')}}</th>
          <th>{{$t('status.test')}}</th>
          <th>{{$t('status.available')}}</th>
          <!-- <th>{{$t('status.remarks')}}</th> -->
        </tr>
      </thead>
      <tbody>
        <tr
            v-for="c in $router.options.components"
            v-if="!c.meta.notComponent"
            :key="c.path"
            @click="goToCom(c.path)">
          <td>{{$t(c.path)}}</td>
          <td>
            <status-icon :status="c.meta.docs ? 'success' : 'failed'">
            </status-icon>
          </td>
          <td>
            <status-icon :status="c.meta.test ? 'success' : 'failed'">
            </status-icon>
          </td>
          <td>
            <status-icon :status="c.meta.available ? 'success' : 'failed'">
            </status-icon>
          </td>
          <!-- <td>
            <span v-if="c.meta.remarks">
              {{$t(`status.${c.meta.remarks}`)}}
            </span>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Status',
  methods: {
    goToCom(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.status{
  tbody tr{
    cursor: pointer;
  }
}
</style>
