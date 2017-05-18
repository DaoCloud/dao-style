<template>
  <div>
    input(只能使用纯样式写法):
    <br>
    <input class="dao-control" type="text" placeholder="使用纯样式" v-model="text" v-dao-select-all>
    <br><br><br>
    <hr>
    <br><br>
    textarea:
    <br>
    <textarea cols="100" rows="5" v-dao-select-all>
      点击文本框，这里的文字将会被全选
    </textarea>
    <br><br><br>
    <hr>
    <br><br>
    div:
    <br>
    <div style="border: 1px solid #000;" v-dao-select-all>
      点击该 div，这里的文字将会被全选<br>
      点击该 div，这里的文字将会被全选<br>
      点击该 div，这里的文字将会被全选
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: '点击该 input，这里的文字将会被全选',
    };
  },
};
</script>
