<template>
  <div>
    <div class="demo-container">
      <h2>1.基础</h2>
      <dao-input-with-label 
        v-model="testVal1"
        placeholder="init placeholder"
        :config="config"
        :options="options">
      </dao-input-with-label>
      v-model: {{testVal1}}
    </div>
    <div class="demo-container">
      <h2>2.自动聚焦</h2>
      <dao-input-with-label 
        v-model="testVal2"
        placeholder="init placeholder"
        :config="config"
        autofocus
        :options="options">
      </dao-input-with-label>
    </div>
    <div class="demo-container">
      <h2>3.禁用</h2>
      <dao-input-with-label 
        v-model="testVal3"
        placeholder="init placeholder"
        :config="config"
        :options="options"
        disabled>
      </dao-input-with-label>
    </div>
    <div class="demo-container">
      <h2>4.shutDown</h2>
      <dao-input-with-label 
        v-model="testVal4"
        placeholder="init placeholder"
        :config="{shutDown: true}"
        :options="options">
      </dao-input-with-label>
    </div>
    <div class="demo-container">
      <h2>5.不限制宽度</h2>
      <dao-input-with-label 
        v-model="testVal5"
        placeholder="init placeholder"
        block
        :config="config"
        :options="options"
        >
      </dao-input-with-label>
    </div>
    <div class="demo-container">
      <h2>6.多个操作符</h2>
      <dao-input-with-label 
        v-model="testVal6"
        placeholder="init placeholder"
        :options="options6"
        >
      </dao-input-with-label>
    </div>
    <div class="demo-container">
      <h2>7.异步数据</h2>
      <dao-input-with-label 
        v-model="testVal7"
        placeholder="type 'change'"
        :config="config"
        @change="testchange6()"
        :options="options7"
        >
      </dao-input-with-label>
    </div>
    <div class="demo-container">
      <h2>8.超长的数据,并且没有tabName</h2>
      <dao-input-with-label 
        v-model="testVal8"
        :config="config"
        :options="options8"
        >
      </dao-input-with-label>
    </div>
    <div style="margin-top: 300px;"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        testVal1: 'aaa bbz:200',
        testVal2: '',
        testVal3: '',
        testVal4: '',
        testVal5: '',
        testVal6: '',
        testVal7: '',
        testVal8: '',
        config: {
          shutDown: false,
        },
        options: [
          {
            tabName: '标签',
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
            tabName: '属性',
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
        options6: [
          {
            tabName: '标签',
            keys: [
              {
                name: '节点类型',
                val: 'node_type',
                operations: [':', '>', '>=', '<=', '!='],
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
            tabName: '标签2',
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
        options7: [
          {
            tabName: '标签KKKK',
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
        options8: [
          {
            keys: [
              {
                name: '1超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据',
                val: '1changed',
                operations: [':', '>', '>=', '<=', '!='],
                vals: [
                  {
                    name: '1超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据',
                    val: '1ctrl_node',
                  },
                ],
              },
              {
                name: '2超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据',
                val: '2changed',
                vals: [
                  {
                    name: '2超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据',
                    val: '2ctrl_node',
                  },
                ],
              },
            ],
          },
        ],
        cpOptions7: [],
      };
    },
    created() {
      this.cpOptions7 = JSON.parse(JSON.stringify(this.options7));
    },
    methods: {
      testchange6() {
        this.options7 = JSON.parse(JSON.stringify(this.cpOptions7));
        console.log('model change', this.testVal7);
        if (this.testVal7.indexOf('change') > -1) {
          setTimeout(() => {
            this.options7 = JSON.parse(JSON.stringify(this.options));
          }, 100);
        }
      },
    },
  };
</script>
<style lang="scss" scoped>
.demo-container {
  margin-bottom: 40px;
}
</style>
