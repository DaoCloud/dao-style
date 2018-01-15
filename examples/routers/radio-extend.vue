<template>
  <div>
    <h1>block radio: {{block}}</h1>
    <br><hr><br>
    <app-radio-group name="blockDemo">
      <app-radio-block
        v-for="demo in demos" 
        :key="demo.label"
        :label="demo.label" 
        v-model="block" 
        :headline="demo.title" 
        :disabled="demo.disabled"
        :description="demo.description">
        <svg><use xlink:href="#color-icon_apple"></use></svg>
      </app-radio-block>
    </app-radio-group>
    <br>
    <h1>grid radio:{{grid}}</h1>
    <br><hr><br>

    <app-radio-group>
      <app-card-layout>
        <app-card-col v-for="demo in demos"  :key="demo.label">
          <app-radio-card 
            type="img-top"
            :label="demo.label" 
            v-model="grid" 
            :headline="demo.headline"
            :disabled="demo.disabled"
            :description="demo.description">
            <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
          </app-radio-card>
        </app-card-col>
      </app-card-layout>
    </app-radio-group>
    <br>
    <h1>card radio:{{card}}</h1>
    <br><hr><br>
    <app-radio-group>
      <app-card-layout>
        <app-card-col v-for="demo in demos"  :key="demo.label">
          <app-radio-card 
            type="img-left"
            :label="demo.label" 
            v-model="card" 
            :headline="demo.headline"
            :disabled="demo.disabled"
            :description="demo.description">
            <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
          </app-radio-card>
        </app-card-col>
      </app-card-layout>
    </app-radio-group>
    <br>
    <br>

    <h1>plus radio: {{plus}}</h1>
    <br><hr><br>

    <dao-radio-group>
      <app-card-layout>
        <app-card-col>
          <app-radio-plus headline="this is headline" v-model="plus" label="苹果1" select-title="请选择" :options="options" @select-change="handleSelectChange">
            <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
          </app-radio-plus>
        </app-card-col>
        <app-card-col>
          <app-radio-plus headline="this is headline" v-model="plus" label="苹果2" select-title="请选择" :options="asyncOptions" :async="async" @select-change="handleSelectChange">
            <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
          </app-radio-plus>
        </app-card-col>
        <app-card-col>
          <app-radio-plus headline="this is headline" v-model="plus" label="苹果3" select-title="请选择" @select-change="handleSelectChange">
            <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
          </app-radio-plus>
        </app-card-col>
        <app-card-col>
          <app-radio-plus headline="this is headline" v-model="plus" label="苹果4" select-title="请选择" :disabled="true">
            <svg slot="icon"><use xlink:href="#color-icon_apple"></use></svg>
          </app-radio-plus>
        </app-card-col>
      </app-card-layout>
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
        block: 'item-2',
        grid: 'item-2',
        card: 'item-2',
        plus: {
          value: '苹果1',
          select: 2,
        },
        demos: [],
        options: [{
          value: 1,
          label: '苹果1',
        }, {
          value: 2,
          label: '苹果2',
        }, {
          value: 3,
          label: '苹果3',
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
          if (true) {
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
      handleSelectChange() {
        console.log('SelectChange');
      },
    },
    created() {
      const demos = [];
      Array.from((new Array(5))).forEach((item, index) => {
        const disabled = index === 3;
        demos.push({
          label: `item-${index + 1}`,
          title: !disabled ? 'this is title' : 'disabled',
          headline: !disabled ? 'this is sub-title' : 'disabled',
          description: !disabled ? 'this is title' : 'disabled',
          disabled,
        });
      });
      this.demos = demos;
    },
  };
</script>