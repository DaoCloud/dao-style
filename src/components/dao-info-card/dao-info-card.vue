<template>
  <div class="dao-infocard-container" :class="containerType">
      <div class="dao-card-header" @click="isShow=!isShow">
          <svg class="icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" v-bind:xlink:href="arrowDirect">
            </use>
          </svg>
          <div class="title">
           {{title}}
          </div>
      </div>
      <template v-if="isShow">
        <div class="dao-infocard-main"  v-if="type==='a'">
          <ul v-for="values in datavalue">
            <li class="dao-key-value" v-for="(value,key,index) in values">
              <div class="key">{{key}}:</div>
              <div class="value">
                <span v-show="config.opendot && config.opendotindex==index" class="dot open"></span>
                <span v-show="config.closedot && config.closedotindex==index" class="dot close"></span>
                {{value}}
              </div>
            </li>    
          </ul>
        </div>
        <div class="dao-infocard-main"  v-else-if="type==='b'">
          <div class="dao-table-wrapper">
            <table>
              <thead>
                <tr>
                  <th v-for=" attr in datavalue.header" >{{attr}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in datavalue.body">
                <td v-for="value in item">{{value}}</td>
                </tr>
              </tbody>  
            </table>
          </div>
        </div>
        <div class="dao-infocard-main" v-else-if="type==='c'">
          <ul v-for="values in datavalue.keyvalue">
            <li class="dao-key-value" v-for="(value,key,index) in values">
              <div class="key">{{key}}:</div>
              <div class="value">
                <span v-show="config.opendot && config.opendotindex==index" class="dot open"></span>
                <span v-show="config.closedot && config.closedotindex==index" class="dot close"></span>
                {{value}}
              </div>
            </li>    
          </ul>
          <div class="dao-table-wrapper">
            <table>
              <thead>
                <tr>
                  <th v-for=" attr in datavalue.header" >{{attr}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in datavalue.body">
                  <td v-for="(value,index) in item">
                    {{value}}
                  </td>
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
        default: 'small'
      },
      type: {
        type: String
      },
      title: {
        type: String
      },
      datavalue: {   
      },
      config:{
        type: Object,
        default: function() {
          return {
            opendot: false,
            opendotindex: 0,
            closedot: false,
            closedotindex: 1
          }
        }
      }
    },
    computed: {
      containerType() {
         return 'size-'+this.size;
      },
      arrowDirect() {
        if(this.isShow){
          return '#icon_down-arrow';
        }else{
          return '#icon_triangle-right';
        }
      }
    }
  }
</script>
<style scoped lang="scss" src="./dao-info-card.scss"></style>