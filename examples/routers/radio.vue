<template>
  <div>
    <h1>simple radio</h1>
    <br><hr><br>    
    <dao-radio-group>
      <dao-radio label="111" v-model="simple">1111</dao-radio>
      <dao-radio label="222" v-model="simple">2222</dao-radio>
    </dao-radio-group>
    <br>
    <h1>block radio</h1>
    <br><hr><br>
    <dao-radio-group type="block">
      <dao-radio label="111" v-model="block" headline="this is a headline" description="this is a description">
        <svg><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
      <dao-radio label="222" v-model="block" headline="this is a headline" description="this is a description">
        <svg><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
    </dao-radio-group>
    <br>
    <h1>grid radio</h1>
    <br><hr><br>
    <dao-radio-group type="grid" :grid-col="5">
      <dao-radio label="111" v-model="grid" headline="this is a headline" description="this is a description">
        <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
      <dao-radio label="222" v-model="grid" headline="this is a headline" description="this is a description">
        <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
      <dao-radio label="333" v-model="grid" headline="this is a headline" description="this is a description">
        <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
      <dao-radio label="444" v-model="grid" headline="this is a headline" description="this is a description">
        <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
    </dao-radio-group>
    <br>
    <h1>card radio</h1>
    <br><hr><br>
    <dao-radio-group name="test" type="card">
      <dao-radio 
        label="111"
        v-model="a"
        headline="this is a test headline" 
        description="this is a description"
        :disabled="true">
        <svg class="radio-icon" slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
      <dao-radio
        label="222"
        v-model="a"
        headline="this is a test headline" 
        description="this is a description">
        <svg class="radio-icon" slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
      <dao-radio
        label="333"
        v-model="a"
        headline="this is a test headline" 
        description="this is a description">
        <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
      <dao-radio
        label="444"
        v-model="a"
        headline="this is a test headline"
        subheadline="this is a subheadline"
        description="this is a description">
        <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
    </dao-radio-group>

    <br>
    <h1>plus radio</h1>
    <br><hr><br>

    <dao-radio-group name="plus" type="plus" :grid-col="4">
      <dao-radio headline="this is headline" v-model="plus" label="苹果1" select-title="请选择" :options="options" @select-change="handleSelectChange">
        <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
      <dao-radio headline="this is headline" v-model="plus" label="苹果2" select-title="请选择" :options="asyncOptions" :async="async">
        <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
      <dao-radio headline="this is headline" v-model="plus" label="苹果3" select-title="请选择">
        <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
      <dao-radio headline="this is headline" v-model="plus" label="苹果4" select-title="请选择" :disabled="true">
        <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
      </dao-radio>
    </dao-radio-group>
  </div>
</template>
<script>
  export default {
    watch: {
      a(v) {
        console.log('This value a is ', v);
      },
    },
    data() {
      return {
        a: 2222,
        simple: undefined,
        block: undefined,
        grid: undefined,
        plus: '苹果2',
        options: [{
          value: 1,
          label: '1111',
        }, {
          value: 2,
          label: '2222',
        }, {
          value: 3,
          label: '3333',
        }],
        asyncOptions: [],
      };
    },
    methods: {
      test(v) {
        console.log('The test value is ', v);
      },
      async() {
        const options = [{
          value: 1,
          label: '1111',
        }, {
          value: 2,
          label: '2222',
        }, {
          value: 3,
          label: '3333',
        }];
        const p = new Promise((res, rej) => {
          if (false) {
            setTimeout(() => {
              res(options);
            }, 2000);
          } else {
            setTimeout(() => {
              rej(0);
            }, 2000);
          }
        });
        return p.then((res) => {
          this.asyncOptions = res;
        });
      },
      handleSelectChange(v) {
        console.log(v);
      },
    },
  };
</script>