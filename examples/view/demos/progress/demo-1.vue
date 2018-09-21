<template>
  <div style="width:400px">
    <span>0%</span>
    <dao-progress type="usage" :progress="0.0"></dao-progress>
    <span>25%</span>
    <dao-progress type="usage" :progress="0.25"></dao-progress>
    <span>50%</span>
    <dao-progress type="usage" :progress="0.50"></dao-progress>
    <span>75%</span>
    <dao-progress type="usage" :progress="0.75"></dao-progress>
    <span>90%</span>
    <dao-progress type="basic" :progress="0.90"></dao-progress>
    <span>错误</span>
    <dao-progress type="error"></dao-progress>
  </div>
</template>