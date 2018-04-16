<template>
    <li
        class="link-select-container"
        v-clickoutside="closeLinkPane"
    >
        <span
            class="selected-text"
            @click="onlinkPaneSwitch"
        >{{ selectedLinkName }}
            <svg
                class="caret-down"
            ><use xlink:href="#icon_caret-down"></use></svg>
        </span>
        <transition name="slidedown">
            <div class="link-pane" v-if="linkPaneShow">
                <ul v-for="(linkGroup, index) in config" :key="index">
                    <li
                        v-for="link in linkGroup"
                        :key="link.key"
                        @click="() => onLinkClick(link.href, link.openNewTab)"
                    >
                        <span class="link-icon" :style="{ background: `url(${link.icon})` }" v-show="link.icon"></span>
                        {{ link.name }}
                        <svg
                            class="check-icon"
                            v-show="value === link.href"
                        ><use xlink:href="#icon_checkmark-menu-item"></use></svg>
                    </li>
                </ul>
            </div>
        </transition>
    </li>
</template>

<script>
import flatten from 'lodash/flatten';
import find from 'lodash/find';
import clickoutside from '../../directives/clickoutside';
export default {
  name: 'LinkSelect',
  directives: {
      clickoutside,
  },
  components: {
  },
  props: {
    config: {
        type: Array,
        default: function() {
            return [];
        }
    },
    value: {
        type: String
    }
  },
  data() {
      return {
          linkPaneShow: false,
      }
  },
  computed: {
      allLinks() {
          return flatten(this.config)
      },
      selectedLinkName() {
          const foundLink = find(this.allLinks, (obj) => (obj.href === this.value));
          return foundLink && foundLink.name;
      }
  },
  methods: {
      onLinkClick(href, openNewTab) {
          if(openNewTab) {
            window.open(href, '_blank');
          } else {
            window.location.href = href;
            this.$emit('on-change', href);
          }
          this.linkPaneShow = false;
      },
      onlinkPaneSwitch() {
          this.linkPaneShow = !this.linkPaneShow;
      },
      closeLinkPane() {
          this.linkPaneShow = false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import 'slidedown';
    .link-select-container {
        display: inline-block;
        list-style: none;
        color: #ccd1d9;
        .selected-text {
            display: block;
            height: 28px;
            line-height: 28px;
            font-size: 14px;
            cursor: pointer;
            padding: 0 4px 0 8px;
            margin: 6px 0;
            .caret-down {
                display: inline-block;
                width: 16px;
                height: 16px;
                position: relative;
                top: 4px;
                fill: #ccd1d9;
            }
        }
        .selected-text:hover {
            background-color: #3d444f;
            color: #ffffff;
            border-radius: 3px;
            opacity: 0.9;
            .caret-down {
                fill: #ffffff;
            }
        }
        .link-pane {
            border-radius: 5px;
            background: rgba(255, 255, 255, .9);
            padding: 10px;
            position: absolute;
            top: 100%;
            overflow: hidden;
            z-index: 999;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                filter: blur(10px);
                z-index: -1;
            }
            ul {
                padding: 0;
                margin: 0;
                display: inline-block;
                color: #3d444f;
                & + ul {
                    margin-left: 2px;
                }
                li {
                    list-style: none;
                    height: 30px;
                    line-height: 30px;
                    cursor: pointer;
                    padding: 0 24px 0 8px;
                    width: 250px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    position: relative;
                    .link-icon {
                        display: inline-block;
                        width: 14px;
                        height: 14px;
                    }
                    .check-icon {
                        float: right;
                        width: 14px;
                        height: 14px;
                        fill: #217ef2;
                        position: absolute;
                        top: 8px;
                        right: 5px;
                    }
                    &:hover {
                        border-radius: 3px;
                        background-color: rgba(89, 95, 105, .1);
                    }
                }
            }
        }
    }
</style>
