<template>
  <div>
    <dao-setting-layout v-for="(demo, index) in demos" :key="index">
      <div slot="layout-title">{{demo.desc}}</div>
      <dao-setting-section>
        <template  v-if="demo.showbtn">
          <div slot="section-title">
            允许通过编程的方式切换 tab 
            <br>
            currentTab: {{demo.currentTab}}
          </div>
          <br><br>
            <button class="dao-btn blue" @click="demo.currentTab = 'heading3'"> go to heading3</button>
          <br><br>
        </template>
        <dao-tab 
          :currentTab.sync="demo.currentTab"
          :direction="demo.direction" @changeTab="onChangeTab">
          <dao-tab-item  
            v-for="(tab, index) in demo.tabs" :key="index"
            :heading="tab.heading">
            <h2>{{tab.content}}</h2>
          </dao-tab-item>
        </dao-tab>
      </dao-setting-section>
    </dao-setting-layout>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        demos: [
          {
            desc: 'direction: left',
            tabs: [{
              heading: 'heading1',
              content: 'content1',
            }, {
              heading: 'heading2',
              content: 'content2',
            }, {
              heading: 'heading3',
              content: 'content3',
            }],
            direction: 'left',
          },
          {
            desc: 'direction: right',
            tabs: [{
              heading: 'heading1',
              content: 'content1',
            }, {
              heading: 'heading2',
              content: 'content2',
            }, {
              heading: 'heading3',
              content: 'content3',
            }],
            direction: 'right',
          },
          {
            desc: 'currentTab: heading2',
            currentTab: 'heading2',
            showbtn: true,
            tabs: [{
              heading: 'heading1',
              content: 'content1',
            }, {
              heading: 'heading2',
              content: 'content2',
            }, {
              heading: 'heading3',
              content: 'content3',
            }],
            direction: 'left',
          },
        ],
      };
    },
    methods: {
      onChangeTab(tab) {
        console.log(`changeTab to ${tab}`);
      },
    },
  };
</script>

<style lang="scss" scoped>
.helper{
  padding: 10px;
}
</style>