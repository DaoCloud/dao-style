<template>
  <div>
    <h1>Clipboard</h1>
    <br>


    <div class="demo-block">
      <h2 class="demo-block__title"> 使用按钮的形式 </h2>
      <dao-tab direction="right" >
        <dao-tab-item heading="模板">
          <div class="demo-tab-wrap first">
            <div class="dao-btn blue"
                 is="dao-clipboard"
                 caption="Click here to copy"
                 content="<span>content to copy</span>"
                 :on-success="greeting">
             </div>
          </div>
        </dao-tab-item>
        <dao-tab-item heading="JavaScript">
          <div class="demo-tab-wrap">
            <pre class="codeblock">
              export default {
                name: 'ClipboardRouter',
                methods: {
                  greeting: function() {
                    alert('content copied');
                  }
                }
              }
            </pre>
          </div>
        </dao-tab-item>
      </dao-tab>
      <h2> Copy Block without button </h2>
      <br>
      <dao-copy-block :with-btn="false">asjdahkdjagsd
      jahgsdjgajsgdagjs</dao-copy-block>
      <br>
      <br>
      <h2> Copy Block with button </h2>
      <br>
      <dao-copy-block>asjdahkdjagsdjah {{ text }} gsdjgajsgdagjs</dao-copy-block>
      <button class="dao-btn ghost" @click="text = `${Math.random()}`">change</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ClipboardRouter',
    data() {
      return {
        text: 'mimo',
      };
    },
    methods: {
      greeting() {
        alert('content copied');
      },
    },
  };
</script>

<style lang="scss" scoped>
  pre.codeblock {
    background-color: #060606;
    color: #0dbf0d;
  }
</style>
