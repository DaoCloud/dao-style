<template>
  <dao-setting-section>
    <dao-setting-item>
      <div slot="label">
        姓名
      </div>
      <template slot="content">
        <dao-input v-model="name"> </dao-input>
      </template>
    </dao-setting-item>
    <dao-setting-item>
      <div slot="label">
        年龄
      </div>
      <template slot="content">
        <dao-input v-model="age"> </dao-input>
      </template>
    </dao-setting-item>
    <dao-setting-item>
      <div slot="label">
        电话
      </div>
      <template slot="content">
        <dao-input v-model="phone"> </dao-input>
      </template>
    </dao-setting-item>
    <dao-setting-item>
      <div slot="label">
        地址
      </div>
      <template slot="content">
        <dao-input v-model="addr"> </dao-input>
      </template>
    </dao-setting-item>
  </dao-setting-section>
</template>

<script>
export default {
  name: 'DialogDemoForm',
  data() {
    return {
      name: '',
      age: '',
      phone: '',
      addr: '',
    };
  },
};
</script>
