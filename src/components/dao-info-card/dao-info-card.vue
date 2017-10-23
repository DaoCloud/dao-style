<template>
  <div class="dao-infocard-container" :class="containerType">
    <div class="dao-card-header" @click="isShow=!isShow">
        <svg class="icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" v-bind:xlink:href="arrowDirect">
          </use>
        </svg>
        <div class="title">
          <slot name="title" class="title"></slot>
        </div>
    </div>
    <template v-if="isShow">
      <div class="dao-infocard-main" >
        <ul v-for="values in keyValue" v-if="keyValue.length>0">
          <li class="dao-key-value" v-for="(value,key,index) in values" :key="index">
            <div class="key">{{key}}:</div>
            <div class="value">
              <span v-show="config.openDot && config.openDotIndex==index" class="dot open"></span>
              <span v-show="config.closeDot && config.closeDotIndex==index" class="dot close"></span>
              <span>{{value}}</span> 
            </div>
          </li>    
        </ul>
        <div class="dao-table-wrapper" v-if="tableValue!==null">
          <table>
            <thead>
              <tr>
                <th v-for=" attr in tableValue.header" >{{attr}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tableValue.body">
                <td v-for="value in item">{{value}}</td>
              </tr>
            </tbody>  
          </table>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
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
    },
  };
</script>
<style scoped lang="scss" src="./dao-info-card.scss"></style>
