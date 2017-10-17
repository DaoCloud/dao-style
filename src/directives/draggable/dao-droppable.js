import Dragging from './dragging';

// 绑定事件
function addEvents(el) {
  const $el = el;

  // 当元素拖动进来时，这里使用事件捕获，可以比拖动元素更快的反应到元素拖动进入
  $el.addEventListener('dragenter', () => {
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

// 将绑定值转换成新的对象
function dealWithBindingValue(binding) {
  const $binding = binding;
  const $value = $binding.value || {};
  const $modifies = $binding.modifies || {};

  return {
    disabled: $value.disabled || false,
    style: $value.style || '',
    class: $value.class,
    remove: $modifies.remove,
    events: {
      onChange: $value.onChange || (() => {}),
    },
  };
}

// 初始化指令
function init(el, binding) {
  const $el = el;
  const $binding = binding;

  // 处理绑定的值
  $el.dropConfig = dealWithBindingValue($binding);
  // 绑定事件
  addEvents($el, $binding);
}

// 绑定时
function bind($el, $binding) {
  // 初始化
  init($el, $binding);
}

export default {
  bind,
};
