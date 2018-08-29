<template>
  <div class="status">
    <com-name name="Component Status"></com-name>
    <table class="dao-table row">
      <thead>
        <tr>
          <th>Component</th>
          <th>Available</th>
          <th>Docs</th>
          <th>Test</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in coms" :key="c.path">
          <td>{{$t(c.path)}}</td>
          <td>
              <status-icon :status="c.meta.available ? 'success' : 'failed'">
              </status-icon>
            </td>
          <td>
            <status-icon :status="c.meta.docs ? 'success' : 'failed'">
            </status-icon>
          </td>
          <td>
            <status-icon :status="c.meta.test ? 'success' : 'failed'">
            </status-icon>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Status',
  computed: {
    coms() {
      return this.$router.options.routes
        .find(c => c.name === 'Components').children
        .filter(c => !c.meta.notComponent);
    },
  },
};

</script>

<style lang="scss" scoped>

</style>
