<template>
  <div>
    <div>
      <div class="drag-item" v-dao-draggable>Dragger 1</div>
      <div class="drag-item" v-dao-draggable>Dragger 2</div>
      111
      <div class="drag-item" v-dao-draggable>
        <svg class="icon">
          <use xlink:href="#icon_trash"></use>
        </svg>
      </div>
    </div>
    <div>
      <div class="drag-item" v-dao-draggable>Dragger 3</div>
      <div class="drag-item" id="item4" v-dao-draggable v-show="show">Dragger 4</div>
    </div>
    <button class="dao-btn blue" @click="show = !show">Toggle Dragger 4</button>
  </div>
</template>
<script>
export default {
  name: 'draggable',
  data() {
    return {
      show: false,
    };
  },
}
</script>
<style lang="scss">
.drag-item {
  &:hover {
    cursor: move;
  }
  display: inline-block;
  padding: 5px;
  box-shadow: 0 0 12px 2px rgba(0,0,0,0.1);
  cursor: move;
  border-radius: 4px;
  border: 1px solid #eee;
  margin: 5px;
}
</style>

