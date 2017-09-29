<template>
  <div>
    <div v-dao-droppable="{
      onChange: onChange2
    }">
      <div class="drag-item" data-key="1" v-dao-draggable="{style: 'color: red;'}">Dragger 1</div>
      <div class="drag-item" data-key="2" v-dao-draggable="{disabled: show}">Dragger 2</div>
      111
      <div class="drag-item" data-key="trash" v-dao-draggable>
        <svg class="icon">
          <use xlink:href="#icon_trash"></use>
        </svg>
      </div>
    </div>
    <div v-dao-droppable="{
      onChange,
      disabled: show,
    }">
      <div class="drag-item" data-key="3" v-dao-draggable>Dragger 3</div>
      <div class="drag-item" id="item4" data-key="4" v-dao-draggable v-show="show">Dragger 4</div>
    </div>
    <button class="dao-btn blue" style="position: relative;" @click="show = !show">Toggle Dragger 4</button>
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
  methods: {
    onChange(list) {
      console.log('onChange1', list);
    },
    onChange2(list) {
      console.log('onChange2', list);
    },
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

