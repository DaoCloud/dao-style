<template>
  <dao-tab  class="demo2" direction="right">
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
  </dao-tab>
</template>
<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>
<style lang="scss" scoped>
.demo2 {
  h1 {
    text-align: center;
    margin-bottom: 10px;
  }
  .info-card {
    margin-bottom: 20px;
  }
}
</style>
