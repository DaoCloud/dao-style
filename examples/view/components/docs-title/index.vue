<template>
  <div class="docs-title">
    <h2 :class="size">{{name}}</h2>
    <div class="desc" v-if="$slots.content || desc">
      <slot name="desc">
        <div><md-reader>{{desc}}</md-reader></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocsTitle',
  props: {
    name: {
      type: String,
    },
    desc: {
      type: String,
    },
    size: {
      type: String,
      default: 'md',
      validator(s) {
        return _.includes(['sm', 'md', 'lg'], s);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'daoColor';
.docs-title{
  h2{
    color:$black-dark;
    &.sm{
      font-size: 18px;
    }
    &.md{
      font-size: 22px;
    }
    &.lg{
      font-size: 28px;
    }
  }
  .desc{
    color: $grey-dark;
    font-size: 14px;
    font-weight: normal;
    padding-top: 4px;
  }
}
</style>
