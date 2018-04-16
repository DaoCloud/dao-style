<template>
    <div class="nav-center-container">
        <slot>
            <nav-select
                :config="centerConfig"
                :selectedValue="selectedValue"
                @on-select-change="(value) => onSelectChange(value)"
            ></nav-select>
        </slot>
    </div>
</template>

<script>
import NavSelect from './NavSelect.vue';
export default {
  name: 'NavCenter',
  model: {
      prop: 'selectedValue',
      event: 'on-select-change'
  },
  components: {
      NavSelect,
  },
  props: {
      centerConfig: {
          type: Object
      },
      selectedValue: {
          type: String
      }
  },
  methods: {
      onSelectChange(value) {
          this.$emit('on-select-change', value);
      }
  }
}
</script>

<style scoped lang="scss">
    .nav-center-container {
        // display: inline-block;
        color: white;
        height: 40px;
        line-height: 40px;
        flex: 0 0;
    }
</style>
