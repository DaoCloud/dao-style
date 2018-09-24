<template>
  <div class="demo9">
    <h3>
      普通文件选择框
    </h3>
    <dao-file-input
      v-model="fileValue"
      accept="image/*"
      @change="onFileChange"
      placeholder="请选择文件...">
    </dao-file-input>
    <h3>
      自定义宽度
    </h3>
    <dao-file-input
      v-model="widthFileValue"
      accept="image/*"
      style="width: 287px;"
      @change="onFileChange"
      placeholder="请选择文件...">
    </dao-file-input>
  </div>
</template>
<script>
export default {
  name: 'demo9',
  data() {
    return {
      fileValue: null,
      widthFileValue: null,
    };
  },
  methods: {
    onFileChange(file) {
      console.log('select file:', file);
    },
  },
};
</script>
<style lang="scss" scoped>
.demo9 h3{
  margin: 20px 0 10px;
  &:first-child {
    margin-top: 0;
  }
}
</style>
