import Dragging from './dragging';

// 获取当前元素的父元素序列
function getList(el) {
  const $el = el;
  // 获取元素的父元素
  const $parentEl = $el.parentNode;
  // 获取父元素下所有的子元素，并筛除不可拖动的元素
  const $children = Array.from($parentEl.children)
    .filter(elm => elm.getAttribute && elm.getAttribute('data-key'));
  const list = $children.map(elm => elm.getAttribute('data-key'));
  return list;
}

// 元素位置交换
function changePlace(targetEl, draggingEl) {
  // 获取父元素的拖动序列
  const $list = getList(targetEl);
  const targetKey = targetEl.getAttribute('data-key');
  const draggingKey = draggingEl.getAttribute('data-key');
  // 获取在拖动序列中的序列号
  const targetIndex = $list.indexOf(targetKey);
  const draggingIndex = $list.indexOf(draggingKey);
  // 当拖动中的元素不在当前父元素序列中时，不执行换位
  if (draggingIndex < 0) return;
  // 当拖动元素序列大于目标元素时，放到目标元素前
  if (draggingIndex > targetIndex) {
    targetEl.parentNode.insertBefore(draggingEl, targetEl);
  }
  // 当拖动序列小于目标元素时，放到目标元素后面
  if (draggingIndex < targetIndex) {
    // 当前元素是最后一个元素时，直接在父元素上面 append
    if (!targetEl.nextSibling) {
      targetEl.parentNode.append(draggingEl);
    } else {
      targetEl.parentNode.insertBefore(draggingEl, targetEl.nextSibling);
    }
  }
}

// 拖动开始
function onDragStart(e) {
  const el = e.target;
  // 获取元素的 key
  let key = el.getAttribute('data-key');
  // 如果元素没有 key，则给一个 Symbol 值
  if (!key) {
    key = Symbol('key');
    el.setAttribute('data-key', key);
  }
  // 把当前元素和 key 值存储到 dragging 中
  Dragging.setData(el, key);
}

function onDragEnter(e) {
  // 事件冒泡序列
  const chain = Array.from(e.path);
  // 找到真正的可以交换位置的元素，及可拖动元素，即找到第一个有 data-key 属性的元素
  const $el = chain
    .filter(elm => elm.getAttribute && elm.getAttribute('data-key'))[0];
  // 交换元素位置
  changePlace($el, Dragging.el);
}

// 绑定事件
function addEvents(el, binding) {
  const $el = el;
  const $binding = binding;

  // 绑定一个触发拖动的 mousedown 事件
  $el.addEventListener('mousedown', () => {
    // 先判断是否可拖拽
    const draggable = !$el.dragConfig.disabled;
    $el.setAttribute('draggable', draggable);
  });

  // 拖动开始事件
  $el.addEventListener('dragstart', onDragStart);
  $el.addEventListener('dragenter', onDragEnter);
}

// 将绑定值转换成新的对象
function dealWithBindingValue(binding) {
  const $binding = binding;
  const $value = $binding.value || {};
  const $modifies = $binding.modifies || {};

  return {
    disabled: $value.disabled || false,
    style: $value.style,
    class: $value.class,
    events: {
      onChange: $value.onChange || (() => {}),
    },
    clone: $modifies.clone,
  };
}

// 初始化指令
function init(el, binding) {
  const $el = el;
  const $binding = binding;

  // 处理绑定的值
  $el.dragConfig = dealWithBindingValue($binding);
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
  $el.dragConfig = dealWithBindingValue($binding);
  console.log($el.dragConfig)
}

export default {
  bind,
  update,
};
