<template>
    <div
        v-clickoutside="closeSelect"
        v-if="config.data"
    >
        <a
            :class="buttonClass"
            @click="switchShowSelect"
        >
            <span class="nav-button-text">{{ selectedLabel }}</span><svg class="caret-down"><use xlink:href="#icon_caret-down"></use></svg>
        </a>
        <transition name="slidedown">
            <ul class="nav-menu-dropdown" v-if="showSelect">
                <li
                    v-for="(item, index) in config.data"
                    :key="index"
                    class="nav-menu-dropdown-item"
                    @click.stop="() => onItemClick(item.value)"
                >
                    <svg
                        class="check-icon"
                        v-if="item.value === selectedValue"
                    ><use xlink:href="#icon_checkmark-menu-item"></use></svg>
                    <span>{{ item.label }}</span>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
import find from 'lodash/find';
import clickoutside from '../../directives/clickoutside';
export default {
  name: 'NavSelect',
  directives: {
      clickoutside,
  },
  directives: {
      clickoutside,
  },
  props: {
      config: {
          type: Object,
          default() {
              return {};
          }
      },
      selectedValue: {
          type: String,
      }
  },
  data() {
      return {
          showSelect: false,
      }
  },
  computed: {
      selectedLabel() {
        let foundItem;
        return (foundItem = find(this.config.data, (o) => (o.value === this.selectedValue)))
        && foundItem.label;
      },
      buttonClass() {
          return {
              "nav-button": true,
              "nav-button-with-caret": true,
              "nav-button-without-text": !this.selectedLabel,
          }
      }
  },
  methods: {
      onItemClick(value) {
          if(value === this.selectedValue) return;
          this.closeSelect();
          this.config.onSelectChange && this.config.onSelectChange(value);
          this.$emit('on-select-change', value);
      },
      switchShowSelect() {
          this.showSelect = !this.showSelect;
      },
      closeSelect() {
          this.showSelect = false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import 'navButton';
    @import 'dropdown';
    @import 'slidedown';
    .nav-menu-dropdown-item {
        .check-icon {
            float: right;
            width: 14px;
            height: 14px;
            fill: #3d444f;
            position: absolute;
            top: 8px;
            left: 4px;
        }
        &:hover .check-icon {
            fill: #ffffff;
        }
    }
    .nav-button-without-text {
        width: 60px;
    }
</style>
