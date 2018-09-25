<template>
  <div class="demo3">
    <div class="show-block">
      <button class="dao-btn btn-sm blue" @click.stop="changeTab">go to 配置 </button>
      <span>当前 tab：{{currentTab}}</span>
    </div>
    <dao-tab :currentTab.sync="currentTab">
      <dao-tab-item heading="介绍">
        <h1>功能介绍</h1>
        <p>
          通过监控和分析客户的点击流、交易数据、信息安全事件和网络活动，帮助您获得机器生成数据中富有价值的运维智能。通过强有力的全面搜索，可视化和预打包的用户案例内容，任何用户都可以快速发现并且分享见解。
        </p>
        <p>
          仅需点击您的原始数据，即可开始分析您想分析的内容。 收集来自任何来源日志以及机器数据并为其建立索引 强有力的搜索、分析和可视化能力可以为各种类型的用户提供支持 应用为信息安全、IT 运营、业务分析等方面提供解决方案 可以查看本地、云和混合环境 提供适合任意组织的扩展、信息安全以及可用性。
        </p>
      </dao-tab-item>
      <dao-tab-item heading="配置">
        <dao-info-card
          class="info-card"
          size="lg"
          :keyValue="keyvalue">
          <div slot="title">
            配置1
          </div>
        </dao-info-card>
        <dao-info-card
          size="lg"
          :keyValue="keyvalue1">
          <div slot="title">
            配置2
          </div>
        </dao-info-card>
      </dao-tab-item>
      <dao-tab-item heading="设置">
        <div class="input-item">
          <label>姓名</label>
          <dao-input
            v-model="editValue.name"
            placeholder="请输入姓名">
          </dao-input>
        </div>
        <div class="input-item">
          <label>密码</label>
          <dao-input
            v-model="editValue.password"
            type="password"
            placeholder="请输入密码">
          </dao-input>
        </div>
        <button class="dao-btn blue">保存</button>
      </dao-tab-item>
    </dao-tab>
  </div>
</template>
<script>
export default {
  name: 'Demo3',
  data() {
    return {
      currentTab: '',
      keyvalue: [{
        DNS服务器: '8.8.8.8',
        DNS选项: 'timeout:3',
        DNS搜索: 'tdc1.company.com',
      }],
      keyvalue1: [{
        cpu限制: '5核5核5核5核5核5核5核5核5核5核5核',
        内存限制: '1000MB',
      }, {
        cpu预留: '1核',
        内存预留: '不预留',
      }],
      editValue: {
        name: null,
        password: null,
      },
    };
  },
  methods: {
    changeTab() {
      this.currentTab = '配置';
    },
  },
};
</script>
<style lang="scss" scoped>
.demo3 {
  .show-block {
    margin-bottom: 20px;
    .dao-btn {
      margin-right: 10px;
    }
  }
  h1 {
    text-align: center;
    margin-bottom: 10px;
  }
  .input-item,
  .info-card {
    margin-bottom: 20px;
  }
}
</style>
