<template>
  <div>
    <div class="demo-title">
      <p>* 支持异步数据</p>
      <p>* 支持输入补全</p>
      <p>* 支持关闭，禁用</p>
      <p>* 支持定制操作符(默认仅操作符 ' : ')</p>
    </div>
    <div class="demo-container">
      <h2>1.基础</h2>
      <dao-input-with-label 
        v-model="testVal"
        style="width: 500px"  
        placeholder="init placeholder"
        :config="config"
        :options="options"
        >
      </dao-input-with-label>
      v-model: {{testVal}}
    </div>
    <div class="demo-container">
      <h2>2.禁用输入</h2>
      <dao-input-with-label 
        v-model="testVal"
        style="width: 500px"  
        placeholder="init placeholder"
        :config="config"
        :options="options"
        :disabled="true"
        >
      </dao-input-with-label>
    </div>
    <div class="demo-container">
      <h2>3.禁用重置</h2>
      <dao-input-with-label 
        v-model="testVal"
        style="width: 500px"  
        placeholder="init placeholder"
        :config="{canReset: false}"
        :options="options"
        >
      </dao-input-with-label>
    </div>
    <div class="demo-container">
      <h2>4.不限制宽度</h2>
      <dao-input-with-label 
        v-model="testVal"
        placeholder="init placeholder"
        :config="config"
        :options="options"
        >
      </dao-input-with-label>
    </div>
    <div class="demo-container">
      <h2>5.多个操作符</h2>
      <dao-input-with-label 
        v-model="testVal"
        style="width: 500px"
        placeholder="init placeholder"
        :options="options2"
        >
      </dao-input-with-label>
    </div>
    <div class="demo-container">
      <h2>6.异步数据</h2>
      <dao-input-with-label 
        v-model="testVal6"
        style="width: 500px"
        placeholder="test asyn"
        :config="config"
        @change="testchange6()"
        :options="options6"
        >
      </dao-input-with-label>
    </div>
     <div class="demo-title">
      <p>* 输入 'change' 即可命中异步改变参数的流程</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        testVal: 'aaa bbz:200',
        testVal6: '',
        config: {
          canReset: true,
          shutDown: false,
        },
        options: [
          {
            tab_name: '标签',
            keys: [
              {
                val: 'location',
                vals: [
                  {
                     val: 'location1',
                  },
                  {
                     val: 'location2',
                  },
                ],
              },
            ],
          },
          {
            tab_name: '属性',
            keys: [
              {
                name: '节点类型',
                val: 'node_type',
                vals: [
                  {
                     name: '控制',
                     val: 'ctrl',
                  },
                  {
                     name: '普通',
                     val: 'normal',
                  },
                ],
              },
              {
                name: '操作系统',
                val: 'system',
                vals: [
                  {
                     val: 'window',
                  },
                  {
                     val: 'linux',
                  },
                ],
              },
              {
                name: '状态',
                val: 'state',
                vals: [
                  {
                     val: 'fail',
                  },
                  {
                     val: 'success',
                  },
                ],
              },
              {
                name: '维护模式',
                val: 'state2',
                vals: [
                  {
                     val: 'fail2',
                  },
                  {
                     val: 'success2',
                  },
                ],
              },
              {
                name: 'NTP 一致性',
                val: 'state3',
                vals: [
                  {
                     val: 'fail',
                  },
                  {
                     val: 'success',
                  },
                ],
              },
            ],
          },
        ],
        options2: [
          {
            tab_name: '标签',
            keys: [
              {
                name: '节点类型',
                val: 'node_type',
                operations: [':', '>', '>=', '<=' , '!='],
                vals: [
                  {
                     name: '控制节点',
                     val: 'ctrl_node',
                  },
                  {
                     name: '普通节点',
                     val: 'normal_node',
                  },
                ],
              },
            ],
          },
          {
            tab_name: '标签2',
            keys: [
              {
                name: '节点类型2',
                val: 'node_type2',
                vals: [
                  {
                     name: '控制节点2',
                     val: 'ctrl_node2',
                  },
                  {
                     name: '普通节点2',
                     val: 'normal_node2',
                  },
                ],
              },
            ],
          },
        ],
        options6: [
          {
            tab_name: '标签KKKK',
            keys: [
              {
                name: 'changed',
                val: 'changed',
                vals: [
                  {
                     name: '控制节点',
                     val: 'ctrl_node',
                  },
                ],
              },
            ],
          },
        ],
      };
    },
    methods: {
      testchange6() {
        console.log('model change', this.testVal6);
        if (this.testVal6.indexOf('change') > -1) {
          setTimeout(() => {
            this.options6 = JSON.parse(JSON.stringify(this.options));
          }, 100);
        }
      }
    },
  };
</script>
<style lang="scss" scoped>
.demo-title{
    margin-bottom: 20px;
    p{
      margin: 4px 0;
    }
  }
.demo-container {
  margin-bottom: 40px;
}
</style>
