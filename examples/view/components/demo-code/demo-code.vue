<template>
  <div class="demo-code">
    <div class="demo">
      <slot name="demo"></slot>
    </div>
    <div class="code">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DemoCode',
};

</script>

<style lang="scss">
.demo-code{
  display: flex;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  .demo, .code{
    width: 50%;
  }
  .code{
  }
  .demo{
    padding: 20px;
  }
}
</style>
