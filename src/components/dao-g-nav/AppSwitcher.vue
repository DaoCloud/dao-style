<template>
<div class="left">
    <div class="nav-left-container">
        <slot>
            <ul class="app-switcher">
                <li v-if="switcherConfig.logo && switcherConfig.logo.src">
                    <a class="logo" :href="switcherConfig.logo.href || ''"><img :src="switcherConfig.logo.src" /></a>
                </li>
                <link-select
                    v-if="switcherConfig.links && selectedLink"
                    :config="switcherConfig.links"
                    :value="selectedLink"
                    @on-change="(value) => onSelectChange(value)"
                />
            </ul>
        </slot>
    </div>
</div>
</template>

<script>
import LinkSelect from './LinkSelect.vue';
export default {
  name: 'NavLeft',
  model: {
      prop: 'selectedLink',
      event: 'on-change'
  },
  components: {
      LinkSelect,
  },
  props: {
    switcherConfig: {
        type: Object,
        default: function() {
            return {};
        }
    },
    selectedLink: {
        type: String
    }
  },
  computed: {
  },
  methods: {
      onSelectChange(value) {
          this.$emit('on-change', value);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .left {
        flex: 1;
        .nav-left-container {
            float: left;
        }
    }
    .app-switcher {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            float: left;
        }
        .logo {
            display: block;
            line-height: 17px;
            height: 17px;
            overflow: hidden;
            margin: 11px 10px 12px 20px;
            color: #aaa;
            img, svg {
                height: 100%;
            }
        }
    }
</style>
