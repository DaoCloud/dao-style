import dragging from './dragging';

class Draggable {
  constructor($el, $binding) {
    this.$el = $el;
    this.$binding = $binding;
    this.$value = $binding.value || {};
    this.$modifiers = $binding.modifiers || {};

    this.$cloneEl = this.clone();
  }

  // 初始化数据
  init() {
    // 如果有传入额外的样式
    this.draggingStyle = this.$value.style || 'opacity: 0.5';
    this.draggingClass = this.$value.class || undefined;
  }

  // 复制元素
  clone() {
    const cloneEl = this.$el.cloneNode(true);
    cloneEl.setAttribute('draggable', true);
    this.addListeners(cloneEl);
    return cloneEl;
  }

  // 添加额外的样式和 class
  setExtraStyle(elm) {
    // 先获取原有的样式
    const originStyle = elm.getAttribute('style');
    if (this.draggingStyle) {
      elm.setAttribute(
        'style',
        originStyle
          ? `${originStyle}${this.draggingStyle}`
          : this.draggingStyle,
      );
    }
    if (this.draggingClass) {
      elm.classList.add(this.draggingClass);
    }
  }

  // 去除额外的样式和 class
  removeExtraStyle(elm) {
    const originStyle = elm.getAttribute('style').replace(this.draggingStyle, '');
    elm.setAttribute('style', originStyle);
    elm.classList.remove(this.draggingClass);
  }

  // 拖动开始时
  onDragStart(e) {
    const el = e.target;
    e.dataTransfer.effectAllowed = 'move';
    // 如果需要克隆的话，则把拖动中的元素写成当前元素的克隆
    dragging.setData(
      this.$modifiers.clone ? this.$cloneEl : el,
      el.getAttribute('data-key'),
    );
    // 添加额外的样式
    this.setExtraStyle(el);
  }
  // 当其他拖动元素拖动进入时
  onDragEnter(e) {
    const el = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.preventDefault();
    e.stopPropagation();
    // 获取父节点
    const parent = el.parentNode;
    // 获取父节点所有的子节点
    const children = Array.from(parent.children);
    // 获取拖动元素在父节点中的位置
    const draggingIndex = children.indexOf(dragging.el);
    // 如果当前元素是拖动中的元素或拖动元素不是当前元素的兄弟元素，则直接 return
    if (el === dragging.el || draggingIndex === -1) return;
    // 获取当前元素在父节点中的位置
    const curIndex = children.indexOf(el);
    // 如果当前元素在拖动元素之前，则在当前元素前插入拖动元素
    if (curIndex < draggingIndex) {
      parent.insertBefore(dragging.el, el);
    } else { // 当前元素在拖动元素之后
      el.after(dragging.el);
    }
  }

  onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.effectAllowed = 'move';
  }

  // 拖动结束时
  onDragEnd(e) {
    // 去除额外的样式
    this.removeExtraStyle(e.target);
  }

  onDrop(e) {
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
  }

  // 添加事件
  addListeners(elm) {
    const onDragStart = this.onDragStart.bind(this);
    const onDragEnter = this.onDragEnter.bind(this);
    const onDragOver = this.onDragOver.bind(this);
    const onDragEnd = this.onDragEnd.bind(this);
    const onDrop = this.onDrop.bind(this);
    // 绑定事件
    elm.addEventListener('dragstart', onDragStart);
    elm.addEventListener('dragenter', onDragEnter);
    elm.addEventListener('dragover', onDragOver);
    elm.addEventListener('dragend', onDragEnd);
    elm.addEventListener('drop', onDrop);
    // 绑定事件的状态改成 true
    this.hasListener = true;
    // 移除事件
    this.removeListeners = () => {
      elm.removeEventListener('dragstart', onDragStart);
      elm.removeEventListener('dragenter', onDragEnter);
      elm.removeEventListener('dragover', onDragOver);
      elm.removeEventListener('dragend', onDragEnd);
      elm.removeEventListener('drop', onDrop);
      this.hasListener = false;
    };
  }
}

// 指定绑定到元素上时
function bind(el, binding) {
  // 如果绑定值设置了 disabled 为 true，则不绑定事件，也不让元素可拖
  if (binding.value && binding.value.disabled) return;
  const $el = el;
  const draggable = new Draggable($el, binding);
  // 初始化一些数据
  $el.dataDraggable = draggable;
  draggable.init();
  // 让元素可拖
  $el.setAttribute('draggable', true);
  // 为元素绑定一堆的 drag 事件
  draggable.addListeners($el);
}

// 更新时
function update($el, binding) {
  // 如果指令值 disabled 为 true 且元素上面绑定了事件，移除事件，元素不可拖动
  if (binding.value && binding.value.disabled && $el.dataDraggable.hasListener) {
    $el.removeAttribute('draggable');
    return $el.dataDraggable.removeListeners();
  }
  // 其他情况
  if (!$el.dataDraggable.hasListener) {
    $el.setAttribute('draggable', true);
    return $el.dataDraggable.addListeners($el);
  }
  // 更新数据
  $el.dataDraggable.init();
  return undefined;
}

export default {
  bind,
  update,
  unbind($el) {
    $el.removeAttribute('draggable');
    $el.dataDraggable.removeListeners($el);
  },
};
