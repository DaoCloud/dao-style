<template>
  <div class="com-name">
    <h2>{{name}}</h2>
    <h4 v-if="desc">{{desc}}</h4>
  </div>
</template>

<script>

export default {
  name: 'ComponentName',
  props: ['name', 'desc'],
};

</script>

<style lang="scss" scoped>
@import 'daoColor';
.com-name{
  padding-bottom: 10px;
  h2{
    font-size: 32px;
    color:$black-dark;
  }
}
</style>
