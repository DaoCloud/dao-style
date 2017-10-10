<template>
  <div @dragleave="handleItemDragOut"
    @dragenter.self="handleItemDragIn"
    @dragover="handleDragOver">
    <span class="drag-item" 
      v-for="item in items"
      :key="item.context"
      v-html="item.context"
      :value="item"
      :draggable="!item.disabled && !disabled"
      :class="[item.class, item.extraClass, 'dao-draggable-item']"
      :style="`${item.style || ''}${item.extraStyle || ''}`"
      @dragstart="handleDragStart(item, $event)"
      @dragenter.self="handleDragEnter(item, $event)"
      @dragend="handleDragEnd(item, $event)">
    </span>
  </div>
</template>
<script>
import { isEqual, cloneDeep } from 'lodash';

// 存储需要拖动中的元素
let draggingEl = null;
// 获取拖动中的元素
const dragging = {
  get el() {
    return draggingEl;
  },
};

export default {
  name: 'DaoDraggable',
  data() {
    return {
      // 复制一份数据
      $items: undefined,
    };
  },
  props: {
    value: {
      type: Array,
      required: true,
    },
    draggingStyle: {
      type: String,
      validate(val) {
        return /;$/.test(val);
      },
    },
    draggingClass: String,
    disabled: Boolean,
    clone: Boolean,
    noSort: Boolean,
    removeWhenDragOut: Boolean,
  },
  computed: {
    items: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  created() {
    // 监听拖动结束事件
    this.$on('end', (value) => {
      // 如果新的值与旧的值相等
      if (isEqual(value, this.$items)) return;
      this.$emit('change', value);
      this.$items = cloneDeep(value);
    });
    // 初始化复制的数据
    this.$items = cloneDeep(this.value);
  },
  methods: {
    // 拖动开始时
    handleDragStart(item, e) {
      // 保存拖动中的元素
      draggingEl = e.target;
      // 保存拖动中元素的数据
      draggingEl.currParent = this;
      this.addExtraStyle(item);
      draggingEl.draggingData = item;
    },
    // 为拖动元素添加额外的样式
    addExtraStyle(data) {
      // 如果有额外的样式
      if (this.draggingStyle) { // 首先是组件传入的样式
        this.$set(data, 'extraStyle', this.draggingStyle);
      }
      if (this.draggingClass) {
        this.$set(data, 'extraClass', this.draggingClass);
      }
      // 数据传入的样式优先级高
      if (data.draggingClass) {
        this.$set(data, 'extraClass', data.draggingClass);
      }
      if (data.draggingStyle) { // 然后是数据传入的样式
        this.$set(data, 'extraStyle', data.draggingStyle);
      }
    },
    // 拖动结束删除额外样式
    removeExtraStyle(data) {
      this.$delete(data, 'extraStyle');
      this.$delete(data, 'extraClass');
    },
    // 兄弟元素拖动进入时
    handleDragEnter(item, e) {
      e.preventDefault();
      e.dataTransfer.effectAllowed = 'move';
      if (dragging.el.draggingData !== item) {
        this.changePlace(dragging.el.draggingData, item);
      }
    },
    // 拖动结束时
    handleDragEnd(item, e) {
      // 先把额外的样式去除
      this.removeExtraStyle(item);
      // 需要在改变了值的地方发射 end 事件
      if (dragging.el.prevParent) {
        dragging.el.prevParent.$emit('end', dragging.el.prevParent.value);
      }
      if (dragging.el.currParent) {
        dragging.el.currParent.$emit('end', dragging.el.currParent.value);
      }
      // 拖动结束后把拖动元素重置
      draggingEl = null;
    },
    changePlace(draggingItem, targetItem) {
      if (this.noSort) return;
      // 获取拖动元素和目标元素的序号
      const draggingIndex = this.items.indexOf(draggingItem);
      const targetIndex = this.items.indexOf(targetItem);
      // 获取除拖动元素之外的其他序列
      const items = this.items.filter(item => item !== draggingItem);
      // 如果拖动元素序号大于目标元素，则把拖动元素插到目标元素前面
      if (draggingIndex > targetIndex) {
        items.splice(targetIndex, 1, draggingItem, targetItem);
      }
      // 如果拖动元素序号小于目标元素，则把拖动元素查到目标元素后面
      if (draggingIndex < targetIndex) {
        items.splice(targetIndex, 0, draggingItem);
      }
      // 最终修改源数组
      this.items = items;
    },
    // 当有元素拖入当前组件时，添加到当前组件内
    handleItemDragIn(e) {
      if (this.items.includes(dragging.el.draggingData) || e.target !== this.$el) return;
      const from = dragging.el.currParent;
      from.items = from.clone ? from.items : from.items.filter(v => v !== dragging.el.draggingData);
      this.items = this.items.concat(dragging.el.draggingData);
      dragging.el.prevParent = from;
      dragging.el.currParent = this;
    },
    handleDragOver(e) {
      e.preventDefault();
    },
    // 判断拖动是否真正离开元素
    truelyLeave(e) {
      // 获取目标元素的 rect
      const rect = e.target.getBoundingClientRect();
      if (
        e.clientX > rect.left &&
        e.clientX < rect.right &&
        e.clientY > rect.top &&
        e.clientY < rect.bottom
      ) {
        return false;
      }
      return true;
    },
    // 当元素拖出当前组件时
    handleItemDragOut(e) {
      if (e.target !== this.$el || !this.truelyLeave(e)) return;
      this.items = this.items.filter(v => v !== dragging.el.draggingData);
    },
  },
};
</script>
<style lang="scss">
.dao-draggable-item {
  user-select: none;
}
</style>

