import * as _ from 'lodash';
import Dragging from './dragging';

// 获取当前元素拖动序列
function getList(el) {
  const $el = el;
  // 获取子元素，过滤掉非拖拽元素及 display none 的元素
  const $children = Array.from($el.children)
    .filter(elm =>
      elm.getAttribute &&
      elm.getAttribute('data-key') &&
      elm.style.display !== 'none');
  // 得到序列
  const list = $children.map(elm => elm.getAttribute('data-key'));
  return list;
}

// 监听拖动进入
function listenerDragEnter(el) {
  const $el = el;
  // 当元素拖动进来时，这里使用事件捕获，可以比拖动元素更快的反应到元素拖动进入
  $el.addEventListener('dragenter', () => {
    // 元素拖进来之后，需要设置回调函数
    Dragging.setCallback($el.dragEndCallback);
    // 1. 如果设置了 disabled，则元素不能拖进来
    // 2. 如果拖动元素本身就是当前元素的子元素，也不需要执行下列逻辑
    if (
      $el.dropConfig.disabled ||
      ($el === Dragging.el.parentNode)
    ) return;
    // 把拖动元素加入到当前元素子节点
    $el.appendChild(Dragging.el);
  }, true);
}

// 判断是否真正离开了元素
function isTruelyLeave(el, e) {
  const $el = el;
  const x = e.clientX;
  const y = e.clientY;
  // 获取元素的 rect
  const rect = $el.getBoundingClientRect();
  // 当 x,y 坐标在元素内部时，返回 false
  if (
    x === 0 ||
    y === 0 ||
    (x > rect.left &&
    x < rect.right &&
    y > rect.top &&
    y < rect.bottom)
  ) return false;
  // 在外部则表示真正离开，返回 true
  return true;
}

// 监听拖动离开元素
function listenerDragLeave(el) {
  const $el = el;
  $el.addEventListener('dragleave', (e) => {
    if (e.target !== $el || !isTruelyLeave($el, e)) return;
    Dragging.setCallback($el.dragEndCallback);
    if ($el.dropConfig.remove && Dragging.el.parentNode === $el) {
      $el.removeChild(Dragging.el);
    }
  });
}

// 绑定事件
function addEvents(el) {
  listenerDragEnter(el);
  listenerDragLeave(el);
}

// 将绑定值转换成新的对象
function dealWithBindingValue(binding) {
  const $binding = binding;
  const $value = $binding.value || {};
  const $modifiers = $binding.modifiers || {};

  return {
    disabled: $value.disabled || false,
    style: $value.style || '',
    class: $value.class,
    remove: $modifiers.remove,
    events: {
      onChange: $value.onChange || (() => {}),
    },
  };
}

// 暴露给拖动元素的回调函数
function dragEndCallback($el) {
  return () => {
    const newList = getList($el);
    const oldList = $el.dragList;
    // 如果没有序列没变，则直接返回
    if (_.isEqual(newList, oldList)) return;
    $el.dropConfig.events.onChange(newList);
    // 把原来的 list 修改成新的
    $el.dragList = newList;
  };
}

// 初始化指令
function init(el, binding) {
  const $el = el;
  const $binding = binding;

  // 处理绑定的值
  $el.dropConfig = dealWithBindingValue($binding);
  $el.dragList = getList($el);
  $el.dragEndCallback = dragEndCallback($el);
  // 绑定事件
  addEvents($el, $binding);
}

// 绑定时
function bind($el, $binding) {
  // 初始化
  init($el, $binding);
}

// 更新时
function update(el, $binding) {
  const $el = el;
  $el.dropConfig = dealWithBindingValue($binding);
  $el.dragList = getList($el);
}

export default {
  bind,
  update,
};
