<template>
<div>
  <dao-info-card size="small" type="a" :datavalue="keyvalue">
    <div slot="title">
      TEXT
    </div>
  </dao-info-card>
  <br>
  <dao-info-card size="small"  type="a" :datavalue="keyvalue1">
    <div slot="title">
      TEXT
    </div>
  </dao-info-card>
  <br>
  <dao-info-card size="small"  type="a" :datavalue="keyvalue2" :config="config[0]">
    <div slot="title">
      TEXT
    </div>
  </dao-info-card>
  <br>
  <dao-info-card size="small"  type="b" :datavalue="tablevalue">
    <div slot="title">
      TEXT
    </div>
  </dao-info-card>
  <br>
  <dao-info-card size="small"  type="b" :datavalue="tablevalue4">
    <div slot="title">
      TEXT
    </div>
  </dao-info-card>
  <br>
  <dao-info-card size="small"  type="b" :datavalue="tablevalue1">
    <div slot="title">
      TEXT
    </div>
  </dao-info-card>
  <br>
  <dao-info-card size="big"  type="b" :datavalue="tablevalue2">
    <div slot="title">
      TEXT
    </div>
  </dao-info-card>
  <br>
  <dao-info-card size="small"  type="c" :datavalue="tablevalue3" :config="config[1]">
    <div slot="title">
      TEXT
    </div>
  </dao-info-card>
  <br>
  <dao-info-card size="big"  type="c" :datavalue="tablevalue3" :config="config[1]">
    <div slot="title">
      TEXT
    </div>
  </dao-info-card>
</div>
</template>
<script>
export default {
  data() {
    return {
      config: [{
        openDot: true,
        openDotIndex: 0,
        closeDot: true,
        closeDotIndex: 1,
      }, {
        openDot: true,
        openDotIndex: 0,
        closeDot: false,
        closeDotIndex: 0,
      }],
      keyvalue: [{
        DNS服务器: '8.8.8.8',
        DNS选项: 'timeout:3',
        DNS搜索: 'tdc1.company.com',
      }],
      keyvalue1: [{
        cpu限制: '5核',
        内存限制: '1000MB',
      }, {
        cpu预留: '1核',
        内存预留: '不预留',
      }],
      keyvalue2: [{
        高可用: '启用',
        仅在错误时重启: '关闭',
        最大尝试次数: '0次',
        重启间隔: '0秒',
        重试时间窗口: '0秒',
      }],
      tablevalue: {
        header: [
          '容器端口号',
          '本地端口号',
          '协议',
        ],
        body: [{
          dockernumber: 10080,
          localnumber: 10080,
          protocol: 'TCP',
        }, {
          dockernumber: 10080,
          localnumber: 10080,
          protocol: 'TCP',
        }],
      },
      tablevalue1: {
        header: [
          '域名',
          'IP地址',
        ],
        body: [{
          domain: 'localhost',
          address: '127.0.0.1',
        }, {
          domain: 'node01',
          address: '10.9.83.28',
        }, {
          domain: 'node02',
          address: '10.9.163.79',
        }],
      },
      tablevalue2: {
        header: [
          '容器路径',
          '本地路径',
          '权限',
        ],
        body: [{
          dockerpath: '/var/run/docker.sock',
          localpath: '/var/run/docker.sock',
          power: '可写',
        }],
      },
      tablevalue3: {
        keyvalue: [{
          负载均衡: '启用',
          负载均衡模式: 'IPVS',
        }],
        header: [
          '容器端口',
          '负载均衡端口',
          '协议',
        ],
        body: [{
          dockernumber: 80,
          balancenumber: 10080,
          protocol: 'TCP',
        }, {
          dockernumber: 8080,
          balancenumber: 18080,
          protocol: 'TCP',
        }],
      },
      tablevalue4: {
        header: [
          '监控指标',
          '监控对象',
          '当前用量',
          '阈值',
        ],
        body: [{
          goal: '每秒请求数',
          watchobj: 'test',
          number: 500,
          tnumber: 20000,
        }],
      },
    };
  },
};
</script>
