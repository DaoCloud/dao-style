<template>
  <div>
    <h1>simple select</h1>
    <br><hr><br>
    <dao-select v-model="simple" placeholder="一个简单下拉框" no-data-text="无选项">
      <dao-option v-for="item in items" :value="item.value" :label="item.text"></dao-option>
    </dao-select>
    <br>
    <button class="dao-btn blue" @click="changeSimple">change simple</button>

    <br><br>
    <h2>small select</h2>
    <br><hr style="border-style: dashed;"><br>
    <dao-select v-model="small" placeholder="一个小型下拉框" size="sm">
      <dao-option :value="1">option1</dao-option>
      <dao-option :value="2">option2</dao-option>
      <dao-option :value="3">option3</dao-option>
      <dao-option :value="4">option4</dao-option>
    </dao-select>
    <br>
    <h1>select with search</h1>
    <br><hr><br>

    <dao-select v-model="search" placeholder="带搜索下拉框" :with-search="true" search-placeholder="搜索条件在这里" no-data-text="无选项" no-match-text="无匹配选项">
      <dao-option-group label="这是一个标签">
        <dao-option :value="1" label="苹果">1. 苹果</dao-option>
        <dao-option :value="2" label="香蕉">2. 香蕉</dao-option>
      </dao-option-group>
      <dao-option-group label="这是另一个标签">
        <dao-option :value="3" label="梨">3. 梨</dao-option>
      </dao-option-group>
    </dao-select>

    <br>
    <h1>select with button</h1>
    <br><hr><br>

    <dao-select v-model="button" placeholder="带按钮下拉框" :with-btn="true" btn-content="😆你好" @btn-event="buttonEvent">
      <dao-option-group>
        <dao-option :value="1" label="Hello"></dao-option>
        <dao-option :value="2" label="Aloha"></dao-option>
      </dao-option-group>
    </dao-select>

    <br>
    <h1>select with tab</h1>
    <br><hr><br>

    <dao-select v-model="tab" placeholder="带标签下拉框" :with-tab="true">
      <dao-tab direction="left">
        <dao-tab-item heading="标题1">
          <dao-option-group label="111">
            <dao-option :value="1">111_1</dao-option>
            <dao-option :value="2">111_2</dao-option>
            <dao-option :value="3">111_3</dao-option>
          </dao-option-group>
        </dao-tab-item>
        <dao-tab-item heading="标题2">
          <dao-option-group label="222"></dao-option-group>
        </dao-tab-item>
      </dao-tab>
    </dao-select>

    <br>
    <h1>select disabled</h1>
    <br><hr><br>

    <dao-select v-model="disabled" placeholder="禁用的下拉框" :disabled="true">
      <dao-option-group>
        <dao-option :value="1" label="Hello"></dao-option>
      </dao-option-group>
    </dao-select>

    <br>
    <h1>select loading</h1>
    <br><hr><br>

    <dao-select v-model="loading" placeholder="加载中的下拉框" :loading="true" loading-text="加载中的下拉框">
      <dao-option-group>
        <dao-option :value="1" label="Hello"></dao-option>
      </dao-option-group>
    </dao-select>

    <br>
    <h1>select async</h1>
    <br><hr><br>

    <dao-select v-model="asynchronous" placeholder="异步获取数据下拉框" :async="async">
      <dao-option v-for="option in options" :key="option.value" :value="option.value" :label="option.text">{{ option.text }}</dao-option>    
    </dao-select>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        simple: 1,
        small: 1,
        search: undefined,
        button: 2,
        disabled: undefined,
        tab: undefined,
        loading: undefined,
        asynchronous: undefined,
        options: [],
        items: [{
          value: 1,
          text: '选项一',
        }, {
          value: 2,
          text: '选项二',
        }, {
          value: 3,
          text: '选项三',
        }],
      };
    },
    methods: {
      buttonEvent(v) {
        alert(`You click the button\n The value is ${v}`);
      },
      async() {
        const options = [{
          value: 1,
          text: '选项一',
        }, {
          value: 2,
          text: '选项二',
        }, {
          value: 3,
          text: '选项三',
        }];
        const p = new Promise((res, rej) => {
          if (true) {
            setTimeout(() => {
              res(options);
            }, 2000);
          } else {
            rej(0);
          }
        });
        return p.then((res) => {
          this.options = res;
        });
      },
      changeSimple() {
        if (this.simple === 3) {
          this.type = 0;
        } else if (this.simple === 1) {
          this.type = 1;
        }
        if (this.type) {
          this.simple += 1;
        } else {
          this.simple -= 1;
        }
      },
    },
  };
</script>
