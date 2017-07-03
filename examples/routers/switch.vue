<template>
  <div>
    <h1>DaoSwitch</h1>
    <br>

    <div class="demo-block">
      <h2 class="demo-block__title">基本用法</h2>
      <dao-tab direction="right" >
        <dao-tab-item heading="模板">
          <div class="demo-tab-wrap first">
            <dao-switch :option="{ on: '是', off: '否' }"
                        :with-notice="true"
                        v-model="normalExample.isChecked">
            </dao-switch>

            <br />

            <span>isChecked: {{ normalExample.isChecked }}</span>
          </div>
        </dao-tab-item>
        <dao-tab-item heading="代码">
          <div class="demo-tab-wrap">
            <pre class="codeblock">
              {{ normalExample.jsCode }}
            </pre>
          </div>
        </dao-tab-item>
      </dao-tab>
    </div>

    <div class="demo-block">
      <h2 class="demo-block__title">不可编辑</h2>
      <dao-tab direction="right" >
        <dao-tab-item heading="模板">
          <div class="demo-tab-wrap first">
            <dao-switch :option="{ on: '是', off: '否' }"
                        :with-notice="true"
                        :value="readOnlyExample.isChecked">
            </dao-switch>

            <br />

            <span>isChecked: {{ readOnlyExample.isChecked }}</span>
          </div>
        </dao-tab-item>
        <dao-tab-item heading="代码">
          <div class="demo-tab-wrap">
            <pre class="codeblock">
              {{ readOnlyExample.jsCode }}
            </pre>
          </div>
        </dao-tab-item>
      </dao-tab>
    </div>

    <div class="demo-block">
      <h2 class="demo-block__title">禁用</h2>
      <dao-tab direction="right" >
        <dao-tab-item heading="模板">
          <div class="demo-tab-wrap first">
            <dao-switch :option="{ on: '是', off: '否' }"
                        :with-notice="true"
                        :disabled="true"
                        :value="readOnlyExample.isChecked">
            </dao-switch>

            <br />

            <span>isChecked: {{ readOnlyExample.isChecked }}</span>
          </div>
        </dao-tab-item>
        <dao-tab-item heading="代码">
          <div class="demo-tab-wrap">
            <pre class="codeblock">
              {{ readOnlyExample.jsCode }}
            </pre>
          </div>
        </dao-tab-item>
      </dao-tab>
    </div>



    <div class="demo-block">
      <h2 class="demo-block__title">纯按钮 (没有文字提示)</h2>
      <dao-tab direction="right" >
        <dao-tab-item heading="模板">
          <div class="demo-tab-wrap first">
            <dao-switch :option="{ on: '是', off: '否' }"
                        v-model="withoutNoticeExample.isChecked">
            </dao-switch>

            <br />

            <span>isChecked: {{ withoutNoticeExample.isChecked }}</span>
          </div>
        </dao-tab-item>
        <dao-tab-item heading="代码">
          <div class="demo-tab-wrap">
            <pre class="codeblock">
              {{ withoutNoticeExample.jsCode }}
            </pre>
          </div>
        </dao-tab-item>
      </dao-tab>
    </div>

    <div class="demo-block">
      <h2 class="demo-block__title">超宽按钮</h2>
      <dao-tab direction="right" >
        <dao-tab-item heading="模板">
          <div class="demo-tab-wrap first">
            <dao-switch :option="{ on: '是', off: '否' }"
                        :with-notice="true"
                        :core-width="superWideExample.coreWidth"
                        v-model="superWideExample.isChecked">
            </dao-switch>

            <br />

            <p>isChecked: {{ superWideExample.isChecked }}</p>
            <p>width: <input type="number" v-model.number="superWideExample.coreWidth"></p>
          </div>
        </dao-tab-item>
        <dao-tab-item heading="代码">
          <div class="demo-tab-wrap">
            <pre class="codeblock">
              {{ superWideExample.jsCode }}
            </pre>
          </div>
        </dao-tab-item>
      </dao-tab>
    </div>

    <div class="demo-block">
      <h2 class="demo-block__title">事件通知</h2>
      <dao-tab direction="right" >
        <dao-tab-item heading="模板">
          <div class="demo-tab-wrap first">
            <dao-switch :option="{ on: '是', off: '否' }"
                        :with-notice="true"
                        @change="onChange"
                        v-model="eventExample.isChecked">
            </dao-switch>

            <br />

            <span>isChecked: {{ eventExample.isChecked }}</span>
          </div>
        </dao-tab-item>
        <dao-tab-item heading="代码">
          <div class="demo-tab-wrap">
            <pre class="codeblock">
              {{ eventExample.jsCode }}
            </pre>
          </div>
        </dao-tab-item>
      </dao-tab>
    </div>



  </div>

</template>

<script>

const normalExample = {
  isChecked: false,
  jsCode: `
    <dao-switch :option="{ on: '是', off: '否' }"
                :with-notice="true"
                v-model="isChecked">
    </dao-switch>

    const isChecked = true;
  `,
};

const readOnlyExample = {
  isChecked: false,
  jsCode: `
    <dao-switch :option="{ on: '是', off: '否' }"
                :with-notice="true"
                :value="isChecked">
    </dao-switch>

    const isChecked = true;
  `,
};

const withoutNoticeExample = {
  isChecked: false,
  jsCode: `
    <dao-switch :option="{ on: '是', off: '否' }"
                :with-notice="true"
                v-model="isChecked">
    </dao-switch>

    const isChecked = true;
  `,
};

const superWideExample = {
  isChecked: false,
  coreWidth: 100,
  jsCode: `
    <dao-switch :option="{ on: '是', off: '否' }"
                :with-notice="true"
                :core-width="100"
                v-model="isChecked">
    </dao-switch>

    const isChecked = true;
  `,
};

const eventExample = {
  isChecked: false,
  jsCode: `
    <dao-switch :option="{ on: '是', off: '否' }"
                :with-notice="true"
                @change="onChange"
                v-model="isChecked">
    </dao-switch>

    const isChecked = true;

    function onChange(data) {
      alert(data);
    }
  `,
};

export default {
  data() {
    return {
      normalExample,
      readOnlyExample,
      withoutNoticeExample,
      superWideExample,
      eventExample,
    };
  },

  methods: {
    onChange(data) {
      alert(data);
    },
  },
};
</script>

<style lang="scss" scoped>
  pre.codeblock {
    background-color: #060606;
    color: #0dbf0d;
  }
  .demo-block {
    margin-bottom: 100px;
  }
</style>
