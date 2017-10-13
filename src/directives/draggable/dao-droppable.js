import dragging from './dragging';

class Droppable {
  constructor($el, $binding) {
    this.$el = $el;
    this.$binding = $binding;
    this.$value = $binding.value || {};
    this.$modifiers = $binding.modifiers || {};
    // 对外的事件接口
    this.events = {
      onChange: this.$value && this.$value.onChange
        ? this.$value.onChange
        : () => {},
    };
    this.order = [];
    this.hasListener = false;
    this.removeListeners = () => {};
  }
  // 去除空的文本节点
  trimNode() {
    Array.from(this.$el.childNodes)
      .filter(n => !n.tagName && !n.nodeValue.trim())
      .forEach(n => this.$el.removeChild(n));
  }

  // 获取子节点的序列
  getOrder() {
    return Array.from(this.$el.children)
      .filter(n => n.style.display !== 'none') // 需要去除不显示的节点
      .map(n => n.getAttribute('data-key'));
  }

  // 当拖动元素进入当前元素时
  onDragEnter(e) {
    e.preventDefault();
    // 如果当前元素是拖动元素的父元素，则返回
    if (this.$el === dragging.el.parentNode) return;
    // 将拖动元素或其克隆添加到当前元素的子节点中，真正需要操作的元素是
    const draggerEl = dragging.el;
    // if (this.$modifiers.clone) {
    //   draggerEl = dragging.el.dataDraggable.$cloneEl;
    // }
    const order = this.getOrder();
    if (order.includes(dragging.key)) return;
    this.$el.appendChild(draggerEl);
  }

  // 在当前元素上面拖动时
  onDragOver(e) {
    e.preventDefault();
  }

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
  }

  // 当拖动元素离开当前元素
  onDragLeave(e) {
    // 更新子节点序列
    const refreshOrder = () => {
      const list = this.getOrder(this.$el);
      dragging.el.removeEventListener('dragend', refreshOrder);
      if (_.isEqual(this.order, list)) return;
      this.events.onChange(list);
      this.order = list;
    };
    if (e.target === this.$el) {
      dragging.el.addEventListener('dragend', refreshOrder);
    }
    // 当真正离开元素时
    if (e.target !== this.$el || !this.truelyLeave(e)) return;
    // 当有需要删除时，拖出来就删除拖动中的元素
    if (this.$modifiers.remove && dragging.el.parentNode === this.$el) {
      this.$el.removeChild(dragging.el);
    }
    // 如果是需要克隆拖动元素，拖离当前元素时应该把 clone 版从当前元素子元素中删除
    // const cloneEl = dragging.el.dataDraggable ? dragging.el.dataDraggable.$cloneEl : undefined;
    // if (this.$modifiers.clone && cloneEl && cloneEl.parentNode === this.$el) {
    //   this.$el.removeChild(cloneEl);
    // }
  }

  // 在当前元素中拖动结束时
  onDragEnd() {
    const newOrder = this.getOrder(this.$el);
    if (_.isEqual(this.order, newOrder)) return;
    this.events.onChange(newOrder);
    this.order = newOrder;
  }

  addListeners() {
    // 这里这样做是因为 bind 会产生一个新的函数，所以要解绑的话必须如此
    const onDragEnter = this.onDragEnter.bind(this);
    const onDragOver = this.onDragOver.bind(this);
    const onDragLeave = this.onDragLeave.bind(this);
    const onDragEnd = this.onDragEnd.bind(this);
    // 绑定事件
    this.$el.addEventListener('dragenter', onDragEnter);
    this.$el.addEventListener('dragover', onDragOver);
    this.$el.addEventListener('dragleave', onDragLeave);
    this.$el.addEventListener('dragend', onDragEnd, true);
    // 绑定事件的状态改成 true
    this.hasListener = true;
    // 生成解绑事件的函数
    this.removeListeners = () => {
      this.$el.removeEventListener('dragenter', onDragEnter);
      this.$el.removeEventListener('dragover', onDragOver);
      this.$el.removeEventListener('dragleave', onDragLeave);
      this.$el.removeEventListener('dragend', onDragEnd);
      // 绑定事件的改成 false
      this.hasListener = false;
    };
  }
}

// 指令绑定到元素上时
function bind(el, binding) {
  const $el = el;
  // 启动指令
  const droppable = new Droppable($el, binding);
  $el.dataDroppable = droppable;
  // 先去除所有的空文本节点
  droppable.trimNode();
  // 获取字节点序列
  droppable.order = droppable.getOrder();
  // 添加事件
  droppable.addListeners();
}

// 指令更新时
function update($el, binding) {
  // 如果设置了 disabled 为 true
  if (binding.value && binding.value.disabled && $el.dataDroppable.hasListener) {
    return $el.dataDroppable.removeListeners();
  }
  if (!$el.dataDroppable.hasListener) {
    return $el.dataDroppable.addListeners();
  }
  return undefined;
}

export default {
  bind,
  update,
  unbind($el) {
    $el.dataDroppable.removeListeners();
  },
};
