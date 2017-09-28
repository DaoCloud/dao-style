<template>
  <div class="dao-infocard-container" :class="containerType">
      <div class="dao-card-header" @click="isShow=!isShow">
         <svg class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_down-arrow">
              </use>
         </svg>
         <div class="title">
         {{title}}
         </div>
      </div>
      <div class="dao-infocard-main" v-show="isShow" v-if="type==='a'">
        <ul v-for="values in datavalue">
          <li class="dao-key-value" v-for="(value,key) in values">
          <div class="key">{{key}}:</div>
          <div class="value">{{value}}</div>
          </li>    
        </ul>
      </div>
      <div class="dao-infocard-main" v-show="isShow" v-else-if="type==='b'">
        <div class="dao-table-wrapper">
         <table>
            <thead>
               <tr >
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
      <div class="dao-infocard-main" v-show="isShow" v-else-if="type==='c'">
        <ul v-for="values in datavalue.keyvalue">
          <li class="dao-key-value" v-for="(value,key) in values">
          <div class="key">{{key}}:</div>
          <div class="value">{{value}}</div>
          </li>    
        </ul>
        <div class="dao-table-wrapper">
         <table>
            <thead>
               <tr >
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
      
  </div>
</template>
<script>
  export default {
    name: 'DaoInfoCard',
    data(){
      return {
        isShow:true
      }
    },
    props: {
      size:{
        type:String,
        default:'small'
      },
      type:{
        type:String
      },
      title:{
        type:String
      },
      datavalue:{
        
      }
    },
    computed: {
      containerType(){
         return 'size-'+this.size;
      }
    },
    methods: {
      
    },
  };
</script>
<style scoped lang="scss" src="./dao-info-card.scss"></style>