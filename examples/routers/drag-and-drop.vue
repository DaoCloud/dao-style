<template>
  <div>
    <h1>directive</h1>
    <div v-dao-droppable.remove="{onChange: onChange, disabled: show}">
      <div class="drag-item" data-key="1" v-dao-draggable="{disabled: show}">Dragger 1</div>
      <div class="drag-item" data-key="2" v-dao-draggable>Dragger 2</div>
      <span>111</span>
      <div class="drag-item" data-key="trash" v-dao-draggable>
        <div>
          <svg class="icon">
            <use xlink:href="#icon_trash"></use>
          </svg>
        </div>
      </div>
    </div>
    <div v-dao-droppable.fixed="{onChange: onChange2}">
      <div class="drag-item" data-key="3" v-dao-draggable>Dragger 3</div>
      <div class="drag-item" id="item4" data-key="4" v-dao-draggable v-show="show">Dragger 4</div>
      <div class="drag-item" data-key="5" v-dao-draggable>Dragger 5</div>
    </div>
    <button class="dao-btn blue" style="position: relative;" @click="show = !show">Toggle Dragger 4</button>
    <br><br>
    <!-- <h1>components</h1>
    <dao-draggable v-model="drags" :no-repeat="true" :remove-when-drag-out="true" draggingClass="green" @change="handleChange"></dao-draggable>
    <dao-draggable v-model="drags2" :no-repeat="true" :no-sort="true" :clone="true" draggingStyle="color: red;" @change="handleChange2"></dao-draggable> -->
  </div>
</template>
<script>
export default {
  name: 'draggable',
  data() {
    return {
      show: false,
      drags: [{
        context: 'component 1',
        draggingStyle: 'opacity: 0.5;',
      }, {
        context: 'component 2',
      }, {
        context: 'component 3',
        disabled: true,
      }, {
        context: 'component 4',
      }, {
        context: 'component 5',
      }, {
        context: 'component 6',
      }],
      drags2: [{
        context: 'component 7',
      }, {
        context: 'component 8',
      }, {
        context: 'component 9',
        draggingClass: 'green',
      }, {
        context: 'component 10',
      }, {
        context: 'component 11',
      }],
    };
  },
  watch: {
    drags() {
      console.log('drags change');
    },
    drags2() {
      console.log('drags2 change');
    },
  },
  methods: {
    onChange(list) {
      console.log('onChange1', list);
    },
    onChange2(list) {
      console.log('onChange2', list);
    },
    handleChange(list) {
      console.log('components change', list);
    },
    handleChange2(list) {
      console.log('components change', list);
    },
  },
};
</script>
<style lang="scss">
.drag-item {
  &:hover {
    cursor: move;
  }
  display: inline-block;
  box-shadow: 0 0 12px 2px rgba(0,0,0,0.1);
  cursor: move;
  border-radius: 4px;
  // border: 1px solid #eee;
  margin: 5px;
}
.green{
  color: green;
}
</style>

