<template>
  <div>
      <div class="example1">
          <dao-info-panel>
            <template slot="header-tabs-item">
                <li v-for="v in listTypes" :key="v" 
                    :class="{'active': activeListType===v}"
                    @click="changeTab(v)">{{ v }}</li>
            </template>
            <template slot="info-panel-body">
                hehe
            </template>
        </dao-info-panel>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listTypes: [
        'stupid',
        'stupid1',
        'stupid2',
        'stupid3',
        'stupid44444444444444444',
      ],
      activeListType: '',
    };
  },
  created() {
    this.activeListType = this.listTypes[0];
  },
  methods: {
    changeTab(v) {
      this.activeListType = v;
    },
  },
};
</script>

<style lang="scss" scoped>
    .example1 {
        width: 100%;
        height: 200px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
