import dragging from './dragging';

// 拖动开始时
function onDragStart(e) {
  const el = e.target;
  e.dataTransfer.effectAllowed = 'move';
  dragging.setData(el, el.getAttribute('data-key'));
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
  console.log('End');
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
}

// 指定绑定到元素上时
function bind($el, binding, vnode) {
  // 首先让元素可拖
  $el.setAttribute('draggable', true);
  // 为元素绑定一堆的 drag 事件
  addListeners($el);
}

export default {
  bind,
};
