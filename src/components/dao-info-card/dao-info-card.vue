<template>
  <div class="dao-infocard-container" :class="containerType">
    <div class="dao-card-header" @click="isExpand($event)">
        <svg class="icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" v-bind:xlink:href="arrowDirect">
          </use>
        </svg>
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="dropdown">
          <slot name="dropdown"></slot>
        </div>
    </div>
    <template v-if="isShow">
      <div class="dao-infocard-main" >
        <slot name="content"></slot>
        <ul v-for="(values, index) in keyValue" :key="index">
          <li class="dao-key-value" v-for="(value,key,index) in values" :key="index">
            <div class="key">{{key}}:</div>
            <div class="value">
              <span v-if="config.openDot && config.openDotIndex===index" class="dot open"></span>
              <span v-if="config.closeDot && config.closeDotIndex===index" class="dot close"></span>
              <span>{{value}}</span> 
            </div>
          </li>    
        </ul>
        <div class="dao-table-wrapper" v-if="tableValue!==null">
          <table class="dao-table flexrow">
            <thead>
              <tr>
                <th v-for="(attr, key, index) in tableValue.header" :key="index">{{attr}}</th>
              </tr>
            </thead>
            <tbody v-if="showTableBody">
              <tr v-for="(item, index) in tableValue.body" :key="index">
                <td v-for="(value, key, index) in item" :key="index">{{value}}</td>
              </tr>
            </tbody>
            <slot name="empty" v-else />
          </table>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
  import { _get } from '../../utils/assist.js';
  export default {
    name: 'DaoInfoCard',
    data() {
      return {
        isShow: true,
      };
    },
    props: {
      size: {
        type: String,
        default: 'small',
      },
      type: {
        type: String,
      },
      tableValue: {
        type: Object,
        default() {
          return null;
        },
      },
      keyValue: {
        type: Array,
        default() {
          return [];
        },
      },
      config: {
        type: Object,
        default() {
          return {
            openDot: false,
            openDotIndex: 0,
            closeDot: false,
            closeDotIndex: 1,
          };
        },
      },
    },
    computed: {
      containerType() {
        return `size-${this.size}`;
      },
      arrowDirect() {
        if (this.isShow) {
          return '#icon_down-arrow';
        }
        return '#icon_triangle-right';
      },
      showTableBody() {
        return _get(this.tableValue.body, 'length', 0) > 0;
      },
    },
    methods: {
      isExpand(e) {
        const targetNode = e.target.nodeName === 'svg' ? e.target : e.target.parentNode;
        if (targetNode.classList.contains('icon-more')) {
          return;
        }
        this.isShow = !this.isShow;
      },
    },
  };
</script>
<style scoped lang="scss" src="./dao-info-card.scss"></style>
