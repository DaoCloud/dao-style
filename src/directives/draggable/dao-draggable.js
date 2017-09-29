import dragging from './dragging';

// 初始化数据
function init(binding) {
  // 如果有传入额外的样式
  const draggingStyle = (binding.value && binding.value.style)
    ? binding.value.style
    : 'opacity: 0.5';
  return {
    draggingStyle,
  };
}

// 添加额外的样式
function setExtraStyle(elm) {
  // 先获取原有的样式
  const originStyle = elm.getAttribute('style');
  if (elm.dataDraggable.draggingStyle) {
    elm.setAttribute(
      'style',
      originStyle
        ? `${originStyle}${elm.dataDraggable.draggingStyle}`
        : elm.dataDraggable.draggingStyle,
    );
  }
}

// 去除额外的样式
function remveExtraStyle(elm) {
  const originStyle = elm.getAttribute('style').replace(elm.dataDraggable.draggingStyle, '');
  elm.setAttribute('style', originStyle);
}

// 拖动开始时
function onDragStart(e) {
  const el = e.target;
  e.dataTransfer.effectAllowed = 'move';
  dragging.setData(el, el.getAttribute('data-key'));
  // 添加额外的样式
  setExtraStyle(el);
}

// 当其他拖动元素拖动进入时
function onDragEnter(e) {
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

function onDragOver(e) {
  e.preventDefault();
  e.dataTransfer.effectAllowed = 'move';
}

// 拖动结束时
function onDragEnd(e) {
  // 去除额外的样式
  remveExtraStyle(e.target);
}

function onDrop(e) {
  e.stopPropagation();
  e.dataTransfer.dropEffect = 'move';
}

// 添加事件
function addListeners(elm) {
  elm.addEventListener('dragstart', onDragStart);
  elm.addEventListener('dragenter', onDragEnter);
  elm.addEventListener('dragover', onDragOver);
  elm.addEventListener('dragend', onDragEnd);
  elm.addEventListener('drop', onDrop);
  elm.hasListener = true;
}

// 移除事件
function removeListeners(elm) {
  elm.removeEventListener('dragstart', onDragStart);
  elm.removeEventListener('dragenter', onDragEnter);
  elm.removeEventListener('dragover', onDragOver);
  elm.removeEventListener('dragend', onDragEnd);
  elm.removeEventListener('drop', onDrop);
  elm.hasListener = false;
}

// 指定绑定到元素上时
function bind($el, binding) {
  // 如果绑定值设置了 disabled 为 true，则不绑定事件，也不让元素可拖
  if (binding.value && binding.value.disabled) return;
  // 初始化一些数据
  $el.dataDraggable = init(binding);
  // 让元素可拖
  $el.setAttribute('draggable', true);
  // 为元素绑定一堆的 drag 事件
  addListeners($el);
}

// 更新时
function update($el, binding) {
  // 如果指令值 disabled 为 true 且元素上面绑定了事件，移除事件，元素不可拖动
  if (binding.value && binding.value.disabled && $el.hasListener) {
    $el.removeAttribute('draggable');
    return removeListeners($el);
  }
  // 其他情况
  if (!$el.hasListener) {
    $el.setAttribute('draggable', true);
    return addListeners($el);
  }
  return undefined;
}

export default {
  bind,
  update,
  unbind($el) {
    $el.removeAttribute('draggable');
    removeListeners($el);
  },
};
