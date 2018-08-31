<template>
  <div class="change-log">
    <md-reader
      :postrender="postrender"
      :source="log.source">
      </md-reader>
  </div>
</template>

<script>

export default {
  name: 'ChangeLog',
  props: ['log'],
  methods: {
    postrender(str) {
      return str.replace(/<br \/>/g, '');
    },
  },
};

</script>

<style lang="scss">
.change-log{
  margin-bottom: 50px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  border-radius: 4px;
  padding: 20px;
  h2{
    margin: 30px 0px 20px 0px;
  }
  li{
    margin: 10px 0;
  }
  ul{
    margin-left: 18px;
  }
 // ul li ul li {
   // margin-left: 18px;
 // }
}
</style>
